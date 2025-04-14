const currRate = "1.05";

const fetchCurr = (response: string) => {
    const data = JSON.parse(response);
    return data;
};

function transferEurToUsd(
    available: boolean,
    amount: number,
    commission: number
) {
    if (available) {
        let res = fetchCurr(currRate) * amount * commission;
        console.log(res);
    } else {
        console.log("Сейчас обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
