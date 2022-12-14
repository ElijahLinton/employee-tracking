const inquirer = require('inquirer')
const worker =  require('./assets/worker.js')
// const db = require('./db')
require("console.table");

 function promptRunner(){
    inquirer
    .prompt([
        {
            type:'list',
            message:'what will you look into today?',
            name:'search',
            Choices:[
                {
                name:'show departments',
                value:'SHOW_DEPARTMENTS'
            }
        ]
        }
    ])
 }