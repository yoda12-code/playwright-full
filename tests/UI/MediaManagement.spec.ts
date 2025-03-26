import { expect } from '@playwright/test'
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'
const { allure } = require("allure-playwright");

test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
}) 

test("Landing on Media Management page",{ tag: ["@Smoke"] },async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Media Management'];
    const headers=await Login.naviagte_togiven_page(['Media Management'])
    await Request.validate(TestDataJson['Media Management PageButtons'])
    expect(headers).toEqual(TestData)
    
})

test("Landing on Media Management page and Validate Add New Media page",{ tag: ["@Smoke"] },async({Login,Request,MediaManagement})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Media Management'];
    const headers=await Login.naviagte_togiven_page(['Media Management'])
    await Request.validate(TestDataJson['Media Management PageButtons'])
    expect(headers).toEqual(TestData)
    await MediaManagement.validate_mediamgmt()
    
})
test("Landing on Media Management page and Validate Manage Media page",{ tag: ["@Smoke"] },async({Login,Request,MediaManagement})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Media Management'];
    const headers=await Login.naviagte_togiven_page(['Media Management'])
    await Request.validate(TestDataJson['Media Management PageButtons'])
    expect(headers).toEqual(TestData)
    await MediaManagement.validate_managemedia()
    
})

test.afterEach(async ({ page }) => {
     await page.close();
       });
