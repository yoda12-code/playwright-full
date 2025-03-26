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

test("Landing on PHP/RV Search page",async({Login,Request})=>{
    let TestData = TestDataJson['PHP/RV Search'];
    const headers=await Login.naviagte_togiven_page(['PHP/RV Search'])
    await Request.validate(TestDataJson['PHP/RV Search PageButtons'])
    expect(headers).toEqual(TestData)
})

test("Landing on PHP/RV Search page and Vector search with RV021517",async({Login,PHP_RV_Search,Request})=>{
    let TestData = TestDataJson['PHP/RV Search'];
    const headers=await Login.naviagte_togiven_page(['PHP/RV Search'])
    await Request.validate(TestDataJson['PHP/RV Search PageButtons'])
    expect(headers).toEqual(TestData)
    await PHP_RV_Search.fillinph("RV021517")
    await PHP_RV_Search.validate_rvid("RV021517")
})

test("Landing on PHP/RV Search page and Vector with RV048743",async({Login,PHP_RV_Search,Request})=>{
    let TestData = TestDataJson['PHP/RV Search'];
    const headers=await Login.naviagte_togiven_page(['PHP/RV Search'])
    await Request.validate(TestDataJson['PHP/RV Search PageButtons'])
    expect(headers).toEqual(TestData)
    await PHP_RV_Search.fillinph("RV048743")
    await PHP_RV_Search.validate_rvid("RV048743")

})
test.afterEach(async ({ page }) => {
     await page.close();
       });
