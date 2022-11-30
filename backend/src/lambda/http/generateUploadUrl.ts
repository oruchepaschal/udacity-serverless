import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { createAttachmentPresignedUrl } from '../../businessLogic/todos'

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    //Todo
    
	const uploadUrl = await createAttachmentPresignedUrl(todoId)

    return {
		statusCode: 202,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify({
			uploadUrl
		})
	}
}