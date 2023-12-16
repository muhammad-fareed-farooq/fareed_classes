// const num = 5

// if(num > 2)
// console.log("ok");


const student_info = {
     name : "owais",
     classes: "10",
     city : "karachi"   
}

const secont_info = {
    scroe : 70,
    grade : ""
}

const obj = {
    ...student_info,
    ...secont_info,
        
    
}

 const {scroe} = obj

//  obj.grade = scroe >=80 ? "A+" : scroe >=60 ? "B" : scroe >=40 ? "C" : "fail"

//  console.log(obj);

const dtb = () =>
{
   return obj.grade = scroe >=80 ? "A+" : scroe >=60 ? "B" : scroe >=40 ? "C" : "fail"
}

dtb()

console.log(obj);
  
 









 














// console.log(obj);

// const {scroe} = obj  



// obj.grade >=80 && obj.scroe <=100 ? obj = "A+" :obj.grade >=60 && obj.scroe <=70 ?"A": obj.grade >=40 && obj.scroe <=50 ? "B": obj.grade = "fail" 

// console.log(obj);