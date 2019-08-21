/**
 *  Chatbot AWS Lambda function handler
 */


 const res = function(status, body){
        return {
           statusCode: status,
           body: JSON.stringify(body)
        };
 };




exports.handler = async event => {
  const method = event.httpMethod;

  switch (method) {

/**
*  Token verification
*  @method GET
*  @summary verifies token - if the token is correct send a challenge response that completes the handshake else send a 401 status
*  @param {verificationToken}
*  @return {challenge}
*
*  Response
*  @method POST
*  @summary returns response payload after token verification
*  @method res - 
*  @param {status,body}
*/

    case "GET":
      const token = event.queryStringParameters.token.toString();
      const verification = "googlesheets_api_verify";
      if (verification == token) {
        return res(
          200,
          event.multiValueQueryStringParameters.challenge.toString()
        );
      } else {
        return res(401);
      }


    case "POST":
      const response = JSON.parse(event.body);
      const bodyResponse = {};
      return res(200, bodyResponse);

    default:
  }

};