//fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
//     .then(response => response.json())
//     .then(users => {
//       console.log(users)
//     })
//fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
//     .then(response => response.json())
//     .then(id => {
//       console.log(id)
//      })
//fetch("../data/cohorts.json")
//     .then(response => response.json())
//     .then(cohorts => {
//       console.log(cohorts)
//      })


    Promise.all([
        fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
        fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
        fetch("../data/cohorts.json")
    ]).then((datosj) => {
            return Promise.all(datosj.map((respuesta) => {
                    return respuesta.json();
}));

}
).then((respuestajson)=>{
    console.log(respuestajson);
    let users = respuesta[0];
    let progress = respuesta[1];
    let course = respuesta[2];
}).catch((error) => {
    console.error(error);

});

   window.functions ={
       computeUsersStats : (users,progress,course) =>{
        for (i = 0; i < users.length; i++) {
            let userId = users[i].id;
            let progress = progress[userId];
}}}; 


let usersData = [];
let progressData = {};
let cohortData = {};
let cohortUsers = [];
let userStats = [];
let cohorts = {};
let courses = [];
let userByCohort = [];
    



