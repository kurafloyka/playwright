npm init playwright@latest playwrightPractises
npx playwright test
npx playwright show-report

debugging
- debug console DEBUG=pw:api npx command ----
- trace viewer
- inspector PWDEBUG =1


npm i -D @playwright/test allure-playwright
npm i -D allure-commandline
allure test tests

 npx playwright test tests
npx allure generate allure-results --clean && npx allure open



    "@playwright/test": "^1.37.1",
    "@typescript-eslint/eslint-plugin": "^5.31.0",
    "@typescript-eslint/parser": "^5.31.0",
    "allure-commandline": "^2.23.1",
    "allure-playwright": "^2.5.0",
    "eslint": "^8.20.0",
    "eslint-plugin-playwright": "^0.10.0"