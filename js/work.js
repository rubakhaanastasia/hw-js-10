// 1. Функція giveMessage
const giveMessage = () => {
  console.log("Hello World");
};
giveMessage();


// 2. Функція makeRandomNumber і гра "Вгадай число"
function makeRandomNumber() {
  const randomNumber = Math.random() * (100 - 1) + 1; // Виправлено генерацію випадкового числа
  return randomNumber;
}
const value = makeRandomNumber();
let guessNumber = 0;

for (let i = 0; i < 5; i++) { //для вільної перевірки коду
  guessNumber = Number(prompt("Вгадайте число (впишіть число!):")); // Перетворення введеного значення в число
  if (guessNumber === value) {
    alert("Ви вгадали");
    break;
  } else {
    alert("Ви НЕ вгадали");
  }
}


// 3. Цикл для підрахунку натискань "OK"
let gettingNumber = confirm("Натискайте <OK>");
let countOfNumber = 0;

do {
  gettingNumber = confirm("Продовжуйте натискати <OK>");
  countOfNumber++;
  if (countOfNumber >= 5) {
    break;
  }
} while (gettingNumber === true);

console.log(countOfNumber);


// 4. Застосування колбек-функції до кожного елемента масиву
const applyCallbackToEachElement = (array, callback) => {
  let squaredArray = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let result = callback(number); // Виклик колбек-функції з переданим числом
    squaredArray.push(result);
  }
  return squaredArray;
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = (number) => {
  return number * number; // Повернення квадрату числа
};
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);


// 5. Обчислення дисконтної ціни
const calculateDiscountPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount / 100);
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Дисконтна ціна ${discountedPrice} грн`);
};

calculateDiscountPrice(100, 10, showDiscountedPrice);
