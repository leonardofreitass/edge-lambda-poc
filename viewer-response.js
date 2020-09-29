const handler = async (event) => {
  const { request, response } = event.Records[0].cf;

  response.headers["x-custom-file-name"] = [
    {
      key: "X-Custom-File-Name",
      value: request.uri,
    },
  ];

  return response;
};

exports.handler = handler;
