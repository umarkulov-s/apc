// var a = prompt("Amalni yozing").trim();

// var res = a.split (" ");

// var stnum = +res[0];
// var amal = res[1];
// var num2 = +res[2];

// switch (amal) {
//     case    "+":
//         alert(stnum + num2);
//         break;
//     case  "-":
//         alert(stnum - num2);
//         break;
//     case  "/":      
//         alert(stnum / num2);
//         break;
//     case  "*":
//         alert(stnum * num2);
//         break;

//     default:
//         alert("notogri amal kiritldi")
//         break;
//     }
// var input = prompt("marn yozing");

// switch (true) {

//     case (input === null && input.trim() === ""):
//         console.log("soz yozilmadi");
//         break;

//     default:
//         var words = input.trim().split(" ");
//         var count = 0;

//         for (var i = 0; i < words.length; i++) {

//             switch (words[i]) {
//                 case "":
//                     break;

//                 default:
//                     console.log(words[i]);
//                     count++;
//             }
//         }

//         console.log( count + "ta soz");
// }
let name = prompt("ismiingizni kiriting:").toLowerCase().trim();

let log = "";
for (let i = name.length - 1; i >= 0; i--) {
    log += name[i];
}
console.log(log);