import { Page, Locator } from "@playwright/test";

class LoginPage {
  private page: Page;
  continueButton: Locator;
  userIdField: Locator;
  passField: Locator;
  submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueButton = page.locator("//button[@id='signin-continue-btn']");
    this.userIdField = page.locator("//input[@id='userid']");
    this.passField = page.locator("#pass");
    this.submitButton = page.locator("#sgnBt");
  }
}

export default LoginPage;
