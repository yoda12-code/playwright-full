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


test("Landing on Lab Coordination page", { tag: ["@Smoke"] }, async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Lab Coordination'];
    const headers=await Login.naviagte_togiven_page(['Lab Coordination'])
    await Request.validate(TestDataJson['Lab Coordination PageButtons'])
    expect(headers).toEqual(TestData)
})


test("Landing on Lab Coordination page and after search validate the result table", async({Login,Request,Request_mgmt,LabCordinate})=>{
    //await allure.suite("Smoke");
    let TestData = TestDataJson['Lab Coordination'];
    const headers=await Login.naviagte_togiven_page(['Lab Coordination'])
    await Request.validate(TestDataJson['Lab Coordination PageButtons'])
    expect(headers).toEqual(TestData)
    await Request_mgmt.validate_table_data()
    const op=await LabCordinate.getrow1_data()
    await LabCordinate.validate_data(op)
})

test.afterEach(async ({ page }) => {
     await page.close();
       });
