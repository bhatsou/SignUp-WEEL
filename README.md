##########**Automation Project- SignUpPage-Weel**###################

This project contains automated tests for the SignUp page of the Weel application.    
The tests are written using Playwright and cover various scenarios such as validation for email input, account creation, and error handling.

#########**Project Structure**##########

SignUp.spec.js: Contains the Playwright tests for different scenarios on the SignUp page.
supportfile.js: Contains reusable functions and CSS selectors used in the tests


##########**Prerequisites**###############

Visual STudio Code IDE
Node.js 
Playwright- Can install using the NPM


#############**How to run the tests**##########

you can run the tests using npx playwright test SignUp.spec.js --project chromium --headed. please note this is for runnning the code in headed more on chromium only. 
alternatively you can run npx playwright test SignUp.spec.js , which runs on 3 browsers parellaly. 


########**Test Scenarios**#######

1. Email Field Unpopulated
Test Description: Validates that an error message is displayed when the email field is left empty.
Test File: SignUp.spec.js
Test Screenshot: screenshots/unpopulatedinputbox.png
2. Non-Work Email Validation
Test Description: Validates that an appropriate error message is displayed when a non-work email (e.g., Gmail) is used.
Test File: SignUp.spec.js
Test Screenshot: screenshots/invalidemail.png
3. Successful Navigation to Personal Info Page
Test Description: Validates that the user is navigated to the personal info page upon entering a valid work email. I have modified the function to generate "@example.com" domain. 
Test File: SignUp.spec.js
Test Screenshot: screenshots/registered.png
4. Existing User Signup Attempt
Test Description: Validates that an error message and a login button are displayed when an existing user tries to sign up.
Test File: SignUp.spec.js
Test Screenshot: screenshots/existinguser.png



#############**supportfile.js**###################

This file under utility folder has the reusable function. 
1.navigateToSignUp(page)
Navigates to the SignUp page.

2.navigateToPersonalInfo(page)
Navigates to the Personal Info page.

3.signUpForm(page, email, password)
Fills out the email and password fields and submits the form.

4.errorMessage(page, selector, expectedText)
Validates that an error message with the expected text is displayed.

5.generateRandomEmail()
Generates a random email with the @example.com domain.

6.generateRandomPersonalEmail()
Generates a random personal email with the @gmail.com domain.
