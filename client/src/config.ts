// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'd79o9vc29i'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'captchacoder.us.auth0.com',            // Auth0 domain
  clientId: 'eokg2TmZnZUyFtw2RDKcScHYkRxKdxkM',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
/*  
 GET - https://3f19sknpr4.execute-api.us-east-2.amazonaws.com/dev/todos
 POST - https://3f19sknpr4.execute-api.us-east-2.amazonaws.com/dev/todos
 PATCH - https://3f19sknpr4.execute-api.us-east-2.amazonaws.com/dev/todos/{todoId}
 DELETE - https://3f19sknpr4.execute-api.us-east-2.amazonaws.com/dev/todos/{todoId}
 POST - https://3f19sknpr4.execute-api.us-east-2.amazonaws.com/dev/todos/{todoId}/attachment
 */