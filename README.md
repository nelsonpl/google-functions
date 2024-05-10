# Google Functions

## Description

This project was developed using Google Firebase Functions for backend, Firebase for hosting and database, and Jest for unit testing.

[![Firebase](https://img.shields.io/badge/firebase-9C27B0?style=flat&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Jest](https://img.shields.io/badge/jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/eslint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)

## Chosen Architecture

The chosen architecture for this project follows a modular approach, where each main functionality is encapsulated in separate modules. Here's a more detailed explanation:

1. **functions**: This folder contains the main code for Firebase functions. Here are the project configurations, including the `index.js` file, which serves as the entry point for the functions.

2. **modules**: Inside this folder are the project-specific modules. In this case, there is a module called `record`, which is related to record management.

3. **test**: Here are the unit tests for the project. The tests are organized according to the corresponding modules in the main structure.

4. **utils**: This folder contains generic utilities that can be shared throughout the project. The `index.js` file is the main utility for this project.

The choice of this architecture brings significant benefits:

- **Modularity**: Each part of the project is encapsulated in separate modules, making maintenance and understanding of the code easier.

- **Testability**: The structure facilitates the writing of unit tests, as the tests are directly associated with the corresponding modules.

- **Organization**: The clear and organized structure makes it easier for developers to understand and navigate through the code.

This architecture was chosen to promote clarity, reusability, and ease of project maintenance.

## Running the Project Locally

To run the project locally, follow these steps:

1. Make sure you have Node.js (version 18) and Firebase CLI installed on your machine.
2. Clone this repository.
3. Navigate to the `functions` folder.
4. Install project dependencies by running `yarn install`.
5. Run `firebase emulators:start` to start the Firebase emulators locally.
6. Now, follow the instructions provided in the terminal to access the project locally.

## Project Deployment

To deploy the project, follow these steps:

1. Make sure you are authenticated with Firebase CLI by running `firebase login`.
2. Run `firebase deploy` in the `functions` folder.
3. The project will be deployed and accessible at the URL provided by Firebase.

## Running Unit Tests

To run unit tests, follow these steps:

1. Make sure you are in the `functions` folder.
2. Run `yarn test` to start executing tests with Jest.
3. Test results will be displayed in the terminal.
