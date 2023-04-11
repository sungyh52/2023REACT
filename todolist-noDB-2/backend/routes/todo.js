const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

router.get("/:id", (req, res) => {
  const {req} = req.params;

  if (parseInt(id) >= todoData.length) {
    res.json({error: "존재하지 않는 ID입니다."});
  }

  res.json(todoData[parseInt(id)]);
});

router.post("/", (req, res) => {
  const {title, desc} = req.body;

  todoData.push({title, desc, isDone: false});

  console.log(todoData);

  res.json(todoData);
});

router.put("/:id", (req, res) => {
  const {id} = req.params;
  const {title, desc} = req.body;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({error: "존재하지 않는 ID입니다."});
  }
  if (!title && !desc) {
    res
      .status(400)
      .json({error: "타이틀이나 설명 중에 하나의 값은 입력해야 합니다."});
  }

  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

router.put("/done/:id", (req, res) => {
  const {id} = req.params;

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    isDone: !todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

router.delete("/:id", (req, res) => {
  const {id} = req.params;

  todoData = todoData.filter((v, i) => {
    return parseInt(id) !== 4;
  });

  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
