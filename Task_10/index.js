function getInputValue1() {
  var inputValue = document.getElementById("exampleInputEmail1").value;

  document.getElementById("exampleInputPassword1").innerHTML = inputValue;
}

function getInputValue2() {
  var inputValue = document.getElementById("p_2").value;
  if (inputValue % 3 == 0 && inputValue % 4 == 0) {
    document.getElementById("p_22").innerHTML = "YES";
  } else {
    document.getElementById("p_22").innerHTML = "NO";
  }
}

function getInputValue3() {
  var inputValue1 = document.getElementById("p_3").value;
  var inputValue2 = document.getElementById("p_3_").value;

  if (inputValue1 > inputValue2) {
    document.getElementById("p_33").innerHTML =
      "First Number is max  " + inputValue1;
  } else if (inputValue1 < inputValue2) {
    document.getElementById("p_33").innerHTML =
      "Second Number is max  " + inputValue2;
  } else {
    document.getElementById("p_33").innerHTML = "Two numbers Are Equal ";
  }
}
function getInputValue4() {
  var inputValue1 = document.getElementById("p_4").value;

  if (inputValue1 >= 0) {
    document.getElementById("p_44").innerHTML = "positive ";
  } else {
    document.getElementById("p_44").innerHTML = "Negative ";
  }
}
function getInputValue5() {
  var inputValue1 = document.getElementById("p_5").value;
  var inputValue2 = document.getElementById("p_5_").value;
  var inputValue3 = document.getElementById("p_5__").value;
  var res;
  console.log(Math.min(inputValue1, inputValue2, inputValue3));
  res =
    "Min number =" + Math.min(inputValue1, inputValue2, inputValue3) + " , ";
  res +=
    " Max number =  " + Math.max(inputValue1, inputValue2, inputValue3) + " ";

  document.getElementById("p_55").innerHTML = res;
}
function getInputValue7() {
  var inputValue1 = document.getElementById("p_7").value;
  var st = "aAeEIioOuU";
  if (st.includes(inputValue1)) {
    document.getElementById("p_77").innerHTML = "character is vowel ";
  } else {
    document.getElementById("p_77").innerHTML = "character is  consonant";
  }
}

function getInputValue8() {
  var inputValue1 = document.getElementById("p_8").value;

  var ress = "";
  for (var i = 1; i <= parseInt(inputValue1); i++) {
    ress += i;
    ress += ",";
  }
  document.getElementById("p_88").innerHTML = ress;
}
function getInputValue9() {
  var inputValue1 = document.getElementById("p_9").value;

  var ress = "";
  for (var i = 1; i <= 12; i++) {
    ress += inputValue1 * i;
    ress += ",";
  }
  document.getElementById("p_99").innerHTML = ress;
}
function getInputValue10() {
  var inputValue1 = document.getElementById("p_10").value;

  var ress = "";
  for (var i = 1; i <= parseInt(inputValue1); i++) {
    if (i % 2 == 0) {
      ress += i;
    } else {
      continue;
    }
    ress += ",";
  }
  document.getElementById("p_1010").innerHTML = ress;
}
function getInputValue11() {
  var inputValue1 = document.getElementById("p_11").value;
  var inputValue2 = document.getElementById("p_11_").value;

  var ress = Math.pow(inputValue1, inputValue2);
  document.getElementById("p_1111").innerHTML = ress;
}
function getInputValue12() {
  var inputValue1 = document.getElementById("p_12").value;
  var inputValue2 = document.getElementById("p_12_").value;
  var inputValue3 = document.getElementById("p_12__").value;
  var inputValue4 = document.getElementById("p_12___").value;
  var inputValue5 = document.getElementById("p_12____").value;

  var averge =
    (parseInt(inputValue1) +
      parseInt(inputValue2) +
      parseInt(inputValue3) +
      parseInt(inputValue4) +
      parseInt(inputValue5)) /
    5;
  var total =
    parseInt(inputValue1) +
    parseInt(inputValue2) +
    parseInt(inputValue3) +
    parseInt(inputValue4) +
    parseInt(inputValue5);
  var ans = "";
  console.log(averge);
  ans += "total marks= " + total + " , ";
  ans += "averge marks= " + averge;
  document.getElementById("p_1212").innerHTML = ans;
}
function getInputValue13() {
  var inputvalue1 = document.getElementById("p_13").value;
  var v = inputvalue1.toLowerCase();
  console.log(v);
  //var ans="";
  if (
    v === "january" ||
   v === "march" ||
   v === "may" ||
  v === "july" ||
    v=== "august" ||
  v === "october" ||
  v === "december"
  ) {
    document.getElementById("p_1313").innerHTML = "Days in the mounth= " + 31;
  }
  else if(v==="february"){
     document.getElementById('p_1313').innerHTML="Days in the mounth= "+28;
  }
  else{
     document.getElementById('p_1313').innerHTML="Days in the mounth= "+30;
  }
}

