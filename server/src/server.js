const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000; // create-react-app runs on default 3000

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
