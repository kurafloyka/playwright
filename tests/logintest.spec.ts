import { test, expect, chromium, firefox } from "@playwright/test";
import LandingPage from "../pages/landing.page";
import LoginPage from "../pages/login.page";

test.describe("RegressionSuite", () => {
  let landingPage: LandingPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    loginPage = new LoginPage(page);
    landingPage.navigate();
  });

  test("Login to Ebay", async ({ page }) => {
    //await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );

    await landingPage.signInButton.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await landingPage.signInButton.click();

    await expect(loginPage.continueButton).toBeEditable({ timeout: 3000 });

    await loginPage.userIdField.waitFor({ state: "attached", timeout: 10000 });

    await loginPage.userIdField.type("faak_8271");

    await loginPage.continueButton.click();

    await loginPage.passField.waitFor({ state: "visible", timeout: 10000 });
    await loginPage.passField.click();
    await loginPage.passField.type("Farukakyol1");
    await loginPage.submitButton.click();

    await page
      .locator("//*[@title='My eBay']")
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .locator("//button[@id='gh-ug']")
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .locator("//button[@id='gh-ug']")
      .waitFor({ state: "visible", timeout: 10000 });
    await page.locator("//button[@id='gh-ug']").hover();

    await page.locator("//a[text()='Sign out']").click();

    await expect(page.locator("#signout-banner-text")).toContainText(
      "You've signed out.",
      { timeout: 10000 }
    );

    //await page.waitForTimeout(3000);
  });
});