// using console and prompt 
  // q15  
// var total=0;
// for(var i=0;i<5;i++){
//     var x=parseInt(window.prompt("Input :"));
//     total+=x;
// }
// var Percentage=((total/500)*100);
// if(Percentage >= 90){
//     console.log("Percentage = "+Percentage+" Grad "+'A')
// }
// else if(Percentage >= 80){
//     console.log("Percentage = "+Percentage+" Grad "+'B')
// }
// else if(Percentage >= 70){
//     console.log("Percentage = "+Percentage+" Grad "+'c')
// }
// else if(Percentage >= 60){
//     console.log("Percentage = "+Percentage+" Grad "+'D')
// }
// else{
//     console.log("Percentage = "+Percentage+" Grad "+'F')
// }

//q16
// const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var x = parseInt(prompt("Input: - Month Number:"));
// switch (x) {
//     case 1:
//         console.log("Output: Days in Month: " + daysInMonth[0]);
//         break;
//     case 2:
//         console.log("Output: Days in Month: " + daysInMonth[1]);
//         break;
//     case 3:
//         console.log("Output: Days in Month: " + daysInMonth[2]);
//         break;
//     case 4:
//         console.log("Output: Days in Month: " + daysInMonth[3]);
//         break;
//     case 5:
//         console.log("Output: Days in Month: " + daysInMonth[4]);
//         break;
//     case 6:
//         console.log("Output: Days in Month: " + daysInMonth[5]);
//         break;
//     case 7:
//         console.log("Output: Days in Month: " + daysInMonth[6]);
//         break;
//     case 8:
//         console.log("Output: Days in Month: " + daysInMonth[7]);
//         break;
//     case 9:
//         console.log("Output: Days in Month: " + daysInMonth[8]);
//         break;
//     case 10:
//         console.log("Output: Days in Month: " + daysInMonth[9]);
//         break;
//     case 11:
//         console.log("Output: Days in Month: " + daysInMonth[10]);
//         break;
//     case 12:
//         console.log("Output: Days in Month: " + daysInMonth[11]);
//         break;
//     default:
//         console.log("Output: Invalid month number.");
// }
//q17
// var x = prompt("Input: - Enter a character:");
// x = x.toLowerCase();
// switch (x) {
//     case 'a':
//         console.log("Output: Vowel");
//         break;
//     case 'e':
//         console.log("Output: Vowel");
//         break;
//     case 'i':
//         console.log("Output: Vowel");
//         break;
//     case 'o':
//         console.log("Output: Vowel");
//         break;
//     case 'u':
//         console.log("Output: Vowel");
//         break;
//     default:
//         console.log("Output: Consonant");
//         break;
// }
//q18
// var x = parseInt(window.prompt("input x:"));
// var y = parseInt(window.prompt("input y:"));
// switch (true) {
//     case x > y:
//         console.log("The Max num is " + x);
//         break;
//     default:
//         console.log("The Max num is " + y);
// }
//q19
// var x = parseInt(window.prompt("input x:"));
// switch (true) {
//     case x%2==0:
//         console.log("Even Number");
//         break;
//         default:
//             console.log("Odd Number");
//             break;
// }
//q20
// var x = parseInt(window.prompt("input x:"));
// switch (true) {
//     case x<0:
//         console.log("Negative Number");
//         break;
//     default:
//         console.log("Positive Number");
//         break;
// }
//21
// var x = parseFloat(window.prompt("Enter the first number:"));
// var operator = window.prompt("Enter the operator (+, -, *, /):");
// var y = parseFloat(window.prompt("Enter the second number:"));
// var res;
// switch (operator) {
//     case "+":
//         res = x + y;
//         console.log("res: " + res);
//         break;
//     case "-":
//         res = x - y;
//         console.log("res: " + res);
//         break;
//     case "*":
//         res = x * y;
//         console.log("res: " + res);
//         break;
//     case "/":
//         if (y !== 0) {
//             res = x / y;
//             console.log("res: " + res);
//         } else {
//             console.log(" not allowed!");
//         }
//         break;
//     default:
//         console.log("Invalid operator!");
// }