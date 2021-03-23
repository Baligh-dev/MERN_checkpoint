const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controller = require("../controllers/contact.controllers");
router.post("/", controller.addContact);

router.get("/", async (req, res) => {
  try {
    const listContacts = await Contact.find();
    res
      .status(200)
      .send({ msg: "This is the list of all contacts...", listContacts });
  } catch (error) {
    res.status(400).send({ msg: "Cannot get all contacts!!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contactToGet = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "I get the contact...", contactToGet });
  } catch (error) {
    res.status(400).send({ msg: "I cant get the contact!!!", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Contact deleted..." });
  } catch (error) {
    res.status(400).send({ msg: "Cannot delete contact!!!", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.updateOne({ _id }, { $set: { ...req.body } });
    console.log(result);
    if (!result.nModified) {
      res.status(400).send({ msg: "Contact already updated!!!" });
      return;
    }
    res.status(200).send({ msg: "Contact updated..." });
  } catch (error) {
    res.status(400).send({ msg: "Cannot update contact!!!", error });
  }
});

module.exports = router;
