import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js"; // Asumsinya db tetap diimpor dari config/database.js

const masyarakat = db.define(
  "masyarakat",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_telepon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default masyarakat;
