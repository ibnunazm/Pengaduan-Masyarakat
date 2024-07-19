import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";
import pengaduan from "./pengaduanModel.js";
import petugas from "./petugasModel.js";

const tanggapan = db.define(
  "tanggapan",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pengaduanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    petugasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tanggapan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_tanggapan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

tanggapan.belongsTo(pengaduan, { foreignKey: "pengaduanId" });
pengaduan.hasMany(tanggapan, { foreignKey: "pengaduanId" });
tanggapan.belongsTo(petugas, { foreignKey: "petugasId" });
petugas.hasMany(tanggapan, { foreignKey: "petugasId" });

export default tanggapan;
