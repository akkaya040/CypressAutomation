# Cypress Js Automation Framework
Functional & Regression Automation With PO Model

# Test Approach
The tests were created as automation testing, on every test run some checks and validation are done with certain and random inputs to verify that data is displayed, clicked and edited correctly. Also tests are supported negative validation (Negative Tests).


# Project Solution



The E2E folder contains our tests. Before and beforeEach steps work before the test and ensure that the test becomes executable. 

The support directory allows to write specified method in order to use in test as directly. 

Fixtures directory contains out login & base url variables as json. 

The steps directory contains the descriptions of the steps written in the features files. The PageObject directory contains the objects in the pages and the methods that will operate on these objects.

This type of solution was used for better code reusability, maintainability of the automation testing framework.


# Framework / Libraries / Tech Stack 
 
* "cypress": "^10.10.0",
* "cypress-mochawesome-reporter": "^3.2.3",
* "cypress-xpath": "^2.0.1"


This project is developed using Js with cypress as the automation testing framework.



# Scenarios covered on the solution

**The following scenarios are cover by the automation test suite:**

* **Verify users can logIn / logOut**

* **Verify different type of users can/'t logIn.**

* **(Negative) Verify users can't be loged in with wrong password**

* **Verify pages can be visible by users.**

* **Verify adding a product into the basket.**

* **Verify adding more than a product into the basket.**

* **Verify product can be to basket.**

* **Verify product can be deleted from basket.**

* **Verify product which is in basket can be ordered.**



# Running Test Suites


```java
./node_modules/.bin/cypress run
```
or

```java
npx cypress run
```
