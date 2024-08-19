//SignUp.spec.js

const { test, expect } = require('@playwright/test');
const { uielements, signUpForm, navigateToSignUp, navigateToPersonalInfo, errorMessage , generateRandomEmail, generateRandomPersonalEmail, isButtonDisabled } = require('./UtilityFiles/supportfile.js');

// Test 1- If the email field is unpopulated error message should display
test('If the email field is unpopulated error message should display', async ({ page }) => {
    await navigateToSignUp(page);
    await expect(page.locator(uielements.emailElement)).toBeVisible();
    await page.fill(uielements.emailElement, '');
    await page.click(uielements.submitButtonElement);
    const errorText = await page.locator("[data-testid='form-input-wrapper-error-text']").textContent();
    expect(errorText).toContain('Please enter an email address');
    await page.screenshot({ path: 'screenshots/unpopulatedinputbox.png' });

});


//Test 2 - Upon entering the gmIL (non work email), the relevant error message should display
test('Upon entering the gmIL (non work email), the relevant error message should display', async ({ page }) => {
    await navigateToSignUp(page);
    await expect(page.locator(uielements.emailElement)).toBeVisible();{timeout:5000}
    const uniquePersonalEmail = generateRandomPersonalEmail();
    await page.fill(uielements.emailElement, uniquePersonalEmail);
    await page.click(uielements.submitButtonElement);
    await page.waitForSelector(uielements.passwordElement, { state: 'visible', timeout: 5000 });
    await page.fill(uielements.passwordElement, '123@123Aa')
    await page.locator('label').nth(2).click();
    await expect(page.locator(uielements.createAccountButton)).toBeEnabled();
    await page.click(uielements.createAccountButton)
    const errorText = await page.locator("[data-testid='form-input-wrapper-error-text']").textContent();
    expect(errorText).toContain('Please try again with your work email address');
    await page.screenshot({ path: 'screenshots/invalidemail.png' });

})


//Test 3 -Upon entering the work email the user is navigated to the personal infor page. 
test('Upon entering the work email the user is navigated to the personal infor page', async ({ page }) => {
    await navigateToSignUp(page);
    await expect(page.locator(uielements.emailElement)).toBeVisible(); {timeout:5000}
    const uniqueEmail = generateRandomEmail();
    await page.fill(uielements.emailElement, uniqueEmail);
    await page.click(uielements.submitButtonElement);
    await page.waitForSelector(uielements.passwordElement, { state: 'visible', timeout: 5000 });
    await page.fill(uielements.passwordElement, '123@123Aa')
    await page.locator('label').nth(2).click();
    await expect(page.locator(uielements.createAccountButton)).toBeEnabled();
    await page.click(uielements.createAccountButton)
    await navigateToPersonalInfo(page);
    await page.screenshot({ path: 'screenshots/registered.png' });
    

});

//Test 4 - Error message displays, and login button is displayed for the sign up attempt by the existing user

test('Error message displays, and login button is displayed for the sign up attempt by the existing user', async ({ page }) => {
    await navigateToSignUp(page);
    await expect(page.locator(uielements.emailElement)).toBeVisible();{timeout:5000}
    await page.fill(uielements.emailElement, 'test@example.com');
    await page.click(uielements.submitButtonElement);
    await page.waitForSelector(uielements.passwordElement, { state: 'visible', timeout: 5000 });
    await page.fill(uielements.passwordElement, '123@123Aa')
    await page.locator('label').nth(2).click();
    await expect(page.locator(uielements.createAccountButton)).toBeEnabled();
    await page.click(uielements.createAccountButton)
    const existingUserErrorText = await page.locator("[data-testid='registration-email-subtext-container'] .sc-gAjuZT").textContent();
    expect(existingUserErrorText).toContain('This account already exists.');
    await page.screenshot({ path: 'screenshots/existinguser.png' });

})


