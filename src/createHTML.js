
class CreateHTML {
    constructor(employees) {
        this.employees = employees;
    }

    createTeam() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team Profile</title>
        
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        
            <style>
                .employeeCard {
                    margin: 1.5rem;
                    border: none;
                    border-radius: 5px;
                }
        
                .card-body {
                    border-radius: 5px 5px 0 0;
                }
            </style>
            
            <script 
                src="https://kit.fontawesome.com/57ce2117c7.js" crossorigin="anonymous">
            </script>
        
        </head>
        <body>
            <header>
                <nav class="nvabar navabar-expand-lg text-light bg-danger mb-5">
                    <div class="container-fluid">
                        <h1 class="w-100 text-center p-4">My Team Profile</h1> 
                    </div>
                </nav>
            </header>
            
            <main class="container-fluid d-flex flex-wrap justify-content-center align-items-center col-7">
                
            
                ${this.employess.join("")}
            
            
            </main>
        
            <script>
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            </script>
            
        </body>
        </html>`;
    }
}


module.exports = CreateHTML;