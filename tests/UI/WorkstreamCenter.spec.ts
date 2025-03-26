import { expect } from '@playwright/test';
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'

test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
})
test("Landing on Workstream Center page",async({Login,Request})=>{
    let TestData = TestDataJson['Workstream Center'];
    const headers=await Login.naviagte_togiven_page(['Workstream Center'])
    await Request.validate(TestDataJson['Workstream Center PageButtons'])
    expect(headers).toEqual(TestData)
})

test("Landing on Workstream Center page and verify completed tab has completed requests",async({Login,Request,Workstream})=>{
    let TestData = TestDataJson['Workstream Center'];
    const headers=await Login.naviagte_togiven_page(['Workstream Center'])
    await Request.validate(TestDataJson['Workstream Center PageButtons'])
    expect(headers).toEqual(TestData)
    await Workstream.wait_for_loader()
    await Workstream.pic_random_card()
})

test.afterEach(async ({ page }) => {
     await page.close();
       });
