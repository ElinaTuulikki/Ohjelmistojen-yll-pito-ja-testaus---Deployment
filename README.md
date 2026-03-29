# Software Maintenance and Testing - Deployment Project

Final deployment task for the Software Maintenance and Testing course. This project demonstrates automated testing and deployment practices using GitHub Actions.

## Table of Contents
- [Software Maintenance and Testing - Deployment Project](#software-maintenance-and-testing---deployment-project)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [CI/CD Pipeline](#cicd-pipeline)
  - [Course Context](#course-context)
  - [License](#license)

## Overview

This repository contains the final project for the course "Ohjelmistojen ylläpito ja testaus" (Software Maintenance and Testing). The main focus is on implementing a robust deployment pipeline with automated testing.

The project demonstrates:
- Continuous Integration (CI) setup with GitHub Actions
- Automated testing with Jest
- JavaScript application development
- Deployment automation best practices

## Project Structure

├── .github/
│ └── workflows/
│ └── main.yml # GitHub Actions CI/CD pipeline
├── src/ # Source code files
├── tests/ # Test files
├── .gitignore # Git ignore rules
├── babel.config.js # Babel configuration
├── jest.config.js # Jest testing configuration
├── package.json # Dependencies and scripts
└── package-lock.json # Locked dependencies


##  Technologies Used

- **JavaScript** - Primary programming language
- **Jest** - Testing framework
- **Babel** - JavaScript compiler for compatibility
- **GitHub Actions** - CI/CD automation
- **npm** - Package management

##  Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ElinaTuulikki/Ohjelmistojen-yll-pito-ja-testaus---Deployment.git
    cd Ohjelmistojen-yll-pito-ja-testaus---Deployment
2. Install dependencies
    npm install
3. Running the Application
    npm start
4. Testing
    npm test

Tests are configured with Jest and automatically run in the CI/CD pipeline on every push.

### CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline:

    Triggers on push events to the repository

    Sets up Node.js environment

    Installs all dependencies

    Runs the Jest test suite

    Reports test results

The pipeline status badge at the top of this README shows the current build status.

## Course Context

This project was created as the final assignment for the course "Ohjelmistojen ylläpito ja testaus" (Software Maintenance and Testing). The primary learning objectives included:

    Understanding deployment strategies

    Implementing automated testing pipelines

    Working with CI/CD tools

    Managing software maintenance workflows

## License

This project is created for educational purposes as part of the course requirements.
Created for the Software Maintenance and Testing course - Final Deployment Task