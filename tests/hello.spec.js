const { test, expect} = require('@playwright/test');

test('open SauceDemo website', async ({ page }) => {
  // await page.goto('https://www.saucedemo.com/');
 
  // await expect(page).toHaveTitle('Swag Labs');


  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
    // await expect(page.getByText('Sauce Labs Bike LightA red')).toBeVisible();

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('fza');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('lone');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('190000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
    // await expect(page.locator('[data-test="finish"]')).toBeVisible();

  await page.locator('[data-test="back-to-products"]').click();
  // await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();

});