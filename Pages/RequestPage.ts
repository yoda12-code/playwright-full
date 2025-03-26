import {Locator, Page, expect} from "@playwright/test"
import {options} from '../data'
import {ce_request_info} from '../data'
import exp from "constants"

export default class Request{
    private readonly addinstruction
    private readonly add_request
    private readonly request_track
    private readonly program
    private readonly crop
    private readonly project
    private readonly arid
    private readonly events
    private readonly gm_process
    private readonly genotype
    private readonly phx
    private readonly Marker
    private readonly Explant
    private  readonly engineering
    private readonly multiedit
    private readonly pht
    private readonly xma
    private readonly siid
    private readonly ce_contact
    private readonly ce_site
    private readonly project_ce
    private readonly autoclave
    private readonly pesticide
    private readonly settling
    private readonly harvest
    private readonly pot_plants
    private readonly harvest_plant
    private readonly add_instruction_btn
    private readonly add_req_btn
    private readonly request_view
    private readonly op_gm_process
    private readonly op_map
    private readonly op_map_2
    private readonly op_status
    private readonly op_status_2
    private readonly no_req_message
    private readonly tool_tip
    private readonly tool_status
    constructor(public page:Page){
        this.op_status_2=this.page.locator('(//*[@st-table="queuedRequests"]//tbody//tr//td)[7]//span')
        this.tool_status=this.page.locator('//*[@ng-if="request.validationMessage"]')
        this.tool_tip=this.page.locator('//*[@class="tooltip-inner ng-binding"]')
        this.addinstruction= this.page.locator('//button[@class="pollination-instructions-add"]')
        this.add_request=this.page.locator("//button[text()='Add Request']")
        this.request_track=this.page.locator('//*[@ng-model="vm.requestForm.requestTrack"]')
        this.program=this.page.locator('//*[@ng-model="vm.requestForm.program"]')
        this.crop=this.page.locator('//*[@ng-model="vm.requestForm.crop"]')
        this.project=this.page.locator('//*[@ng-model="vm.requestForm.project"]')
        this.arid=this.page.locator('//*[@ng-model="vm.requestForm.arid"]')
        this.events=this.page.locator('//*[@ng-model="vm.requestForm.numberOfQualityEvents"]')
        this.gm_process=this.page.locator('//*[@ng-model="vm.requestForm.gmProcess"]')
        this.genotype=this.page.locator('//*[@ng-model="vm.requestForm.genotype"]')
        this.phx=this.page.locator('//*[@ng-model="vm.requestForm.phxs"]')
        this.Marker=this.page.locator('//*[@ng-model="vm.requestForm.marker"]')
        this.Explant=this.page.locator('//*[@ng-model="vm.requestForm.explant"]')
        this.engineering=this.page.locator('//*[@ng-model="vm.requestForm.iterativeEngineering"]')
        this.multiedit=this.page.locator('//*[@ng-model="vm.requestForm.multiEdit"]')
        this.pht=this.page.locator('//*[@ng-model="vm.requestForm.pht"]')
        this.xma=this.page.locator('//*[@ng-model="vm.requestForm.atlasName"]')
        this.siid=this.page.locator('//*[@ng-model="vm.requestForm.progenitorSiid"]')
        this.ce_contact=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.ceKeyContact"]')
        this.ce_site=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.ceSite"]')
        this.project_ce=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.projectCode"]')
        this.autoclave= this.page.locator('//*[@ng-model="vm.requestForm.autoclave"]')
        this.pesticide=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.pesticideInstruction"]')
        this.settling=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.detasselingInstruction"]')
        this.harvest=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.harvestPreference"]')
        this.pot_plants=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.numberOfPlantsToTransplant"]')
        this.harvest_plant=this.page.locator('//*[@ng-model="vm.requestForm.cerequest.numberOfPlantsToHarvest"]')
        this.add_instruction_btn=this.page.locator('//*[@class="pollination-instructions-add"]')
        this.add_req_btn=this.page.locator("//*[@type='submit' and text()='Add Request']")
        this.request_view=this.page.locator('//*[@options="vm.requestSubmissionQueueOptions"]')
        this.op_gm_process=this.page.locator('(//*[@st-table="queuedRequests"]//tbody//tr//td)[2]')
        this.op_map=this.page.locator('//*[@ng-if="request.map.isValid"]')
        this.op_map_2=this.page.locator('//*[@ng-if="vm.visibleColumns.atlas && request.atlas.isValid"]')
        this.op_status=this.page.locator('(//*[@st-table="queuedRequests"]//tbody//tr//td)[6]//span')
        this.no_req_message=this.page.locator("//*[text()='Configure requests above, and add them here before submitting.']")
        
    }
    async validate_buttons_onpage(){
        await expect(this.addinstruction).toBeVisible({timeout:1000})
        await expect(this.add_request).toBeVisible({timeout:1000})
        console.log("buttons are visible on the page ")

    }
    async validate(button_list:any){
        for(const locator of button_list){
            try{
                await this.page.locator("//button[contains(text(),'"+locator+"')]").isVisible()
                console.log("validation passed",button_list)

            }
            catch(error){
                console.error(`element ${error} with ${locator} is not found`)
            }

        }

    }

