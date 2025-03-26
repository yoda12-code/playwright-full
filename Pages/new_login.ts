import { BrowserContext, Page } from 'playwright';

export class LoginPage {
  page: Page;
  context:BrowserContext

  constructor(page: Page ,context:BrowserContext) {
    this.page = page;
    this.context=context
  }

  // Login method that handles Basic Auth
  async loginWithBasicAuth(username: string, password: string) {
    // Escape backslash in username if it exists
    const escapedUsername = username.replace('\\', '\\\\'); 
    const creds=btoa(`${escapedUsername}:${password}`)
    await this.page.setExtraHTTPHeaders({
      'Authorization':`Basic ${creds}`
    })
    await this.page.goto('https://tcsapps1-jh.phiqa.com/evenger');
  }
}