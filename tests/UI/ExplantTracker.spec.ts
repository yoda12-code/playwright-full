import { expect, Browser, chromium, Page } from '@playwright/test'
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'
import {siid} from '../../data'
import data from '../../TestData/siid.json'
const { allure } = require("allure-playwright");

let browser:Browser;
let page:Page;
test.beforeAll(async ()=>{
    browser=await chromium.launch({
        headless:false
      })
    page= await browser.newPage()
    
})

test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
}) 


test("Landing on Explant Tracker page",{ tag: ["@Smoke"]},async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Explant Tracker'];
    const headers=await Login.naviagte_togiven_page(['Explant Tracker'])
    await Request.validate(TestDataJson['Explant Tracker PageButtons'])
    expect(headers).toEqual(TestData)
    
})

test("Search with manual SIID Entry and verify print label is disabled",{ tag: ["@Smoke"]}, async({Login,Request,Explant})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Explant Tracker'];
    const headers=await Login.naviagte_togiven_page(['Explant Tracker'])
    await Request.validate(TestDataJson['Explant Tracker PageButtons'])
    expect(headers).toEqual(TestData)
    const op1:siid= data['siid_values2']
    await Explant.submit_ssid(op1)
})

test("Search with manual SIID Entry and Print the labels", { tag: ["@Smoke"]},async({Login,Request,Explant,page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Explant Tracker'];
    const headers=await Login.naviagte_togiven_page(['Explant Tracker'])
    await Request.validate(TestDataJson['Explant Tracker PageButtons'])
    expect(headers).toEqual(TestData)
    const op1:siid= data['siid_values']
    const newpage=page.waitForEvent('popup')
    await Explant.submit_ssid(op1)
    const np=await newpage
    await np.close();
})
test("Search with manual Invalid SIID Entry with characters",{ tag: ["@Smoke"]}, async({Login,Request,Explant})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Explant Tracker'];
    const headers=await Login.naviagte_togiven_page(['Explant Tracker'])
    await Request.validate(TestDataJson['Explant Tracker PageButtons'])
    expect(headers).toEqual(TestData)
    const op1:siid= data['wrong_val_2']
    await Explant.submit_ssid(op1)
})

test("Search with manual Invalid SIID Entry",{ tag: ["@Smoke"]},async({Login,Request,Explant})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Explant Tracker'];
    const headers=await Login.naviagte_togiven_page(['Explant Tracker'])
    await Request.validate(TestDataJson['Explant Tracker PageButtons'])
    expect(headers).toEqual(TestData)
    const op1:siid= data['wrong_val_1']
    await Explant.submit_ssid(op1)

})
test("Update Genotype and Explants after the manual SIID entry and print the label",{ tag: ["@Smoke"]}, async({page,Login,Request,Explant})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Explant Tracker'];
    const headers=await Login.naviagte_togiven_page(['Explant Tracker'])
    await Request.validate(TestDataJson['Explant Tracker PageButtons'])
    expect(headers).toEqual(TestData)
    const op1:siid= data['siid_value_3']
    const newpage=page.waitForEvent('popup')
    await Explant.submit_ssid(op1)
    const np=await newpage
    await np.close();
    
})

test.afterEach(async ({page}) => { 
     await page.close();
       });
