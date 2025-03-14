const text = `у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.`;

console.log(`1. Количество символов в тексте: ${text.length}`);
let result = text.split('').join('\n');

let substring = result.replace(/\s+/g, '');

let newText = result.slice(27, 50);

let replacedText = newText.replace(/клён/g, 'дубе');

let replacedText2 = result.toUpperCase();

let replacedText3 = result.replace(/клён/g, 'дуб');

let index = text.indexOf('моря');

let modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);

console.log(`1. Количество символов в тексте: ${text.length}`);
    console.log(`2. Текст с переносами строк: \n${result}`);
    console.log(`3. Текст с удалёнными пробелами: ${substring}`);
    console.log(`4. Извлечение подстроки: ${newText}`);
    console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
    console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
    console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
    console.log(`8. Индекс первого вхождения "моря": ${index}`);
    console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);