const btn = document.querySelector("button");
let  users;
const nameJson = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";


fetch(nameJson)
   .then(response => response.json())
   .then(data =>{

       
       renderUsers(data)
   }
)

fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
    .then(response => response.json())
    .then(data => {
        users = data;
        return users;
       
    }
)