const addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email) {
      res.status(400).send({ msg: "Name and email are required!!!" });
      return;
    }
    const contact = await Contact.findOne({ email });
    if (contact) {
      res.status(400).send({ msg: "Contact already exist!!" });
      return;
    }
    const newContact = new Contact({
      name,
      email,
      phone,
    });
    await newContact.save();
    res.status(200).send({ msg: "Contact added successfully...", newContact });
  } catch (error) {
    res.status(400).send({ msg: "Cannot add contact!!!", error });
  }
};

module.exports = controllers = { addContact };
