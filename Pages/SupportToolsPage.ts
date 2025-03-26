import {Locator, Page, expect} from "@playwright/test"
import {test_form} from '../data'
import {siid} from '../data'
import exp from "constants"
export default class Support_page{
    private readonly submission_page
    private readonly dropdown
    private readonly stopping_point
    private readonly btn_submit
    private readonly Results
    private readonly req_name
    private readonly map_name
    private readonly test_status
    private readonly label
    private readonly manage_users
    private readonly user_search
    private readonly rm_read
    private readonly cekey_contacts
    constructor(public page:Page){
        this.submission_page=this.page.locator('//*[text()="Test Data Submission"]')
        this.dropdown=this.page.locator('(//*[@class="ng-pristine ng-untouched ng-valid ng-empty"])[1]')
        this.btn_submit=this.page.locator('//*[@type="submit"]')
        this.stopping_point=this.page.locator('//*[@class="ng-pristine ng-untouched ng-valid ng-not-empty"]')
        this.Results=this.page.locator("//*[text()='Results']")
        this.req_name=this.page.locator('//*[@style="table-layout:fixed;"]//tbody//td//a | //*[@style="table-layout:fixed;"]//tbody//td//div[@class="ng-scope"]')
        this.map_name=this.page.locator('//*[@style="table-layout:fixed;"]//tbody//td[@class="ng-binding"][1]')
        this.test_status=this.page.locator('//*[@style="table-layout:fixed;"]//tbody//td[@class="ng-binding"][2]')
        this.label=this.page.locator('//*[@style="table-layout:fixed;"]//tbody//td[@class="ng-binding"]//*[@class="btn btn-primary margin-top ng-scope"]')
        this.manage_users=this.page.locator("//*[text()='Manage Users']")
        this.user_search=this.page.locator('//*[@type="text"]')
        this.rm_read=this.page.locator("(//*[text()='request manager']//parent::tr//following-sibling::td)[1]//span")
        this.cekey_contacts=this.page.locator("//*[text()='CE Key Contacts']")
    }
    async navigate_to_submission(){
        await expect(this.submission_page).toBeVisible({timeout:10000})
        await this.submission_page.click()
        await this.page.waitForTimeout(5000)
    }
    async fill_configuration(num_list:test_form){
        await this.dropdown.selectOption({label:num_list.Crop})
        await this.dropdown.selectOption({label:num_list.IterativEengineering})
        await this.dropdown.selectOption({label:num_list.GMProcess})
        if(num_list.GMProcess=== "Random Agro" || num_list.GMProcess==="Random Agro Excision" ||num_list.GMProcess==="SDN2 Agro" ||num_list.GMProcess=== "SDN3 Agro" || num_list.GMProcess!=='SDN1 Agro' )
        {
            await this.dropdown.selectOption({label:num_list.Genotype})
        }
      
        await this.dropdown.selectOption({label:num_list.Map_Atlas})
        await this.dropdown.selectOption({label:num_list.SeedInventotyId})
        await this.stopping_point.selectOption({label:num_list.StoppingPoint})  
    }
    async submit_and_verify(){
        await this.btn_submit.click()
        await expect(this.Results).toBeVisible({timeout:10000})
        console.log("resulst are visible in the UI")
        await expect(this.req_name).toBeVisible({timeout:10000})
        const req_name_text=await this.req_name.textContent()
        console.log("the request name is ",req_name_text)
        const map_value=await this.map_name.textContent()
        console.log("the map name is ",map_value)
        await this.page.waitForTimeout(30000)
        const submitted_value=await this.test_status.textContent()
        console.log("the test status is ",submitted_value)
        const enable=await this.label.isEnabled()
        console.log("the label is enabled ",enable)
        await this.label.click()
        await this.page.waitForTimeout(50000)


    }
    async manage_users_process(user,feild_name){
        await this.manage_users.click()
        await expect(this.btn_submit).toBeVisible({timeout:10000})
        await this.user_search.type(user)
        await this.btn_submit.click()
        await this.get_status_user(feild_name)
    }
    async get_status_user(feild_name){
        const read=await this.page.locator(`//*[text()='${feild_name}']//following-sibling::td[@ng-click="vm.toggleRead(role)"]//span`).getAttribute('class')
        console.log('read value is,',read)
        await expect(read).toContain("success")
        const write= await this.page.locator(`//*[text()='${feild_name}']//following-sibling::td[@ng-click="vm.toggleWrite(role)"]//span`).getAttribute('class')
        console.log('write value is ,',write)
        await expect(write).toContain("success")
        await this.page.locator(`//*[text()='${feild_name}']//following-sibling::td[@ng-click="vm.toggleWrite(role)"]//span`).click()
        const writ_poste= await this.page.locator(`//*[text()='${feild_name}']//following-sibling::td[@ng-click="vm.toggleWrite(role)"]//span`).getAttribute('class')
        await expect(writ_poste).toContain("danger")
        console.log(writ_poste)
    }   
    async reset_staus(feild_name){
        await this.page.locator(`//*[text()='${feild_name}']//following-sibling::td[@ng-click="vm.toggleWrite(role)"]//span`).click()

    }
    async navigate_cekeycontacts(username)
    {
        await this.cekey_contacts.click()
        const word=await this.page.locator(`(//tr[contains(@ng-repeat,'ceKey in vm.ceKeyContactWrapper')]//td[text()='${username}']//following-sibling::td)[4]//span`).getAttribute('class')
        return word
    }

}
