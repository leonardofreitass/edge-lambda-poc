const VALIDATION = {
  "/halo-reach.jpeg": false,
  "/the-last-of-us-2.jpeg": true,
};

const DEFAULT = true;

const validateFile = async (uri) => {
  const response = VALIDATION[uri];
  return response === undefined ? DEFAULT : response;
};

const handler = async (event) => {
  const { request } = event.Records[0].cf;

  const available = await validateFile(request.uri);

  if (!available) {
    return {
      status: "404",
      headers: {
        "content-type": [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
        "cache-control": [
          {
            key: "Cache-Control",
            value: "max-age=3600",
          },
        ],
      },
      bodyEncoding: "text",
      body: JSON.stringify(
        {
          error: "Not Found",
        },
        null,
        2
      ),
    };
  }

  return request;
};

exports.handler = handler;
