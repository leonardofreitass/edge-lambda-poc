const handler = async (event) => {
  const { response } = event.Records[0].cf;

  if (response.status >= 400) {
    response.status = "404";
    response.body = JSON.stringify(
      {
        error: "Not Found",
      },
      null,
      2
    );
  }

  return response;
};

exports.handler = handler;
