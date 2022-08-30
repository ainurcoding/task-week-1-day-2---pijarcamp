// Buat variabel dengan nama biodata

const biodata = {
    name: "Ainur Ridwan",
    age: 23,
    hobbies: ["traveling", "gaming", "reading"],
    IsMarried: false,
    // the code below is an example of an array of objects
    schoolList: [
        {
            name: "SMK Penida 2 Katapang",
            yearIn: "2013",
            yearOut: "2016",
            major: null
        },
        {
            name: "Universitas Gunadarma",
            yearIn: "2016",
            yearOut: "2020",
            major: "Bachelor of Engineering"
        }
    ],
    skills: [
        {
            skillName: "Networking",
            level: "advanced"
        },
        {
            skillName: "Workteam",
            level: "advanced"
        },
        {
            skillName: "public speaking",
            level: "advanced"
        },
        {
            skillName: "web programming",
            level: "beginner"
        }
    ],
    interestInCoding: true,
}

console.log(typeof biodata);
