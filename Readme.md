# REST-API

This is a basic REST-API that can perform CRUD operations

## Follow these instruction to use this api for your project

1. Clone the repo using this command "git clone https://github.com/itzAamir/REST-API" on your terminal or command prompt.

2. Install NodeJs from [official NodeJs website](https://nodejs.org/en/ "NodeJs HomePage")

3. Go inside the REST-API folder and open your terminal,
   then type "npm install" in your terminal to install the dependencies.
4. Type "npm i -D" in your terminal.

5. Create a file, named as ".env" and paste your mongodb URL in that file
   it will look something like this.

   DB_URL = mongodb+srv://[mongodb_username]:[mongodb_password]@cluster0.4glqk.mongodb.net/[DB_Name]?retryWrites=true&w=majority

   You will get Username, password after creating an account on [mongo-db](https://account.mongodb.com/account/login "MongoDB login Page") and DB Name after creating a collection

6. After successfully adding URL in .env file you can start the api by simply typing "npm start" in terminal.

After starting the server. If you get the message "Server Started" and "MongoDB connected" congratulate yourself.

### To test the api you can use Postman or simply paste ("http://localhost:3000/schools") in your browser.
