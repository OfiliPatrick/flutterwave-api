const { check } = require("express-validator");

const fieldRules = [

  check("rule", {
    message: "rule is required.",
    status: "error",
    data: null,
  }).exists(),

  check("data", {
    message: "data is required.",
    status: "error",
    data: null,
  }).exists(),

  check("rule", {
    message: "rule should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isNumeric(),

  check("rule", {
    message: "rule should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isArray(),

  check("rule", {
    message: "rule should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isString(),

  check("rule", {
    message: "rule should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isBoolean(),

  check("rule", {
    message: "rule should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isFloat(),

  check("rule.field", {
    message: "field field is missing from rule.",
    status: "error",
    data: null,
  }).exists(),

  check("rule.condition", {
    message: "field condition is missing from rule.",
    status: "error",
    data: null,
  }).exists(),

  check("rule.condition_value", {
    message: "field condition_value is missing from rule.",
    status: "error",
    data: null,
  }).exists(),

  check("data", {
    message: "data should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isNumeric(),

  check("data", {
    message: "data should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isBoolean(),

  check("data", {
    message: "data should be an object.",
    status: "error",
    data: null,
  })
    .not()
    .isFloat(),
];

module.exports = fieldRules;
