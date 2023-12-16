// const student_array = [
//     {
//     name : "student01",
//     class : "01",
//     city : "karachi"
// },
// {
//     name : "student02",
//     class : "02",
//     city : "karachi"
// },
// {
//     name : "student03",
//     class : "03",
//     city : "karachi"
// }
// ]

// const render_student_data = document.getElementById("main")

// student_array.map((current_obj,current_index)=>{

//    const{
//     name,class:student_class,city} =current_obj
//     render_student_data.innerHTML += `
//     <ul>
//     <li>name:${name} </li>
//     <li>class: ${student_class}</li>
//     <li>city: ${city}</li>
// </ul>`

// })



// const student_array = [
//     {
//     name : "student01",
//     class : "01",
//     city : "karachi",
//     score:20
// },
// {
//     name : "student02",
//     class : "02",
//     city : "karachi",
//     score :80
// },
// {
//     name : "student03",
//     class : "03",
//     city : "karachi",
//     score:15
// }
// ]

// const ggg = student_array.filter((current_obj,current_index)=>{

//   if(current_obj.score >= 60){
//     return current_obj
//   }

// })
// console.log(ggg);


// const number =[1,2,3,4,5,6,7,8,9,10]

// const check_even_number = number.filter((current_number)=>
//   current_number % 2 !== 0
// )
// console.log(check_even_number);




// const student_array = [
//     {
//     name : "student01",
//     class : "01",
//     city : "karachi",
//     score:20,
//     status: "passed"
// },
// {
//     name : "student02",
//     class : "02",
//     city : "karachi",
//     score :80,
//     status: "passed"

// },
// {
//     name : "student03",
//     class : "03",
//     city : "karachi",
//     score:15,
//     status: "failed"

// }
// ]

// const ggg = student_array.filter((current_obj)=> current_obj.status === "passed"
    
// )
// console.log(ggg);


// _____________________________lexical scoping & closures____________________________________

// function call_value (){
//     const value = "function value"
//    console.log(value); 
    
//    function inner_funtion(){
//     console.log(value);
//     const inner_funtion_var = "new value"
//     console.log(inner_funtion_var);
   
// }
//    inner_funtion()
// }

// call_value()




// function closures_funtion (){
//     let value = 1
   
//     function inner_closure_function(){
//    value += 1
//   console.log(value);    
// }
//     return inner_closure_function
// }

// const new_function = closures_funtion()

// new_function()
// new_function()



// function closures_funtion (){
//         // let value = 1
       
//         function inner_closure_function(){
//     //    value += 1
//       console.log("value");    
//     }
//         return inner_closure_function
//     }

//     closures_funtion()() 
    
    
    // const new_function = closures_funtion()
    
    // new_function()
    // new_function()








































