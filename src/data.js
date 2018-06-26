     //Función que  muestra la selección de cohorts una vez presionado el boton "buscar"//
        function busqueda() {
        document.getElementById("box2").style.visibility = "visible";
       }
     
     
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


    







