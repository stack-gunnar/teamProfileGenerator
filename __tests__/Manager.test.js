
const Manager = require('../lib/manager');

const manager = new Manager('Frank', 1, 'frank@email.com', 1);


describe("Manager's office number", () => {
    it("Returns the Manager's office number", () => {
        expect(manager.getOfficeNumber()).toBe(1);
    });
});

describe("Manager's role", () => {
    it("Returns the role of the new employee as 'Manager'", () => {
        expect(manager.getRole()).toBe('Manager');
    });
});