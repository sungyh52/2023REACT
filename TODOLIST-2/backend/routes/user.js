const express = require("express");
const {PrismaClient} = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();

// 유저생성
router.post("/", async (req, res) => {
  try {
    const {account} = req.body;

    const user = await client.user.create({
      data: {
        account,
      },
    });

    res.json({ok: true, user});
  } catch (error) {
    console.error(error);
  }
});

// 유저 조회

module.exports = router;
