// That's how you can do Query
// Imported file from model.js
const {db,Student} = require('./model')
const { Op } = require("sequelize");


const task = async () => {
    try{
        await db.sync()
       // This is how we can find all students information 
       // const students = await Student.findAll()

       // This is how we find the student information of age = 12
         const students = await Student.findAll({
             where : {age: {
                [Op.gt]: 25   // Greater than 25 age
              }},
              order :[
                  ['name', 'ASC'],
                  ['age' , 'DESC'],
            ]
         })
        // Prints the info. of students greater than age 12
        // const students = await Student.findAll({
        //     where: {age: {$gt: 15}},
        // })
        // Everything is given in the documentation of seQuelijejs.com => ordering,


        students.forEach(student => console.log(`name : ${student.dataValues.name} \t\t age : ${student.dataValues.age}`))
        // students.forEach(s => console.log(
        //     s.dataValues
        // ))
       // console.log(students)
        // Await is used bcoz all students in the findAll function are promise based
       
    } catch (e) {
        console.error(e)
    }

}
task();