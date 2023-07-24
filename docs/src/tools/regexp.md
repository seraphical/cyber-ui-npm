 
**Output**
::: tip
- 构造函数创建正则需要两次转义
-  [] 中不需要转义
-  ?代表非贪婪匹配
- exec 是正则的, match 是 string 的, 都只匹配一次, /g 可以匹配所有
- 使用群组的时候( ), 不能使用/g, match 和 exec 可以默认匹配所有
- {}中代表重复
- 使用^$表示只能
- replace(参数1, 参数 2), 参数 2 中能拿到 item, 捕获的参数$n, string, 使用参数 2 将参数 1 匹配到的内容进行替换(此时 match 可以和/g 同用)
:::

# 一. 正则基础
## 1.1 正则创建方式
1.  字面量方式
    - /元字符/修饰符
    - /a/g

2.  对象创建方式
    - var reg = new RegExp('元字符', '修饰符');
    - var reg = new RegExp('a','g')

# 二. 正则方法
==对正则方式使用/g 会记录指针, 查找到当前的以后, 继续向后查找, 标记了已经查找过的指针位置==

```js

const reg = /a/g;
console.log(reg.test('abcaab')); //true
console.log(reg.test('abcaab')); //true
console.log(reg.test('abcaab')); //true
console.log(reg.test('abcaab')); //false

console.log(/a/g.test('abcaab')); //true
console.log(/a/g.test('abcaab')); //true
console.log(/a/g.test('abcaab')); //true
console.log(/a/g.test('abcaab')); //true

```

## 2.1 test( )
- ==是否 test 中的字符满足正则表达式,返回布尔值==
```js
const str = 'abcde';

console.log(/a/.test(str)); //true

```
## 2.2 exec( )
- 查找到满足的内容, 并且返回第一个捕获到的内容
- 注意每次只会捕获一次
```js
const str = 'abcde';

console.log(/a/.exec(str)); //[ 'a', index: 0, input: 'abcde', groups: undefined ]

```

# 三. 字符串方法

## 3.1 match( )
- ==查找满足正则的字符内容, 并且返回一个由满足内容组成的数组==
- 和 exec 类似,只不过是 string 的方法
```js
const str = 'abcde';
console.log(str.match(/a/)); //[ 'a', index: 0, input: 'abcde', groups: undefined ]
```
## 3.2 search( )
- 在字符串中查找满足正则内容的字符串,返回==下标==
```js
const str = 'abcde';
console.log(str.search(/a/));   //0
```
## 3.3 replace( )
- 高频使用方法, ==替换方法==
```js
var str = 'abacadae'//替换成a1a2a3a4
var i = 0;
str = str.replace(/a./g,(item,index,s)=>{
    return 'a'+i++;
})
console.log(str);
```
```js
const str = 'abcde';
console.log(str.search(/a/));   //0
```
## 3.3 replace( )
- 高频使用方法, ==替换方法==
```js
var str = 'abacadae'//替换成a1a2a3a4
var i = 0;
str = str.replace(/a./g,(item,index,s)=>{
    return 'a'+i++;
})
console.log(str);
```

## 3.4 split( )
- 切割, 使用正则切割

- 查询字符串转对象
```js

//使用正则把查询字符串转换成对象
const str = 'a=3&b=6&c=10';
const obj = {};
const arr = str.split(/[=&]/);

for(let i = 0 ; i < arr.length; i+=2){
    obj[arr[i]] = arr[i+1];
}
```

# 四. 元字符
==均表示的是单个字符==

1.  `.`  通配符, 代表任意一个字符

2.  `\`  转义   将其他符号变为字符

3.  `[ ]`     元字符, [ ]内字符可以代表任意一个字符, ==或者的作用==
    - 在 `[ ]` 中, 点(.)不是通配符, 而是字符
    - ==即在 `[ ]` 中不用进行转义==

4.  `-`     连接符
    - `[0-9]`   0-9 中的任意一个
    - `[1-31]`     `[1-3 1]`    所以代表[1-3]

5.  `[^]`
    - 表示 `[ ]` 中的都不行
    - `[^248]`
        - 表示 2,4,8 都不行
    - `[a^c]`
        - 满足 a 或者^或者 c

6.  `\w`
    - `[a-zA-Z0-9_]`

7.  `\W` (whole)
    - `[^a-zA-Z0-9_]`

8.  `\d` (digtal)
    - [0-9]

9.  `\D`
    - `[^0-9]`

10. `\s`
    - 空格类字符

11. `\S`
    - 非空格类字符

# 五. 重复
1.  
    - 前面一个字符重复 n 次
    - /a{3}/
        - a 重复 3 次
    - /s{0}/
        - 表示'', 查找空字符


```js

