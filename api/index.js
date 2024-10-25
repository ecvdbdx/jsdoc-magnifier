import HTTP from "node:http";
import Endpoint from "./Endpoint.js";
import { joinMapJStoMarkdown } from "../index.js";

const host = "localhost";
const port = 8000;
const endpoints = [];

const requestListener = function (req, res) {
  endpoints.forEach((endpoint) => {
    if (endpoint.path === req.url && endpoint.port === req.port) {
      endpoint.handler(req, res);
    }
  });
};

const server = HTTP.createServer(requestListener);
server.keepAlive = true;
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

const index = new Endpoint("/", "POST", (req, res) => {
  var body = "";
  req.on("data", function (data) {
    body += data;

    // Too much POST data, kill the connection!
    // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    if (body.length > 1e6) request.connection.destroy();
  });

  req.on("end", function () {
    const ret = joinMapJStoMarkdown(body);
    res.setHeader("Content-Type", "plain/text");
    res.writeHead(200);
    res.end(ret);
  });
});
endpoints.push(index);
