// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
// Создайте еще один массив с возрастами: 18, 27, 74, 34;
// Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

const newArray = [];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const age = ages[i];
  const newElement = `${name} ${age} ${age > 1 && age < 5 ? 'года' : 'лет'}`;
  newArray.push(newElement);
}

console.log(newArray);