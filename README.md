# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

a. on a pull request a set of unit and e2e tests would be run to ensure working code is committed to main.

b. shorter version of the pull request tests that will ensure working code and good quality.

c. long form tests with a large amount of e2e testing.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

maybe? The description of exactly what a message feature is in this context is lacking. If we are just testing the transfer of data from one user to another then a unit test would be good. But if the message feature is more complicated possibly needing to use spell check or add animations and files, then it is really a collection of several different systems layered on top of each other. If this is the case a simple unit test might not be a good fit.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

yes. In this case we are testing one discrete piece of a message feature, so a single unit test would be a good fit.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

We should not see any UI, only a test report.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    await page.click('header > img');
  });