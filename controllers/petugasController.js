import petugas from "../models/petugasModel.js";

export const getPetugas = async (req, res) => {
  try {
    const petugasData = await petugas.findAll();
    res.send(petugasData);
  } catch (error) {
    console.log(error);
  }
};

export const getPetugasById = async (req, res) => {
  try {
    const petugasData = await petugas.findByPk(req.params.id);
    res.send(petugasData);
  } catch (error) {
    console.log(error);
  }
};

export const createPetugas = async (req, res) => {
  try {
    const petugasData = await petugas.create(req.body);
    res.send(petugasData);
  } catch (error) {
    console.log(error);
  }
};

export const updatePetugas = async (req, res) => {
  try {
    const petugasData = await petugas.update(req.body, {
      where: { id: req.params.id },
    });
    res.send("Petugas has been updated");
  } catch (error) {
    console.log(error);
  }
};

export const deletePetugas = async (req, res) => {
  try {
    await petugas.destroy({ where: { id: req.params.id } });
    res.send("Petugas has been deleted");
  } catch (error) {
    console.log(error);
  }
};

export const sumPetugas = async (req, res) => {
  try {
    const petugasData = await petugas.findAll({
      attributes: [
        [petugas.sequelize.fn("COUNT", petugas.sequelize.col("id")), "total_petugas"],
      ],
    });
    res.send(petugasData);
  } catch (error) {
    console.log(error);
  }
};
