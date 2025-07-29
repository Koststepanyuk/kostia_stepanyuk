var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru" // Нам такі не підходять
  }
];

// Регулярний вираз:
// - перед @: одне або два слова, розділені крапкою, з букв/цифр
// - після @: тільки gmail.com або yahoo.com
var trustedEmailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

// Фільтрація
var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
  var currentEmail = arr[i].email;

  if (trustedEmailRegex.test(currentEmail)) {
    trustedEmails.push(currentEmail);
  }
}

// Виводимо результат
console.log("Довірені адреси:");
console.log(trustedEmails);
