# TenantTalk

TenantTalk is a community-driven platform for tenants to rate, review, and share their experiences with landlords and rental properties. Our mission is to empower renters by promoting transparency, accountability, and informed decision-making in the housing market.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Rate and review landlords and rental properties
- Search for rental properties and landlords
- Filter and sort search results
- Tenant discussion forums
- Private messaging between users

## Technology Stack

- Frontend: React, Redux
- Backend: Node.js, Express
- Database: MongoDB
- API: RESTful

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
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on how to contribute to TenantTalk.

## License

This project is not yet licensed.

## Contact

If you have any questions, issues, or suggestions, please feel free to open an issue or reach out to me.
