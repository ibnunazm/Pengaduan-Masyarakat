import tanggapan from "../models/tanggapanModel.js";

export const getTanggapan = async (req, res) => {
  try {
    const tanggapanData = await tanggapan.findAll();
    res.send(tanggapanData);
  } catch (error) {
    console.log(error);
  }
};

export const getTanggapanById = async (req, res) => {
  try {
    const tanggapanData = await tanggapan.findByPk(req.params.id);
    res.send(tanggapanData);
  } catch (error) {
    console.log(error);
  }
};

export const createTanggapan = async (req, res) => {
  try {
    const tanggapanData = await tanggapan.create(req.body);
    res.send(tanggapanData);
  } catch (error) {
    console.log(error);
  }
};

export const updateTanggapan = async (req, res) => {
  try {
    const tanggapanData = await tanggapan.update(req.body, {
      where: { id: req.params.id },
    });
    res.send("Tanggapan has been updated");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTanggapan = async (req, res) => {
  try {
    await tanggapan.destroy({ where: { id: req.params.id } });
    res.send("Tanggapan has been deleted");
  } catch (error) {
    console.log(error);
  }
};