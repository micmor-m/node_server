const http = require("http");
const routes = required("./routes");

const server = http.createServer(routes);

server.listen(3000);
