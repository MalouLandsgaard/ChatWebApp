const app = require('express')
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = 3001;

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');
});

// const express = require("express");
// const path = require("path");

// const PORT = process.env.PORT || 3001;
// const app = express();

// //retrieve static files
// app.use(express.static(path.resolve(__dirname, '../client/build')));
// //random paths redirect
// app.use((req, res, next) => {res.redirect("/");});
// //app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));});

// app.get("/api", (req, res) => {res.json({message: 'Hello World!'})});

// app.listen(PORT, () => {console.log(`Server listening on ${PORT}`)});

