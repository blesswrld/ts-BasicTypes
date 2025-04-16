// Данные об использовании электричества: показания, единицы, режим
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};

// Данные об использовании воды: показания, единицы
const waterUserData = {
    readings: 3,
    units: "m3",
};

// Тарифы: электричество (0.45 €/кВт), вода (2 €/м³)
const elRate = 0.45;
const wRate = 2;

// Массив для хранения платежей: [электричество, вода]
const monthPayments: number[] = [0, 0];

// Функция расчёта платежей
const calculatePayments = (
    { readings, mode }: { readings: number; mode: string }, // Деструктуризация данных электричества
    wData: { readings: number }, // Данные воды
    elRate: number, // Тариф электричества
    wRate: number // Тариф воды
) => {
    // Если режим "double" и показания < 50, применяем скидку 30%
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    } else {
        monthPayments[0] = readings * elRate;
    }
    // Платёж за воду: показания * тариф
    monthPayments[1] = wData.readings * wRate;
};

// Вызов функции для расчёта платежей
calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// Функция формирования счёта
const sendInvoice = (
    [el, water]: number[], // Деструктуризация платежей
    electricityUserData: { readings: number; units: string }, // Данные электричества
    waterUserData: { readings: number; units: string } // Данные воды
): string => {
    // Текст счёта с данными о потреблении и стоимости
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

    return text;
};

// Формирование и вывод счёта
const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
