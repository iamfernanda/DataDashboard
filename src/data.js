const btn = document.querySelector("button");

const nameJson = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";


fetch(nameJson)
   .then(response => response.json())
   .then(data =>{

       console.log(data);
       renderUsers(data)
   }
)

