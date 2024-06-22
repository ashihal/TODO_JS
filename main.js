// console.log("hoge");

// オブジェクト
// const profile ={
//   name:"haruki",
//   age:29
// };

// const message = `私の名前は${profile.name}です。年齢は${profile.age}歳です。`;
// console.log(message);

// 分割代入（オブジェクトの項目を、単一の変数に代入するっぽいやつ）
// const {name, age} = profile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const petAry = ["dog", "cat"];
// console.log(petAry);
// const [hoge1, hoge2] = petAry;
// const messagePetAry = `${hoge1}と${hoge2}`;
// console.log(messagePetAry);

// 従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("こんにちは！"));

// アロー関数
// const func2 = (str) =>{
//   return str;
// }
// console.log(func2("こんにちは２！"));

// const func3 = (num1, num2) =>{
//   return num1 + num2;
// }
// console.log(func3(1,2));

// const func4 = (name, syuzoku) =>({
//   name:name,
//   syuzoku:syuzoku
// })
// console.log(func4("inu","wanko"));

// デフォルト値（引数、分割代入）（値が設定されなかった場合の初期値を設定する。）
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("haruki");
// sayHello();

// // オブジェクトにもデフォルト値が設定できる。
// const myProfile ={
//   name:"haruki"
// }
// // ageは定義していないので、デフォルト値を設定する。
// const {name, age = 29} = myProfile;
// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

// // オブジェクトの省略記法
// const name ="harukai";
// const age =29;

// const myProfile ={
//   name,
//   age
// }

// console.log(myProfile);

// スプレッド構文（...）
// const arr1 = [1, 2];
// // 配列自体を出力する。
// console.log(arr1);
// // 配列の中身を出力する。
// console.log(...arr1);

// const sunFnc = (num1, num2) => console.log(num1 + num2);
// sunFnc(arr1[0],arr1[1]);
// sunFnc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// mapを使用したループ処理
// const nameArr = ["田中","山田","芦刈"];
// mapの引数に、関数を指定することで、ループ処理を行う。
// nameArr.map((name) => {console.log(name)});

// 配列の要素を、別の配列に格納することもできる。
// const nameArr = ["田中","山田","芦刈"];
// const nameArr2 =nameArr.map((name) => {return name});
// nameArr2.map((name) => {console.log(name)});

// filterを使用すれば、条件に一致している要素のみを抽出して、別の配列に格納できる。
// const numArr = [1,2,3,4,5];
// const numArr2 = numArr.filter((num) => {return num % 2 === 0});
// console.log(...numArr2);
// numArr2.map((num) => {console.log(num)});

// const nameArr = ["田中","山田","芦刈"];
// // mapには、indexを取得することができる。第2引数の変数には、indexが格納される。
// nameArr.map((name, index) => {console.log(`${index + 1}番目は、${name}です。`)});

// const nameArr = ["田中","山田","芦刈"];
// const nameArr2 = nameArr.map((name) => {
//   if(name === "芦刈"){
//     return name;
//   }else{
//     return`${name}さん`
//   }
// });
// console.log(nameArr2);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// 条件がtrueの場合は、：の左側の値が設定される。falseの場合は、右側の値が設定される。
// const result = 1 > 0 ? "trueです" : "falseです";
// console.log(result);

// const num = 1300;
// console.log(num.toLocaleString());
// 数値側ならカンマ区切りで出力されるが、文字列型ならそのまま出力される。
// console.log('1300'.toLocaleString());

const num = '1300';
// 「typeof num === 'number'」は、変数numが、number型であるか判定する処理。typeofで、指定した変数の型チェックが行える。
const formattedNum =
  typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);
