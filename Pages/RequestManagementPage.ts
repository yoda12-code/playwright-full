import {Locator, Page, expect} from "@playwright/test"
import exp from "constants";
import { fileURLToPath } from "url";
export default class Request_mgmt{
    private readonly request_track_filters
    private readonly clear_status;
    private readonly reset_filter;
    private readonly clear_crop_filter;
    private readonly requestor;
    private readonly more_filters;
    private readonly btn_submit;
    private readonly table_values
    private readonly rm_loader

    constructor(public page:Page){
        this.request_track_filters=this.page.locator('(//*[@class="select-search-list"])[2]//li//span[@class="close select-search-list-item_selection-remove"]')
        this.clear_status=this.page.locator('(//*[@class="select-search-list"])[3]//li//span[@class="close select-search-list-item_selection-remove"]')
        this.reset_filter=this.page.locator('//*[@ng-click="vm.resetFilters()"]')
        this.clear_crop_filter=this.page.locator('(//*[@class="select-search-list"])[1]//li//span[@class="close select-search-list-item_selection-remove"]')
        this.requestor=this.page.locator('(//*[@class="select-search-list"])[4]//li//span[@class="close select-search-list-item_selection-remove"]')
        this.more_filters=this.page.locator('//*[@ng-change="vm.showField(field)"]')
        this.btn_submit=this.page.locator('//*[@type="submit"]|//*[@class="btn btn-primary"]')
        this.table_values=this.page.locator('(//*[@class="table table-hover"]//div[@class="body"]//div[@class="row ng-scope"])[1]|(//*[@class="text-nowrap ng-scope"]//tr//td//div)[1]')
        this.rm_loader=this.page.locator("//*[text()='Loading Requests']| //*[text()='Getting Workstreams']")
    }
    async wait_for_Data(){
        await this.page.locator('(//*[@ng-if="::vm.columns.crop"])[2]').isVisible()
        const text=await this.page.locator('(//*[@ng-if="::vm.columns.crop"])[2]').textContent()
        console.log(text)

    }
    async validate_table_data(){
        await expect(this.table_values).not.toBeVisible({timeout:100000})
        console.log("the table is not visible")
        await this.btn_submit.click()
        for(let i=0; i<150;i++){
            await this.page.waitForTimeout(3000)
            const op:any=await this.rm_loader.isVisible()
            console.log("the value of op is ",op)
            if (op==false){
                console.log("loader not visible")
                break
            }
            else{
                console.log("continue")
            }

            
        }
        await expect(this.table_values).toBeVisible({timeout:1000000})
        
        console.log("the table is visible after click")

    }
    async clear_request_track(){
        const count=await this.request_track_filters.count()
        if(count==0){
            console.log("there is no filter applied ")
        }
        else{
        for(let i=1;i<count+1;i++){
            await this.page.locator('((//*[@class="select-search-list"])[2]//li//span[@class="close select-search-list-item_selection-remove"])[1]').click()
        }
    }}
    async clear_status_data(){
        const count=await this.clear_status.count()
        if(count==0){
            console.log("there is no filter applied ")
        }
        else{
        for(let i=1;i<count+1;i++){
            await this.page.locator('((//*[@class="select-search-list"])[3]//li//span[@class="close select-search-list-item_selection-remove"])[1]').click()
        }

    }
  
   

}
    async reset_filte_status(){
    await this.reset_filter.click()

    }
    async apply_combo_filter(){
        
    }
    async clear_crop(){
        const count=await this.clear_crop_filter.count()
        if(count==0){
            console.log("there is no filter applied ")
        }
        else{
        for(let i=1;i<count+1;i++){
            await this.page.locator('((//*[@class="select-search-list"])[1]//li//span[@class="close select-search-list-item_selection-remove"])[1]').click()
        }
    }
}
    async clear_requestor(){
        const count=await this.requestor.count()
        if(count==0){
            console.log("there is no filter applied ")
        }
        else{
        for(let i=1;i<count+1;i++){
            await this.page.locator('((//*[@class="select-search-list"])[4]//li//span[@class="close select-search-list-item_selection-remove"])[1]').click()
        }
    }
    }
    async filter_request_track(data){
        console.log(data.length)
        if(data.length==0){
            console.log("Request track filter is not applicable")
        }
        else{
        for (let i=0; i<data.length;i++){
            console.log(data[i])
            await this.page.locator('(//*[@class="ng-pristine ng-valid ng-empty ng-touched"])[2]').click()
            await this.page.locator(`//*[text()='${data[i]}']`).click()
            

        }}
    }
    async filter_crop(data){
        console.log(data.length)
        if(data.length==0){
            console.log("Request track filter is not applicable")
        }
        else{
        for (let i=0; i<data.length;i++){
            console.log(data[i])
            await this.page.locator('(//*[@class="ng-pristine ng-valid ng-empty ng-touched"])[1]').click()
            await this.page.locator(`//*[text()='${data[i]}']`).click()
            

        }}   
    }
    async filter_with_more_filters(filter_name,data){
        await this.more_filters.selectOption({label:filter_name})
        if(data.length==0){
            console.log("Request track filter is not applicable")
        }
        else{
        for (let i=0; i<data.length;i++){
            if (i==0){
            console.log(data[i])
            // await this.page.locator('//input[@class="ng-valid ng-dirty ng-touched ng-empty"]').click()
            await expect(this.page.locator('//input[@class="ng-pristine ng-untouched ng-valid ng-empty"]')).toBeVisible({timeout:300000000})
            await this.page.locator('//input[@class="ng-pristine ng-untouched ng-valid ng-empty"]').fill(data[i])
            await this.page.locator(`//strong[text()='${data[i]}']`).click()
            }
            else{
                await this.page.locator('//*[@class="ng-valid ng-dirty ng-touched ng-empty"]').fill(data[i])
                await this.page.locator(`//strong[text()='${data[i]}']`).click()
            }
        }}   
    }
    async btn_submit_click(){
        await this.btn_submit.click()

    }
    async validate_data_from()
    {
       const crop= await this.page.locator('((//*[@class="body"]//div)[1]//a)[1]').textContent()
       const requestor=await this.page.locator('((//*[@class="body"]//div)[1]//a)[13]').textContent()
       console.log("crop=",crop)
       console.log("request is ",requestor)
       return [crop, requestor]
    }






}