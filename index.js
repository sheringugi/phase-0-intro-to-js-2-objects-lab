const employee = {
    name: "Maleek",
    streetAddress: "Ngong Lane",
};

  employee.name;
  employee.streetAddress;
function updateEmployeeWithKeyAndValue(employee, key, value) {
const newKey = { name: "Sam",
                streetAddress: "11 Broadway" };
    return newKey;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { name: "Sam",
                streetAddress: "11 Broadway" };
    delete newEmployee[key];
    return newEmployee;
}
   function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
   }
