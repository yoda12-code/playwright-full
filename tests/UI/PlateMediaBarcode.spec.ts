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

test("Landing on Plate Media Barcode page",{ tag: ["@Smoke"] },async({Login, Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Plate Media Barcode'];
    const headers=await Login.naviagte_togiven_page(['Plate Media Barcode'])
    await Request.validate(TestDataJson['Plate Media Barcode PageButtons'])
    expect(headers).toEqual(TestData)
    
})

test("Search 404A in Plate Media Barcode page ",{ tag: ["@Smoke"] },async({PlateMediaBarcode,Login, Request })=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Plate Media Barcode'];
    const headers=await Login.naviagte_togiven_page(['Plate Media Barcode'])
    await Request.validate(TestDataJson['Plate Media Barcode PageButtons'])
    expect(headers).toEqual(TestData)
    await PlateMediaBarcode.fill_in_media('404A')
    await PlateMediaBarcode.validate_media('404A')
    
})

test("Search 810K in Plate Media Barcode page ",{ tag: ["@Smoke"] },async({PlateMediaBarcode,Login, Request })=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Plate Media Barcode'];
    const headers=await Login.naviagte_togiven_page(['Plate Media Barcode'])
    await Request.validate(TestDataJson['Plate Media Barcode PageButtons'])
    expect(headers).toEqual(TestData)
    await PlateMediaBarcode.fill_in_media('810K')
    await PlateMediaBarcode.validate_media('810K')
    
})

test("Search 13158L in Plate Media Barcode page ",{ tag: ["@Smoke"] },async({PlateMediaBarcode,Login, Request })=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Plate Media Barcode'];
    const headers=await Login.naviagte_togiven_page(['Plate Media Barcode'])
    await Request.validate(TestDataJson['Plate Media Barcode PageButtons'])
    expect(headers).toEqual(TestData)
    await PlateMediaBarcode.fill_in_media('13158L')
    await PlateMediaBarcode.validate_media('13158L')
    
})


test.afterEach(async ({ page }) => {
     await page.close();
       });
