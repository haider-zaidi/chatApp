// Node server which will handle socket io connections:
// const express=require("express");
// const app=express();

// const http=require("http").createServer(app);
// const io=require("socket.io")(http);
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/index.html");
// })
const express = require("express");
const app = express();
const path = require("path"); // Add this line
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    // Use path.join to create an absolute path
    res.sendFile(path.join(__dirname, "index.html"));
});

// Rest of your code remains the same
const users = {};
io.on('connection', function(socket) {
    socket.on('new-user-joined', (name) => {
        console.log("New user: ", name);
        users[socket.id] = name; // Store the name directly
        socket.broadcast.emit('user-joined', name); // Send the name directly
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
    

    
});

http.listen(8000);