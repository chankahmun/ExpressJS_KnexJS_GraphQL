# ExpressJS_KnexJS_GraphQL

prerequisite - postgresql, node.js, package: express, express-graphql, graphql, knex, pg

npm i - to install the packages

npm run migrate - to create a merchant table in postgresql

npm run devStart - to kick start 

Testing
Browse with this url: http://localhost:5000/gateway

Five Operations
 *  _qrMerchants : Fetch merchants, with pagination and sorting
 *  _qrMerchantById : Fetch merchant by ID
 *  _mtCreateMerchant : Create new merchant
 *  _mtUpdateMerchant : Update a merchant
 *  _mtUpdateIsActiveInBulk : Toggle “Is Active” in bulk
 
 Please note that there is sample data in the testing_data.txt


