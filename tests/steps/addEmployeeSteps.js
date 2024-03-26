import { Given, When, Then } from '@cucumber/cucumber';
import * as addEmployeePage from '../pageObjects/addEmployeePage.js'


When('I click on the PIM tab', async function () {
  await addEmployeePage.openPIM();
});

When('I click on the Add button', async function () {
  await addEmployeePage.clickAddButton();
});

When('I fill in the employee details {string} and {string}', async (firstname, lastname) => {
  await addEmployeePage.fillEmployeeDetails(firstname, lastname);
});

When('I submit the details', async function () {
  await addEmployeePage.submitDetails();
});


Then('I should see the employee {string} added successfully', async (firstname) => {
  await expect(addEmployeePage.isEmployeeAdded()).toBe(firstname);
});


When('I enter the employee name {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I click on the search button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see the employee details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});