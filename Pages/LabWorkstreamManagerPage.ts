import {Locator, Page, expect} from "@playwright/test"
export default class Labpage{
    private readonly value1
    private readonly button_search
    private readonly overlay_workstream
    private readonly button_1

    constructor(public page:Page){
        this.value1=this.page.locator('(//*[@class="text-nowrap ng-scope"]//tr//td//div)[1]')
        this.button_search=this.page.locator('//*[@ng-click="vm.search()"]')
        this.overlay_workstream=page.locator("//*[@class='ng-binding' and text()='Getting Workstreams']")
        this.button_1=page.locator('(//a[@class="btn btn-primary" and text()="Manage Workstreams"])[1]')

    }
    async getrow1_data(){
        await this.button_search.click()
        await expect(this.overlay_workstream).not.toBeVisible({timeout:500000})
        console.log(await this.value1.textContent())
        const op=await this.value1.textContent()
        return op
    }
    async data_op(name:any){
        await this.button_1.click()
        await expect(this.page.locator(`//*[@class="ng-binding" and text()="Request ${name}"]`)).toBeVisible()


    }

 }
