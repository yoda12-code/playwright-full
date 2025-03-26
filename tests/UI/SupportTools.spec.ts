import { expect } from '@playwright/test';
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
import TestDataJson from '../../TestData/headers.json'
import Support_page from '../../Pages/SupportToolsPage'
import {test_form} from '../../data'
import support_data from '../../TestData/TestData.json'
const { allure } = require("allure-playwright");

test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    global.user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(global.user, password);
    await Login.validate_login()
})
test("Landing on Support Tools page",{ tag: ["@Smoke"] },async({Login,Request})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
})

test("Landing on Testdata tool Corn_Testdata Submit",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Corn_Testdata_submit']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Corn_Testdata Approve",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Corn_Testdata_Approve']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Corn_Testdata Assign",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Corn_Testdata_Assign']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Corn_Testdata Scan",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Corn_Testdata_Scan']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Corn_Testdata Send",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Corn_Testdata_Send']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Corn_Testdata Complete",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Corn_Testdata_Complete']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Soy_Testdata Submit",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Soy_Testdata_submit']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Soy_Testdata Approve",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Soy_Testdata_Approve']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Soy_Testdata Assign",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Soy_Testdata_Assign']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Soy_Testdata Scan",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Soy_Testdata_Scan']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Soy_Testdata Send",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Soy_Testdata_Send']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Soy_Testdata Complete",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Soy_Testdata_Complete']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Alfalfa_Testdata Submit",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Alfalfa_Testdata_submit']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Alfalfa_Testdata Approve",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Alfalfa_Testdata_Approve']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Alfalfa_Testdata Assign",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Alfalfa_Testdata_Assign']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Alfalfa_Testdata Scan",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Alfalfa_Testdata_Scan']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Alfalfa_Testdata Send",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Alfalfa_Testdata_Send']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})

test("Landing on Testdata tool Alfalfa_Testdata Complete",{ tag: ["@Smoke"] },async({page,Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.navigate_to_submission()
    const op:test_form=support_data['Alfalfa_Testdata_Complete']
    await Support_page.fill_configuration(op)
     const newpage=page.waitForEvent('popup')
    await Support_page.submit_and_verify()
    const np=await newpage
    await np.close();
})



test("Landing on Support Tools page, manage users",async({Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    await Support_page.manage_users_process(global.user,"request manager")
    await Support_page.reset_staus("request manager")
})

test("Landing on Support Tools page, CE Key Contacts",async({Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
   
})

test("Landing on Support Tools page, CE Key ",async({Login,Request,Support_page})=>{
    await allure.suite("Smoke");
    let TestData = TestDataJson['Support Tools'];
    const headers=await Login.naviagte_togiven_page(['Support Tools'])
    await Request.validate(TestDataJson['Support Tools PageButtons'])
    expect(headers).toEqual(TestData)
    const word=await Support_page.navigate_cekeycontacts('Begam, Rajiya')
    console.log(word)
    expect(word).toBe('glyphicon glyphicon-ok text-success')
    console.log("corn is checked as true")
})

test.afterEach(async ({ page }) => {
     await page.close();
       });
