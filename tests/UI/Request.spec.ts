
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'
import data from '../../TestData/requests_multi.json'
import ce_data from '../../TestData/request.json'
import {options} from '../../data'
import {ce_request_info} from '../../data'
const { allure } = require("allure-playwright");
import 'mocha';
import { expect, Browser, chromium, Page } from '@playwright/test'

// let browser:Browser;
// let page:Page;
// test.beforeAll(async ()=>{
//     browser=await chromium.launch({
//         headless:false
//       })
//     page= await browser.newPage()
    
// })


test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
})

test("Landing on Request page",{ tag: ["@Smoke"] }, async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson.Request_page
    const headers=await Login.naviagte_togiven_page(['Request'])
    await Request.validate(TestDataJson.RequestPageButtons)
    expect(headers).toEqual(TestData)
    
})

test("validate a request flow for CE Request info ",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
})

test("validate a request flow - Random Agro and Iterative Engineering is no",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['Random Agro Request_engineering_no']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['Random Agro Request_engineering_no']['gm_option'])
    expect(text2).toEqual(data['Random Agro Request_engineering_no']['phx'])
    expect(text3).toEqual('Valid')
})

test("validate a request flow - Random Agro and Iterative Engineering is yes",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['Random Agro Request_engineering_yes']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['Random Agro Request_engineering_yes']['gm_option'])
    expect(text2).toEqual(data['Random Agro Request_engineering_yes']['phx'])
    expect(text3).toEqual('Valid')
})

test("validate a request flow - SDN1 Agro and Multi Edit No",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['SND1 Agro Request_multiedit_no_engineering_no']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['SND1 Agro Request_multiedit_no_engineering_no']['gm_option'])
    expect(text2).toEqual(data['SND1 Agro Request_multiedit_no_engineering_no']['pht_value'])
    expect(text3).toEqual('Valid')
})

test("validate a request flow - SDN1 Agro and Multi Edit Yes",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['SND1 Agro Request_multiedit_yes_engineering_yes']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req_2()
    expect(text1).toEqual(data['SND1 Agro Request_multiedit_yes_engineering_yes']['gm_option'])
    expect(text2).toEqual(data['SND1 Agro Request_multiedit_yes_engineering_yes']['xma_value'])
    expect(text3).toEqual('Valid')
    
})

test("validate a request flow - Target Base Edit and Multi Edit No",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['TargetBaseEdit Request_multiedit_no_engineering_no']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['TargetBaseEdit Request_multiedit_no_engineering_no']['gm_option'])
    expect(text2).toEqual(data['TargetBaseEdit Request_multiedit_no_engineering_no']['pht_value'])
    expect(text3).toEqual('Valid')
})

test("validate a request flow - Target Base Edit and Multi Edit Yes",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['targetbaseedit Request_multiedit_yes_engineering_yes']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req_2()
    expect(text1).toEqual(data['targetbaseedit Request_multiedit_yes_engineering_yes']['gm_option'])
    expect(text2).toEqual(data['targetbaseedit Request_multiedit_yes_engineering_yes']['xma_value'])
    expect(text3).toEqual('Valid')
    
})

test("validate a request flow - Iterative Engineering is Yes",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['Random Agro Request_engineering_no']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['Random Agro Request_engineering_no']['gm_option'])
    expect(text2).toEqual(data['Random Agro Request_engineering_no']['phx'])
    expect(text3).toEqual('Valid')
})

test("validate a request flow - Agro SSI and Iterative Engineering is no",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['AgroSSI Request_engineering_no']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['AgroSSI Request_engineering_no']['gm_option'])
    expect(text2).toEqual(data['AgroSSI Request_engineering_no']['phx'])
    expect(text3).toEqual('Valid')
})

test("validate a request flow - Random Agro Excision and Iterative Engineering is no",async({Login,Request})=>{
    await Login.naviagte_togiven_page(['Request'])
    const op:options=data['Random Agro Request_engineering_no']
    await Request.submit_request1(op)
    const op1:ce_request_info= ce_data['ce_request_info']
    await Request.ce_configuration(op1)
    await Request.pollination_instructions('Self')
    const[text1,text2,text3]=await Request.validate_req()
    expect(text1).toEqual(data['Random Agro Request_engineering_no']['gm_option'])
    expect(text2).toEqual(data['Random Agro Request_engineering_no']['phx'])
    expect(text3).toEqual('Valid')
})


test.afterEach(async ({ page }) => {
     await page.close();
       });
