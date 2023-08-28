## 외부 라이브러리 모듈화

### 🧸 axios, chart.js 등의 라이브러리는 어떻게 다루면 좋을까?

`src/app.ts` 파일을 생성하여, 라이브러리르 설치하여 import로 불러온다.

```typescript
import 변수명 from '라이브러리명'

// 변수, 함수 임포트 문법
import {} from '파일상대경로'
```


#### axios 설치

```
npm i axios
```

#### chart.js 설치

```
npm i chart.js
```

이때 chart lib를 가지고 오게 되면, 빨간줄로 에러가 생긴다.
에러 내용은 -> `could not find a declaration file for module 'chart.js~~'` 라고 뜰 것이다.
이런 이유는 타입정의에 대해서는 별도의 라이브러리를 설치해야한다. `npm install @types/chart.js`

그럼 실제 파일 구조로는 아래와 같은 구조로 보면 된다.

```
node_modules
 - @types
   - chart.js
```

@types/chart.js를 설치했다면 실제로 사용되는 파일에 가서 여전히 빨간 줄이 등장할 시

```typescript
import * as Chart from 'chart.js'
```
로 선언해주면 된다.


### 🤖 타입 선언 라이브러리가 제공되지 않는 외부 라이브러리 대처 방법

에러 날 경우 에러 내용은 -> `if it exists or add a new declaration(.d.ts) file containing 'declare module 'chart.js'`라고 뜰 경우다.

- repo프로젝트명/src/tsconfig.json


```typescript
{
    "compilerOptions": {
        "typeRoots":["./node_modules/@types", "./types"] 
    }
}
```

> 여기서 types는 타입을 선언하지 않아서 내가 직접 타입을 선언해주어야 할 때에 바라보는 경로이다. 첫번재 -> "./node_modules/@types"는 그냥 타입 선언하지 않을 때의 default 경로라고 보면됨.

이제 해당 레포지토리 작업공간 밑에 types라는 폴더를 하나 생성해준다. 
그리고 해당 라이브러이명인 chart.js를 생성해줌. `types/chart.js/index.d.ts` 여기서 `index.d.ts`는 타입에 정의를 해주는 공간이라고 보면된다.


- 작업공간 경로 [프로젝트명]/types/chart.js

```typescript
declare module 'chart.js';
```

이렇게 해주면 이제 더이상 에러가 나지 않는다.