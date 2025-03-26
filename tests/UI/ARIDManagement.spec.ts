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

test("Landing on ARID Management page",{ tag: ["@Smoke"] },async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['ARID Management'];
    const headers=await Login.naviagte_togiven_page(['ARID Management'])
    await Request.validate(TestDataJson['ARID Management PageButtons'])
    expect(headers).toEqual(TestData)
    
})
test.afterEach(async ({ page }) => {
     await page.close();
       });
