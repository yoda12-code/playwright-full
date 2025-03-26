
import test from '../../Pages/Baseclass'
import credsJson from '../../Cred.json'
const { allure } = require("allure-playwright");

test.beforeEach(async({Login})=>{
    test.setTimeout(150000)
    let user = credsJson.userName;
    let password = credsJson.password;
    await Login.user_do_login(user, password);
    await Login.validate_login()
}) 

test("Login to the Evenger Application",{ tag: ["@Smoke"] }, async({Login})=>{
    await allure.suite("Smoke");
    await Login.validate_login();
})
test.afterEach(async ({ page }) => {
     await page.close();
       });
