var x=document.getElementById('demo')
var y=document.getElementById('demo2')
var cartoona=``
for(var i=0;i<300;i++){
  cartoona+=`.`
}
x.innerHTML=cartoona;
y.innerHTML=cartoona;



var namee =document.getElementById('name')
var url=document.getElementById('link')
var websites=[]

if(localStorage.getItem('web')!=null){
  websites=JSON.parse(localStorage.getItem('web'))
  display()
}

function Add(){
  obj={
    name:namee.value,
    url:url.value
  }

  
  const exists = websites.some(obj => obj.url === url.value);
  var x=document.getElementById('valid')
  var y=document.getElementById('validd')
  if(x.innerHTML!=""||y.innerHTML!=""){
    x.innerHTML=""
    y.innerHTML=""
  }

  if(!checkName(namee.value)){
   y.innerHTML=`Name Is Not Valid !`
   y.classList.add('valid')
   return
  }
  if(exists){
    x.innerHTML=`Website Is Exist !`
    x.classList.add('valid')
  }
  else{
    if(UrlValidation(url.value)){
      websites.push(obj)
      localStorage.setItem('web',JSON.stringify(websites))
      clear()
      
    }
    else{
      x.innerHTML=`Invalid URL!`
      x.classList.add('valid')
   
  }

 display()
}


}


function display(){
 var cartoona=``
 for(var i=0;i<websites.length;i++){
  cartoona+=`<tr> <td>${i} </td>
  <td>${websites[i].name} </td>
  <td><div> <button class="btn btn-info " onclick="visit(${i})">Visit</button></td>
     <td> <button class="btn btn-danger" onclick="Delete(${i})">Delete</button></div></td>
  </tr>`
 }


 document.getElementById('web').innerHTML=cartoona

}

function Delete(index){
  websites.splice(index,1)
  display()
  localStorage.setItem('web',JSON.stringify(websites))
}


function visit(index){
  window.open(websites[index].url, "_blank");
}
function UrlValidation(url){
  var regex=/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  return regex.test(url)

}

function checkName(name){
  var regex=/^[^\s]+$/
  return regex.test(name)
}
function clear(){
  namee.value=""
  url.value=""
 
}