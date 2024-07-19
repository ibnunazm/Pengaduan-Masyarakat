import pengaduan from "../models/pengaduanModel.js";

export const getPengaduan = async (req, res) => {
  try {
    const pengaduanData = await pengaduan.findAll();
    res.send(pengaduanData);
  } catch (error) {
    console.log(error);
  }
};

export const getPengaduanById = async (req, res) => {
  try {
    const pengaduanData = await pengaduan.findByPk(req.params.id);
    res.send(pengaduanData);
  } catch (error) {
    console.log(error);
  }
};

export const createPengaduan = async (req, res) => {
  try {
    const pengaduanData = await pengaduan.create(req.body);
    res.send(pengaduanData);
  } catch (error) {
    console.log(error);
  }
};

export const updatePengaduan = async (req, res) => {
  try {
    const pengaduanData = await pengaduan.update(req.body, {
      where: { id: req.params.id },
    });
    res.send("Pengaduan has been updated");
  } catch (error) {
    console.log(error);
  }
};

export const deletePengaduan = async (req, res) => {
  try {
    await pengaduan.destroy({ where: { id: req.params.id } });
    res.send("Pengaduan has been deleted");
  } catch (error) {
    console.log(error);
  }
};

export const callTampilanPengaduan = async (req, res) => {
  try {
    const pengaduanData = await pengaduan.sequelize.query(
      "CALL tampilkan_masyarakat_by_status('ditanggapi')"
    );
    res.send(pengaduanData);
  } catch (error) {
    console.log(error);
  }
}

export const sortpengaduanbyjudul = async (req, res) => {
  try {
    const {sort} = req.query;
    const pengaduanData = await pengaduan.findAll({
      order: [["judul", sort]],
    });

  } catch (error) {
    console.log(error);
  }
}
