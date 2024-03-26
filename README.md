# BOILERPLATE PLAYWRIGHT

## Installing/ Getting Started

To set this Playwright boilerplate project, you can follow these steps

### Install Node.js, npm and yarn:
 Make sure you have Node.js and npm installed on your machine. You can download and install them from the official Node.js website: Node.js.

### Initialize a new Node.js project: 
Open your terminal or command prompt and navigate to the directory where you want to create your project. Then, run the following command to install the required dependencies.

```shell
yarn install
```

## Style guide
    yet to configure eslint/prettier

## Tech Stack
    playwright - Test Framework
    
## Directory Layout

```bash
.
├── /                                         # root directory with project-wide configs and folders
├── /playwright.config.ts                        # Configurations related to framework & browser 
├── /tests                                       # Tests folder
├── /tests/pageObjects/                          # Page objects folder
├── /package.json                                # Framework dependencies
```

## Run your tests:

In order to run the end-to-end playwright tests locally follow these steps:

```bash 
Chrome browser                          yarn run test
```

### Visual Tests

Using wdio visual service, we can compare the webpages, elements against baseline images

To run visual tests
```shell
yarn run test:visual
```
