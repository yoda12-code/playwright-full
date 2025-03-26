//mport { chromium, Browser, Page } from 'playwright';
import { test, expect, Browser, chromium, Page } from '@playwright/test'
import { LoginPage } from '../../Pages/new_login';

test('should authenticate with basic auth', async () => {
    // Launch the browser
    const browser = await chromium.launch();
    
    // Create a new browser context and page
    const context = await browser.newContext();
    const page: Page = await context.newPage();
  
    // Instantiate the LoginPage with the page
    const loginPage = new LoginPage(page,context);
  
    // Use the login method, passing username with backslash and password
    await loginPage.loginWithBasicAuth('phibred\\dhw124', 'Abdul@12341234');
  
    // Optionally, wait for an element that confirms successful login
    // Adjust the selector to something that appears after successful login
    //await page.waitForSelector('selector-after-login');  // Modify with actual selector
  
    // Example: Check the title of the page after login
    const title = await page.title();
    console.log('Page title after login:', title);
    
    // Verify that the title is correct (you can adjust this to your expected page title)
    //expect(title).toBe('Expected Page Title After Login');
  
    // Close the browser after the test
    await browser.close();
  });


