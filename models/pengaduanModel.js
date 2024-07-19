import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";
import masyarakat from "./masyarakatModel.js";

const pengaduan = db.define(
  "pengaduan",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    masyarakatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_pengaduan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

pengaduan.belongsTo(masyarakat, { foreignKey: "masyarakatId" });
masyarakat.hasMany(pengaduan, { foreignKey: "masyarakatId" });

export default pengaduan;
