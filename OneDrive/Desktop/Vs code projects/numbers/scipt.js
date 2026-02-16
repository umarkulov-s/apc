// var num = 5;
// console.log(num);

// num++;
// console.log(num);
// num--;

// console.log(num);
// let gap = prompt("Uzun gap kiriting:").trim();
// let harf = prompt("Qaysi harfni sanaymiz?").trim();

// let count = 0;

// for (let i = 0; i < gap.length; i++) {
//     if (gap[i].toLowerCase() == harf.toLowerCase()) {
//         count++;
//     }
// }

// alert(harf + " - " + count + " marta yozilgan");



var gap = prompt("Uzun gap kiriting:").trim().toLowerCase();

var hisob = {};

for (var i = 0; i < gap.length; i++) {
    var s = gap[i];

    if (s !== " ") {
        if (hisob[s]) {
            hisob[s]++;
        } else {
            hisob[s] = 1;
        }
    }
}

for (let harf in hisob) {
    console.log(harf + " - " + hisob[harf] + " ta") ;
}