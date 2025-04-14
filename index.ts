// Фиксируем тип данных string
/* let userName: string = "Tamerlan";
// userName.isInteger();

userName = "Ivan"; */ // Переиспользуем переменную

// '', "", `` string type
// 10, 0.5, 0.00001, -50, 4e10 number type
// true, false boolean type

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)

const isBirthday: boolean = true; // Фиксируем тип данных boolean
let age: number; // Фиксируем тип данных number
const userName: string = "John";

age = 40; // Добавляем значение для глобальной переменной

if (isBirthday) {
    // выводим в консоль и приводом к верхнему регистру при помощи метода toUpperCase, (засчет фиксированного типа данных на переменной userName)
    console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
}
