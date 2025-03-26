import {Locator, Page, expect} from "@playwright/test"
export default class MediaManagement{
    private readonly AddNewMedia;
    private readonly ManageMedia;
    private readonly disablesavebtn;
   

    constructor(public page:Page){
        
        this.AddNewMedia=this.page.locator("//*[text()='Add New Media']")
        this.disablesavebtn=this.page.locator('//*[@disabled="disabled" and text()="Save"]')
        this.ManageMedia=this.page.locator("//*[text()='Manage Media']")
     
}
    async validate_mediamgmt(){
        await expect(this.AddNewMedia).toBeVisible({timeout:10000})
        const disabled=await this.disablesavebtn.isDisabled()
        console.log("save button is disabled in the Add New Media page",disabled)
    }

    async validate_managemedia(){
        await expect(this.ManageMedia).toBeVisible({timeout:10000})
        await this.ManageMedia.click()
        await this.page.waitForTimeout(5000)
        console.log("Manage Media tab is clicked")
        }
    }