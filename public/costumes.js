const adjectives = [
    "Сонний",
    "Космічний",
    "Зоряний",
    "Місячний",
    "Туманний",
    "Сяючий",
    "Загадковий",
    "Мрійливий",
    "Хмарний",
    "Чарівний"
];

const monsters = [
  "Вампір",
  "Скелет",
  "Привид",
  "Перевертень",
  "Зомбі",
  "Мумія",
  "Відьма",
  "Гарбуз",
  "Кажан",
  "Упир"
];
const items = [
  "з парасолькою",
  "з чайником",
  "з ліхтариком",
  "з книжкою",
  "з гітарою",
  "з печивом",
  "з подушкою",
  "з телескопом",
  "з ковдрою",
  "з кавою"
];


function generateCostume() {
    const a = adjectives[Math.floor(Math.random() * adjectives.length)];
    const b = monsters[Math.floor(Math.random() * monsters.length)];
    const c = items[Math.floor(Math.random() * items.length)];

   return `${a} ${b} ${c}`;
}

module.exports = generateCostume;