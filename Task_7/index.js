$('#bt1').click(()=>{
   let name=$('#1').val()
   let email=$('#2').val()
   let password=$('#3').val()
   console.log(name,email,password)
   TakeDataSU(name,email,password)
})
DataArr=[]

if (localStorage.getItem('data') === null) {
  DataArr = []
  console.log("empty")
} else {
  DataArr= JSON.parse(localStorage.getItem('data'))
}

function TakeDataSU(x,y,z){
   if(isEmpty(x,y,z)){
    console.log(isEmpty(x,y,z))
       document.getElementById("valid").innerHTML=`Empty Not valid`
   }
   else if(isEmailexist(y)){
    document.getElementById("valid").innerHTML=`Email Exist`
   }
   else{
      obj={
        name:x,
        email:y,
        password:z
      }
      DataArr.push(obj)
      localStorage.setItem('data',JSON.stringify(DataArr))
      document.getElementById("valid").innerHTML=`sucess`
      //console.log(DataArr)

   }   
}
function isEmailexist(y){
  for(var i=0;i<DataArr.length;i++){
           if(DataArr[i].email===y){
               return true
           }
  }
  return false
}
function isEmpty(x,y,z) {
 if(x!=""&&y!=""&&z!=""){
 // console.log("okk")
  return false
 }
 else{
  return true
 }
}


$('#bt2').click(()=>{
  let email=$('#11').val()
  let password=$('#22').val()
 
 // console.log(name,email)
  checkIsValid(email,password)
})


function checkIsValid(x,y){
   z="ggg"
   if(isEmpty(x,y,z)){
    document.getElementById("valid").innerHTML=`Empty Not valid`
   }
   else {
   // console.log(DataArr)
     for(var i=0;i<DataArr.length;i++){
       if(x===DataArr[i].email&&y===DataArr[i].password){
 
         
window.location.href = 'wlcome.html?name=' + encodeURIComponent(DataArr[i].name);

         return
       }
     }
     document.getElementById("valid").innerHTML=`Not Exist`
   }
}
