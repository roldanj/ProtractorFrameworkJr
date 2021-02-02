
let homepage = require('../pages/homepage');

describe('Demo calculator test', function () {

    it('addition test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        browser.sleep(2000)
        homepage.verifyResult('7');
        browser.sleep(2000)
        // To run open the Terminal
        // Based on the project folder location Type: 
        // Example:  PS C:\Users\10063710\OneDrive - Dover Corporation\Desktop\Projects>
        // Type: protractor .\conf\conf.js
    });

    it('subtraction test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('2');
        //homepage.enterSecondNumber('5');
        homepage.clickGo();
        browser.sleep(2000)
        homepage.verifyResult('9');
        browser.sleep(2000)
        // To view Allure ReportsType at the Dos Prompt: allure serve allure-results
    });
    
}); 