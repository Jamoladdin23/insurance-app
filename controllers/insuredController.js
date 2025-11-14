const Insured = require('../models/Insured');

exports.createInsured = async (req, res) => {
  try {
    const insured = new Insured(req.body);
    await insured.save();
    res.status(201).json(insured);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllInsured = async (req, res) => {
  try {
    const insuredList = await Insured.find();
    res.status(200).json(insuredList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};