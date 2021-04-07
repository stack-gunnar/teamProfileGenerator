
class GatherUserData{

    teamManagerInput() {
        const manager = [
            {
                type: "input",
                name: "managerName",
                message: "What is the team Manager's name?",

                validate: (managerName) => {
                    return managerName ? true : console.log("Please enter the correct name of the team manager!");
                },
            },

            {
                type: "input",
                name: "managerID",
                message: "What is the team Manager's employee ID?",

                validate: (managerID) => {
                    return managerID ? true : console.log("Please enter the correct employee ID of the team manager!");
                },
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the team Manager's email address?",

                validate: (managerEmail) => {
                    return managerEmail ? true : console.log("Please enter the correct email address of the team manager!");
                },
            },

            {
                type: "input",
                name: "managerOffice",
                message: "What is the team Manager's office number?",

                validate: (managerOffice) => {
                    return managerOffice ? true : console.log("Please eneter the correct office number of the team manager!");
                },
            },
        ];

        return manager;
    }


    engineerInput() {
        const engineer = [
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of the new engineer?",

                validate: (enigneerName) => {
                    return enigneerName ? true : console.log("Please enter the correct name of the new engineer!");
                },
            },

            {
                type: "input",
                name: "engineerID",
                message: "What is the employee ID of the new engineer?",

                validate: (engineerID) => {
                    return engineerID ? true : console.log("Please enter the correct employee ID of the new engineer!");
                },
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the email address of your new engineer?",

                validate: (engineerEmail) => {
                    return engineerEmail ? true : console.log("Please enter the correct email address of the new engineer!");
                },
            },

            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the GitHub username of your new engineer?",

                validate: (engineerGitHub) => {
                    return engineerGitHub ? true : console.log("Please enter the correct GitHub usernamer of the new engineer!");
                },
            },
        ];

        return engineer;
    }


    internInput() {
        const intern = [
            {
                type: "input",
                name: "internName",
                message: "What is the name of your new intern?",

                validate: (internName) => {
                    return internName ? true : console.log("Please enter the correct name of the new intern!");
                },
            },

            {
                type: "input",
                name: "internID",
                message: "What is the employee ID of your new intern?",

                validate: (internID) => {
                    return internID ? true : console.log("Please enter the correct employee ID of the new intern!");
                },
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the email address of your new intern?",

                validate: (internEmail) => {
                    return internEmail ? true : console.log("Please eneter the correct email address of your new intern!");
                },
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school does your new intern attend?",

                validate: (internSchool) => {
                    return internSchool ? true : console.log("Please eneter the correct school of the new intern!");
                },
            },
        ];

        return intern;
    }
}


module.exports = GatherUserData;