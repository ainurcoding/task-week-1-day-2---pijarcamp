// 3
// Buatlah program yang memiliki stau variabel dengan nama printSegitiga

const printSegitiga =  10;
console.log(typeof printSegitiga);


if (typeof printSegitiga === "number") {
    for (let i = printSegitiga; i >= 1; i--) {
        let num=[];
        for (let j = 1; j <= i; j++) {
            num.push(j);
        }
        console.log(...num);
    }
} else {
    console.log("Data harus number");
}