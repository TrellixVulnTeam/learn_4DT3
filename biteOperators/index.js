// a = 0; // 00000000000000000000000000000000
// a = 1; // 00000000000000000000000000000001
// a = 2; // 00000000000000000000000000000010
// a = 3; // 00000000000000000000000000000011
// a = 255; // 000000000000000000000000011111111

// let b = 0;



// parseInt("11000", 2) – переводит строку с двоичной записью числа в число.
// n.toString(2) – получает для числа n запись в 2-ной системе в виде строки.


// Побитовое исключающее ИЛИ (XOR) 	a ^ b 	
// Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).

// Побитовое НЕ (NOT) 	~a 	Заменяет каждый бит операнда на противоположный.

// Побитовое НЕ (NOT) 	~a 	Заменяет каждый бит операнда на противоположный.

// Левый сдвиг 	a << b 	Сдвигает двоичное представление a на b битов влево, добавляя справа нули.

// Правый сдвиг, переносящий знак 	a >> b 	
// Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.

// Правый сдвиг с заполнением нулями 	a >>> b 	
// Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.


let a = 9;
let key = 1220461917;

console.log(a ^ key);

console.log(a ^ key ^ key);

console.log(~3);
console.log(~-1);
console.log(~-2);

// ~n == -(n+1)

console.log(9<<2);

console.log(100>>3);

console.log(100>>1);

console.log(100>>>1);


const ACCESS_ADMIN = 1;          // 00001
const ACCESS_GOODS_EDIT = 2;   // 00010
const ACCESS_GOODS_VIEW = 4;     // 00100
const ACCESS_ARTICLE_EDIT = 8; // 01000
const ACCESS_ARTICLE_VIEW = 16;  // 10000

const guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
const editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
const admin = editor | ACCESS_ADMIN; // 11111

const check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT; // 6, 00110
alert( admin & check ); // не 0, значит есть доступ к просмотру ИЛИ изменению


alert( ~~12.345 ); // 12
alert( 12.345 ^ 0 ); // 12


