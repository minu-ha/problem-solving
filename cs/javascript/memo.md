객체 프로퍼티에 할당된 함수를 메소드라고 함

```js
let user = {
    name: "john"
}

user.sayHi = function () {
    console.log("hello")
}

user.sayHi();
```