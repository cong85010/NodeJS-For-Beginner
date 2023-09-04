const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./pool");
const { getAllStudents, updateStudent, insertStudent, deleteStudent, insertClasses } = require("./service");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const students = await getAllStudents();
  
  res.send({ students });
});

app.put("/", async (req, res) => {
  const { id, name, age } = req.body;
  const result = await updateStudent({ id, name, age });

  res.send({ result });
});

app.post("/", async (req, res) => {
  const { name, age } = req.body;
  const result = await insertStudent({ name, age });

  res.send({ result });
});

app.delete("/", async (req, res) => {
  const { id } = req.query;
  const result = await deleteStudent({ id });

  res.send({ result });
});

app.post("/create-classes", async (req, res) => {
  const { name } = req.body;
  const result = await insertClasses({ name });

  res.send({ result });
})

app.listen(PORT, async () => {
  console.log("listening on port 3000");
});
