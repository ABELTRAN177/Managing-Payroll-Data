// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeArray = [];
let employees = [];
let addMore = true; 


// Collect employee data  // TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // adding a "while" on this statment makes it true since the "addMore" is true.
  // now when loading or refreshing the page, the user would be prompted to enter first,last, and salary.
  // when user hits reaches the last prompt they will be notified if they want to add another employee.
  // if the user declines, they will receive employee data on the page since we are pushing a new employee. 
  while (addMore) {
    let firstName = prompt('What is the employees first name?');
    let lastName = prompt('What is the employees last name?');
    let salary = prompt('What is the employees salary?');

    let newEmployee = {firstName, lastName, salary}
    employees.push(newEmployee);
    addMore = confirm('Do you want to add more employees?');
  }
  return employees; 
}

// Display the average salary
const displayAverageSalary = function (array) {
  // TODO: Calculate and display the average salary
  // here we create a function called array and create a looping function that runs throughout the array.
  // we create a constant where the average is the sum of all entered values divided by the arrays length.
  // and when checking the console log it displays the average accross all employees salaries 
  let sum = 0;
  for (let i = 0; i <array.length; i++)
  sum += parseInt(array[i].salary);
const average = sum / array.length; 
console.log("Salary average across employees is", average);
}

// Select a random employee  // TODO: Select and display a random employee
// const getRandomEmployee = function (array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   const randomEmployee = getRandomEmployee(employees);
//   // return array [randomIndex];
//   console.log("Congratualations to ${randomEmployee.firstName} $(randomEmployee.lastName), our random drawing winner!", employees);
// };

function getRandomEmployee(employees) {
  // const randomIndex = Math.floor(Math.random() * employeeArray.length);
  // const randomEmployee = employeeArray[randomIndex];
  // return randomEmployee;
 let randomEnployee = employees[(Math.floor(Math.random() * employees.length))]
    console.log(`Congratualations to ${randomEnployee.firstName} ${randomEnployee.lastName}, our random drawing winner!`);

}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

document.onreadystatechange = function(){
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
}
// Add event listener to 'Add Employees' button
