const conditionChecker = (condition, conditionValue, field, fieldValue) => {
  if (condition == "eq") {
    if (fieldValue == conditionValue) {
      return {
        status_code: 200,
        data: {
          message: `field ${field} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    } else {
      return {
        status_code: 400,
        data: {
          message: `field ${field} failed validation.`,
          status: "error",
          data: {
            validation: {
              error: true,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    }
  }

  if (condition == "neq") {
    if (fieldValue != conditionValue) {
      return {
        status_code: 200,
        data: {
          message: `field ${field} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    } else {
      return {
        status_code: 400,
        data: {
          message: `field ${field} failed validation.`,
          status: "error",
          data: {
            validation: {
              error: true,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    }
  }
  if (condition == "gt") {
    if (fieldValue > conditionValue) {
      return {
        status_code: 200,
        data: {
          message: `field ${field} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    } else {
      return {
        status_code: 400,
        data: {
          message: `field ${field} failed validation.`,
          status: "error",
          data: {
            validation: {
              error: true,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    }
  }

  if (condition == "gte") {
    if (fieldValue >= conditionValue) {
      return {
        status_code: 200,
        data: {
          message: `field ${field} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: field,
              field_value: fieldValue,
              condition: "gte",
              condition_value: conditionValue,
            },
          },
        },
      };
    } else {
      return {
        status_code: 400,
        data: {
          message: `field ${field} failed validation.`,
          status: "error",
          data: {
            validation: {
              error: true,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    }
  }

  if (condition == "contains") {
    if (parseInt(field) < fieldValue.length && fieldValue.includes(conditionValue)) {
      return {
        status_code: 200,
        data: {
          message: `field ${field} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    } else {
      return {
        status_code: 400,
        data: {
          message: `field ${field} failed validation.`,
          status: "error",
          data: {
            validation: {
              error: true,
              field: field,
              field_value: fieldValue,
              condition: condition,
              condition_value: conditionValue,
            },
          },
        },
      };
    }
  }
};
module.exports = conditionChecker;
