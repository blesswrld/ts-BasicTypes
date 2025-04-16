const isBirthdayData: boolean = true; // Фиксируем тип данных boolean
let ageData: number = 40; // Фиксируем тип данных number
const userNameData: string = "John"; // Фиксируем тип данных string

// Объект с 3 свойствами
const userData = {
    isBirthdayData: true, // boolean
    ageData: 40, // number
    userNameData: "John", // string
    messages: {
        error: "Error", // Значение свойства error
    }, // Вложенный объект для теста деструктуризации
};

// Стрелочная функция
const createError = (msg: string) => {
    throw new Error(msg); // выбрасываем ошибку с типом never (который ничего не возвращает и ничего не содержит)
};

function logBrtMsg({
    // Выполняем деструктуризацию
    isBirthdayData,
    ageData,
    userNameData,
    messages: { error },
}: {
    // Вытаскиваем свойства из объекта userData
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
    messages: { error: string }; // Вытаскиваем вложенный объект messages и фиксируем его тип
}): string {
    // Указываем тип выводимых данных : string, но с обязательным условием (НАЛИЧИЕ else)
    if (isBirthdayData) {
        // Выводим в консоль и приводом к верхнему регистру при помощи метода toUpperCase, (засчет фиксированного типа данных на переменной userName)
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error); // Вызываем функцию которая выбрасывает ошибку из вложенного объекта для прекращения условий
    }
}

console.log(logBrtMsg(userData)); // Выводим в консоль результат

// const smth: never = null;

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
