# TenantTalk

TenantTalk is a community-driven platform for tenants to rate, review, and share their experiences with landlords and rental properties. Our mission is to empower renters by promoting transparency, accountability, and informed decision-making in the housing market.

[![Deploy to GitHub Pages](https://github.com/abenteuerzeit/tenant-talk/actions/workflows/deploy-to-gh-pages.yml/badge.svg)](https://github.com/abenteuerzeit/tenant-talk/actions/workflows/deploy-to-gh-pages.yml)

## Table of Contents

- [Project Vision and Strategy](#project-vision-and-strategy)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Vision and Strategy

The vision for TenantTalk is to create a platform for users to rate and review their living experiences at specific addresses. The team is committed to a collaborative, flexible, and learning-focused approach to developing this service, with plans to adapt and improve the application over time. The team's work philosophy prioritizes functionality, embraces the *fail fast* principle, and maintains proper documentation for each activity. 

For more details, please refer to the [meeting notes](https://github.com/abenteuerzeit/tenant-talk/discussions/4).

## Features

- User authentication and authorization
- Rate and review landlords and rental properties
- Search for rental properties and landlords
- Filter and sort search results
- Tenant discussion forums
- Private messaging between users
- Multilingual support (initially English, Polish, and Ukrainian)
- Landlord ratings and neighborhood reviews
- Comparison section with data scraped from Google Reviews
- Flat rental feature
- Section for individuals looking for roommates
- Legal advice section
- Housing blog


## Technology Stack

- Frontend: React, Redux, Redux Toolkit
- Backend: Node.js, Express
- Database: MongoDB (initially), with considerations for PostgreSQL, MySQL, or Firebase
- API: RESTful
- UI Design: Figma
- Transcription and Documentation: Otter AI
- Deployment: Microsoft Azure
- Testing: Test-Driven Development (TDD) approach
- Internationalization: React (coded from the beginning to allow for translations)
- Potential Future Technologies: Python (for web scraping and other potential tasks)

## Architecture

TenantTalk follows a three-tier architecture:

1. **Presentation Layer (Front-End)**: This layer translates tasks and results to something the user can understand. It is built with React and Redux. The team has decided to focus on internationalization from the start, allowing for multilingual support. The initial languages will be English and Ukrainian.

2. **Application Layer (Back-End)**: This layer guides communications and controls application functionality by performing detailed processing. It is built with Node.js and Express. The team is committed to a Test-Driven Development (TDD) approach, using a "red-green-refactor" cycle. The team also plans to use a Google scraper to gather data about residential experiences at specific addresses.

3. **Database Layer**: This layer includes the data persistence mechanisms (database servers, file shares, etc.) and the data access layer that encapsulates the persistence mechanisms and exposes the data. The data access layer should provide an API to the application layer that exposes methods of managing the stored data without exposing or creating dependencies on the data storage mechanisms. MongoDB is used for data storage. The team is also considering other database options, such as PostgreSQL, MySQL, or Firebase, each with their own strengths and weaknesses.

The team follows the 12 Factor Application Methodology, a cloud-native development methodology sourced from IBM, to ensure their applications are scalable, maintainable, and transferable across different execution environments. The application is planned to be deployed on Microsoft Azure, using the Pay As You Go pricing model to ensure cost-effectiveness.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed on your system:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher)

### Installation

1. Fork the repository and clone it to your local machine.

    ```bash
    git clone https://github.com/abenteuerzeit/tenant-talk.git
    ```

2. Change into the project directory.

    ```bash
    cd TenantTalk
    ```

3. Install the required dependencies.

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables, such as your database connection string, JWT secret, etc.

    ```bash
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

## Running the Application

1. Start the MongoDB server if it's not already running.

    ```bash
    mongod
    ```

2. Start the development server.

    ```bash
    npmrun dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on how to contribute to TenantTalk. We follow a Test-Driven Development (TDD) approach, so please include tests with your pull requests.

## License

This project is not yet licensed.

## Contact

If you have any questions, issues, or suggestions, please feel free to open an issue or reach out to me. We also have a [discussion forum](https://github.com/abenteuerzeit/tenant-talk/discussions) where you can ask questions, share ideas, or engage with the community.

## Team

| Name | Role | Responsibilities | Github |
| --- | --- | --- | --- |
| [Adrian Mroz](https://www.linkedin.com/in/abenteuerzeit/) | Team Lead & Back-End Developer | Controller, Models | [@abenteuerzeit](https://github.com/abenteuerzeit) |
| [Efosa Ojomo](https://www.linkedin.com/in/efosa-ojomo-4882a015a/) | Front-End Developer | Views | [@Efzo](https://github.com/Efzo) |
| [Piotr Palacz](https://www.linkedin.com/in/piotrpalacz/) | Front-End Developer | Views | [@piotrpalacz](https://github.com/piotrpalacz) |
| [Dmytro Pishchenkov](https://www.linkedin.com/in/dmytro-pishchenkov-543a52232/) | Front-End Developer | Views | [@DemetrPI](https://github.com/DemetrPI) |
| [Eren Yazici](https://www.linkedin.com/in/eren-yazici-555348228/) | Back-End Developer | Business Logic, Models | [@LucidMoments](https://github.com/LucidMoments) |

