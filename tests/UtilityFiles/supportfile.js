//supportfile.js

const { expect } = require('@playwright/test');

 const uielements = {
    emailElement: "[data-testid='registration-email']",
    passwordElement: "[data-testid='registration-password']",
    submitButtonElement: "[data-testid='submit-button']",
    checkBoxSelector: "#05e845a2-9e89-4814-bf94-8d96f5f3bf25",
    createAccountButton:"[data-testid='email-sign-up']",
    emailErrorText: "[data-testid='form-input-wrapper-error-text']",
    passwordErrorText: "[data-testid='password-error']",
    failedLoginMessage: "[data-testid='failed-login']",
    accountExists:"[data-testid='registration-email-subtext-container']"
};

async function signUpForm(page, email, password) {
    if (email) {
        await page.fill(uielements.emailElement, email);
    }
    if (password) {
        await page.fill(uielements.passwordElement, password);
    }
    await page.click(uielements.submitButtonElement);
}

async function errorMessage(page, selector, expectedText) {
    const errorElement = page.locator(selector);
    await expect(errorElement).toBeVisible();
    await expect(errorElement).toHaveText(expectedText);
}

async function navigateToSignUp(page) {
    await page.goto('https://app-moccona.letsweel.com/app/business-signup');

}

async function navigateToPersonalInfo(page) {
    await page.goto('https://app-moccona.letsweel.com/app/personal-info')
    
}

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `test+${randomString}@example.com`;
}

function generateRandomPersonalEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `test+${randomString}@gmail.com`;
}



async function isButtonDisabled(page, buttonSelector) {
    const button = page.locator(buttonSelector);
    return await button.isDisabled();
}


module.exports = {
    uielements,
    errorMessage,
    navigateToSignUp,
    signUpForm,
    isButtonDisabled,
    navigateToPersonalInfo,
    generateRandomEmail,
    generateRandomPersonalEmail
};