    async submit_request(crop_name='None',request_track='None',program_name='None',project_name='None',arid='None',event='None',gm_option='None',label_otion='None',phx,marker='None',Explant='None',engg='None',multi_edit='None',xma_value="None",pht_value="None",siid_value="None"){
        //configuration
        await this.crop.selectOption({label:crop_name})
        await this.request_track.selectOption({label:request_track})
        await this.program.selectOption({label:program_name})
        await this.project.selectOption({label:project_name})
        await this.arid.fill(arid)
        await this.page.locator('//*[@title="'+arid+'"]').click()
        await this.events.fill(event)
        await this.gm_process.selectOption({label:gm_option})
        const multi=await this.multiedit.isVisible()


        console.log("the op is ",multi)
        if(multi){
            console.log("multi edit is visible")
            await this.multiedit.selectOption({label:multi_edit})
            if(multi_edit=="Yes"){
                await this.xma.fill(xma_value)
            }
            else{
                await this.pht.fill(pht_value)

            }
            await this.Marker.selectOption({label:marker})
            await this.Explant.selectOption({label:Explant})
            await this.engineering.selectOption({label:engg})
            if(engg=="Yes"){
                await this.siid.type(siid_value)

            }
            else{
                    console.log("siid value is not visible ")
            }
        }
        else{
            console.log("multiedit is not visible")
            await this.genotype.selectOption({label:label_otion})
            await this.phx.fill(phx)
            await this.Marker.selectOption({label:marker})
            await this.Explant.selectOption({label:Explant})
            await this.engineering.selectOption({label:engg})
            if(engg=="Yes"){
                await this.siid.type(siid_value)
            }
            else{
                    console.log("siid value is not visible ")
            }
        }
    }
   
    async submit_request1(num_list:options){
        await this.crop.selectOption({label:num_list.crop})
        await this.request_track.selectOption({label:num_list.request_track})
        await this.program.selectOption({label:num_list.program_name})
        await this.project.selectOption({label:num_list.project_name})
        await this.arid.fill(num_list.arid)
        await this.page.locator('//*[@title="'+num_list.arid+'"]').click()
        await this.events.fill(num_list.event)
        await this.gm_process.selectOption({label:num_list.gm_option})
        const multi=await this.multiedit.isVisible()
        console.log("the op is ",multi)
        if(multi){
            console.log("multi edit is visible")
            await this.multiedit.selectOption({label:num_list.multi_edit})
            if(num_list.multi_edit=="Yes"){
                await this.xma.fill(num_list.xma_value)
            }
            else{
                await this.pht.fill(num_list.pht_value)

            }
            await this.Marker.selectOption({label:num_list.marker})
            await this.Explant.selectOption({label:num_list.Explant})
            await this.engineering.selectOption({label:num_list.engg})
            if(num_list.engg=="Yes"){
                await this.siid.type(num_list.siid_value)

            }
            else{
                    console.log("siid value is not visible ")
            }
        }
        else{
            console.log("multiedit is not visible")
            if(num_list.gm_option=="Agro SSI"){
                console.log("gm op is  agro ssi")
                await this.phx.fill(num_list.phx)
                await this.Marker.selectOption({label:num_list.marker})
                await this.Explant.selectOption({label:num_list.Explant})
                //await this.engineering.selectOption({label:num_list.engg})
            }
            else{
                await this.genotype.selectOption({label:num_list.label_otion})
                await this.phx.fill(num_list.phx)
                await this.Marker.selectOption({label:num_list.marker})
                await this.Explant.selectOption({label:num_list.Explant})
                await this.engineering.selectOption({label:num_list.engg})
            }
            
            if(num_list.engg=="Yes"){
                await this.siid.type(num_list.siid_value)

            }
            else{
                    console.log("siid value is not visible ")
            }
        }
    

    }

