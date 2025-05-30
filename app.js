/*
let k = 3; // Case 1
let oy = 2; // Case 2 & 3
let birlik, qiymat; // Case 4 & 5
let d = 28, m = 2; // Case 6 & 7
let y = 's', komand = 1; // Case 8
let n = 12, kartaTuri = 2; // Case 9
let masalaSoni = 27; // Case 10
let son = 123; // Case 11
let yil = 2023; // Case 12

let javob;

// ------------------- Case 1 -------------------
switch (k) {
  case 1: javob = "yomon"; break;
  case 2: javob = "qoniqarsiz"; break;
  case 3: javob = "qoniqarli"; break;
  case 4: javob = "yaxshi"; break;
  case 5: javob = "a'lo"; break;
  default: javob = "xato";
}
console.log("Case 1:", javob);

// ------------------- Case 2 -------------------
switch (oy) {
  case 12: case 1: case 2: javob = "qish"; break;
  case 3: case 4: case 5: javob = "bahor"; break;
  case 6: case 7: case 8: javob = "yoz"; break;
  case 9: case 10: case 11: javob = "kuz"; break;
  default: javob = "xato";
}
console.log("Case 2:", javob);

// ------------------- Case 3 -------------------
switch (oy) {
  case 2: javob = 28; break;
  case 4: case 6: case 9: case 11: javob = 30; break;
  case 1: case 3: case 5: case 7: case 8: case 10: case 12: javob = 31; break;
  default: javob = "xato";
}
console.log("Case 3:", javob);

// ------------------- Case 4 -------------------
birlik = 1; qiymat = 25;
switch (birlik) {
  case 1: javob = qiymat / 10; break;
  case 2: javob = qiymat * 1000; break;
  case 3: javob = qiymat; break;
  case 4: javob = qiymat / 1000; break;
  case 5: javob = qiymat / 100; break;
  default: javob = "xato";
}
console.log("Case 4:", javob + " m");

// ------------------- Case 5 -------------------
birlik = 3; qiymat = 5000;
switch (birlik) {
  case 1: javob = qiymat; break;
  case 2: javob = qiymat / 1_000_000; break;
  case 3: javob = qiymat / 1000; break;
  case 4: javob = qiymat * 1000; break;
  case 5: javob = qiymat * 100; break;
  default: javob = "xato";
}
console.log("Case 5:", javob + " kg");

// ------------------- Case 6 -------------------
let kunlar = [0,31,28,31,30,31,30,31,31,30,31,30,31];
if (m >= 1 && m <= 12 && d >= 1 && d <= kunlar[m]) {
  javob = "Sana to‘g‘ri";
} else {
  javob = "Xato sana";
}
console.log("Case 6:", javob);

// ------------------- Case 7 -------------------
d++;
if (d > kunlar[m]) {
  d = 1;
  m++;
  if (m > 12) m = 1;
}
console.log("Case 7: Keyingi sana:", d + " " + m);

// ------------------- Case 8 -------------------
let yonalishlar = ['s', 'j', 'q', 'g'];
let indeks = yonalishlar.indexOf(y);
if (komand === 1) indeks = (indeks + 3) % 4;
else if (komand === 2) indeks = (indeks + 1) % 4;
javob = yonalishlar[indeks];
console.log("Case 8:", javob);

// ------------------- Case 9 -------------------
let qiymatlar = ["", "", "", "", "", "", "olti", "yetti", "sakkiz", "to‘qqiz", "o‘n", "valet", "dama", "qirol", "tuz"];
let turlar = ["", "g‘isht", "olma", "chillak", "qarg‘a"];
if (n >= 6 && n <= 14 && kartaTuri >= 1 && kartaTuri <= 4) {
  javob = `${qiymatlar[n]} ${turlar[kartaTuri]}`;
} else {
  javob = "xato";
}
console.log("Case 9:", javob);

// ------------------- Case 10 -------------------
let birliklar = ["", "bir", "ikki", "uch", "to‘rt", "besh", "olti", "yetti", "sakkiz", "to‘qqiz"];
let onlar = ["", "", "yigirma", "o‘ttiz", "qirq"];
if (masalaSoni < 10 || masalaSoni > 40) {
  javob = "xato";
} else if (masalaSoni === 10) {
  javob = "o‘nta masala";
} else {
  let o = Math.floor(masalaSoni / 10);
  let b = masalaSoni % 10;
  javob = `${onlar[o]}${b ? " " + birliklar[b] : ""}ta masala`;
}
console.log("Case 10:", javob);

// ------------------- Case 11 -------------------
let yuz = Math.floor(son / 100);
let on = Math.floor((son % 100) / 10);
let bir = son % 10;
let onlarSoz = ["", "o‘n", "yigirma", "o‘ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to‘qson"];
if (son >= 100 && son <= 999) {
  javob = `${birliklar[yuz]} yuz${on ? " " + onlarSoz[on] : ""}${bir ? " " + birliklar[bir] : ""}`;
} else {
  javob = "xato";
}
console.log("Case 11:", javob);


let ranglar = ["yashil", "qizil", "sariq", "oq", "qora"];
let hayvonlar = ["sichqon", "sigir", "yo‘lbars", "quyon", "ajdar", "ilon", "ot", "qo‘y", "maymun", "tovuq", "it", "to‘ngiz"];
let farq = yil - 1984;
let rangIndex = (farq % 5 + 5) % 5;
let hayvonIndex = (farq % 12 + 12) % 12;
javob = `${ranglar[rangIndex]} ${hayvonlar[hayvonIndex]} yili`;
console.log("Case 12:", javob); */

