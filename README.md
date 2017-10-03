# api-template
Simple project for creating nodejs API's

Requires node runtime and node package manager (https://nodejs.org/en/)
Requires GIT tools (https://git-scm.com/downloads)

**Installation steps:**
1. Install node, npm and git
2. Clone the repository to local system.
3. run "npm install" command on api-template folder to install depencies


**There is 4 different endpoints to test some external API.**

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

**/api/simplepost**
POST method to invoke ibm personality insights api. Personality insights use basic authentication.

Method requires json payload as input.

{"contentItems":[{
  "content":"testString",
  "contenttype":"text/plain",
  "language":"en",
  "created":1505653346000}
]}

**Note: Minumun number of words required for analysis is 100.**

Use
1. check index.js for /api/simplepost
2. replace [USERNAME], [PASSWORD] with your credentials.
3. save file
4. start the service with command "npm start"
5. Use POSTMAN with method POST to same http://localhost:3000/api/simplepost
  

**/api/analysetweets**
GET method to search tweets and POST data to Watson Personality Insights. Returns JSON.
API uses 2 different API's and "promises" (an alternative for callback). https://www.promisejs.org/

Use
1. check index.js for /api/analysetweets
2. replace [CONSUMERKEY], [CONSUMERSECRET], [TOKEN] and [TOKENSECRET] with your keys.
3. replace [USERNAME], [PASSWORD] with your credentials.
4. replace "realDonaldTrump" with some other twitter handle.
5. save file
6. start the service with command "npm start"
7. Use POSTMAN with method GET to same http://localhost:3000/api/analysetweets


