const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsed

})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {

})

const zod = require("zod");

// write basic express boilerplate code, 
// with express.json() middleware