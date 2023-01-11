> 이전 버전 - _[Podote v1 프론트 repo](https://github.com/DoK6n/podote)_ , _[Podote v1 서버 repo](https://github.com/DoK6n/podote-server)_

<br /><br />

# 업무를 심플하게, Podote  

> `Podote` : Purple + Todolist + Note (notion, acreom, note.com 등)

할일에 다양한 기능이 있는 문서를 추가해서 해야할 업무를 관리하세요.  

간단한 TodoList 기능으로도 사용할 수 있고,  
사이트 임베드, 이미지, Markdown등 다양한 기능이 있는 문서를 추가할 수 있어요.  

<br /><br /><br />

# 리팩토링

- 모바일웹 우선개발 ( 현재는 모바일웹만 개발된 상태 )
- react router dom 6를 활용한 인증체크
- graphql-codegen을 통한 타입, gql 쿼리, 커스텀훅 자동생성하도록 설정
- 인프라 환경 이전 ( aws -> vercel )
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
