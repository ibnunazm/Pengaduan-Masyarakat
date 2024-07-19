import masyarakat from "../models/masyarakatModel.js";

export const getMasyarakat = async (req, res) => {
  try {
    const masyarakatData = await masyarakat.findAll();
    res.send(masyarakatData);
  } catch (error) {
    console.log(error);
  }
};

export const getMasyarakatById = async (req, res) => {
  try {
    const masyarakatData = await masyarakat.findByPk(req.params.id);
    res.send(masyarakatData);
  } catch (error) {
    console.log(error);
  }
};

export const createMasyarakat = async (req, res) => {
  try {
    const masyarakatData = await masyarakat.create(req.body);
    res.send(masyarakatData);
  } catch (error) {
    console.log(error);
  }
};

export const updateMasyarakat = async (req, res) => {
  try {
    const masyarakatData = await masyarakat.update(req.body, {
      where: { id: req.params.id },
    });
    res.send("Masyarakat has been updated");
  } catch (error) {
    console.log(error);
  }
};

export const deleteMasyarakat = async (req, res) => {
  try {
    await masyarakat.destroy({ where: { id: req.params.id } });
    res.send("Masyarakat has been deleted");
  } catch (error) {
    console.log(error);
  }
};
