///////////////////////////////////////////////////////
//
// Application: Sample Web App
// Version: 1.0.0
// The Sample Web App demonstrates the use of EnableX Server API & Web Toolkit.
// The main motivation behind this application is to demonstrate usage of APIs and
// allow developers to ramp up on app by hosting on their own devices instead of
// directly using servers.
//
// Released: Nov 26, 2018
//
// File: config.js
// Service Configuration File, need to be modified as needed.
//
/////////////////////////////////////////////////////

var vcxconfig = {};

vcxconfig.pwdFilePath = "./server/files/users.htpasswd";

vcxconfig.SERViCE = {
  name: "EnableX Sample Web App", // Name of the App
  version: "1.0.0", // Version
  path: "/v1", // EnableX Server API Version Route to access
  domain: "yourdomain.com", // Domain / Sub-Domain to host this Service
  port: "4443", // Port No. of this Service
  listen_ssl: true, // Enable SSL. Set always to "true"
};

// SSL Certificate (Self Signed or Registered)

vcxconfig.Certificate = {
  ssl_key: "./cert/localhost.key", // Path to .key file
  ssl_cert: "./cert/localhost.crt", // Path to .crt file
  //sslCaCerts : ["../cert/yourdomain.ca-bundle"]    // Path to CA[chain]
};

// Enbalex Server API Infomration

vcxconfig.SERVER_API_SERVER = {
  host: "api.enablex.io", // "api-dev.vcloudx.com" FQDN of Service
  port: "443", // PORT of Service (If specified by EnableX)
};

vcxconfig.APP_ID = ""; // APP ID to access Server API
vcxconfig.APP_KEY = ""; //"2e9etaYamyPaXaXyJyHaeyLe4yeyLeHaeena"; // APP KEY to access Server API
vcxconfig.clientPath = "./client"; // Client End Point UI Route

var module = module || {};
module.exports = vcxconfig;
