const models = require("../database/models");

// CREATE
const createLegend = async (req, res) => {
  try {
    const legend = await models.Legend.create(req.body);
    return res.status(201).json({ legend });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// READ ALL
const getAllLegends = async (req, res) => {
  try {
    const legends = await models.Legend.findAll();
    return res.status(200).json({ legends });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// UPDATE
const updateLegend = async (req, res) => {
  const { id } = req.params;
  const nuevosDatos = req.body;

  try {
    const [rowsUpdated] = await models.Legend.update(nuevosDatos, {
      where: { id }
    });

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Leyenda no encontrada" });
    }

    const legendActualizada = await models.Legend.findByPk(id);
    return res.status(200).json({ legend: legendActualizada });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteLegend = async (req, res) => {
  const { id } = req.params;

  try {
    const rowsDeleted = await models.Legend.destroy({
      where: { id }
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Leyenda no encontrada" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLegend,
  getAllLegends,
  updateLegend,
  deleteLegend
};


/*const models = require("../database/models");

const createUser = async (req, res) => {
    try {
      const user = await models.User.create(req.body);
      return res.status(201).json({
        user
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    console.log('getting users');
    try {
      const users = await models.User.findAll({
        include: [
        ]
      });
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers
};

*/