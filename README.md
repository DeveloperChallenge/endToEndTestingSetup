## End to end testing setup for angular or javascript project

### Why testing is needed?

As the web application increasing day by day. 
But some of the does't work properly after launched. 
After getting error we have to either rebuild it or find error and solve it. 
It takes lots of time and money.
So, there is the method which helps us to test our application 
automatically aster setup in our project once.


Yes, ittakes time ti learn for testing and setup our project and it would be new 
so new developers. But, somewere it helps us to make our application more reliable
and saves lots of time and mony in future.

There are many ways to testing process like, beta testing 
black box testing, which you can learn from google or any other officeal sites.
you can visite this like for instance 

http://istqbexamcertification.com/why-is-testing-necessary/


### Steps to setup end To End testing.

1. open the command line in your project
2. create the pakage.json using `npm init` and follow the steps
3. run the command `npm install protractor -g`
4. `webdriver-manager update`
5. `webdriver-manager start`


#### explanation
- After install protractor, it will install protractor and webdriver manager
- The webdriver-manager is a helper tool. it get an instance of a Selenium Server running.
- You have to update webdriver manage once it is first time
- Once you start webdriver manage, It will start Selenium Server and output buncha og logs on cmd.
- Protractor - test will send the send the resquest to the Selenium server  an dgets control the local browser
- You can easily see each and every status in  http://localhost:4444/wd/hub.

6. Now create and folder in your project directory (`endTEnd`)
7. Inside the `endToEnd` folder, create `conf.js`  and `app.test.js` files



#### Configuration

8. Paste the folowing scripts in the `conf.js` file.

```
exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    Capabilities: {
        'BoowserName': 'chrome'
    },
    specs: ['app.test.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
```

#### Test Scripts

9. and  in the `app.tests.js` file

```
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
```


The `describe` and `it` syntax is from the Jasmine framework.
Please visite the link https://jasmine.github.io/2.0/introduction.html


#### Run the test 

change directory (cd) to `endToEnd` folder. it is because the `conf.js` file is located there inside.

runn the following command 

`protractor conf.js`


#### Using npm 

Open the `package.json`
in the `scripts` variable 
paste the folowing script 

```
"test": "protractor ./endToEnd/cong.js"
```

Now your scripts willl like of the follwing 

```
"scripts":{
    "test": "protractor ./endToEnd/cong.js"
}
```

Now, you can easily run the test using npm. 
`npm test` 

...Good Luck... 





