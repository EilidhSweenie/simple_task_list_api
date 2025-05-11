# simple_task_list_api

## Table of Contents
- [Description](#description)
- [How to Run Locally](#how-to-run-locally)
- [Available Operations](#available-operations)
  - [List All Tasks](#list-all-tasks)
  - [Return a Single Task by ID](#return-a-single-task-by-id)
  - [Add a New Task](#add-a-new-task)
  - [Toggle Task Completion](#toggle-task-completion)
  - [Delete a Task](#delete-a-task)


## Description 
This repository contains a simple local API that can be used to maintain a list of tasks and their completion status.

This is implemented using a GraphQL API server using Node.js, TypeScript, Apollo Server and Prisma (SQLite).  

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
This will open a local Apollo Sandbox where we can query and update the task list data stored in Prisma. Please see the available operations section below. 

5. If you are only interested in the data stored in Prisma you can run the following command to locally view and update the stored data: 
```
npx prisma studio
```


## Available Operations

### List All Tasks 
Run the below query from the Operation section of the sandbox to list all of the available tasks. Returns an empty list if no matching tasks are available.
```
query {
  tasks{
    id
    title
    completed
    createdAt
    updatedAt
  }
}
```
Optionally provide a search argument to search for the task title. Returns null if no matching tasks are available:
```
query {
  tasks(search: "task") {
    id
    title
    completed
    createdAt
    updatedAt
  }
}
```

### Return a single task by ID
Run the below query from the Operation section of the sandbox to list a single task when given a corresponding ID. Replace ADD_ID_HERE with the ID you would like to search for. Returns null if no matching tasks are available.
```
query {
  task(id: "ADD_ID_HERE") {
    id
    title
    completed
    createdAt
    updatedAt
  }
} 
```
### Add a new task
Run the below mutation from the Operation section of the sandbox to add a new task. Replace ADD_TASK_NAME_HERE with the name of your new task.
```
mutation{
  addTask(title: "ADD_TASK_NAME_HERE") {
    id
    title
    completed
    createdAt
    updatedAt
  }
}
``` 

### Toggle on a single task ID
Run the below mutation from the Operation section of the sandbox to update a single task when given a corresponding ID. Replace ADD_ID_HERE with the ID you would like to update. Returns null if no matching tasks are available.
```
mutation {
  toggleTask(id: "ADD_ID_HERE") {
    id
    title
    completed
    createdAt
    updatedAt
  }
}
```
### Delete a task
Run the below mutation from the Operation section of the sandbox to delete a single task when given a corresponding ID. Replace ADD_ID_HERE with the ID you would like to delete. Returns null if no matching tasks are available.
```
mutation {
  deleteTask(id: "ADD_ID_HERE") {
    completed
    createdAt
    id
    title
    updatedAt
  }
}
```



