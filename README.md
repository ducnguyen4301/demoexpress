# node-express-typescript-starter
Starting template for Node Express API with Typescript 
# Create folder
```
mkdir express-demo && npm init -y
```

Install dependencies using npm
```
npm install
```
```
npm install typescript --save-dev
npm install ts-node-dev --save-dev
npm install express 
npm install @types/express --save-dev
npm install @types/node --save-dev
```
```
npx tsc --init
```

# Modify the scripts in package.json
"scripts": {
    "start": "ts-node-dev ./index.ts"
  },
## How to run

Run the starter Express API using the command
```
npm run start
```

## Notes
**ts-node-dev** is the Typescript replacement for Nodemon. It allows us to run the ts file directly. This is to avoid having to stop the server to run tsc && node ./index.js
# For macOS
**brew start service**
```
brew services start mongodb-community
````
**brew stop service**
```
brew services stop mongodb-community
````
