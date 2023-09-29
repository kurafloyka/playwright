import { expect } from "@playwright/test";
import { landingPageModel } from "./landing-page-model";
import { userdata } from "./userdata";

export class LandingPage implements landingPageModel {
  constructor(private page) {}
  get LoginButton() {
    return this.page.locator("//button[@id='login']");
  }

  get searchBoxInput() {
    return this.page.locator("#searchBox");
  }

  async navigate() {
    await this.page.goto(userdata.baseUrl + "/books");

    ;
  }
  async verifyCorrectPage() {
    await expect(this.searchBoxInput).toBeVisible();
  }
}
