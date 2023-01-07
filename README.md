# Myshop (Bakcend)

<!-- Table of Contents -->

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#rest-api">REST API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Projects</a></li>
  </ol>
</details>

<!-- About The Project -->

## About The Project

This is the backend repository for Myshop app

### Built With

This app was built with some technologies below:

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [ESLint](https://eslint.org/)
- [Cloudinary](https://cloudinary.com/)
- [Stripe](https://stripe.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Getting Started -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [Express.js](https://expressjs.com/en/starter/installing.html)
- [PostgreSQL](https://www.postgresql.org/download)
- [ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
- [Cloudinary](https://cloudinary.com/documentation/node_integration)
- [Stripe](https://stripe.com/docs/payments)

### Installation

- Clone the repository

```
git clone https://github.com/brndnwjy/myshop-api
```

- Go to repository folder

```
cd myshop-api
```

- Install Module

```
npm install / npm i
```

- Prepare Stripe payment
- Make a new database
- <a href="#setup-env-example">Setup .env</a>
- Type ` npm run dev` To Start Development
- Type ` npm run start` To Start Production
- Type ` npm run lint` To Run Lint

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```env
# app
REACT_APP_URL = yourFrontendURL

# database
DB_USERNAME = yourDBUsername
DB_HOST = yourDBHost
DB_DATABASE = yourDBDatabase
DB_PASSWORD = yourDBPassword
DB_PORT = yourDBPort
PORT = yourLocalPort

# cloudinary
CLOUD_NAME = yourCloudName
API_KEY = yourApiKey
API_SECRET = yourApiSecretKey

# stripe
STRIPE_PRIVATE_KEY = yourStripePrivateKey
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- REST API -->

## REST API

You can view my Postman collection [here](./Myshop.postman_collection.json)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contributing -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Related Projects -->

## Related Project

:rocket: [`Myshop (Frontend)`](https://github.com/brndnwjy/myshop-app)

<p align="right">(<a href="#top">back to top</a>)</p>
