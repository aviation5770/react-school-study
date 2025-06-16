학교에서 진행하는 웹 프로그래밍 수업 중 React에 관한 내용을 정리한 레포입니다.

# React 파일 생성하기
1. node.js 설치
2. vscode 터미널 창 열기
3. npx create-react-app 폴더명 입력
4. 리액트 파일이 생성되면 터미널 창에서 npm start를 통해 실행
5. src 폴더 내부에 component 폴더를 만든 후 작업하면 끝

---
**exprot default function과 exprot function의 차이?**  <br />
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