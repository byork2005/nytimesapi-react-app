const axios = require("axios");
const router = require("express").Router();
// const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
// authKey + "&q=";

router.get("/api/articles", (req, res) => {

  // axios
  //   .get(queryURLBase, { params: req.query })
  //   .then(({ data: { results } }) => res.json(results))
  //   .catch(err => res.status(422).json(err));

  axios
  .get("http://www.recipepuppy.com/api/", { params: req.query })
  .then(({ data: { results } }) => res.json(results))
  .catch(err => res.status(422).json(err));

});

module.exports = router;