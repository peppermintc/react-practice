### 프레임워크와 라이브러리의 차이

- 프레임워크는 정해진 골격안에서 원하는 기능을 구현
- 라이브러리는 따로 정해진 골격이 없고 필요한 기능에 따라서 골라 사용할 수 있다.

### 리액트 소개하기

- 페이스북에서 만든 자바스크립트 라이브러리 중 하나로 넷플릭스 에어비앤비 인스타그램에서도 사용되어지고 있다
- 리액트는 유저 인터페이스를 만들 때 사용하는 라이브러리
- 리액트는 라이브러리여서 도구처럼 사용하여 다른 라이브러리와 결합 가능
- 리액트는 MVC 패턴에서 사용자에게 보여지는 View 부분을 담당
- 사용자에게 UI를 보여주고 이벤트를 처리하는 역할을 함
- 모바일 환경의 리액트 네이티브, 일렉트론을 이용하면데스크톱 애플리케이션을 만들 수 있어서 다방면으로 사용 가능
- 컴포넌트로 이루어진 UI 라이브러리이다
- 하나 이상의 컴포넌트로 이루어져 있다
- 컴포넌트는 하나의 동작을 수행하는 재사용이 가능한 것
- 재사용이 가능한 컴포넌트들을 모아서 원하는 웹 UI를 만들 수 있음
- 컴포넌트를 만들 때는 독립적인 기능을 가지고 재사용이 가능하도록 만드는 것이 좋다

### 컴포넌트 리렌더링

- 컴포넌트는 state와 render함수 부분으로 나눌 수 있다.
- State 오브젝트가 변경되면 render함수가 자동적으로 다시 호출 -> 바뀐 State 정보가 다시 화면에 나타날 수 있도록
- 만약 렌더함수에 자식 컴포넌트가 있다면 state 업데이트 시에 자녀 컴포넌트들의 렌더 함수도 다시 호출이 된다

### 리액트 Virtual DOM 작동 설명

- 리액트의 Virtual DOM Tree는 부모 컴포넌트가 변동사항이 생겨서 자식 컴포넌트의 render 함수가 실행 되었을 때 이전의 DOM Tree와 비교하여 정말로 변동 사항이 있는 부분을 계산한 다음에 실제 변동되는 부분만 실제 DOM Tree에 업데이트
- 이러한 작동 방식 때문에 정말 실제로 보여지는 부분이 변동사항이 없다면 DOM Tree가 업데이트 되지 않음
- 렌더 함수가 많이 실행되어도 실제 DOM의 렌더링이 일어난 것은 아니므로 성능 걱정을 하지 않아도 됨

### 리액트 요약 간단 설명

- 컴포넌트들
- 변동 사항이 생길 때마다 전체 애플리케이션을 다시 렌더링
- 리액트가 속도가 빠른 이유는 가상의 DOM Tree를 보관하여서 이전의 Tree와 비교하는 과정이 있고 매번 업데이트하지 않고 한번에 모아서 업데이트 해주기 때문
- 빠르다는 것도 특징
- 리액트는 컴포넌트 단위로 만들어진 UI를 만들 수 있는 라이브러리 입니다
- 컴포넌트는 독립적이고 재사용이 가능하기 때문에 유닛테스트를 수행하기 좋다
- 컴포넌트는 state, render함수를 가지고 있다
- 성능이 좋은 이유는 VDOM이 있기 때문

### 리액트 공식문서 추천 시작 방법

- 간단하게 Single page app을 시작 -> Create react app (오픈소스, 페이스북에서 관리)
- Server Rendered website with Node.js -> Next.js
- Static content-oriented website -> Gatsby

### 컴포넌트 만드는 방법

- Class Component는 this를 사용하여야하는데, 이것이 어려워서 Function Component에 Hook을 도입하기 시작
- React Hook은 비교적 최근에 도입되어서 기존의 프로그래밍들은 Class 컴포넌트를 사용한 것이 많아서 클래스 컴포넌트에 대해 알고 있어야함

### react-dom (ReactDOM)

- 바벨은 리액트 컴포넌트를 브라우저가 이해 할 수 있는 순수 자바스크립트로 변환시킴 -> react-dom은 변환된 순수 자바스크립트를 HTML과 연결 시킴
- 이것이 컴포넌트에서 react-dom을 import하는 이유
- react 빌드과정에서 index.html과 자바스크립트가 연결됨 (script태그로)

### JSX

- html tag의 class는 JSX에서는 className으로 표현
- 하나의 노드로 묶어야 한다 (<React.Fragment></React.Fragment>, <></> 사용)

### PureComponent

- State나 Props가 변화하지 않으면 업데이트(render함수 실행)가 되지 않도록 shouldComponentUpdate()가 구현되어있는 컴포넌트
- Shallow Comparison이기 때문에 props로 받은 object의 내용물이 변화된 것은 감지하지 못한다

### memo

- 컴포넌트의 props가 변화할 때만 렌더링

### CSS Vendor Prefix

- -webkit- -moz- -ms- -o- 브라우저 종류별로 테스트 버전에 해당하는 CSS 속성들을 사용 할 때 적음
- 브라우저 테스트가 끝나고 버전이 업데이트되면 더 이상 prefix를 붙이지 않아도 됨

### CSS 가상 클래스 선택자

- :가상이벤트를 붙이면 특정 이벤트마다 적용 할 스타일을 설정 할 수 있음
- pseudo-class, 가상 클래스라고 부름

### BEM

- CSS Architecture
- Block Element Modifier
- Block: 독립적인 의미를 가진 컴포넌트
- Element: block의 요소
- Modifier: block이나 element의 외관 속성을 변화시킴
- ex) .block\_\_element--modifier

### CSS Module

- CSS 클래스가 중첩되는 것을 방지 할 수 있음
- filename.module.css로 css 파일 이름 작성
- 중복되진 않는 고유한 css 이름들이 만들어짐 (\_src_filename_module\_\_cssclass)

### postman

- API 테스팅 툴

### shell

- 명령어 처리기

### shell script

- shell을 사용하여 컴퓨터에 시킬 명령을 작성하여 실행

### xhr

- 브라우저와 서버 사이에서 Ajax 요청을 보내, 데이터를 전송하는 객체 형태의 API

### Ajax

- 자바스크립트를 사용한 비동기 통신
- 서버와 클라이언트 사이에서 XML 데이터를 주고 받는 기술
- 웹페이지를 다시 불러오지 않고 부분적으로 사용자 인터페이스 갱신 가능

### em, rem

- em: ephemeral unit을 뜻함 해석하면 임시 유닛, 상위 요소 크기에 비례하는 값을 정함
- rem: root ephemeral unit, 문서의 최상단 요소 크기에 비례

### 앞으로 공부 할 내용

react router

PostCSS - 모듈화해서 CSS를 쉽게 작성

Test Code 작성 방법
