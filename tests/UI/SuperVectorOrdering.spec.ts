import { expect } from '@playwright/test'
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

test("Landing on SuperVector Ordering page",async({Login,Request})=>{
    let TestData = TestDataJson['SuperVector Ordering'];
    const headers=await Login.naviagte_togiven_page(['SuperVector Ordering'])
    await Request.validate(TestDataJson['SuperVector Ordering PageButtons'])
    expect(headers).toEqual(TestData)
    
})
test.afterEach(async ({ page }) => {
     await page.close();
       });
