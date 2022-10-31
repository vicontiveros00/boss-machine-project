//Function to check that any new or updated idea is still worth at least a million dollars. If not, big boss doesn't care and he will fire you.
const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
  if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
}

module.exports = checkMillionDollarIdea;
