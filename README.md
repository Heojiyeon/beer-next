## Beer-Next

### 🔎 개발 배경
- Next.js를 경험 해보고 싶었어요 (근데 이제 욕심이 생겨서 추가되는 것들이 많아진)
- 하는 김에 **Next.js의 App router, 렌더링 방식 (SSR, ISR), 배포 자동화, PWA**을 목표로 잡았어요

*** 

### 🛠️ 기술 스택
- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- Notion API
- Sample API
- Vercel

***

### 🖍️ 주요 학습 내용
- **App Router** 방식의 프로젝트 개발 방식을 이해했어요
- **Route Groups**를 적극 활용해 동일 계층 페이지를 엮어 공통 layout, error, loading 컴포넌트를 활용할 수 있었어요
- **SSR, SSG, ISR의 차이**를 이해하고, 특히 **SSR, ISR을 활용**한 데이터 패치 페이지를 개발했어요
- **Github Actions**를 활용해 배포 자동화를 진행했어요 (브랜치 별 배포 도메인 관리, 환경 변수 public, private 관리 중요성 인식)
- Next/Image의 ```placeholder='blur'```를 활용해 CLS(Cumulative Layout Shift)를 개선하고자 했어요
- 맥주 api를 호출하면서 발생한 CORS 에러를 **Server-side Component** 에서 호출하는 방식을 선택해 에러를 해결했어요 (CORS는 오직 브라우저에서만 적용된다는 것을 제대로 느꼈어요!)
- ISR 도입을 위해 fetch 형태의 **request handler**를 커스텀해봤어요 (결국 원인 모를 에러로 해당 핸들러는 활용할 수 없었지만 깊게 이해할 수 있었어요)
- PWA를 도입해보면서 IOS의 경우 설치 방식이 다름을 깨닫고 반응형과 개발 방식을 이해했어요
- **Error Boundary, Suspense**를 도입하면서 원하는 위치에 error.tsx 혹은 loading.tsx를 생성하면 쉽고 간단하게 적용됨을 알 수 있었어요

***

### 🤯 트러블 슈팅
- ISR 도입 여정기 (링크 추가 예정)
