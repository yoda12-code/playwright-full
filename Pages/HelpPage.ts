import {Locator, Page, expect} from "@playwright/test"
export default class Help{
    private readonly btn_login:Locator;
    private readonly btn_subscribe
    private readonly help_header;
    private readonly atlassian_page
    constructor(public page:Page){
        this.btn_login=this.page.locator("//*[text()='Help']")
        this.btn_subscribe=this.page.locator('//*[@class="padding"]//p//a')
        this.help_header=this.page.locator("//h1[text()='Biotech Support']")
        this.atlassian_page=this.page.locator('//*[@data-testid="note-content-container"]//h1')


    }

    async click_help_quicklink(){
       await this.btn_subscribe.click()
    }
    async validate_help(){
        const text=await this.atlassian_page.textContent()
        console.log(text)
        
    }
}