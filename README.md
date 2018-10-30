# Referred.

[![Build Status](https://travis-ci.org/jennifer/referred-client.svg?branch=master)](https://travis-ci.org/jennifer/referred-client)

A fullstack JavaScript+React application that helps job-seekers track their professional network. Users add target companies, identify contact people, and track networking milestones, including:
* Initiating one-on-one contact
* Tracking responses
* Following up

And ultimately, getting referred!

## Demo

- [Live Demo](https://referred-app.herokuapp.com/)

## Motivation

As a job-seeker, I wanted to build an app that fellow job-seekers and I could use to track my own professional networking. As an introvert, I wanted a project that would help me learn about networking, break it down into simple milestones, and get excited to meet new people.

## Requirements
* Do something interesting or useful
* Be a fullstack app using HTML, CSS, React, Node, Express, and Mongoose
* Client and API should be deployed separately and stored in separate GitHub repos. 
* Client- and server-side code should be tested use TravisCI for continuous integration and deployment.
* App should be responsive, and should work just as well on mobile devices as it does on desktop devices.
* Code should be high quality, error free, commented as necessary, and clean.
* Styling on the client should be polished.
* Use vanilla CSS for styling capstones. Frameworks like Bootstrap are not permitted. 
* Have a comprehensive README file.
* Have a landing page that explains what the app does and how to get started, and the pages required to deliver functionality.
* Deploy a live, publicly-accessible version of the app.
* A demo user account and indicate on the landing page how to use it.

## Built With
Client and API were deployed separately and stored in separate GitHub repos.* 
- [Referred API Repo](https://github.com/jennifer/referred-server)

### Front End
* JavaScript [ES6 & JSX]
* React
* HTML
* CSS [Flexbox & Grid]
* Enzyme

### Back End
* Node.js
* Express
* Mongo
* Mongoose
* JWT Authentication
* bcryptjs
* Passport
* Mocha
* Chai

### DevOps
* Heroku
* TravisCI
* mLab

## Screenshots

Title Page:

![Title Page](https://i.imgur.com/E31UtNp.jpg)

Dashboard:

![Dashboard](https://i.imgur.com/JY1LZPT.jpg)

Company Detail:

![Company Detail](https://i.imgur.com/1ERq0ZQ.jpg)

Person Detail:

![Person Detail](https://i.imgur.com/YEEBQEY.jpg)

Person Form:

![Person Form](https://i.imgur.com/OuwpfdQ.jpg)

Person Edit:

![Edit Person](https://i.imgur.com/eAFAIQm.jpg)


## Using the API

### Authentication / Login
##### POST: /api/auth/login

* Bearer Authentication with JSON Web Token
* Must provide valid Username and Password in request header
* If authentication succeeds, a valid 7d expiry JWT will be provided in response body

### Register and Login New User
##### POST: /api/users 

* Must provide Username and Password in request body
* If successful, a valid 7d expiry JWT will be provided in response body

### Get Companies
##### GET: /api/referred/companies/{username}

* Retrieves companies from the Referred database, Companies collection
* Must provide valid JWT via Bearer Authentication
* If authentication succeeds, all companies added by the logged in user will be returned

### Get People
##### GET: /api/referred/companies/person/{username}

* Retrieves people from the Referred database, People collection
* Must provide valid JWT via Bearer Authentication
* If authentication succeeds, all people added by the logged in user will be returned

### Add Company
##### POST: /api/referred/company

* This endpoint adds a company to the Referred database/Companies collection
* Must provide company object in request body
* Must provide valid JWT via Bearer Authentication

### Update Company
##### PUT: /api/referred/companies/{company ID}

* This endpoint updates a single company in the Referred database/Companies collection
* Must provide company ID as route parameter
* Must provide company object in request body
* Must provide valid JWT via Bearer Authentication

### Delete Company
##### DELETE: /api/referred/companies/{company ID}

* This endpoint deletes a company from the Referred database/Companies collection
* Must provide company ID as route parameter
* Must provide valid JWT via Bearer Authentication

### Add Person
##### POST: /api/referred/companies

* This endpoint adds a person to the Referred database/People collection
* Must provide person object in request body
* Must provide valid JWT via Bearer Authentication

### Update Person
##### PUT: /api/referred/companies/person/{person ID}

* This endpoint updates a person in the Referred database/People collection
* Must provide person ID as route parameter
* Must provide person object in request body
* Must provide valid JWT via Bearer Authentication

### Delete Person
##### DELETE: /api/referred/companies/person/{person ID}

* This endpoint deletes a person from the Referred database/People collection
* Must provide person ID as route parameter
* Must provide valid JWT via Bearer Authentication