import {Locator, Page, expect} from "@playwright/test"
export default class Workstream{
    private readonly loader
    private readonly completed_page
    private readonly page_header
    private readonly total_card_count
    private readonly cards
    private readonly crop_name
    private readonly status
    constructor(public page:Page){
        this.loader=this.page.locator('//*[@class="loading-overlay"]//img')
        this.completed_page=this.page.locator('//a[text()="Completed"]')
        this.page_header=this.page.locator('//*[@search="vm.searchArbiter"]//h3')
        this.total_card_count=this.page.locator('//*[@class="flex child-margin"]//*[@result="result"]')
        this.cards=this.page.locator('//*[@class="btn btn-primary pull-right ng-scope"]')
        this.crop_name=this.page.locator('(//*[@class="info-list ng-scope"])[1]//*[@class="ng-binding"]')
        this.status=this.page.locator('((//*[@class="info-list ng-scope"])[1]//*[@class="ng-binding"])[13]')

        
        

    }
    async wait_for_loader(){
        await expect(this.loader).not.toBeVisible({timeout:150000})
        const loader_visible= await this.loader.isVisible()
        console.log("the loader is visible ",loader_visible)
        await expect(loader_visible).not.toBeTruthy()
        await this.completed_page.click()
        await expect(this.loader).not.toBeVisible({timeout:150000})
        console.log(await this.page_header.textContent())
    }
    async pic_random_card(){
        const len=await this.total_card_count.count()
        console.log("total number of cards present are ",len)
        if (len!=0){
            console.log("there are cards present ")
            await this.validate_card()

        }
        else{
            console.log("there are no cards present ")
        }
    }
    async validate_card(){
        await this.cards.first().click()
        await expect(this.loader).not.toBeVisible({timeout:150000})
        const crop=await this.crop_name.first().textContent()
        console.log("the crop name is ",crop)
        var dynamic_text="Status"
        const status_value=await this.page.locator(`(//*[text()="${dynamic_text}"]//parent::div)[1]//child::div[@class="ng-binding"]`).textContent()
        console.log("the status is ",status_value)
    }

}