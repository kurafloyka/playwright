import { Page, Locator } from "@playwright/test";

class LandinggPage {
  page: Page;
  signInButton: Locator;
  constructor(page:Page) {
    this.page = page;
    this.signInButton = page.locator("//*[@id='gh-ug']//*[text()='Sign in']");
  }

  async navigate(){

    await this.page.goto('/');
  }

}
export default LandinggPage;
