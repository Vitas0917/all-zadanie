// 1
function calculateDiscount(price, discount) {
    if (discount < 0 || discount > 100) {
        return "Некорректная скидка!";
    }

    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    return finalPrice;
}

console.log(calculateDiscount(20000, 15));
console.log(calculateDiscount(50000, 20));

// 2
function getStudentLevel(score) {
    if (score < 0 || score > 100) {
        return "Некорректный балл";
    } else if (score >= 90) {
        return "Отличный уровень";
    } else if (score >= 70) {
        return "Хороший уровень";
    } else if (score >= 50) {
        return "Средний уровень";
    } else {
        return "Низкий уровень";
    }
}

console.log(getStudentLevel(95));
console.log(getStudentLevel(72));
console.log(getStudentLevel(38));

// 3
function generatePassword(length) {
    if (!Number.isInteger(length) || length < 1) {
        return "Некорректная длина пароля!";
    }

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    return password;
}

console.log(generatePassword(8));
console.log(generatePassword(12));

// 4
function countVowels(text) {
    let vowels = "аеёиоуыэюяaeiou";
    let consonants = "бвгджзйклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonantCount = 0;

    text = text.toLowerCase();

    for (let char of text) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

console.log(countVowels("Программирование"));
console.log(countVowels("JavaScript"));

// 5

let products = [
    { name: "Ноутбук", price: 350000 },
    { name: "Телефон", price: 220000 },
    { name: "Планшет", price: 180000 },
    { name: "Компьютер", price: 500000 }
    
];

function findExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }

    let expensive = products[0];

    for (let product of products) {
        if (product.price > expensive.price) {
            expensive = product;
        }
    }

    return expensive;
}

function findCheapestProduct(products) {
    if (products.length === 0) {
        return null;
    }

    let cheapest = products[0];

    for (let product of products) {
        if (product.price < cheapest.price) {
            cheapest = product;
        }
    }

    return cheapest;
}

console.log("Самый дорогой товар:");
console.log(findExpensiveProduct(products));

console.log("Самый дешёвый товар:");
console.log(findCheapestProduct(products));

// 6
function calculateAttendance(total, attended) {
    if (
        !Number.isFinite(total) ||
        !Number.isFinite(attended) ||
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {
        return "Ошибка данных";
    }

    let percent = attended / total * 100;
    let status;

    if (percent >= 90) {
        status = "Высокая посещаемость";
    } else if (percent >= 70) {
        status = "Средняя посещаемость";
    } else {
        status = "Низкая посещаемость";
    }

    return {
        percent: percent.toFixed(1) + "%",
        status: status
    };
}

console.log(calculateAttendance(40, 38));
console.log(calculateAttendance(40, 30));
console.log(calculateAttendance(40, 20));

// 7

const students = [
    { name: "Рамазан", score: 92 },
    { name: "Никита", score: 65 },
    { name: "Виталий", score: 78 },
    { name: "Петя", score: 48 },
    { name: "Артем", score: 88 }
];

function getSuccessfulStudents(students) {
    return students
        .filter(student => student.score >= 70)
        .sort((a, b) => b.score - a.score);
}

console.log(getSuccessfulStudents(students));

// 8

let balance = 100000;
let secondBalance = 50000;

function deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        return "Некорректная сумма";
    }

    balance += amount;
    return "Баланс пополнен на " + amount;
}

function withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        return "Некорректная сумма";
    }

    if (amount > balance) {
        return "Недостаточно средств";
    }

    balance -= amount;
    return "Снято: " + amount;
}

function getBalance() {
    return balance;
}

function transfer(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        return "Некорректная сумма";
    }

    if (amount > balance) {
        return "Недостаточно средств для перевода";
    }

    balance -= amount;
    secondBalance += amount;

    return "Переведено: " + amount;
}

console.log(deposit(50000));
console.log(withdraw(30000));
console.log(transfer(20000));

console.log("Первый счёт:", getBalance());
console.log("Второй счёт:", secondBalance);1

// 9 
function isPalindrome(text) {
    let original = text
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]/gi, "");

    let reversed = original
        .split("")
        .reverse()
        .join("");

    return original === reversed;
}

