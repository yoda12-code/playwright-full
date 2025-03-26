import {Locator, Page, expect} from "@playwright/test"
export default class Non_PlateMediaLabels{
    private readonly printlabel_diabled
    private readonly media
    private readonly header_page
    private readonly printlabel
    private readonly nooflabels
    constructor(public page:Page){
        this.printlabel_diabled=this.page.locator('//*[@disabled="disabled" and @type="submit"]')
        this.media=this.page.locator("(//*[@class='ng-pristine ng-untouched ng-valid ng-empty'])[1]")
        this.header_page=this.page.locator("//h2[text()='Non-Plate Media Labels']")
        this.printlabel=this.page.locator('//*[@type="submit"]')
        this.nooflabels=this.page.locator('//*[@class="ng-pristine ng-untouched ng-valid ng-empty ng-valid-min"]')
    }
    async validate_media(media_value:any, number:any){
        const disabled=await this.printlabel_diabled.isDisabled()
        console.log("the state of the print label button is disabled  ",disabled)
        await this.media.selectOption({label:media_value})
        console.log("the selected value is ",media_value)
        await expect(this.nooflabels).toBeVisible({timeout:1000000})
        await this.nooflabels.fill(number)
        await expect(this.printlabel_diabled).not.toBeVisible({timeout:10000})
        await this.printlabel.click()
    }
}