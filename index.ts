const isBirthdayData: boolean = true; // Фиксируем тип данных boolean
let ageData: number = 40;
const userNameData: string = "John"; // Фиксируем тип данных string

// Стрелочная функция
const createError = (msg: string) => {
    throw new Error(msg); // выбрасываем ошибку с типом never (который ничего не возвращает и ничего не содержит)
};

// Стрелочная функция
function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
    // указываем тип выводимых данных : string, но с обязательным условием (НАЛИЧИЕ else)
    if (isBirthday === true) {
        // выводим в консоль и приводом к верхнему регистру при помощи метода toUpperCase, (засчет фиксированного типа данных на переменной userName)
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return "Too bad";
    }
    return createError("Error"); // Вызываем функцию которая выбрасывает ошибку для прекращения условий
}

logBrtMsg(isBirthdayData, 40, userNameData);

// const smth: never = null;

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
