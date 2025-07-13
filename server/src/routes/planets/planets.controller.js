const { getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  //Express won't receive, only allows function stops executing
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
