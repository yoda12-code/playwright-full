import {Locator, Page, expect} from "@playwright/test"
import exp from "constants";
import { setTimeout } from "timers";
export default class Login{
    private readonly quick_links:Locator;
    constructor(public page:Page){
        this.quick_links= this.page.locator("//*[text()='Quick Links']")
    }

    async user_do_login(username:any,password:any){
       
       const url="https://"+username+":"+password+'@tcsapps1-jh.phiqa.com/evenger/'
        //const url="https://"+username+":"+password+'@tcsapps-jh.phitr.com/evenger/'
     //const url="https://"+username+":"+password+'@tcsapps-jh.phibred.com/evenger/'
  
     try{
        const response=await this.page.goto(url,{waitUntil:'networkidle'})
        console.log(response)
     }
     catch(error){
       

     }
        await new Promise(resolve=>setTimeout(resolve,25000))
        await this.page.reload()
        await this.page.waitForLoadState('load')
    }
    async basic_auth_login(username:any,password:any){
        
    }
    async validate_login(){
        await expect(this.quick_links).toBeVisible({timeout:150000})
        console.log('User login is successful')
    }

    async naviagte_togiven_page(pagename){
        await this.page.locator("//a[text()='"+pagename+"']").click()
        await expect(this.page.locator('(//header)[1]')).toBeVisible()
        await new Promise(resolve=>setTimeout(resolve,5000))
        const headers=await this.page.locator('(//header)').allTextContents()
        console.log("Page Headers are",headers)
       
        return headers
    }

}