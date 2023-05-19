const {db, Student} = require('./model')

const task = async () => {
    try{
        await db.sync()

        //Insert a student
        for(let i = 0; i< 30;i++){
        await Student.create({
            name : (['Ram' , 'Shyam' ,'John' ,'Priyam','Anmol','Raja' ,'Himanshu','Neha'])[parseInt(Math.random() * 10)],
            age : 10 + parseInt(Math.random() * 10),
        })
    }
        // await Student.create({
        //     name : "Some Person",
        //     age : 20,
        // })
    }catch(e){
        console.log(e)
    }
} 
task()

