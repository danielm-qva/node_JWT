import { Sequelize } from "sequelize";
import User from "../Models/user.model";

export const externaUIR = new Sequelize(
  "postgres://test_db_node_user:VEKXZN6b4LomFZDf9kcE95K0Cm3Xb9LJ@dpg-cfc058cgqg4aqeok2a6g-a.ohio-postgres.render.com/test_db_node",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const connectionPostrege = async () => {
  try {
    await externaUIR
      .authenticate()
      .then((res) => {
        console.log("Db runign");
        User.sync();
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectionPostrege;
