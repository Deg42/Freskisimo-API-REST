# Freskisimo-API-REST
*Node.js API-REST project with CRUD operations*

[Link to app deployed on Render](https://freskisimo-api-rest.onrender.com/)

## Requirements
- The application will be applied entirely in Javascript, both in the backend and in the frontend, being able to also use HTML, CSS and related frameworks that are considered appropriate.
- The application will allow the 4 CRUD operations on the database.
- The database must be MongoDB and have at least 2 schemas.

## Procedure
- Create a server that attends the requests of the clients on port 3000.
- When starting the server, it must connect to a MongoDB database.
- Define the data models.
- Define the controllers.
- Defines the routes offered by the API.
- The data service will be done in JSON format.
- Perform the necessary tests (with postman, curl or similar) to verify the correct performance of the API.
- Configure the necessary environment variables.
- Upload the repository to GitHub
- ~~Deploy the application on Heroku~~

## How to
You will need a .env file with the following Environment Variables:

```
PORT = port number
DB_URI = mongodb+srv://user:password@server/database?retryWrites=true&w=majority
```
> Replace `port number`, `user`, `password`, `server` and `database` with your own values.\
> Default Port if not specified: 3000

## Test
The tests are in [Freskisimo.postman_collection file](https://github.com/Deg42/Fresquisimo-API-REST/blob/main/test/Freskisimo.postman_collection.json)

Simply export the json to the [POSTMAN app](https://www.postman.com/downloads/)

## TODO
- [ ] Footer
- [ ] Add winks :wink:
- [ ] Transalate to spanish :es:
- [ ] Add more documents to collections
- [X] Update links and put "/"

## Acknowledgment
Full Stack Teacher: 
[José Antonio Muñoz Jiménez](https://github.com/jamj2000) 
