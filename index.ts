const message: string | number = 5; // | - Оператор ИЛИ в TS
const messages: string[] | number[] = ["a", "b"]; // Может быть либо массивом строк, либо массивом чисел

// Функция принимает msg, который может быть строкой, числом или булевым значением
// Union-Типы
function printMsg(msg: string | number | boolean): void {
    console.log(msg);
}

// Вызов функции
printMsg(4);
printMsg("Hello World!");

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
