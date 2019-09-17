var b = 2;
a=b++;
//4
console.log(a);
//4
console.log(b);
//5
a=b--;
//5
console.log(a);
//5
console.log(b);
// 4
a=--b;
//3
console.log(a);
// 3
console.log(b);
//3
a+=b++;
//6
console.log(a);
// 6
console.log(b);
//4
a=1; a+=++b;
//6
console.log(a);
//6
undefined
console.log(b);
//5
a=1; a-=b++;
//-4
console.log(a);
//-4
console.log(b);
// 6
a=1; a-=++b;
-6
console.log(a);
// -6
console.log(b);
// 7
a=1; a+=b--;
//8
console.log(a);
//8
console.log(b);
// 6
a=1; a+=--b;
6
console.log(a);
//6
console.log(b);
//5


