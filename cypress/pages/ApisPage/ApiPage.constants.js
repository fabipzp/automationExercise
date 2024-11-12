export const general = {
  expectedStatus: 200,
  messageStatusSuccess: "Status code should be 200",
  messageDurationResp: "Response time should be less than 2000ms",
  responseTime: 2000,
  requiredHeaders: ["host", "x-request-id", "user-agent", "accept"],
  properties: [
    "date",
    "protocol",
    "method",
    "originalUrl",
    "query",
    "cookies",
    "headers",
    "body",
  ],
  messageIfIsObject: "Response should be an object",
  messagePostBody: "Body should contain 'test' and 'accept' properties",
  validatePostBody: "Body should be an object",
  messageValidDate: "Date should be valid",
};

export const typesData = {
  obj: "object",
};
