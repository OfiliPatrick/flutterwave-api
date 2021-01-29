const express = require("express");
const bodyParser = require("body-parser");
const {
  validationRules,
  validate,
  validateJSONPayload,
} = require("./validator.js");
const conditionChecker = require("./conditionChecker");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const response = {
    message: "My Rule-Validation API.",
    status: "success",
    data: {
      name: "Patrick Onyebuchi Ofili",
      github: "@OfiliPatrick",
      email: "patrickofili16@gmail.com",
      mobile: "08136789224",
    },
  };
  res.status(200).send(response);
});

app.post(
  "/validate-rule",
  validateJSONPayload,
  validationRules(),
  validate,
  (req, res) => {
    const { rule, data } = req.body;
    if (data.constructor == Array && !data.includes(rule["field"])) {
      return res.status(400).send({
        message: `field ${rule["field"]} is missing from data.`,
        status: "error",
        data: null,
      });
    }

    const condition = rule["condition"];
    const conditionValue = rule["condition_value"];
    const field = rule["field"];
    const fieldValue = data[field];
    const response = conditionChecker(
      condition,
      conditionValue,
      field,
      fieldValue
    );
    if (response.status_code == 200) {
      return res.status(200).send(response.data);
    } else {
      return res.status(400).send(response.data);
    }
  }
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
