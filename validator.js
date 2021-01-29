const { validationResult } = require("express-validator");
const fieldRules = require("./fieldRules");

const validationRules = () => {
  return fieldRules;
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));
  return res.status(400).json(extractedErrors[0]);
};

const validateJSONPayload = (req, res, next) => {
  jsonStringify = JSON.stringify(req.body);
  if (typeof req.body == "object") {
    return next();
  } else {
    return res.status(400).send({
      message: "Invalid JSON payload passed.",
      status: "error",
      data: null,
    });
  }
};

module.exports = {
  validationRules,
  validate,
  validateJSONPayload,
};