/*
let A = 23;
let B = 5;
let tempA = A;

while (tempA >= B) {
  tempA -= B;
}
console.log("While1: Qolgan uzunlik =", tempA);*/
/*

let A2 = 23;
let B2 = 5;
let count = 0;

let tempA2 = A2;
while (tempA2 >= B2) {
  tempA2 -= B2;
  count++;
}
console.log("While2: Joylashgan B lar soni =", count);
*/
/*

let n3 = 81;
let temp = 1;

while (temp < n3) {
  temp += temp + temp; 
}
console.log("While3:", temp === n3 ? "3 - ning darajasi" : "3 - ning darajasi emas");
*/
/*

let n4 = 23;
let m4 = 5;
let q = 0;
let r = n4;

while (r >= m4) {
  r -= m4;
  q++;
}
console.log("While4: Butun qism =", q, ", Qoldiq =", r);
*/
/*
let n5 = 12345;
let result5 = "";

while (n5 > 0) {
  let r = n5 % 10;
  result5 += r;
  n5 = (n5 - r) / 10;
}
console.log("While5: Teskari tartib =", result5);
*/
/*
let n6 = 12345;
let sum = 0;
let digitCount = 0;

while (n6 > 0) {
  let r = n6 % 10;
  sum += r;
  digitCount++;
  n6 = (n6 - r) / 10;
}
console.log("While6: Yig‘indi =", sum, ", Raqamlar soni =", digitCount);
*/
/*
let n7 = 13045;
let hasTwo = false;

while (n7 > 0) {
  let r = n7 % 10;
  if (r === 2) {
    hasTwo = true;
    break;
  }
  n7 = (n7 - r) / 10;
}
console.log("While7: 2 raqami bormi?", hasTwo);
*/
/*
let n8 = 8642;
let hasOdd = false;

while (n8 > 0) {
  let r = n8 % 10;
  if (r % 2 === 1) {
    hasOdd = true;
    break;
  }
  n8 = (n8 - r) / 10;
}
console.log("While8: Toq raqam bormi?", hasOdd);
*/
/*


let n9 = 12321;
let original = n9;
let reversed = 0;

while (n9 > 0) {
  let r = n9 % 10;
  reversed = reversed * 10 + r;
  n9 = (n9 - r) / 10;
}
console.log("While9:", original === reversed);
*/
/*
let n10 = 29;
let i = 2;
let isPrime = true;

while (i * i <= n10) {
  let qoldiq = n10;
  let q = 0;
  while (qoldiq >= i) {
    qoldiq -= i;
    q++;
  }
  if (qoldiq === 0) {
    isPrime = false;
    break;
  }
  i++;
}
console.log("While10:", isPrime ? "Tub son" : "Tub emas");*/
