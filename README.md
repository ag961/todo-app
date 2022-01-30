# Lab 34 - API Integration

Version 2.0.0

## To Do List Manager

A Web Application for securely managing a To Do List

## Phase 3: Integrating with a live API

In this final phase, we’ll be requiring that users be logged in through a live authentication server, in order to see the to do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them. All To Do items will be stored in a database, accessed through a deployed API.

## Author

Ayrat Gimranov

## Live Site

https://ayrat-todo-app.netlify.app/

## Current registered users

1. Guest. Able to see list of items and change display settings (Capabilities - read).
   - username: `guest`
   - passord: `GUEST`
2. Writer. Same functionality as guest + ability to add items to the list (Capabilities - read, create)
   - username: `writer`
   - password: `WRITER`
3. Editor. Same functionality as writer + ability to update completion status (Capabilites - read, create, update)
   - username: `editor`
   - password: `EDITOR`
4. Admin. Same functionality as writer + ability to delete items from the list (Capabilities - read, create, update, delete)
   - username: `admin`
   - password: `ADMIN`

## Features

In addition to features from Phase 1 and Phase 2:

- As a user, I want to provide a way for other users to create new accounts
- As a user, I want to provide a way for all users to login to their account
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items