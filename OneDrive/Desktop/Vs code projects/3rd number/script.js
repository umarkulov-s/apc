let name = prompt("ismiingizni kiriting:").toLowerCase().trim();

let log = "";
for (let i = name.length - 1; i >= 0; i--) {
    log += name[i];
}
console.log(log);