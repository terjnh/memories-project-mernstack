1) Create 2 folders:
    - client
    - server

2) initialize empty react app in client folder
    - $ cd client
    - $ npx create-react-app ./

Download latest node js for our OS
 - $ sudo apt install nodejs

3) Create index.js in server directory
    - $ cd server
    - $ npm init -y
    This will initialize package.json

    - install dependencies for server
        - $ npm install body-parser cors express mongoose nodemon

4) Add   "type": "module", in package.json

5) Change script in package.json to:
"scripts": {
    "start": "nodemon index.js"
  },

6) Install dependencies in client directory
    - $ cd client
    - $ npm install axios moment react-file-base64 redux redux-thunk

7) In client directory, delete default 'src' folder and re-create empty src folder