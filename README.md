> 이전 버전 - _[Podote v1 프론트 repo](https://github.com/DoK6n/podote)_ , _[Podote v1 서버 repo](https://github.com/DoK6n/podote-server)_

<br /><br />

# 업무를 심플하게, Podote

> `Podote` : Purple + Todolist + Note (notion, acreom, note.com 등)

할일에 다양한 기능이 있는 문서를 추가해서 해야할 업무를 관리하세요.

간단한 TodoList 기능으로도 사용할 수 있고,  
사이트 임베드, 이미지, Markdown등 다양한 기능이 있는 문서를 추가할 수 있어요.

<br /><br /><br />

### 기술 스택 및 배포

- Tech

  - Client : React, ApolloClient, Zustand, Emotion, Remirror, Firebase Auth
  - Server : NestJS, Prisma, ApolloServer, PostgreSQL, Firebase Admin

- Deploy
  - Client : Vercel
  - Server : EC2, Nginx, Docker-compose

<br />
<br />

## ApolloClient Cache

GraphQL 라이브러리중 Apollo Client 사용할 때,
useQuery로 데이터를 가져오고 상태 관리 라이브러리로 또 추가 해주다보니 해야 할 작업이 늘어났습니다.

이를 해결하기 위해 Apollo Client의 캐싱을 사용하였습니다.
Apollo Client는 쿼리와 데이터들을 캐싱하여 클라이언트단에서 보관합니다.
또, useMutation로 데이터를 추가할때, useQuery로 추가한 데이터를 참조해야 하는 컴포넌트와 싱크를 맞추기 위해서 refetchQueries를 사용하여 해결하였습니다.

<br />
<br />

## 상태관리 라이브러리 고민

상태관리는 Recoil과 Zustand 중에서 고민하였는데  
다음과 같은 이유로 Zustand를 선택하였습니다.

- Redux devtools를 연동해서 사용할 수 있다.
- 라이브러리 원본소스양이 적어서 문제가 생겨 원본소스를 봐야할 때 좋을 것 같아서
- 다양한 미들웨어 (로컬 스토리지, 상태 변화 구독, immer 지원 등)

<br /><br /><br />

# 리팩토링

- 모바일웹 우선개발 ( 현재는 모바일웹만 개발된 상태 )
- react router dom 6를 활용한 인증체크
- graphql-codegen을 통한 타입, gql 쿼리, 커스텀훅 자동생성
- 프론트 인프라 환경 이전 ( aws -> vercel )
- ApolloClient Cache Hook
- 모노레포 환경 구축

<br /><br /><br /><br />

## commit message

```
ci: ci 구성파일 및 스크립트 수정
feat: 기능
fix: 버그 수정
docs: 문서
style: 코드 의미에 영향을 주지 않는 변경사항 ( formatting )
design: 디자인 관련 (css나 svg, img, png 파일 등)
refactor: 코드 리팩토링
test: 테스트 코드
build: 시스템 또는 외부 종속성에 영향을 미치는 변경 사항 (pnpm, npm, yarn 레벨)
revert: 롤백
perf: 성능 개선
chore: 그 외 자잘한 수정, 패키니 매니저 설정, 코드 수정 없이 설정 변경
```
