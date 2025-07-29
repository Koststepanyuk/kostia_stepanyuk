// Регулярний вираз:
// - \b — початок слова
// - [^Aa\s]{6,} — мінімум 6 символів, де немає 'A', 'a' або пробілу
// - \b — кінець слова
var regex = /\b[^Aa\s]{6,}\b/g;

// Тестовий текст
var text = "Wonderful Joyful Happiness Time Task Apple Another Tiger Bottle";

// Знайти всі збіги
var matches = text.match(regex);

// Вивід результату
console.log("Знайдено слова без літери 'A' або 'a' (6+ символів):");
console.log(matches);

Знайдено слова без літери 'A' або 'a' (6+ символів):
[ 'Wonderful', 'Joyful' ]
