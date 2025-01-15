// let statu ={
//     name : "elvin",
//     gender : "kisi",
//     birtday:"4 iyun"
// }
// statu.age=13;
// delete statu.birtday
// console.log(statu)
let person = {
    name: "Ferid",
    surname: "Ceferov",
    age: 32,
    country: "Azerbaijan",
    job: "Programmer",
  };
  document.getElementById("name").value = `Name: ${person.name}`;
  document.getElementById("surname").value = `Surname: ${person.surname}`;
  document.getElementById("age").value = `Age: ${person.age}`;
  document.getElementById("country").value = `Country: ${person.country}`;
  document.getElementById("job").value = `Job: ${person.job}`;