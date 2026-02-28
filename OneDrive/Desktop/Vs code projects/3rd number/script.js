var name = prompt("ismiingizni kiriting:").toLowerCase().trim();

var log = "";
for (var i = name.length - 1; i >= 0; i--) {
    log = log + name[i];
}
console.log(log);