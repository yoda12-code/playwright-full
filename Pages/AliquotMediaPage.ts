import {Locator, Page, expect} from "@playwright/test"
import exp from "constants";
import { setTimeout } from "timers";

export default class Mediapage{
    private readonly scan;
    private readonly aliquoting_diabled
    private readonly aliquoting
    private readonly header_page
    private readonly btn_submit

    constructor(public page:Page){
        this.scan= this.page.locator("(//*[@class='ng-pristine ng-untouched ng-valid ng-empty'])[1]")
        this.aliquoting_diabled=this.page.locator('//*[@disabled="disabled" and text()="Start Aliquoting"]')
        this.aliquoting=this.page.locator("//* [text()='Start Aliquoting']")
        this.header_page=this.page.locator("//h2[text()='Aliquot Manager']")
        this.btn_submit=this.page.locator('//*[@type="submit"]')
    


    }

    async validatescan_aliquoting(){
        await expect(this.scan).toBeVisible({timeout:10000})
        await expect(this.aliquoting_diabled).toBeVisible({timeout:10000})
    }
    async validate_scan(scan_value:any){
        const disabled=await this.aliquoting_diabled.isDisabled()
        console.log("the state of the aliquoting button is disabled  ",disabled)
        await this.scan.selectOption({label:scan_value})
        console.log("the selected value is ",scan_value)
        await expect(this.aliquoting_diabled).not.toBeVisible({timeout:10000})
        await this.aliquoting.click()
    }
    async validate_media_page(media_text){
        await expect(this.page.locator(`//*[text()='${media_text}']`)).toBeVisible({timeout:10000})
        await expect(this.header_page).toBeVisible({timeout:10000})
        await this.btn_submit.click()
        await this.page.waitForTimeout(50000)
        console.log("the print label button is enabled and clicked")
    }
}