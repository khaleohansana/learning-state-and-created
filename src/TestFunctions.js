const parentFunc = () => {
    const argProp = {
       someNumber: 42
    }
    console.log("parentFunc before", argProp.someNumber)
    childFunc(argProp)
    console.log("parentFunc after", argProp.someNumber)

    console.log("parentFunc before", argProp.someNumber)
    childFunc(argProp)
    console.log("parentFunc after", argProp.someNumber)

}

const childFunc = (prop) => {
    console.log("childFunc unmodified", prop.someNumber)
    prop.someNumber = 73
    console.log("childFunc modified", prop.someNumber)
}

parentFunc()

const employees = [
{
    name: "Lake Muir",
    salary: 6660000,
    payperiod: "year"
},
 {
    name: "Dylan May",
    salary: 3330000,
    payperiod: "year"
},
 {
    name: "bronsonBrode",
    salary: 7770000,
    payperiod: "year"
},
 {
    name: "nate schmidt",
    salary: 11111111,
    payperiod: "year"
},
 {
    name: "Tyler Tahbo",
    salary: 9990000,
    payperiod: "year"
},
 {
    name: "Khaleo Hansana",
    salary: 12300000,
    payperiod: "year"
},
 {
    name: "Tanner Strickland",
    salary: 8900450,
    payperiod: "year"
},
 {
    name: "Jay Wilhan",
    salary: 6780000,
    payperiod: "year"
},
 {
    name: "B Walks",
    salary: 6800000,
    payperiod: "year"
},
 {
    name: "D Hadd",
    salary: 5550000,
    payperiod: "year"
},
 {
    name: "Ben Slagg",
    salary: 6300000,
    payperiod: "year"
},
{
    name: "Nickel",
    salary: 5555555,
    payperiod: "year"
}
]

console.log("employees", employees)
console.log("employee index 7", employees[7])

const processPayroll = (personThatMakesMoney) => {
    console.log(personThatMakesMoney)
    if (personThatMakesMoney.payPeriod === "month") {
            return personThatMakesMoney.salary * 12
    } else if (personThatMakesMoney.payPeriod === "week") {
        return personThatMakesMoney.salary * 52
    } else if (personThatMakesMoney.payPeriod === "day") {
        return personThatMakesMoney.salary * 365
    }
    return personThatMakesMoney.salary
}

for (const index in employees) {
    console.log(index % 2 === 0 ? "" : "Other")
    const yearlySalary = processPayroll(employees[index])
    console.log(employees[index].name, yearlySalary)
}

for (const employee of employees) {
    const yearlySalary = processPayroll(employee)
    console.log(employee.name, yearlySalary)
}

let index = 0
console.log("While start after this: ", index)
while (index < employees.length) {
    const yearlySalary = processPayroll(employees[index])
    console.log("while i is " + index, employees[index].name, yearlySalary)
    index++
}
