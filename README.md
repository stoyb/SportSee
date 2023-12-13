# SportSee user interface 

This repository contains the frontend source code to run the interface of the new profile single-page SportSee.

## 1. General information

To start this project, you are free to use the mocked data version or the API version. In this documentation, we will see how to run both versions.


## 2. To run the application with the mocked data

## 2.1 Prerequisites

- NodeJS (version 16.15.1)
- Npm

If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

## 2.2 Steps :

## `git clone https://github.com/stoyb/sportsee.git`
to clone the repository

## `cd SportSee/`
to go to the directory 

## `npm install`
to install npm package and dependencies

## `npm run start`
To run the application 

## Change the value of isAPI
In the service.js file (located in the 'services' folder), you need to go to the 'fetchData' function and modify the value of the constant isAPI by setting it to 'false'. Follow these steps:
    - Open the service.js file in the 'services' folder.
    - Locate the declaration of the isAPI constant.
    - Change the value of isAPI by replacing the current value with 'false'.


## 3. To run the application with the api 

## 3.1 Prerequisites

NodeJS (version 12.18)
Yarn
If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

## 3.2 Steps : 

Same things as running the application with the mocked data(except the last step "Change the value of isAPI) however, add to this the following steps.
  
## `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`
to clone the backend repository

## `yarn` 
command will allow you to install the dependencies.

## `yarn dev` 
command will allow you to run the micro API.

## For more information go to : 
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard