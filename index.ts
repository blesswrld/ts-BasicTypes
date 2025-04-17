const message: string | number = 5; // | - Оператор Union-Типов --- ИСПРАВЛЕНО ---
const messages: string[] | number[] = ["a", "b"]; // Может быть либо массивом строк, либо массивом чисел

// Функция принимает msg, который может быть строкой, числом или булевым значением
// Union-Типы
// function printMsg(msg: string | number | boolean): void {
// Если условие выполняется
//     if (typeof msg === "string" || typeof msg === "number") {
//         console.log(msg.toString()); // Вызываем метод и строк и чисел
// Иначе
//     } else {
//         console.log(msg); // Выводим просто сообщение
//     }
// }

function printMsg(msg: string[] | number | boolean): void {
    // Делаем проверку на массив с помощью метода Array.isArray()
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m)); // Метод массивов forEach()
    } else if (typeof msg === "number") {
        console.log(msg.toFixed()); // Метод чисел toFixed()
    } else {
        console.log(msg);
    }
}

// Вызов функции
printMsg(4);

// Функция принимает a (число или строка) и b (число или булевое значение)
const printReadingsOne = (a: number | string, b: number | boolean) => {
    // Условие сравнием a и b, равны ли они друг другу
    if (a === b) {
        console.log(a, b); // Работает, только если a и b — числа
    }
};

// Функция принимает a (массив чисел или строка)
const printReadingsTwo = (a: number[] | string) => {
    // Выводим первые 3 элемента: для строки — символы, для массива — числа
    console.log(a.slice(0, 3));
};

// Функция которая принимает в себя аргумент readings с вложенными объектами
// Фиксируем тип данных во вложенных объектах
function checkReadings(readings: { system: number } | { user: number }): void {
    // Условие, проверяем при помощи оператора in наличие объекта system внутри аргумента readings
    if ("system" in readings) {
        console.log(readings.system); // Выводим в консоль
    } else {
        console.log(readings.user); // Выводим в консоль
    }
}

// Функция с аргументом x, который может быть строкой или объектом Date
function logValue(x: string | Date) {
    // Проверяем, является ли x объектом типа Date
    if (x instanceof Date) {
        // instanceof в JavaScript/TypeScript — это оператор, который проверяет, является ли объект экземпляром определённого класса или конструктора

        // Если x — Date, выводим дату
        console.log(x.getDate());
    } else {
        // Если x — строка, используем метод trim()
        console.log(x.trim());
    }
}

// Оба метода instanceof помогают TypeScript понять, с каким конкретным типом работать, из union-типа. Это и есть сужение типов (narrowing). Всё правильно.

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
