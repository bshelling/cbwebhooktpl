const {google} = require('googleapis');
const key = require('./keys.json');



const PostToSpreadSheet = async function(ssId,range,data){

    const token = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );


    const url = `https://sheets.googleapis.com/v4/spreadsheets/${ssId}/values/${range}:append?valueInputOption=USER_ENTERED`;
    const res = await token.request({
        url: url,
        method: 'POST',
        body:JSON.stringify({
            "range": range,
            "majorDimension": "ROWS",
            "values": [
                data
            ]
        })
    });


}

module.exports = { PostToSpreadSheet };
