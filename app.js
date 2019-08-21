/**
 *  Google Spreadsheet Data Input
 *  @description This script allows data to be input into a Google Spreadsheet
 *  @author Brandon Shelling
 */

 /**
  *  DotEnv dependency
  */
require('dotenv').config()

/**
 *  Serverless Function to pass data to a Google spreadsheet
 * @param ssId - Spreadsheet Id
 * @param range - Spread Sheet range
 * @param data - Input Data
 */

const gs = require('./googleSS');
const ssId = process.env.ssId;
const range = 'Sheet1!A:A';
const data = ["userid_one","Brandon"];

gs.PostToSpreadSheet(ssId,range,data).catch(err=>{
    console.log(err);
});
