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
  const { name, brand, length, gauge, strength, vintage } = stog
  try {
    const newStog = await db.one("INSERT INTO stogs (name, brand ,length, gauge, strength, vintage) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        name, 
        brand, 
        length, 
        gauge, 
        strength, 
        vintage,
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
      "UPDATE stogs SET name=$1, brand=$2, length=$3, gauge=$4, strength=$5, vintage=$6, WHERE id=$7 RETURNING *",
      [
        stog.name, 
        stog.brand, 
        stog.length, 
        stog.gauge, 
        stog.strength, 
        stog.vintage, 
        id,
      ]
    );

    return editedStog;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllStogs, getStog, createStog, deleteStog, editStog };



