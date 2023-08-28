## API 함수 타입 정의

개요 : axios로 응답받은 데이터를 타입으로 정의해보자

- types/타입들 모아놓는 파일.ts
```
export interface SummaryResponse {
    data: string;
    message: string;
}
```

이처럼 타입을 지정해준다.


### API 타입과 사용법

```
import axios, { AxiosResponse } from 'axios';

function fetchCovidSummary(): 👉Promise<AxiosResponse<SummaryResponse>> {
    const res = 'api url'
    return axios.get(url);
}

fetchCovidSummary().then(res => res.data.data) // axios의 기본 응답이 나온다. 그 중 하나가 data
```

데이터에 대한 타입 추론을 any로 하는 것보다 직접 명시해주면 구체적으로 어떤 값들이 들어있는지 정확하게 알 수 있어서 타입 지정해주는 것이 코딩할 때 더 명확히 좋아진다.

Reduce나 Sort 같은 일차 함수에서도 매개변수에 타입을 선언해주면 작업하기 더 수월하다.


### DOM에 대한 타입정의

만약 DOM에 getContext의 속성을 선언했을 때, 에러가 잡힌다면 아래와 같이 해결할 수 있다.

```typescript
const lineChart = $('#lineChart') as HTMLCanvasElement;
const ctx = lineChart.getContext('2d')
```

### 디스트럭처링

디스트럭처링이라고 하는 이 ES6 문법은 한글로 번역하면 구조 분해 문법입니다.
아래 코드는 전형적인 객체 선언 방식입니다. 왼쪽에 변수 이름을 넣고 오른쪽에 데이터 타입을 선언한다. 구조 라는 단어는 이러한 선언 형식을 의미


```typescript
const obj = {
    a: 10,
    b: 20,
    c: 30
}
```

```typescript
function fetchData() {
    return {
        data: {
            name: 'capt',
            age: 100
        },
        config: {},
        statusText: '',
        headers: {}
    }
}

var result = fetchData();
```
이렇게 코드를 선언 했을 때, 콘솔창에 `var result = fetchData();`를 선언하고, `result`를 호출했을 때

```typescript
data: {
        name: 'capt',
        age: 100
    },
    config: {},
    statusText: '',
    headers: {}
```

이와같은 데이터들이 출력된다. 그리고 `result.data`를 입력 시, `{ name: 'capt',age: 100
    },` 해당 값이 출력된다. 그래서 이 값들을 디스트럭처링으로 해결하게 되면 ?


```
var { data, config, statusText } = fetchData();
```

로 편하게 호출해서 사용할 수 있다. 여기서 data나 config를 호출하면 해당 데이터들을 쉽게 확인해볼 수 있다.