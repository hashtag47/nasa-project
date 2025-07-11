const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  //Express won't receive, only allows function stops executing
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