console.log(isPalindrome("казак"));
console.log(isPalindrome("level"));
console.log(isPalindrome("javascript"));
console.log(isPalindrome("А роза упала на лапу Азора!"));

// 10
let students1 = [];

function addStudent(name, score) {
    if (!name.trim() || !Number.isFinite(score) || score < 0 || score > 100) {
        return "Некорректные данные";
    }

    students.push({ name, score });
    return "Студент добавлен";
}

function removeStudent(name) {
    let index = students.findIndex(
        student => student.name === name
    );

    if (index === -1) {
        return "Студент не найден";
    }

    students.splice(index, 1);
    return "Студент удалён";
}

function findStudent(name) {
    return students.find(
        student => student.name === name
    ) || null;
}

function showStudents() {
    console.table(students);
}

console.log(addStudent("Алия", 90));
console.log(addStudent("Руслан", 75));
console.log(addStudent("Дамир", 85));

console.log("Все студенты:");
showStudents();

console.log("Поиск студента:");
console.log(findStudent("Алия"));

console.log("Удаление студента:");
console.log(removeStudent("Руслан"));

console.log("Список после удаления:");
showStudents();

// Уровень А 2

function square(number) {
    return number * number;
}

console.log("Квадрат числа 4:", square(4));
console.log("Квадрат числа 7:", square(7));
console.log("Квадрат числа 10:", square(10));

// 3
function sum(a, b) {
    return a + b;
}

console.log("Сумма:", sum(15, 25));
console.log("Сумма:", sum(10, 20));
console.log("Сумма:", sum(50, 30));

// 4
function rectangleArea(width, height) {
    return width * height;
}

console.log("Площадь:", rectangleArea(5, 8));
console.log("Площадь:", rectangleArea(4, 6));
console.log("Площадь:", rectangleArea(10, 12));

// Уровень В 5
function checkEven(number) {
    if (number % 2 === 0) {
        return "Чётное";
    } else {
        return "Нечётное";
    }
}

console.log(12, "-", checkEven(12));
console.log(7, "-", checkEven(7));
console.log(24, "-", checkEven(24));
console.log(15, "-", checkEven(15));

// 6
function checkAge(age) {
    if (age >= 18) {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
}

console.log("Возраст 16:", checkAge(16));
console.log("Возраст 18:", checkAge(18));
console.log("Возраст 20:", checkAge(20));

// 7
function average(a, b, c) {
    return (a + b + c) / 3;
}

console.log("Средний балл:", average(80, 90, 100));
console.log("Средний балл:", average(70, 85, 95));
console.log("Средний балл:", average(60, 75, 90));

// 8
function calculator(a, b, operation) {
    if (operation === "+") {
        return a + b;
    }

    if (operation === "-") {
        return a - b;
    }

    if (operation === "*") {
        return a * b;
    }

    if (operation === "/") {
        if (b === 0) {
            return "Деление на ноль!";
        }

        return a / b;
    }

    return "Неизвестная операция";
}

console.log("Сложение:", calculator(10, 5, "+"));
console.log("Вычитание:", calculator(10, 5, "-"));
console.log("Умножение:", calculator(10, 5, "*"));
console.log("Деление:", calculator(10, 5, "/"));
console.log("Проверка нуля:", calculator(10, 0, "/"));
console.log("Другая операция:", calculator(10, 5, "%"));

// 9

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Некорректный балл";
    }

    if (score >= 90) {
        return "Отлично";
    } else if (score >= 70) {
        return "Хорошо";
    } else if (score >= 50) {
        return "Удовлетворительно";
    } else {
        return "Неудовлетворительно";
    }
}

console.log("95 баллов:", getGrade(95));
console.log("78 баллов:", getGrade(78));
console.log("60 баллов:", getGrade(60));
console.log("45 баллов:", getGrade(45));
console.log("105 баллов:", getGrade(105));

// 10
function calculatePrice(price) {
    if (price >= 20000) {
        return price * 0.9;
    }

    return price;
}

console.log("Покупка 15000 тенге:", calculatePrice(15000), "тенге");
console.log("Покупка 20000 тенге:", calculatePrice(20000), "тенге");
console.log("Покупка 30000 тенге:", calculatePrice(30000), "тенге");
console.log("Покупка 50000 тенге:", calculatePrice(50000), "тенге");

