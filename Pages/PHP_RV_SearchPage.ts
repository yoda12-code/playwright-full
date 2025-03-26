import {Locator, Page, expect} from "@playwright/test"
export default class PHP_RV_Search{
    private readonly vector_name;
    private readonly search_button;
    private readonly search_hover;
    constructor(public page:Page){
        this.vector_name=page.locator('//*[@class="ng-pristine ng-untouched ng-valid ng-empty"]')
        this.search_button=page.locator('//*[@type="submit"]')
        this.search_hover=page.locator("//*[@class='ng-binding' and text()='Searching']")
    }

    async fillinph(PHP_value:any){
        await expect(this.vector_name).toBeVisible({timeout:100000})
        await this.vector_name.fill(PHP_value)
        await this.search_button.click()
        await expect(this.search_hover).not.toBeVisible({timeout:100000})

    }
    async validate_rvid(php_value:any){
        await expect(this.page.locator(`//*[text()='RV Id']//parent::th//parent::tr//parent::thead//following::tbody//*[text()='${php_value}']`)).toBeVisible({timeout:5000})
        console.log("the rvid value is verified ",php_value)
    }


}