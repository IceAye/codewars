function findEmployeesRole(name) {
    const nameArray = name.split(' ');

    for (const employee of employees) {
        if (employee.firstName === nameArray[0] && employee.lastName === nameArray[1]) return employee.role;
    }
    return 'Does not work here!';
}