// Program yang menghitung rata-rata UN beserta gradenya dengan mengisi 4 nilai, yakni:
/**
 * Bahasa indonesia
 * Bahasa Inggris
 * Matematika
 * Ipa 
**/

const math = 70;
const BahasaIndonesia = 80;
const BahasaInggris = 99;
const ipa = 90;

let total = math + BahasaIndonesia + BahasaInggris + ipa;
let count = total / 4;
switch (true) {
    case (count >= 0 && count <= 59):
        console.log(`Rata-rata = ${count}\nGrade = E`);
        break;
    case (count >= 60 && count <= 69):
        console.log(`Rata-rata = ${count}\nGrade = D`);
        break;
    case (count >= 70 && count <= 79):
        console.log(`Rata-rata = ${count}\nGrade = C`);
        break;
    // kondisi tidak apa jika tidak dalam scope apapun
    case count >= 80 && count <= 89:
        console.log(`Rata-rata = ${count}\nGrade = B`);
        break;
    case (count >= 90 && count <= 100):
        console.log(`Rata-rata = ${count}\nGrade = A`);
        break;
    default:
        console.log("anda wajib mengulang");
        break;
}


