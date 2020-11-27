var express = require("express");
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(5000, () => {
 console.log("Server running on port 5000");
});
app.post("/task1", (req, res, next) => {
    // Input Validation on an object
    var data = req.body.data;
    var rules = req.body.rules;

validateBody = (requestBody, rules) => {
  const bodyKeys = Object.keys(requestBody);

  let missingItems = [];

  rules.forEach((rule) => {
    if (!bodyKeys.includes(rule)) {
      missingItems.push(rule);
    }
  });

  if (missingItems.length > 0) {
    console.log("Missing Items", missingItems);
    return missingItems;
  } else {
      res.json("valid");
    console.log("Valid");
    return "Valid";
  }
};

const testData = {
  type: "durban",
  crux: "Induce",
  color: "green",
  title: "Idiot",
  riot: "YYYHJ",
};

validateBody(data, rules);

});
// end of task1

app.post("/task2", (req, res ) => {
    console.log(req.body.data);
    var data = req.body.data;
    var useritem = req.body.item;
    delete data[useritem];
    res.json(data);
    console.log(data);
});
// end of task2