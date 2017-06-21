# 6/21 課題 学んだ記録

自身が学んだ記録を作りましょう。

- 関数(`function` で始まるコード)は全て function.js に書きます
- その他をREADME.md（このファイル）に書いていきます
    - 書き方は README-example.md (同じフォルダに同梱) を参考にしてください
- 書き方は自身でアレンジしてもかまいません


--------------------------------------

## 授業スライドの説明（4時間目～5時間目）

アロー関数式は楽そうだが慣れるのに時間がかかりそう
再帰・・・ある関数が、その実行時に自分自身(関数)を呼び出すこと(サンプル6-3-2)

### Consoleの実行ログ

#5-2-1
```
function hello(name){
	return 'こんにちは、' + name + 'さん';
}
undefined
hello('イマシン')
"こんにちは、イマシンさん"
var myFunction = hello;
undefined
myFunction
function hello(name){
	return 'こんにちは、' + name + 'さん';
}
myFunction('イマシン')
"こんにちは、イマシンさん"
```

#5-2-2
```
function double(x){
	return x*2;
}
undefined
double(1)
2
double(2)
4
var numbers = [1,2,3,4,5];
undefined
numbers.map(double)
(5) [2, 4, 6, 8, 10]
```

#5-2-3
```
function foo(){
	return "hello";
}
undefined
foo(1)
"hello"
foo()
"hello"
var a = function foo(){
	return "hello";
}
undefined
a(1)
"hello"
```

#5-2-4
```
var b = function(){
	return "hello";
}
undefined
b()
"hello"

var c = () => {
	return "hello";
}
undefined
c()
"hello"

var numbes = [1,2,3,4,5];
undefined
numbers.map(function(x){
	return 2*x;
})
(5) [2, 4, 6, 8, 10]
numbers.map((x) => {
	return 2*x;
})
(5) [2, 4, 6, 8, 10]
numbers.map(x => 2*x)
(5) [2, 4, 6, 8, 10]
```

#6-3-2
```
function f(n){
	if(n<=0){
		return 1;
    }
	return n*f(n-1);
}
undefined
f(3)
6
f(5)
120
f(1)
1
f(0)
1
```

#6-4-3
```
function newCounter(){
	var count = 1;
	return () => count++;
}
//countが関数の中にある
undefined
var counter1 = newCounter();
undefined
var counter2 = newCounter();
undefined
//1と2それぞれにcountが存在する(別のもの)
counter1()
1
counter1()
2
counter2()
1
counter2()
2
counter2()
3
counter1()
3
counter1()
4
```

#7-2
```
window.alert === alert;
true
window.innerWidth === innerWidth;
true
sampleValue = 5;
5
window.sampleValue;
5
```

##スライド説明コメント
アロー関数式は楽そうだが慣れるのに時間がかかりそう
再帰・・・ある関数が、その実行時に自分自身(関数)を呼び出すこと(サンプル6-3-2)

### Console以外の動き（もしあれば）



### 分かったこと

【ここに書く】

### 疑問・分からないこと（もしあれば）

【ここに書く（なければ省略可）】

--------------------------------------

以下、教科書の自分で読んだ・実行した箇所について書く。

## 5-x ○○ (p.xx)

### Consoleの実行ログ

##確認テスト4時間目Q2
```
function mul(a) {
    results = 1;
    for(var count = 0 , length = a.length; count < length; count++){
        results *= a[count];
    }
    return results;
}
```

#5-1-4
```
var sampleHashMap = {};
undefined
sampleHashMap['test']=5;
5
sampleHashMap['test'];
5
sampleHashMap.test;
5
sampleHashMap.test=7;
7
sampleHashMap.test;
7
var sampleHashMap = {test :11};
undefined
sampleHashMap.test;
11
```

#5-2-1
```
function sampleFunction(message = `test`){ return message};
undefined
var functionVar = sampleFunction;
undefined
functionVar();
"test"
functionVar('hoge');
"hoge"
functionVar;
function sampleFunction(message = `test`){ return message}
```

#5-2-2
```
function callTarget(target){return target();};
undefined
function returnSomeString(){return 'Sample';};
undefined
function returnSomeFunction(){return returnSomeString;};
undefined
callTarget(returnSomeString);
"Sample"
returnSomeFunction();
function returnSomeString(){return 'Sample';}
returnSomeFunction()();
"Sample"
```

### Console以外の動き（もしあれば）

【ここに書く（なければ省略可）】

### 分かったこと

【ここに書く】

### 疑問・分からないこと（もしあれば）

【ここに書く（なければ省略可）】
