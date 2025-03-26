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

test("Landing on Non-Plate Media Labels page",{ tag: ["@Smoke"] },async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Non-Plate Media Labels'];
    const headers=await Login.naviagte_togiven_page(['Non-Plate Media Labels'])
    await Request.validate(TestDataJson['Non-Plate Media Labels PageButtons'])
    expect(headers).toEqual(TestData)
    
})

test("Print 810K media with 1 label in the Non-Plate Media Labels page",{ tag: ["@Smoke"] },async({page,Login,Request,Non_PlateMediaLabels})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Non-Plate Media Labels'];
    const headers=await Login.naviagte_togiven_page(['Non-Plate Media Labels'])
    await Request.validate(TestDataJson['Non-Plate Media Labels PageButtons'])
    expect(headers).toEqual(TestData)
    const newpage=page.waitForEvent('popup')
    await Non_PlateMediaLabels.validate_media("810K","1");
    const np=await newpage
    await np.close();
})
test.afterEach(async ({ page }) => {
     await page.close();
       });
