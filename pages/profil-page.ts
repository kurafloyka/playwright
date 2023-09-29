import { Page } from "playwright";
import { ProfilPageModel } from "./profile-page-model";
import { expect } from "@playwright/test";
import { userdata } from "./userdata";

export class ProfilPage implements ProfilPageModel {
  constructor(private page) {}

  get logOutButton() {
    return this.page.locator("#submit");
  }
  get userNameField() {
    return this.page.locator("#userName-value");
  }
  async verifyCorrectPage() {
    
    await expect(this.userNameField).toHaveText(userdata.userName);
  }
}
