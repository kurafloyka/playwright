import { test, expect, chromium, firefox } from "@playwright/test";
import LandinggPage from "../pages/landingg-page";

test.describe("RegressionSuite", () => {

  let landinggPage: LandinggPage;
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/books");
    landinggPage= new LandinggPage(page);
  });

  test("Login-logout", async ({ page }) => {
    //console.log((await page.title()) + " : Faruk");
   
    await expect(page.url()).toContain('https://demoqa.com/books');

    await page
      .locator("//button[@id='login']")
      .waitFor({ state: "attached", timeout: 10000 });
    await page.locator("//button[@id='login']").click();

    await expect(page.url()).toContain('https://demoqa.com/login');
    await page.locator("#userName").type("fakyol");
    await page.locator("#password").type("Osmaniye1!");
    await page.locator("#login").click();
    await page.waitForTimeout(1000);
    await expect(page.locator("#userName-label")).toBeVisible();
    await page.locator("//input[@type='number']").scrollIntoViewIfNeeded();
    await page.locator("//input[@type='number']").clear();
    //await page.locator("//input[@type='number']").type('2');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.locator('#submit').click();
    await expect(page.url()).toContain('https://demoqa.com/login');
    await page.waitForTimeout(3000);
  });

  test("Search book", async ({ page }) => {
     //console.log((await page.title()) + " : Faruk");
   
     await expect(page.url()).toContain('https://demoqa.com/books');

     await page
       .locator("//button[@id='login']")
       .waitFor({ state: "attached", timeout: 10000 });
     await page.locator("//button[@id='login']").click();
 
     await expect(page.url()).toContain('https://demoqa.com/login');
     await page.locator("#userName").type("fakyol");
     await page.locator("#password").type("Osmaniye1!");
     await page.locator("#login").click();
 
     await expect(page.locator("#userName-label")).toBeVisible();
     
     await page.locator("#searchBox").type('Pocket');
     await expect(page.locator("//div[@class='rt-tr -odd']")).toHaveCount(1);
     await page.waitForTimeout(3000);
 
     await page.keyboard.press('Enter');
     await page.waitForTimeout(3000);
     await page.locator('#submit').click();
     await expect(page.url()).toContain('https://demoqa.com/login');
     
  });

  test("Add-Delete books", async ({ page }) => {
     //console.log((await page.title()) + " : Faruk");
   
     await expect(page.url()).toContain('https://demoqa.com/books');

     await page
       .locator("//button[@id='login']")
       .waitFor({ state: "attached", timeout: 10000 });
     await page.locator("//button[@id='login']").click();
 
     await expect(page.url()).toContain('https://demoqa.com/login');
     await page.locator("#userName").type("fakyol");
     await page.locator("#password").type("Osmaniye1!");
     await page.locator("#login").click();
 
     await expect(page.locator("#userName-label")).toBeVisible();
     //await page.locator("#gotoStore").scrollIntoViewIfNeeded();
     //await page.locator("#gotoStore").click();


     await page.locator("(//a[contains(@href, '/books')])[1]").click();

     await page
       .locator("//*[text()='Add To Your Collection']")
       .waitFor({ state: "attached", timeout: 10000 });
     await page.locator("//*[text()='Add To Your Collection']").scrollIntoViewIfNeeded();
    
     await page.locator("//*[text()='Add To Your Collection']").click();
     
     
       
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('Book added to your collection.')
            await dialog.accept()
          })

     await page.locator('#submit').click();
     await expect(page.url()).toContain('https://demoqa.com/login');
     await page.waitForTimeout(3000);
  });

  test("Change row number on profile page", async ({ page }) => {
     //console.log((await page.title()) + " : Faruk");
   
     await expect(page.url()).toContain('https://demoqa.com/books');

     await page
       .locator("//button[@id='login']")
       .waitFor({ state: "attached", timeout: 10000 });
     await page.locator("//button[@id='login']").click();
 
     await expect(page.url()).toContain('https://demoqa.com/login');
     await page.locator("#userName").type("fakyol");
     await page.locator("#password").type("Osmaniye1!");
     await page.locator("#login").click();
 
     await expect(page.locator("#userName-label")).toBeVisible();
     await page.locator("//input[@type='number']").scrollIntoViewIfNeeded();
     await page.locator("//input[@type='number']").clear();
     //await page.locator("//input[@type='number']").type('2');
 
     await page.keyboard.press('Enter');
     await page.waitForTimeout(3000);
     await page.locator('#submit').click();
     await expect(page.url()).toContain('https://demoqa.com/login');
     await page.waitForTimeout(3000);
  });
});