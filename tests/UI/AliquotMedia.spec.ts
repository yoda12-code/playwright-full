import { expect, Browser, chromium, Page } from '@playwright/test'
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

test("Landing on Aliquot Media page", { tag: ["@Smoke"] }, async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Aliquot Media'];
    const headers=await Login.naviagte_togiven_page(['Aliquot Media'])
    await Request.validate(TestDataJson['Aliquot Media PageButtons'])
    expect(headers).toEqual(TestData)
    
})
test("Search on Aliquot Media page 810K", { tag: ["@Smoke"] }, async({page,Login,Request,Mediapage})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Aliquot Media'];
    const headers=await Login.naviagte_togiven_page(['Aliquot Media'])
    await Request.validate(TestDataJson['Aliquot Media PageButtons'])
    expect(headers).toEqual(TestData)
    const newpage=page.waitForEvent('popup')
    await Mediapage.validate_scan('810K')
    await Mediapage.validate_media_page('810K')
    const np=await newpage
    await np.close();
})

test("Search on Aliquot Media page 404A", { tag: ["@Smoke"] }, async({page,Login,Request,Mediapage})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Aliquot Media'];
    const headers=await Login.naviagte_togiven_page(['Aliquot Media'])
    await Request.validate(TestDataJson['Aliquot Media PageButtons'])
    expect(headers).toEqual(TestData)
    const newpage=page.waitForEvent('popup')
    await Mediapage.validate_scan('404A')
    await Mediapage.validate_media_page('404A')
    const np=await newpage
    await np.close();
})

test.afterEach(async ({ page }) => {
    await page.close();
      });
