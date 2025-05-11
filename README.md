# simple_task_list_api

## Description 
This repository contains a simple local API that can be used to maintain a list of tasks and their completion status.

This is implemented using a GraphQL API server using NodeJS, TypeScript, Apollo Server and Prisma (SQLite).  

## How To Run Locally
1. Clone this repository to your local machine. Ensure that you have Node.js and npm installed [Installation Instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 
2. Open the terminal and navigate to the root folder named server: 
```
cd server
```
3. Install the necessary packages using the following command:
```
npm install 
```
4. To run the API locally run the following command: 
```
npm start
```
This will open a local Apollo Sandbox where we can query the task list data stored in Prisma. Please see the available operations section below. 

5. If you are only interested in the data stored in Prisma you can run the following command to locally view and update the stored data: 
```
npx prisma studio
```


## Available Operations

### List All Tasks 
Run the below query from the Operation section of the sandbox to list all of the available tasks. 
```
query GetTasks {
  tasks{
    id
    title
    completed
    createdAt
    updatedAt
  }
}
```


