const { URLSearchParams } = require("url");

const TOKENS = ["LFSD84KF8FkS48FD"];

const handler = async (event) => {
  const { request } = event.Records[0].cf;
  const qs = new URLSearchParams(request.querystring);

  const token = qs.get("token");

  if (!token || !TOKENS.includes(token)) {
    return {
      status: "403",
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
            value: "no-cache",
          },
        ],
      },
      bodyEncoding: "text",
      body: JSON.stringify(
        {
          error: "Forbidden",
        },
        null,
        2
      ),
    };
  }

  return request;
};

exports.handler = handler;
