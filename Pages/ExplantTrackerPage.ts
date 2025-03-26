import {Locator, Page, expect} from "@playwright/test"
import {siid} from '../data'
export default class Explant{
    private readonly siid_entry
    private readonly submit_button
    private readonly geno_type
    private readonly explant
    private readonly print_disabled
    private readonly print_enabled
    private readonly error_dailog
    private readonly crop_name
    private readonly geno_type_name
    private readonly target_site_name
    private readonly expalnt_name
    constructor(public page:Page){
        this.siid_entry=this.page.locator('//*[@ng-model="vm.inputBarcode"]')
        this.submit_button=this.page.locator('//*[@type="submit"]')
        this.geno_type=this.page.locator('//*[@ng-model="vm.genotype"]')
        this.explant=this.page.locator('//*[@ng-model="vm.sourceMaterialExplantType"]')
        this.print_disabled=this.page.locator('//*[@ng-disabled="!vm.sourceMaterialExplantType" and @disabled="disabled"]')
        this.print_enabled=this.page.locator('//*[@ng-disabled="!vm.sourceMaterialExplantType"]')
        this.error_dailog=this.page.locator('//*[@class="modal-content"]')
        this.crop_name=this.page.locator('//*[text()="Crop"]//following-sibling::div//input')
        this.geno_type_name=this.page.locator('//*[text()="Genotype"]//following-sibling::div')
        this.target_site_name=this.page.locator('//*[text()="Target Site"]//following-sibling::div//input')
        this.expalnt_name=this.page.locator('//*[text()="Choose Explant Type"]//following-sibling::div')

    }


    async  submit_ssid(list_num:siid){
        await this.siid_entry.type(list_num.siid)
        await this.submit_button.click()
        await this.page.waitForTimeout(5000)
        const ele=await this.error_dailog.isVisible()
        if(ele){
            console.log("the entered value is incorrect please re-enter a valid siid ")

        }
        else{
            console.log("the value entered in siid is correct ")
        await this.geno_type.selectOption({label:list_num.genotype})
        if(list_num.Explant==""){
        await expect(this.print_disabled).toBeVisible({timeout:10000})
        const disable=await this.print_disabled.isEnabled()
        console.log("tha value is",disable)
        await expect(disable).toBe(false)
        console.log("the print button cannot be clicked ")
        }
        else{

        await this.explant.selectOption({label:list_num.Explant})
        const enable=await this.print_enabled.isEnabled()
        await expect(enable).toBe(true)
        console.log("the value is",enable)
        const op1=await this.crop_name.getAttribute('value')
        console.log("Crop_name",op1)
        const op3=await this.target_site_name.getAttribute('value')
        console.log("target_site name",op3)
        const text1=await this.page.$eval<string,HTMLSelectElement>("#phi-content > ng-view > div > widget-container > div > div > div > widget > section > directive-container > explant-tracker > div > div:nth-child(2) > div > div > div.panel-body > div > div > div:nth-child(2) > div:nth-child(2) > select",ele=>ele.value)
        var optext=text1.split(":")
        console.log("genotype name is  ,",optext[1])
        const text2=await this.page.$eval<string,HTMLSelectElement>("#phi-content > ng-view > div > widget-container > div > div > div > widget > section > directive-container > explant-tracker > div > div:nth-child(2) > div > div > div.panel-body > div > div > div:nth-child(4) > div:nth-child(2) > select",ele=>ele.value)
        var optext=text2.split(":")
        console.log("Explant name ,",optext[1])
        await this.print_enabled.click()
        console.log("the print button is enabled user can print label")
        }
        await this.page.waitForTimeout(700)
        
       
    }   
    }
    // const closeallpages=async(context)=>{


    // }
    
}