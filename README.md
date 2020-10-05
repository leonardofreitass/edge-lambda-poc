# edge-lambda-poc

This is the repository containing the code used in the talk Running distriuted code with Lambda@Edge. You will find it here one Lambda event example and the four edge lambdas used.

## Viewer-Request lambda

It checks for the presence of a token query parameters in the request, and if this token is allowed. If the token is not there or not allowed, the lambda shortcuts the request returning a 403 response to the viewer.

## Origin-Request lambda

It validate if the image should be served or not. If it should not, the lambda shortcuts the request by returning a 404.

## Origin-Response lambda

It parses any response from the Origin (S3) that is not a 2xx or 3xx into a 404.

## Viewer-Response lambda

It attaches a header with the name of the file requested
