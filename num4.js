let data = {
    Id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite :  "Apt.556",
        city : "Gwenborough",
        zipcode : "92998-3878",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org"
}

// A 
let newData = { ...data, name : "Faisal Chakiki", email: "faisalchakiki012018@gmail.com", hobbies : ["watching film , game"]}
console.log(newData);

// B
let {address : { street , city }} = newData;
console.log(street);
console.log(city);