console.log('abcd'.match(/a{0}/g)) // ['', '' , '' , '','']
```

2.  `a{0,1}`
    - a 可以没有也可以有
    - 等同于 `a?`

3.  `a{1,}`
    - a 至少一次
    - `a+`

4.  `a{0,}`
    - a 重复 0-无穷次
    - `a*`

5.  `a{n,m}`
    - a 重复 n 到 m 次

## 5.0 懒惰性
- 当你使用 exec 去捕获内容的时候
- 默认每一次都是从[0]开始检索
- 解决: 在书写正则表达式的时候书写全局标识符 g

## 5.1 贪婪匹配
```js
// 匹配 1~5 次 a
console.log('aaaaaaa'.match(/a{1,5}/)) //aaaaa

```
匹配最大值

## 5.2 非贪婪匹配
- `*?`
- `+?`
- `??`
- `{n,}?`
- `{n,m}?`

```js
console.log('abbbbbbbbbbbbcbccccbccbc'.match(/a.+c/));
console.log('abbbbbbbbbbbbcbccccbccbc'.match(/a.+?c/));

>['abbbbbbbbbbbbcbccccbccbc']
>['abbbbbbbbbbbbc']
```
- 从前向后查找第一个

- 提取四大名著中 书名号和书名
```js
        var str = "中国四大名著包括《西游记》、《水浒传》、《三国演义》、《红楼梦》";
        console.log(str.match(/《.*?》/g));// ['《西游记》', '《水浒传》', '《三国演义》', '《红楼梦》']
```

非贪婪匹配有两个条件
1.  ==必须在? 后面有某个结束限制, 找到第一个结束限制后停止, 不继续向后查找==
2.  非贪婪匹配中使用 `.   \w` 等等可能包含了结束限制的内容,才会使用非贪婪匹配

# 六. 或者和^ $
## 6.1 | 或者
- 或者
- `/a|b/` 等价于 `[ab]`
```js
        console.log('abc'.match(/a|b/)); //['a', index: 0, input: 'abc', groups: undefined]
        console.log('abc'.match(/a|b/g));  //['a', 'b']
        console.log('abc'.match(/a|/g)); // ['a', '', '', '']
        console.log('abc'.match(/|a/g)); //['', '', '', '']
        console.log('abc'.match(/a|b|/g));//['a', 'b', '', '']

```
- 或者是先将|前面内的内容找完之后放下一个指针然后再此基础上找|后面的内容, 或者(|) 有先后之分

## 6.2  ^$
```js
console.log(/^abc/.test('abcd'));//true
console.log(/^abc/.test('accd'));//false

console.log(/abc$/.test('aabc'));//true
console.log(/abc$/.test('aabac'));//false

console.log(/^abc$/.test('abcd'));//false
console.log(/^abc$/.test('abc'));//true

```
- 没有加^$表示==包含==
- 加了^$ 表示==只能==
- 通常和 test 方法连用

```js
console.log(/^\w{6,18}$/.test('sdjdddfasdfasd')); //true

```
- 表示只能 6-18 位, 多了不行 , 少了也不行

- 判断 1-31
```js
console.log(/^([1-9]|1\d|2\d|3[01])$/.test('30'));//true
console.log(/^([1-9]|[12]\d|3[01])$/.test('30'));//true

```

- 判断 0-255
```js
for(let i = 0;i<300;i++)
    console.log(/^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(`${i}`));//true*255

```

- ip 验证
```js
console.log(/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){3})$/.test('255.251.255.255'));  //true

```

# 七. 群组( )
## 7.1 可以将一些内容归到一处一起操作
- /(ab){3}/
    - 把 ab 整体重复三次

## 7.2 群组可以抽离部分数据
- 在使用==match 和 exec==的时候, 如果使用( )则除了被查找到的整个内容外,还会根据( )群组单独罗列每个查找到的( )内的内容
- ==前提不能使用 g==

```js

console.log('abcdef'.match(/ab(cd)(ef)/));
//[ 'abcdef', 'cd', 'ef', index: 0, input: 'abcdef', groups: undefined ]
```

```js
console.log('23[abc]'.match(/(\d+)\[(.+?)\]/));

