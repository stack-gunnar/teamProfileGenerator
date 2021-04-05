
const Employee = require('../lib/employee');

const employee = new Employee('Frank', 1, 'frank@email.com');


describe('Employee', () => {
    it('Validates that the user input is formatted as an object', () => {
        expect(typeof employee).toBe('object');
    });
});

describe('Employee name', () => {
    it("Returns the employee's name when a new employee is added", () => {
        expect(employee.getName()).toBe('Frank');
    });
});

describe('Employee ID', () => {
    it('Returns the Employee ID when a new employee is added', () => {
        expect(employee.getID()).toBe(1);
    });
});

describe('Employee email', () => {
    it("Returns the employee's email when a new employee is added", () => {
        expect(employee.getEmail()).toBe('frank@email.com');
    });
});

describe('Employee role', () => {
    it('Returns the role of the new employee as "Employee"', () => {
        expect(employee.getRole()).toBe('Employee');
    });
});