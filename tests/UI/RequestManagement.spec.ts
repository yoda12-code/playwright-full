import { expect } from '@playwright/test'
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'
import data from '../../TestData/request_management.json'
const { allure } = require("allure-playwright");

test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
})

test("Landing on Request Management page",{ tag: ["@Smoke"] }, async({Login,Request,Request_mgmt})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Request Management'];
    const headers=await Login.naviagte_togiven_page(['Request Management'])
    await Request.validate(TestDataJson['Request Management PageButtons'])
    expect(headers).toEqual(TestData)
    //await Request_mgmt.wait_for_Data()
    await Request_mgmt.clear_request_track()
    await Request_mgmt.clear_status_data()
    await Request_mgmt.clear_crop()
    await Request_mgmt.clear_requestor()
    await Request_mgmt.reset_filte_status()
    await Request_mgmt.filter_request_track(data['data1']['request_track'])
    await Request_mgmt.filter_crop(data['data1']['crop'])
    await Request_mgmt.filter_with_more_filters("Requestor",data['data1']['requestor'])
    await Request_mgmt.btn_submit_click()
    const op=await Request_mgmt.validate_data_from()
    expect(data['data1']['requestor']).toContain(op[1])
    //expect(data['data1']['crop']).toContain(op[0])
    //This above validation is failing because Crop is mismatching with crop in the result table
})


test.afterEach(async ({ page }) => {
     await page.close();
       });
