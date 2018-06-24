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
).then((respuesta)=>{
    console.log(respuesta);
    let users = respuesta[0];
    let progress = respuesta[1];
    let course = respuesta[2];

   let myUsers = window.functions.computeUsersStats(users, progress, Object.keys(course[3].coursesIndex) );
}).catch((error) => {
    console.error(error);
})
     window.functions = {
       computeUsersStats : (users,progres, course) => {
        for (let i = 0; i < users.length; i++) {
            let userId = users[i].id;
            let progress = progres[userId];

            let usersData = [];
            let progressData = {};
            let cohortData = {};
            let cohortUsers = [];
            let userStats = [];
            let cohorts = {};
            let courses = [];
            let userByCohort = [];
 
            for(let j=0; j < course.length; j++){

                console.log(course[j]);

                console.log(progress);
            }
        }
    }
}


    



