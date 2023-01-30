import { DataTypes } from "sequelize";
import { externaUIR } from "../config/db.postgres";

const User = externaUIR.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(10),
    },
    lastName: {
      type: DataTypes.STRING(10),
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      get() {
        return this.getDataValue("isActive");
      },
    },
  },
  {
    timestamps: false,
  }
);

export default User;
