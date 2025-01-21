// let statu ={
//     name : "elvin",
//     gender : "kisi",
//     birtday:"4 iyun"
// }
// statu.age=13;
// delete statu.birtday
// console.log(statu)
// let person = {
//     name: "Ferid",
//     "surname : "Ceferov",
//     age: 32,
//     country: "Azerbaijan",
//     job: "Programmer",
//   };
//   document.getElementById("name").value = `Name: ${person.name}`;
//   document.getElementById("surname").value = `Surname: ${person.surname}`;
//   document.getElementById("age").value = `Age: ${person.age}`;
//   document.getElementById("country").value = `Country: ${person.country}`;
//   document.getElementById("job").value = `Job: ${person.job}`;
// İstifadəçi obyekti yaradılır

// let  user = {
//   ad: "Elvin",
//   soyad: "Quliyev",
//   yas: 70, 
//   teqaudHesabla: function () {
// if (this.yas<65) {
//   console.logz(`salam ${this.ad} ${this.soyad} sizin teqaute cixmaqa ${65-this.yas}iliniz qalib`)
// } else {
//   console.logz(`salam ${this.ad} ${this.soyad} siz artiq teqaute cixmisiniz`)
// }
//   },
// };
// user.teqaudHesabla();


// task1
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

let book1 = new Book("1984", "George Orwell", 1949);
let book2 = new Book("Səhra Çiçəyi", "Waris Dirie", 1998);
let book3 = new Book("Körpülərarası Gərginlik", "Orhan Pamuk", 2006);

let books = [book1, book2, book3];
// task 2
console.log(books);
const userAccount = {
  money: 2500, 
  moneyLimit: function() {
    if (this.money < 2000) {
      return  console.log("Limiti aşmamısınız");
    } else {
      return console.log( `Pul limitini ${2000- this.money} dollar aşmısınız.`);
    }
  }
};


userAccount.moneyLimit()
