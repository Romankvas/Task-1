const generateCostume = require("./costumes");
const fs = require("fs");
const task = process.argv[2];
async function main(){
    try{
        const data = await fs.promises.readFile("candies.json", "utf-8");

        const candies = JSON.parse(data);
        const totals = candies.reduce((result,item) => {
            result[item.kid] = (result[item.kid] || 0) + item.count;
            return result;
        }, {});
    
        const total = candies.reduce((sum, item) => sum + item.count, 0);
        const winner =  Object.entries(totals)
            .sort((a, b) => b[1] - a[1])[0];
const report = `
Загальна кількість цукерок: ${total}

Результати:
${Object.entries(totals)
    .map(([kid, count]) => `${kid}: ${count}`)
    .join("\n")}

Переможець: ${winner[0]} (${winner[1]} цукерок)
`;

        await fs.promises.writeFile("report.txt", report);

        console.log("Звіт створено!");
        console.log(report);

    } catch (error) {
        console.log("Помилка: файл відсутній або JSON пошкоджений!");
    }
}

if (task === "1") {
    console.log("Завдання 1: Генератор костюмів");

    const count = Number(process.argv[3]);

    if (!count || isNaN(count) || count <= 0) {
        console.log("Введіть правильну кількість костюмів!");
    } else {
        for (let i = 1; i <= count; i++) {
            console.log(`${i}. ${generateCostume()}`);
        }
    }
}
else if (task === "2") {
    console.log("Завдання 2: Кошик цукерок");
    main();
}
else if (task === "3") {
    console.log("Завдання 3: Відлік до Хелловіну");
}
else if (task === "4") {
    console.log("Завдання 4: Шифр відьми");
}
else if (task === "5") {
    console.log("Завдання 5: Північ настає");
}
else if (task === "6") {
    console.log("Завдання 6: Будинок з привидами");
}
else if (task === "7") {
    console.log("Завдання 7: Trick or Treat API");
}
else {
    console.log("Такого завдання немає!");
}

 