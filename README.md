# Transactions

This project aims to automate the registration and facilitate the sum of transactions.

### Programming Language and Frameworks:
 
- Backend: NodeJS (using AdonisJS framework).
- Frontend: ReactJS (using Vite and StyledComponents);
- Database: MySQL

## How to start api:

- To use this project you need the Node (version 18+) and use package manager Yarn;
- First you access the api field, in your terminal, run the comand: "yarn";
- After install dependencies, you need configure your env and database. Inside the api field, find the archive ".env.example" and clone this using the ".env" name. Configure this archive using your database informations basing on the example archive;
- Now we need to populate the database with the default user. To do so, run the command "node ace migration:run" to upload the migrations to the database. Then, to generate the user data, you can run the command "node ace db:seed";
- To start your api, you need use the command: "node ace serve --watch.

## How to start fronted:

- After config your api, you need start your frontend;
- Run again the "yarn" command to install dependencies (Node Version 18+);
- After, configure your ".env" like ".env.example";
- Finally, run the command: "yarn dev" to start your web.




This is a challenge by Coodesh
