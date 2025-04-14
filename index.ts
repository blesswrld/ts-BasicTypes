const isBirthdayData: boolean = true; // Фиксируем тип данных boolean
let ageData: number = 40;
const userNameData: string = "John"; // Фиксируем тип данных string

// Стандартная функция
// Передаем аргументы в функцию указывая тип данных каждой переменной
// function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
//     // указываем тип выводимых данных : string, но с обязательным условием (НАЛИЧИЕ else)
//     if (isBirthday) {
//         // выводим в консоль и приводом к верхнему регистру при помощи метода toUpperCase, (засчет фиксированного типа данных на переменной userName)
//         return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "Error";
//     }
// }

// Стрелочная функция
const logBrtMsg = (
    isBirthday: boolean,
    age: number,
    userName: string
): string => {
    // указываем тип выводимых данных : string, но с обязательным условием (НАЛИЧИЕ else)
    if (isBirthday) {
        // выводим в консоль и приводом к верхнему регистру при помощи метода toUpperCase, (засчет фиксированного типа данных на переменной userName)
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else {
        return "Error";
    }
};

logBrtMsg(isBirthdayData, 40, userNameData);

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
