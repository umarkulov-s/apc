var input = prompt("Telefon raqam yoki email kiriting:");

if (input === null) {
    console.log("Noto‘g‘ri kiritildi");
} else {

    input = input.trim();

    switch (true) {


        case (input.startsWith("+998")):

            var phone = input.replaceAll(" ", "");

            if (phone.length !== 13) {
                console.log("Notogri kiritildi");
            } else {

                var code = phone.slice(4, 6);

                if (code === "99") {
                    console.log("UzMobile");
                }
                else if (code === "77") {
                    console.log("UzMobile");
                }
                else if (code === "88") {
                    console.log("MobiUz");
                }
                else if (code === "90") {
                    console.log("BeeLine");
                }

                
                var part1 = phone.slice(0, 4);   
                var part2 = phone.slice(4, 6);   
                var part3 = phone.slice(6, 9);   
                var part4 = phone.slice(9, 11);  
                var part5 = phone.slice(11, 13); 

                console.log(part1 + " (" + part2 + ") " + part3 + " " + part4 + " " + part5);
            }

            break;


        default:
            console.log("Noto‘g‘ri kiritildi");
    }
}