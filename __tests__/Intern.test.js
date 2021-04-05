
const Intern = require('../lib/intern');

const intern = new Intern('Frank', 1, "frank@email.com", "University of Minnesota");


describe("Inern's school", () => {
    it("Returns the intern's school", () => {
        expect(intern.getSchool()).toBe('University of Minnesota');
    });
});

describe("Intern's role", () => {
    it('Returns the role of the new employee as "Intern"', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});