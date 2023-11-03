import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("hello,this is auth endpoint");
});
export default router;
