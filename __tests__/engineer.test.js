const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Bob", 15, "bob@bobsburger.com", "burgerhub");

describe("Engineer class", () => {
  it("new Engineer instance has 4 properties", () => {
    const engineerProperties = Object.keys(engineer);
    expect(engineerProperties.length).toEqual(4);
  });

  describe("getName()", () => {
    it("returns Engineer name", () => {
      const engineerName = engineer.getName();
      expect(engineerName).toEqual("Bob");
    });
  });

  describe("getId()", () => {
    it("returns Engineer ID", () => {
      const engineerId = engineer.getId();
      expect(engineerId).toEqual(15);
    });
  });

  describe("getEmail()", () => {
    it("returns Engineer email", () => {
      const engineerEmail = engineer.getEmail();
      expect(engineerEmail).toEqual("bob@bobsburger.com");
    });
  });

  describe("getGithub()", () => {
    it("returns Engineer GitHub username", () => {
      const engineerGithub = engineer.getGithub();
      expect(engineerGithub).toEqual("burgerhub");
    });
  });

  describe("getRole()", () => {
    it("returns the string 'Engineer'", () => {
      const engineerRole = engineer.getRole();
      expect(engineerRole).toEqual("Engineer");
    });
  });
});
