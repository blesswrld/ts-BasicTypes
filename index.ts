// Объект с 3 свойствами
const userData = {
    isBirthdayData: true, // boolean
    ageData: 40, // number
    userNameData: "John", // string
    messages: {
        error: "Error", // Значение свойства error
    }, // Вложенный объект для теста деструктуризации
};

// Tuples (Кортежи)
// Описываем структуру данных и фиксируем их тип (по-порядку)
const userDataTuple: [...boolean[], number, string] = [
    // Разворачиваем массив булиновых типов используя Spread оператор (для доп.значений)
    true,
    false,
    40,
    "John",
];
// userDataTuple[3];
// userDataTuple.push(50);
// userDataTuple[3];

const res = userDataTuple.map((t) => `${t} - data`);

// Назначаем свойства для значений кортежа по-порядку
const [bthd, age, userName] = userDataTuple;

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
