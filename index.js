/**
 *  Chatbot Webhook AWS Lambda Function Template
 * @author bshelling
 * @description Chatbot.com webhook template
 * 
 */

/**
 * Response body function
 * @param {status}
 * @param {body} 
 */

 const res = function(status, body) {
   return {
     statusCode: status,
     body: JSON.stringify(body)
   };
 };

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

exports.handler = async event => {
  const method = event.httpMethod;

  switch (method) {
    case "GET":
      const token = event.queryStringParameters.token.toString();
      const verification = "api_verify_key";
      if (verification == token) {
        return res(200,event.multiValueQueryStringParameters.challenge.toString());
      } else {
        return res(401);
      }
    
    /**
     *  Response object 
     */
    case "POST":
      const response = JSON.parse(event.body);
      const bodyResponse = {};
      return res(200, bodyResponse);
    default:
  }
};