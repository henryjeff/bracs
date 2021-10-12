'use strict';
const aws_exports = require('./aws-export').default;
// CONFIG
const AppSync = {
    "graphqlEndpoint": aws_exports.graphqlEndpoint,
    "region": aws_exports.region,
    "authenticationType": aws_exports.authenticationType,
    "apiKey": aws_exports.apiKey,
};
const ApiId = aws_exports.ApiId;

// POLYFILLS
global.WebSocket = require('ws');

// global.window = global.window || {
//     setTimeout: setTimeout,
//     clearTimeout: clearTimeout,
//     WebSocket: global.WebSocket,
//     ArrayBuffer: global.ArrayBuffer,
//     addEventListener: function () { },
//     navigator: { onLine: true }
// };
// global.localStorage = {
//     store: {},
//     getItem: function (key) {
//         return this.store[key]
//     },
//     setItem: function (key, value) {
//         this.store[key] = value
//     },
//     removeItem: function (key) {
//         delete this.store[key]
//     }
// };
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Require AppSync module
const AUTH_TYPE = require('aws-appsync/lib/link/auth-link').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;

// INIT
// Set up AppSync client
const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey
    }
});

// GRAPHQL
const gql = require('graphql-tag');

const Query = gql(`
query MyQuery {
  getUser(id: "123") {
    name
    id
    email
  }
}
`)

// APP CODE
client.hydrated().then(function (client) {
    // Now run a query
    client.query({ query: Query})
        .then(function log(data) {
            data = JSON.stringify(data);
            data = JSON.parse(data);
            if(data.data.listPosts) {
              console.log('(Query Data) All Posts ----------->', data.data.listPosts.items);
            }  
            else {
                console.log("Error while fetching data");
            }
        })
        .catch(console.error);
});