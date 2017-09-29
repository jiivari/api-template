# api-template
Simple project for creating nodejs API's

Requires node runtime and node package manager (https://nodejs.org/en/)
Requires GIT tools (https://git-scm.com/downloads)

**Installation steps:**
1. Install node, npm and git
2. Clone the repository to local system.
3. run "npm install" command on api-template folder to install depencies


**There is 3 different endpoints to test some external API.**

**/api/simpleget**
simple GET method to invoke **ibm visual-recognition** api. Requires api_key from IBM Bluemix.

Use
1. check index.js for /api/simpleget
2. replace [APIKEY] with your api_key variable.
3. save file
4. start the service with command "npm start"
5. open browser and type in address "http://localhost:3000/api/simpleget" or use POSTMAN with method GET to same uri.

**/api/oauthget**
GET method to invoke twitter api with OAuth authentication. Requires Oauth Authentication key from Twitter. (https://developer.twitter.com)

Use
1. check index.js for /api/oauthget
2. replace [CONSUMERKEY], [CONSUMERSECRET], [TOKEN] and [TOKENSECRET] with your keys.
3. save file
4. start the service with command "npm start"
5. open browser and type in address "http://localhost:3000/api/oauthget" or use POSTMAN with method GET to same uri.
