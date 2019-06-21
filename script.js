import { businesses } from "./data.js"


const outEl = document.querySelector("#customerList")

const manufactEl = document.getElementById("manufacturingBusinesses")

let cityZip = "addressZipCode"

businesses.forEach(business => {
  
   outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
     </section>
    <section>
    ${business.addressCity}, ${business["addressStateCode"]} ${business[cityZip]}
    </section>
  `
  outEl.innerHTML += "<hr/>"

});


// Array to contain all the New York businesses
// let newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY")


// console.log(newYorkBusinesses)

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
  
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }
  
    return inNewYork
  })


  console.log(newYorkBusinesses)


let manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")


console.log(manufacturingBusinesses)

manufacturingBusinesses.forEach(business => {
    
    manufactEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
     </section>
    <section>
    ${business.addressCity}, ${business["addressStateCode"]} ${business[cityZip]}
    </section>
  `
  manufactEl.innerHTML += "<hr/>"

})

let pAgents = document.getElementById("purchasingAgents")

pAgents.innerHTML += "";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return business
  
})

console.table(agents)

agents.forEach(agent => {
  pAgents.innerHTML += `
   <h3>Full Name: ${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h3>
   <h5>Company: ${agent.companyName}</h5>
   <h5>Phone Number: ${agent.phoneWork}
   `
  pAgents.innerHTML += "<hr/>"
});

// Display this
// {
//   "fullName": "Kaylee Gutkowski",
//   "company": "Highnix",
//   "phoneNumber": "235.266.6278"
// }