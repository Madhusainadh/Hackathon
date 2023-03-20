const express = require("express");
const RoadDamageModel = require("../Schema/RoadDamage");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let ALlData = await RoadDamageModel.find();
    res.send(ALlData.reverse());
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/id", async (req, res) => {
  let id = req.userID;
  try {
    let Data = await RoadDamageModel.find({ _id: id });
    res.send(Data);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/create", async (req, res) => {
 
    console.log(req.body)
  try {
    let data = await RoadDamageModel.create(req.body);
    res.status(200).send("Ticket created successfully");
  } catch (error) {
    res.status(401).send(error.message);
  }
});

app.post("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body)
  try {
      let updateProduct = await RoadDamageModel.findByIdAndUpdate(
        req.body._id,
         req.body
      );
      console.log(updateProduct)
      res.send({updateProduct});
    
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;

    try {
      await RoadDamageModel.findByIdAndDelete(id);
      res.send({ message: "item deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
});

module.exports = app;
