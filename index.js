const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./src/schema/rootSchema');
const { PORT } = require('./config');
const app = express();

app.use('/Gateway', expressGraphQL({schema: schema,graphiql:true}));
app.listen(PORT, ()=>{console.log('server is started')});