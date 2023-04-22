# Shiny Agency - Freelances (with Redux)

This repository contains the source code for the Shiny Agency app, a platform that connects businesses with freelance professionals for various projects.

## Prerequisites

- [NodeJS ( **Front : version 16.13.2 /Back : version 18.5** )](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [Npm]()
- IDE (VSCode, IntelliJ, ...)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Getting Started

### Backend Api

The Shiny Agency app relies on a backend API to retrieve data. You can find the source code for the backend API at the following URL: https://github.com/OpenClassrooms-Student-Center/7150626-React-Redux-Shiny-API.

To run the Shiny Agency app, you will need to have the backend API running locally as well. Please follow the instructions in the backend API repository's README file to set up and run the API locally.

Once the backend API is up and running, you can start the Shiny Agency app by following the instructions in the "Installing" section.

The backend will be available at http://localhost:8000.

### Frontend App

**Dependencies**

This project also has the following dependencies:

```bash
"@testing-library/jest-dom": "^5.12.0",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^13.1.9",
"immer": "^10.0.1",
"msw": "^0.29.0",
"prop-types": "^15.7.2",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-redux": "^8.0.5",
"react-router": "^5.2.0",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.3",
"redux": "^4.2.1",
"styled-components": "^5.3.0",
"web-vitals": "^1.1.2"
```

Please ensure that you have these dependencies installed and up-to-date before running the app.

**Installing**

- Clone this repository using the following command:

```bash
git@github.com:Yann-GitHub/shiny-agency-redux.git
```

- Install the dependencies by running the command:

```bash
npm install or yarn install
```

**Running the app**

- Runs the app in the development mode by running the command:

```bash
npm start or yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.
