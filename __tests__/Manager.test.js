const Manager = require("../lib/Manager");
const manager = new Manager("Burns", 100, "Mr@thermonucularacme.com", 5);

describe("Manager class", () => {
  it("new Manager instance has 4 properties", () => {
    const managerProperties = Object.keys(manager);
    expect(managerProperties.length).toEqual(4);
  });

  describe("getName()", () => {
    it("returns Manager name", () => {
      const managerName = manager.getName();
      expect(managerName).toEqual("Burns");
    });
  });

  describe("getId()", () => {
    it("returns Manager ID", () => {
      const managerId = manager.getId();
      expect(managerId).toEqual(100);
    });
  });

  describe("getEmail()", () => {
    it("returns Manager email", () => {
      const managerEmail = manager.getEmail();
      expect(managerEmail).toEqual("Mr@thermonucularacme.com");
    });
  });

  describe("getRole()", () => {
    it("returns the string 'Manager'", () => {
      const managerRole = manager.getRole();
      expect(managerRole).toEqual("Manager");
    });
  });
});
