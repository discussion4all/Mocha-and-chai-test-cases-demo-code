var assert = require("assert");
var loginController = require("../../controllers/login.controller");

describe("LoginController", () => {
  describe("isValidUserId", () => {
    it("should return true if valid user id", () => {
      var isValid = loginController.isValidUserId(["abc123", "xyz321"], "abc123");
      assert.equal(isValid, true);
    });

    it("should return false if invalid user id", () => {
      var isValid = loginController.isValidUserId(["abc123", "xyz321"], "abc1234");
      assert.equal(isValid, false);
    });
  });
});
