import {Locator, Page, expect} from "@playwright/test"
export default class LabCordinate{
    private readonly rv_values
    private readonly bacteria
    private readonly evenger_page
    private readonly rm_loader
    private readonly evenger_assignment
    private readonly evenger_page_data

    constructor(public page:Page){
        this.rv_values=this.page.locator('(//*[@ng-if="::vm.columns.chagents"]//ul)[1]//li//span')
        this.bacteria=this.page.locator('(//*[@ng-if="::vm.columns.chagents"]//ul)[1]//li')
        this.evenger_page=this.page.locator('(//*[@class="btn btn-default ng-binding ng-scope"])[1]')
        this.rm_loader=this.page.locator("//*[text()='Loading Requests']")
        this.evenger_assignment=this.page.locator("//*[text()='EvEnger Assignment']")
        this.evenger_page_data=this.page.locator('//*[@class="list-unstyled"]//li')

    }
    async getrow1_data(){
        let rv_values:any=[]
        let info_values:any=[]
        let op:any=[]
        const count_rv=await this.rv_values.count()
        const count_bacteria=await this.bacteria.count()
        //const op= await this.rv_values.allTextContents()
        for (let i=1; i<count_rv+1;i++){
            const rv_text= await this.page.locator(`((//*[@ng-if="::vm.columns.chagents"]//ul)[1]//li//span)[${i}]`).textContent()
            const bacteria_text=await this.page.locator(`((//*[@ng-if="::vm.columns.chagents"]//ul)[1]//li)[${i}]`).textContent()
            rv_values.push(rv_text)
            info_values.push(bacteria_text)
        }
        await this.evenger_page.click()
        await expect(this.rm_loader).not.toBeVisible({timeout:20000})
        await expect(this.evenger_assignment).toBeVisible({timeout:20000})
        console.log(info_values)
        return info_values

    }
    async validate_data(values){
        await this.page.waitForTimeout(5000)
        const op= await this.evenger_page_data.allTextContents()
        console.log(op)
        expect(op).toEqual(values)

    }


 }