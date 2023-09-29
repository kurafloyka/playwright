import { Page } from "playwright";
import { LoginPageModel } from "./login-page-model";
import { expect } from "@playwright/test";
import { userdata } from "./userdata";

export class LoginPage implements LoginPageModel {
  constructor(private page){
  }

  get userNameInput() {
    return this.page.locator("#userName");
  }

  get passwordInput() {
    return this.page.locator("#password");
  }

  get submitButton() {
    return this.page.locator("#login");
  }
  async verifyCorrectPage() {
    await expect(this.page.url()).toContain(userdata.baseUrl + "/login");
  }
}
