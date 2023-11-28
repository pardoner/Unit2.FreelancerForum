
const people_names = ["Alice", "Bob", "Carol", "George", "Fester", "Cupernicus", "Olga"];
const jobs = ["writer", "teacher", "programmer", "painter", "actor", "baker"];
const prices = [30, 50, 70, 100, 20];
const maxPeople = 10;

let freelancerslist = [
  {
    name: "Alice",
    job: "Writer",
    price: 30
  },
  {
    name: "Bob",
    job: "Teacher",
    price: 50
  },
  {name: "Carol",
    job: "Programmer",
    price: 70
  },
];

 const addFreelancerIntervalId = setInterval(addFreelancer, 4000);

 render()

function render() {
    let namelist = document.querySelector("#names");
    const nameElements = freelancerslist.map((freelancer) => {
      const element = document.createElement("li");
      element.textContent = freelancer.name;
      return element;
    });
    namelist.replaceChildren(...nameElements);

    let jobslist = document.querySelector("#jobs");
    const jobElements = freelancerslist.map((freelancer) => {
      const element = document.createElement("li");
      element.textContent = freelancer.job;
      return element;
    });
    jobslist.replaceChildren(...jobElements);

    let pricelist = document.querySelector("#prices");
    const priceElements = freelancerslist.map((freelancer) => {
      const element = document.createElement("li");
      element.textContent = freelancer.price;
      return element;
    });
    pricelist.replaceChildren(...priceElements);

    const message = document.querySelector("#avg");
    message.textContent = `The average price is ${calcAvg()}`;

  }
  

  /**
   * Add a random shape to the `shapes` array
   */
  function addFreelancer() {
    const name = people_names[Math.floor(Math.random() * people_names.length)];
    console.log(name)
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
  
      if (freelancerslist.length >= maxPeople) {
        clearInterval(addFreelancerIntervalId);
      }
  
    freelancerslist.push({name, job, price});
  
    render();
  
  }

//   function calcAvg() {

//     let avgPrice = 0;
//     for (let i=0; i < freelancers.length; i++) {
//         let freelancer = freelancerslist[i];
//         avgPrice = freelancer[price]
        
//         /freelancerslist.length;
//    }
//     return avgPrice;
//   }

function calcAvg() {
    const sum = freelancerslist.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);
    return Math.round(sum / freelancerslist.length);
}

