import { expect } from '@playwright/test'
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'
const { allure } = require("allure-playwright");

test.beforeEach(async({Login})=>{
    test.setTimeout(1500000000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
}) 

test("Landing on Lab Workstream Manager page", { tag: ["@Smoke"] }, async({Login,Request,Labpage})=>{
    test.setTimeout(3000000)
    await allure.suite("Smoke");
    let TestData = TestDataJson['Lab Workstream Manager'];
    const headers=await Login.naviagte_togiven_page(['Lab Workstream Manager'])
    await Request.validate(TestDataJson['Lab Workstream Manager PageButtons'])
    expect(headers).toEqual(TestData)
    const val=await Labpage.getrow1_data()
    await Labpage.data_op(val)
    
})

test("Landing on Lab Workstream Manager page and after search validate the result table", async({Login,Request,Request_mgmt,Labpage})=>{
   // await allure.suite("Smoke");
    let TestData = TestDataJson['Lab Workstream Manager']; 
    const headers=await Login.naviagte_togiven_page(['Lab Workstream Manager'])
    await Request.validate(TestDataJson['Lab Workstream Manager PageButtons'])
    expect(headers).toEqual(TestData)
    await Request_mgmt.validate_table_data()
    const val=await Labpage.getrow1_data()
    await Labpage.data_op(val)
    
})
test.afterEach(async ({ page }) => {
     await page.close();
       });