>[
  '23[abc]',
  '23',
  'abc',
  index: 0,
  input: '23[abc]',
  groups: undefined
]
```

## 7.3 replace + g = 无敌
- replace 中可以使用 g

```js
'23[abc]'.replace(/(\d+)\[(.+?)\]/g,(item,$1,$2,index,str)=>{
    console.log(item,$1,$2,index,str);
    //23[abc] 23 abc 0 23[abc]
})

```
- $1,$2 分别是群组 1 和群组 2

- 将名著中《》替换成<>
```js

var str="中国四大名著包括《西游记》、《水浒传》、《三国演义》、《红楼梦》";
str = str.replace(/《(.*?)》/g,'<$1>')
console.log(str);

>中国四大名著包括<西游记>、<水浒
传>、<三国演义>、<红楼梦> 
```
首先执行的是从 str 中找到所有带《》的内容(match/g), 然后 match 出群组中的内容, 将 match/g 匹配到的所有内容使用第二个参数替换


- 隐藏电话中间五位
```js

var tel="18612345567";
tel = tel.replace(/^(\d{3})\d{5}(\d{3})$/,'$1*****$2')
console.log(tel); //186*****567
```

- 22[abc]12[cde] , 要求中括号中的字符重复中括号外的数字次
```js
let str = '1[abc]3[cde]'

str = str.replace(/(\d+)\[(.+?)\]/g,(item,$1,$2)=>{
     return  $2.repeat($1);
});
console.log(str);

```

- replace 遍历 转换查询字符串
```js
const obj = {};
"a=3&b=4&c=5&d=aa".replace(/([a-zA-Z]+)=([a-zA-Z0-9]+)/g,(item,$1,$2)=>{
     obj[$1] = isNaN($2)?$2:+$2;
})
console.log(obj); //{ a: 3, b: 4, c: 5, d: 'aa' }

```
>[!tip]
isNaN 会默认转数字
## 7.3 群组可以完成断言
==( )中的内容看做条件==

### 7.3.1 后瞻断言
1.  ?=
    - 后瞻肯定断言

` `
```js
console.log('abacad'.replace(/a(?=c)/g,'0')) //ab0cad
```
a 后面是 c 就进行替换
- ( )中的内容相当于条件

```js

console.log('abacad'.replace(/^(?=c)/g,'0'))
```
- ^空字符 起始后面的空字符, 如果这个空字符后面是 c, 就把空字符替换为 0, 如果不是 c 就不进行操作

2.  ?!
    - 后瞻否定断言

` `
```js
console.log("abacad".replace(/a(?!c)/g,"0"));
```
把 a 后面不是 c 的替换成 0

### 7.3.2 前瞻断言
1.  ?<=
    - 前瞻肯定断言

` `
```js
console.log("abcbeb".replace(/(?<=c)b/g,"0"));
```

2.  ?<!
    - 前瞻否定断言

` `
```js
console.log("abcbeb".replace(/(?<!c)b/g,"0"));
```

### 7.3.3 多个断言
- 多个断言连在一起表示后面的需要同时满足

```js
/^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,18}$/
```
- `\D+\d`   一个以上的非数值后面有一个数值   a0 aaaa0  asdjkhasd0   0(不符合)
        表示在字符串中含有数值，但是不是第一位

## 7.4 群组可以按相同字符归类
- `(n)\1` 是固定使用方式, 表示 n 重复 1 次
- `(n)\1+`   n 重复 1 次以上
- `(n)\1*`    n 重复 0 次以上
    - 后面的 1 代表第几个小括号

```js
        console.log("aaaabbbcccccccc".match(/([a-z])\1/g))
        console.log("aaaabbbcccccccc".match(/([a-z])\1+/g))
        console.log("aaaabbbdcccccccc".match(/([a-z])\1*/g))
        console.log("aaaabbbdcccaaaccccc".match(/([a-z])\1*/g))
```

- 统计字符出现次数
```js
        var str="asdkhjasdkjahsdkuashdkasjhdaskjdhsa";
        str=str.split("").sort().join("").match(/(\w)\1*/g).reduce(function(v,t){
            return v+t[0]+"{"+t.length+"}"
        },"");
----

        str=str.split("").sort().join("").replace(/(\w)\1*/g,function(t){
            return t[0]+"{"+t.length+"}";
        })
        console.log(str)