// 11

function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

console.log("Максимальное число:", findMax(12, 45, 28));
console.log("Максимальное число:", findMax(90, 30, 50));
console.log("Максимальное число:", findMax(10, 100, 75));
console.log("Максимальное число:", findMax(5, 5, 3));

// 12
function checkAccess(age, registered, permission) {
    if (age >= 16 && registered && permission) {
        return "Доступ в лабораторию разрешён";
    }

    return "Доступ запрещён";
}

console.log(
    "Студент 1:",
    checkAccess(17, true, true)
);

console.log(
    "Студент 2:",
    checkAccess(15, true, true)
);

console.log(
    "Студент 3:",
    checkAccess(18, true, false)
);

console.log(
    "Студент 4:",
    checkAccess(20, false, true)
);

console.log(
    "Студент 5:",
    checkAccess(16, true, true)
);





// Задача 1. Приветствие
function greet(name) {
    return "Привет, " + name + "!";
}

console.log("Задача 1:", greet("Алия"));


// Задача 2. Квадрат числа
function square(num) {
    return num * num;
}

console.log("Задача 2:", square(6));


// Задача 3. Сумма чисел
function sum(a, b) {
    return a + b;
}

console.log("Задача 3:", sum(15, 25));


// Задача 4. Перевод минут
function minutesToSeconds(minutes) {
    return minutes * 60;
}

console.log("Задача 4:", minutesToSeconds(5));


// Задача 5. Площадь квадрата
function area(side) {
    return side * side;
}

console.log("Задача 5:", area(7));


// 
// УРОВЕНЬ B — СРЕДНИЙ
// 

// Задача 6. Чётное или нечётное
function checkNumber(num) {
    if (num % 2 === 0) {
        return "Чётное число";
    } else {
        return "Нечётное число";
    }
}

console.log("Задача 6:", checkNumber(9));


// Задача 7. Проверка совершеннолетия
function checkAge(age) {
    if (age >= 18) {
        return "Совершеннолетний";
    } else {
        return "Несовершеннолетний";
    }
}

console.log("Задача 7:", checkAge(17));


// Задача 8. Максимальное число
function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

console.log("Задача 8:", findMax(12, 45, 30));


// Задача 9. Средний балл
function average(a, b, c) {
    return (a + b + c) / 3;
}

console.log("Задача 9:", average(80, 90, 100));


// Задача 10. Скидка в магазине
function discount(price) {
    if (price > 10000) {
        return price * 0.9;
    } else {
        return price;
    }
}

console.log("Задача 10:", discount(20000));


// 
// УРОВЕНЬ C — СЛОЖНЫЙ
// 

// Задача 11. Калькулятор
function calculator(a, b, operation) {
    if (operation === "+") {
        return a + b;
    }

    if (operation === "-") {
        return a - b;
    }

    if (operation === "*") {
        return a * b;
    }

    if (operation === "/") {
        if (b === 0) {
            return "Деление на ноль невозможно!";
        }

        return a / b;
    }

    return "Неизвестная операция";
}

console.log("Задача 11:", calculator(20, 5, "/"));


// Задача 12. Оценивание студента
function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Некорректный балл";
    }

    if (score >= 90) {
        return "Отлично";
    } else if (score >= 70) {
        return "Хорошо";
    } else if (score >= 50) {
        return "Удовлетворительно";
    } else {
        return "Неудовлетворительно";
    }
}

console.log("Задача 12:", getGrade(85));


// Задача 13. Проверка пароля
function checkPassword(password) {
    if (password.length >= 8) {
        return "Надёжная длина пароля";
    } else {
        return "Слишком короткий пароль";
    }
}

console.log("Задача 13:", checkPassword("JavaScript123"));


// Задача 14. Стоимость такси
function taxiPrice(km) {
    return 500 + km * 120;
}

console.log("Задача 14:", taxiPrice(10), "тенге");


// Задача 15. Банкомат
function withdraw(balance, amount) {
    if (amount <= 0) {
        return "Сумма снятия должна быть больше нуля";
    }

    if (amount > balance) {
        return "Недостаточно средств";
    }

    return balance - amount;
}

console.log("Задача 15:", withdraw(50000, 20000), "тенге");