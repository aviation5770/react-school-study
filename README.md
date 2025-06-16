학교에서 진행하는 웹 프로그래밍 수업 중 React에 관한 내용을 정리한 레포입니다.

# React 파일 생성하기
1. node.js 설치
2. vscode 터미널 창 열기
3. npx create-react-app 폴더명 입력
4. 리액트 파일이 생성되면 터미널 창에서 npm start를 통해 실행
5. src 폴더 내부에 component 폴더를 만든 후 작업하면 끝

---

**exprot default function과 exprot function의 차이?**(State)  <br />
default 함수는 파일의 대표(기본) 함수로서 import시 이름을 자유롭게 변경이 가능하지만, 일반적으로 exprot된 함수는 변경이 불가능하여 중괄호를 필수적으로 사용해야 한다.
```javascript
// myUtils.js
export function sayHi() { ... }
export default function sayBye() { ... }

// useMain.js
import sayBye, { sayHi } from './myUtils.js';

sayBye();
sayHi();
```
sayBye 함수를 간단하게 s라는 이름으로 선언하고 싶다면 아래와 같이 간단하게 표기할 수 있다.

```javascript
import s from './myUtils.js';
s();
```

---

**props 객체와 구조 분해**(Props, Props-DA)  <br />
리액트 컴포넌트는 값을 전달받을 때 props는 객체 형태로 값을 전달받는데 이렇게 전달받은 값을 사용하기 위해선 객체의 속성에 접근해야 하므로 props.(참조변수명)의 형태로 사용해야 한다. 매번 이러한 방식으로 변수를 참조하는 것은 코드가 길어질 뿐만 아니라 가독성이 좋지 못하므로 처음부터 참조변수명의 형태로 구조를 분해해 코드를 간결하게 만든다.  <br />

**일반 props로 값 전달받기**
```javascript
function Hello(props) {
  return <h2>{props.age}살, 이름은 {props.name}</h2>;
}
```
**구조 분해를 이용한 props로 값 전달받기**
```javascript
function Hello({ age, name }) {
  return <h2>{age}살, 이름은 {name}</h2>; // 간결해진 변수명
}
```