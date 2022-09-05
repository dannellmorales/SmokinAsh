const express = require("express");
const stogs = express.Router();
const { getAllStogs, getStog, createStog, deleteStog, editStog } = require("../queries/stogs")


stogs.get("/", async (req, res) => {
  const allStogs = await getAllStogs();
  if (allStogs[0]) {
    res.status(200).json({ payload: allStogs, success: true });
  } else {
    res.status(500).json({
      success: false,
      error: "Server Error - Close but no Cigars",
    });
  }
});

stogs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const stog = await getStog(id);
  if (stog.id) {
    res.status(200).json({ payload: stog, success: true });
  } else {
    res.status(404).json({ payload: "not found", success: false, error: "Close but no Cigar" });
  }
});

stogs.post("/", async (req, res) => {
  try {
    const newStog = await createStog(req.body);
    if (newStog.id) {
      res.status(200).json({ payload: newStog, success: true });
    } else {
      res.status(422).json({ payload: "This is annoying", success: false })
    }
  } catch (error) {
    return error;
  }
});

stogs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedStog = await deleteStog(id);
  if (deletedStog.id) {
    res.status(200).json({ payload: deletedStog, success: true });
  } else {
    res.status(404).json({ payload: "Not found", success: false });
  }
});


stogs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editedStog = await editStog(req.body, id);
  if (editedStog.id) {
    res.status(200).json({ payload: editedStog, success: true });
  } else {
    res.status(404).json({ payload: "Could Not Update", success: false });
  }
});

module.exports = stogs;