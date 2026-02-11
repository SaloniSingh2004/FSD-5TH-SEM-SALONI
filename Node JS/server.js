const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Allow CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // WRITE DATA
    if (req.url === "/write" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const data = JSON.parse(body).text;

            fs.writeFile("data.txt", data, (err) => {
                if (err) {
                    res.writeHead(500);
                    res.end("Error writing file");
                } else {
                    res.writeHead(200);
                    res.end("Data written successfully");
                }
            });
        });
    }

    // READ DATA
    else if (req.url === "/read" && req.method === "GET") {
        fs.readFile("data.txt", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error reading file");
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    }

    else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
