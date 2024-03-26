const locators = {
    PIMLink: "//span[normalize-space()='PIM']",
    addButton: "//button[normalize-space()='Add']", // (//button[normalize-space()='Add'])[1]
    firstNameInput: "input[placeholder='First Name']",
    lastNameInput: "input[placeholder='Last Name']",
    saveButton: "button[type='submit']",
    employeeLabel: '//input[@name=\'firstName\']',
};

async function openPIM() {
    await $(locators.PIMLink).waitForDisplayed();
    await $(locators.PIMLink).click();
}

async function clickAddButton() {
    await $(locators.addButton).waitForDisplayed();
    await $(locators.addButton).click();
}

async function fillEmployeeDetails(firstName, LastName) {
    await $(locators.firstNameInput).setValue(firstName);
    await $(locators.lastNameInput).setValue(LastName);
}

async function submitDetails() {
    await $(locators.saveButton).click();
}

async function isEmployeeAdded() {
    await (await $(locators.employeeLabel)).waitForDisplayed();
   return  await $(locators.employeeLabel).getValue();

}

export { openPIM, clickAddButton, fillEmployeeDetails, submitDetails, isEmployeeAdded };