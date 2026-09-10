

const companies = require("./data.json");

// for (let user of data.circle1) {
//     console.log(user.name);
// }

// for (let user of data.circle2) {
//     console.log(user.name);
// }

function findBelongingCompany(name, data){

    for(let company of data){
        // const isAvail = company.circle1.find( (user) => {
        //     console.log(user, "user")
        //     user.name == "name"
        // })

        const companyName = Object.keys(company)[0];
        const selectedCompany = company[companyName];
        const isAvailable = selectedCompany.some((user) => {
           return  user.name.toLowerCase() == name.toLowerCase()
        })

        if (isAvailable) {
            console.log("The user " + name + " belongs to " + companyName);
            return;
        }
        
        
        
    }
    console.log("User not found")
    // data.forEach( (company, index) => {
    //     console.log(company["circle2"], 'name', index)
    // })
}

findBelongingCompany("d", companies)
// console.log("there team member are ";
