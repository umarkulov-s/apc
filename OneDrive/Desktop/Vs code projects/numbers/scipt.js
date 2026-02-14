// var num = 5;
// console.log(num);

// num++;
// console.log(num);
// num--;

// console.log(num);
let gap = prompt("Uzun gap kiriting:").trim();
let harf = prompt("Qaysi harfni sanaymiz?").trim();

let count = 0;

for (let i = 0; i < gap.length; i++) {
    if (gap[i].toLowerCase() == harf.toLowerCase()) {
        count++;
    }
}

alert(harf + " - " + count + " marta yozilgan");
