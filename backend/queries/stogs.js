const db = require("../db/dbConfig.js");

const getAllStogs = async () => {
  try {
    const allStogs = await db.any("SELECT * FROM stogs");
    return allStogs;
  } catch (error) {
    return error;
  }
};


const getStog = async (id) => {
  try {
    const stog = await db.one("SELECT * FROM stogs WHERE id=$1", id);
    return stog;
  } catch (error) {
    return error;
  }
};

const createStog = async (stog) => {
  const { name, vitola, length, gauge, strength, is_favorite, image } = stog
  try {
    const newStog = await db.one("INSERT INTO stogs (name, vitola ,length, gauge, strength, is_favorite, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
          name, 
          vitola, 
          length, 
          gauge, 
          strength, 
          is_favorite,
          image
        ]);
    return newStog;
  } catch (error) {
    return error;
  }
};

const deleteStog = async (id) => {
  try {
    const deletedStog = await db.one(
      "DELETE FROM stogs WHERE id=$1 RETURNING *",
      id
    );
    return deletedStog;
  } catch (err) {
    return err;
  }
};

const editStog = async (stog, id ) => {
  try {
    const editedStog = await db.one(
      "UPDATE stogs SET name=$1, vitola=$2, length=$3, gauge=$4, strength=$5, is_favorite=$6, image=$7 WHERE id=$8 RETURNING *", 
      [
        stog.name, 
        stog.vitola, 
        stog.length, 
        stog.gauge, 
        stog.strength, 
        stog.is_favorite,
        stog.image,
        id,
      ]
    );
    return editedStog;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllStogs, getStog, createStog, deleteStog, editStog };



