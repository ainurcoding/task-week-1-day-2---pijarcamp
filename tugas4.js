// a
// ubah data tersebut menggunakan spread operator menjadi 
/**
 * name : nama anda
 * email : email anda
 * hobby : hobi anda
 */



let data = {
    id : 1,
    name : 'Leanne Graham',
    username: 'Bret',
    email : 'Sincere@april.biz',
    address : {
        street: 'kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
}
// sebelum diubah
console.log(`sebelum dirubah:\n${data.name}\n${data.email}`);



let ubahData = {
    // mengubah data objek di dalam objek
    name : data.name="Ainur Ridwan",
    hobby : ["gaming","traveling","reading"],
    email : data.email="ainurridwank2@gmail.com",
}
// setelah diubah
console.log(`\nSetelah dirubah:`)
console.log({...ubahData})


// b
// mengambil data street dan city menggunakan destructuring

const {street, city} = data.address;

console.log(`street: ${street},\ncity: ${city}`)