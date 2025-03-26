import {Locator, Page, expect} from "@playwright/test"
export default class PlateMediaBarcode{
    private readonly enter_media;
    private readonly dropdown
    private select_drop_down
    constructor(public page:Page){
        this.enter_media=page.locator('//*[@placeholder="Choose Media"]')
        this.dropdown=page.locator('//*[@class="dropdown-menu scrollable-dropdown ng-isolate-scope"]')
        this.select_drop_down=page.locator('(//*[@class="dropdown-menu scrollable-dropdown ng-isolate-scope"]//li)[1]')
    }

    async fill_in_media(media_value:any){
        await this.enter_media.isVisible()
        await this.enter_media.fill(media_value)
        await expect(this.dropdown).toBeVisible({timeout:5000})
        await this.select_drop_down.click()
    }
    async validate_media(media_value:any){
        await expect(this.page.locator(`//*[text()='Media : ${media_value}']`)).toBeVisible({timeout:5000})
        console.log("the media value is verified ",media_value)
    }

}