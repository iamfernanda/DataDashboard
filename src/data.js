     //Función que  muestra la selección de cohorts una vez presionado el boton "buscar"//
        function busqueda() {
        document.getElementById("box2").style.visibility = "visible";
       }
     

     
     window.functions = {
       computeUsersStats : (users, progres, course) => {
           console.log('sdqewqeq')
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

                //console.log(course[j]);
                let units = progress[course[j]]["units"];
                let parts = Object.keys(units).map((unit)=>{
                    return units[unit]["parts"];
                });
                let partsData = [];
                parts.forEach((part) => {partsData = partsData.concat(Object.values(part))});
                
                let reads = partsData.filter((part) => {
                    return part.type === 'read';
                });

                let quizzes = partsData.filter((part) => {
                    return part.type === 'quiz';
                });

                let practices = partsData.filter((part) => {
                    return part.type === 'practice';
                });

                console.log(reads, quizzes, practices);



                //console.log(progress);
            }
        }
    }
}



    







