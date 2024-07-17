//Create a module which should take salary from user and return bonus based on different criteria
//salary between 30000-50000 bonus should be 5% of salary
//50000-80000 bonus should be 10% of salary
//more then 80000 12% of salary 

exports.calculateBonus = (salary) => {
    if (salary >= 30000 && salary < 50000) {
        return salary * 0.05;
    } else if (salary >= 50000 && salary < 80000) {
        return salary * 0.1;
    } else if (salary >= 80000) {
        return salary * 0.12;
    } else {
        return 0;
    }
}