    async ce_configuration(
        num_list:ce_request_info
    ){
        await this.ce_contact.selectOption({label:num_list.cekeycontact})
        await this.ce_site.selectOption({label:num_list.cesite})
        await this.project_ce.selectOption({label:num_list.projectcode})
        await this.autoclave.selectOption({label:num_list.autoclave})
        await this.pesticide.selectOption({label:num_list.pesticidesallowed})
        await this.settling.selectOption({label:num_list.detasselinginstructions})
        await this.harvest.selectOption({label:num_list.harvestpreference})
        await this.pot_plants.fill(num_list.plantstopot)
        await this.harvest_plant.fill(num_list.plantstoharvest)
    }
    async pollination_instructions(pollination_value:any){
        await this.add_instruction_btn.click()
        await this.page.locator(`//*[@class="list-group margin-top"]//a[contains(text(),'${pollination_value}')]`).click()
        await expect(this.page.locator(`//*[@class="ng-binding ng-scope" and contains(text(),'${pollination_value}')]`)).toBeVisible({timeout:250000})
        await expect(this.no_req_message).toBeVisible({timeout:100000})
        await this.add_req_btn.click()
        await expect(this.no_req_message).not.toBeVisible({timeout:100000})
        await expect(this.request_view).toBeVisible({timeout:5000})
        console.log("the request view is visible , add req button clicked ")
    }
    async validate_req(){
        //await this.page.waitForTimeout(15000)
        const val= await this.op_status.isVisible()
        console.log("the value is ",val)
        if(val){
            const text3= await this.op_status.textContent()
            console.log("text3 is ",text3)
            if (text3=="Invalid"){
                const text1=await this.op_gm_process.textContent()
                console.log("text1 is ",text1)
                const count1= await this.op_map.count()
                await this.page.waitForTimeout(1000)
                
                const count3=await this.page.locator('//*[@ng-if="vm.visibleColumns.atlas && !request.atlas.isBusy && !request.atlas.isValid && !request.pht"]').count()
                const count2= await this.page.locator('//*[@ng-if="!request.map.isBusy && !request.map.isValid && !request.atlasName"]').count()
                if(count1>0){
                    console.log("the value of count1 is ",count1)
                    const text2= await this.op_map.textContent()
                    console.log("text2 is ",text2)
                    return[text1,text2,text3]
        
                }
                else if(count3>0){
                    console.log("the value of count3 is ",count3)
                    const text2=await this.page.locator('//*[@ng-if="vm.visibleColumns.atlas && !request.atlas.isBusy && !request.atlas.isValid && !request.pht"]').textContent()
                    console.log("text2 is ",text2)
                    return[text1,text2,text3]
                }
                else{
                    console.log("the value of count2 is ",count2)
                    const text2=await this.page.locator('//*[@ng-if="!request.map.isBusy && !request.map.isValid && !request.atlasName"]').textContent()
                    console.log("text2 is ",text2)
                    return[text1,text2,text3]
                }
                }
                else{
                    const text1=await this.op_gm_process.textContent()
                    console.log(text1)
                    const text2= await this.op_map.textContent()
                    console.log(text2)
                    const text3= await this.op_status.textContent()
                    console.log(text3)
                    return[text1,text2,text3]
                }

            
        }
        else{
            console.log("the else part")
            const text3= await this.op_status_2.textContent()
            console.log("text3 is ",text3)
            if (text3=="Invalid"){
                const text1=await this.op_gm_process.textContent()
                console.log("text1 is ",text1)
                const count1= await this.op_map.count()
                await this.page.waitForTimeout(1000)
                
                const count3=await this.page.locator('//*[@ng-if="vm.visibleColumns.atlas && !request.atlas.isBusy && !request.atlas.isValid && !request.pht"]').count()
                const count2= await this.page.locator('//*[@ng-if="!request.map.isBusy && !request.map.isValid && !request.atlasName"]').count()
                if(count1>0){
                    console.log("the value of count1 is ",count1)
                    const text2= await this.op_map.textContent()
                    console.log("text2 is ",text2)
                    return[text1,text2,text3]
        
                }
                else if(count3>0){
                    console.log("the value of count3 is ",count3)
                    const text2=await this.page.locator('//*[@ng-if="vm.visibleColumns.atlas && !request.atlas.isBusy && !request.atlas.isValid && !request.pht"]').textContent()
                    console.log("text2 is ",text2)
                    return[text1,text2,text3]
                }
                else{
                    console.log("the value of count2 is ",count2)
                    const text2=await this.page.locator('//*[@ng-if="!request.map.isBusy && !request.map.isValid && !request.atlasName"]').textContent()
                    console.log("text2 is ",text2)
                    return[text1,text2,text3]
                }
                }
                else{
                    const text1=await this.op_gm_process.textContent()
                    console.log(text1)
                    const text2= await this.op_map.textContent()
                    console.log(text2)
                    const text3= await this.op_status_2.textContent()
                    console.log(text3)
                    return[text1,text2,text3]
                }
        }

    }
    async validate_req_2(){
        const text1=await this.op_gm_process.textContent()
        console.log(text1)
        const text2= await this.op_map_2.textContent()
        console.log(text2)
        const text3= await this.op_status.textContent()
        console.log(text3)
        return[text1,text2,text3]
    }
    async tools_data(validation_text:String){
        await this.tool_status.hover()
        await expect(this.tool_tip).toBeVisible({timeout:10000})
        const text1=await this.tool_tip.textContent()
        console.log(text1)
        await expect(text1).toBe(validation_text)

    }

}