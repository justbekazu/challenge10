const Intern = require("../lib/Intern");
const intern = new Intern("rudolf", 4, "rednose@workshop.com", "Snow U");

describe("Intern class", () => {
  it("new Intern instance has 4 properties", () => {
    const internProperties = Object.keys(intern);
    expect(internProperties.length).toEqual(4);
  });

  describe("getName()", () => {
    it("returns Intern name", () => {
      const internName = intern.getName();
      expect(internName).toEqual("rudolf");
    });
  });

  describe("getId()", () => {
    it("returns Intern ID", () => {
      const internId = intern.getId();
      expect(internId).toEqual(4);
    });
  });

  describe("getEmail()", () => {
    it("returns Intern email", () => {
      const internEmail = intern.getEmail();
      expect(internEmail).toEqual("rednose@workshop.com");
    });
  });

  describe("getSchool()", () => {
    it("returns Intern school", () => {
      const internSchool = intern.getSchool();
      expect(internSchool).toEqual("Snow U");
    });
  });

  describe("getRole()", () => {
    it("returns the string 'Intern'", () => {
      const internRole = intern.getRole();
      expect(internRole).toEqual("Intern");
    });
  });
});
