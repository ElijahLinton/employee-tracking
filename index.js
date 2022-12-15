const inquirer = require('inquirer')
// const addDept = require('./assets/addDept')
// const dept = require('./assets/dept')
// const hire = require('./assets/hire')
// const role = require('./assets/role')
// const roster = require('./assets/roster')  
// const db = require('./db')


 function promptRunner(){
    inquirer
    .prompt([
        {
            type:'list',
            message:'what will you look into today?',
            name:'search',
            Choices:[
                {
                name:'display_departments',
                value:'DISPLAY_DEPARTMENTS'
            },
            {
                name:'display_roles',
                value:'DISPLAY_ROLES '
            },
            {
                name:'reveal_roster',
                value:'REVEAL_ROSTER'
            },
            {
                name:'implement_department',
                value:'DISPLAY_EMPLOYEES'
            },      

            {
                name:'hire-employee',
                value:'HIRE_EMPLOYEE'
            }, 
          
            {
                name:'implement_department',
                value:'DISPLAY_EMPLOYEES'
            },  
            {
                name:'exit',
                value:'EXIT'
            },  
        ]
        }
    ])
}//     .then(res => {
    //     let choice = res.choice;

    //     switch (choice) {
    //         case "VIEW_DEPARTMENTS":
    //             showDepartment();
    //             break;
    //         case "VIEW_ROLES":
    //             sendRole();
    //             break;
    //         case "VIEW_EMPLOYEES":
    //             sendRoster()
    //             break;
    //         case "ADD_DEPARTMENT":
    //             addNewDept();
    //             break;
    //         case "ADD_ROLE":
    //             createRole();
    //             break;
    //         case "ADD_EMPLOYEE":
    //             hired();
    //             break;
    //         default:
    //             quit();
    //     }

 
//  function displayDept() {
//     const intern = new Intern(answers.NameOfintern, answers.idOfintern, answers.EmailOfintern, answers.SchoolOfintern);
//     roster.push(intern);
//     identity.push(answers.internId);
//     addTeam();
//  }
    
    

promptRunner()
