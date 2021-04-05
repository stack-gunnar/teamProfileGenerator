
const Engineer = require('../lib/engineer');

const engineer = new Engineer('Frank', 1, 'frank@email.com', 'XYZ123');


describe("Engineer's GitHub", () => {
    it("Returns the Engineer's GitHub username", () => {
        expect(engineer.getHubUserName()).toBe('XYZ123');
    });
});

describe("Engineer's role", () => {
    it('Returns the role of the new employee as "Engineer"', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});