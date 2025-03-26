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

test("Landing on Help page",{ tag: ["@Smoke"]},async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson.Help;
    const headers=await Login.naviagte_togiven_page(['Help'])
    await Request.validate(TestDataJson['Help PageButtons'])
    expect(headers).toEqual(TestData)
    
})

test("Verify service desk link in the Help page",{ tag: ["@Smoke"]}, async({Login,Request,Help})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson.Help;
    const headers=await Login.naviagte_togiven_page(['Help'])
    await Request.validate(TestDataJson['Help PageButtons'])
    expect(headers).toEqual(TestData)
    await Help.click_help_quicklink()
    await Help.validate_help()

    
})
test.afterEach(async ({ page }) => {
     await page.close();
       });