```

# 八. 案例

- `\D+\d`   a1    ab2   abva3   第一位不能是数字
- `.*[a-z]`  !a  3a   a  aa  %&a  在字符串至少有一个小写字母，位置任意
- `.*[A-Z]`  !A  3A   A  aA  %&A  在字符串至少有一个大写字母，位置任意
- `[a-zA-Z0-9]{8,16}`  a-zA-Z0-9 重复至少 8，最多 16


```js
 验证用户名
        /^\w{8,16}$/

        验证密码
        1、   /^\d{6,18}$|^[a-z]{6,18}$|^[A-Z]{6,18}$/  简单密码
        2、/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6,18}$|^(?=.*[a-z])(?=\D+\d)[a-z0-9]{6,18}$|^(?=.*[A-Z])(?=\D+\d)[0-9A-Z]{6,18}$/  中级密码
        3、/^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,18}$/  高级密码
        3、/^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*\(\)\-\+\~\`\.\,\?\"\'\;\:\[\]\{\}\\\|])[a-zA-Z0-9]{6,18}$/  高级密码

        验证中文 
        /[\u4e00-\u9fd5]{2,4}/

        验证邮箱
        xietian@163.com
        /^\w+\@\w+\.[a-z]{2,3}(\.[a-z]{2,3})?$/ 

        验证电话号码
        /^1[3-9]\d{9}$/ 

        验证网址
        /^https?:\/\/w{3}\.[a-zA-Z0-9]+\.[a-z]{2,3}$/

        验证身份证
        /^\d{17}(\d|x|X)$/

        验证16进制
        /^\#[0-9a-fA-F]+$/
        "#657897"

        验证2进制
        /^[01]+$/

        座机号码   +8601084789067
        /^\+860\d{2,3}\d{8}$/ 
```

>       题目: `"2[3[ab]4[c]5[2[e]3[d]]2[f]]"`
        abababcccceedddeedddeedddeedddeedddabababcccceedddeedddeedddeedddeedddabababcc
        cceedddeedddeedddeedddeedddabababcccceedddeedddeedddeedddeedddab...


```js

let str = "2[3[ab]4[3[cd]2[ef]]]"
function parse(str){
    if(!/\d+\[\w+\]/g.test(str)) return str;
    str = str.replace(/(\d+)\[(\w+)\]/g,(item,$1,$2)=>{
         console.log(item);     
        return $2.repeat($1);
    })
    return parse(str);
}
console.log(parse(str));

>3[ab]
3[cd]
2[ef]
4[cdcdcdefef]
2[abababcdcdcdefefcdcdcdefefcdcdcdefefcdcdcdefef]
abababcdcdcdefefcdcdcdefefcdcdcdefefcdcdcdefefabababcdcdcdefefcdcdcdefefcdcdcdefefcdcdcdefef 
```

```js
       // 2、 '{"a":2,"b":3,"c":4,"d":{"e":5}}'

        var str='{"a":2,"b":3,"c":4,"d":{"e":5,"f":7},"ab":5}';

        function getJSON(str,obj){
            if(obj===undefined) obj={};
            // 去除外层的{ }   "a":2,"b":3,"c":4,"d":{"e":5,"f":7}
           str= str.replace(/^\{|\}$/g,"");
        //    将不包含{}的部分使用,切割
        // ['"a":2', '"b":3', '"c":4', '"d":{"e":5,"f":7}']
           var arr=str.split(/(?<!\{.*?)\,|\,(?!.*\})/);           
           arr.forEach(function(item){
            // 如果元素中没有{}   "a":2  "b":3  "c":4
                if(!/\{|\}/.test(item)){
                    item.replace(/\"([a-z]+)\"\:([a-zA-Z0-9]+)/g,function(t,$1,$2){  
                        // $1 群组1  a   b   c
                        // $2  群组2  2  3  4
                        obj[$1]=$2;
                    })
                }else{// 有{}  "d":{"e":5,"f":7}
                // 用:切割 用:后面是{的这个:切割  ["d",{"e":5,"f":7}]
                 var arr1=item.split(/:(?=\{)/);
                   var key=arr1[0].slice(1,-1); //'"d"'去掉""  d
                   obj[key]=getJSON(arr1[1]);
                //    obj["d"]=getJSON({"e":5,"f":7})
                }
           })
           return obj;
        }

```
