
const inquirer = require("inquirer");

const fs = require("fs");


const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const CreateHTML = require("../src/createHTML");
const CreateEmployee = require("../src/createEmployeeHTML");
const GatherUserData = require("./gatherUserData");


const employees = [];

class TeamMaker {

    addManager() {

        const userInput = new GatherUserData();

        inquirer.prompt(userInput.teamManagerInput())

            .then((data) => {
                const { managerName, managerID, managerEmail, managerOFfice } = data;

                const newEmployee = new Manager(
                    managerName,
                    managerID,
                    managerEmail,
                    managerOFfice
                );

                const newManager = CreateEmployee(newEmployee).createManagerCard();

                employees.push(newManager);
            })

            .then(() => {
                this.addEmployee();
            });
    }
    
    addEmployee() {
        
        inquirer.prompt([
            
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"],
        },
    ])
    
    .then((data) => {
        const { addAnother } = data;
        
        switch (addAnother) {
            case "yes":
                this.emloyeeRole();
                break;
                
                case "no":
                    const team = new CreateHTML(employees);
                    
                    fs.writeFile("./dist/yourTeam.html", team.createTeam(), (err) => {
                        if (err) throw err;
                        console.log("Congrats! Your yourTeam.html file has been succesfully created and put into the 'dist' directory.");
                    });
                    break;
                }
            });
            
        }
        
        employeeRole() {
            
            inquirer.prompt([
                {
                    type: "list",
                    name: "role",
                    message: "What is the role of the ne employee that you would like to add?",
                    choices: ["Engineer", "Intern"],
                },
            ])
            
            .then((data) => {
                const { role } = data;
                
                return role === "Engineer" ? this.engineerInput() : this.internInput();
            });
        };
        engineerInput() {
            const userInput = new GatherUserData();
            
            inquirer.prompt(userInput.engineerInput())
            
            .then((data) => {
                const { engineerName, engineerID, engineerEmail, engineerGitHub } = data;
                
                const newEmployee = new Engineer(
                    engineerName,
                    engineerID,
                    engineerEmail,
                    engineerGitHub
                    );
                    
                    const newEngineer = new CreateEmployee(newEmployee).createEngineerCard();
                    
                    employees.push(newEngineer);
            })
            .then(() => {
                this.addEmployee();
            });
        }
    
    
    internInput() {
        const userInput = new GatherUserData();
        
        inquirer.prompt(userInput.internInput())
        
            .then((data) => {
                const { internName, internID, internEmail, internSchool } = data;
                
                const newEmployee = Intern(
                    internName,
                    internID,
                    internEmail,
                    internSchool,
                    );
                    
                    const newIntern = new CreateEmployee(newEmployee).createInternCard();
                    
                    employees.push(newIntern);
                })
                .then(() => {
                    this.addEmployee();
                });
    
    }
}

module.exports = TeamMaker;