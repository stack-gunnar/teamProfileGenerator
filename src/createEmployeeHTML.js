const CreateHTML = require("./createHTML");

class CreateEmployee {
    constructor(data) {
        this.data = data;
    }

    createManagerCard() {
        let man = this.data;
        
        return `<div class="card employeeCard" style="width: 18rem">
                    <div class="card-body bg-primary text-white">
                        <h3 class="card-title">${man.getName()}</h3>
                        <h5><i class="fas fa-tasks"></i>${man.getRole()}</h5>
                    </div>
                    <div class="mx-3 my-5">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${man.getID()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${man.getEmail()}">${man.getEmail()}</a></li>
                            <li class="list-group-item">Office #: ${man.getOfficeNumber()}</li>
                        </ul>
                     </div>
                </div>`;
    }


    createEngineerCard() {
        let eng = this.data;

        return `<div class="card employeeCard" style="width: 18rem">
        <div class="card-body bg-primary text-white">
            <h3 class="card-title">${eng.getName()}</h3>
            <h5><i class="fas fa-user-cog"></i>${eng.getRole()}</h5>
        </div>
        <div class="mx-3 my-5">
            <ul class="list-group">
                <li class="list-group-item">ID: ${eng.getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${eng.getGitHub()}">${eng.getGitHub()}</a></li>
            </ul>
        </div>
    </div>`;
    }


    createInternCard() {
        let int = this.data;

        return `<div class="card employeeCard" style="width: 18rem">
        <div class="card-body bg-primary text-white">
            <h3 class="card-title">${int.getName()}</h3>
            <h5><i class="fas fa-school"></i>${int.getRole()}</h5>
        </div>
        <div class="mx-3 my-5">
            <ul class="list-group">
                <li class="list-group-item">ID: ${int.getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${int.getEmail()}">int.getEmail()}</a></li>
                <li class="list-group-item">School: $int.{getSchool()}</li>
            </ul>
        </div>
    </div>`;
    }
}


module.exports = CreateEmployee;

