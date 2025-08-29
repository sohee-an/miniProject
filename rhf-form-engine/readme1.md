이력서 한 줄(ATS용 예시 3종)

JSON-driven Form Engine을 React Hook Form+Zod로 설계/구현. visibleWhen(JSON-Logic)로 가시성 분리, 동기 검증·로컬 자동저장 지원, 1,020필드/23섹션 대용량 폼에서도 섹션 단위 구독으로 재렌더 최소화. (Vercel 배포)

JSON 스키마→런타임 렌더러 + 선택적 코드젠(zip) 파이프라인 구축. useFieldArray/Controller 일관 규약으로 상태 일관성 확보, 폼 초기화/복원 및 에러 요약 내비게이션 제공.

섹션 전환 성능 최적화(불필요 watch 제거)로 입력 지연 체감 0ms대, 빌드 산출물 경량화 및 SPA fallback 구성(Nginx/Vercel).

(숫자는 실제 측정해서 넣어줘—아래 ‘증빙 데이터’ 참고)

이 프로젝트로 “공부되는 것” (핵심 스킬 맵)

RHF 심화: register vs Controller 기준, useFieldArray 안정 키, useWatch 범위 최소화, shouldUnregister/언마운트 정책.

스키마 검증: Zod로 동기 검증 단일화(조건부 optional, refine/superRefine).

룰 엔진 최소셋: json-logic으로 가시성만 제어(검증은 Zod 분리) — 의존 필드 모델링.

대용량 폼 성능: 섹션/스텝 마운트 전략, 재렌더 컷(구독 경로 한정), 자동저장 디바운스.

A11y & UX: aria-invalid/aria-describedby, 에러 요약→필드 포커스 점프, 키보드 흐름.

배포/운영: Vercel/Netlify 또는 Docker+Nginx SPA fallback, 소스맵 정책, 에러 로깅.

테스트: 필드 의존/배열 조작/섹션 전환 E2E(Cypress/Playwright), 스키마-to-Zod 유닛.

\*\* 증빙 지표(포폴/면접용으로 꼭 측정)

렌더 지표: 섹션 전환 평균 재렌더 수, 한 섹션 최초 마운트 시간(ms).

입력 지연: 키다운→유효성 결과 표시까지 latency(ms).

규모: 필드 수(1,020), 섹션 수(23), 배열 필드 케이스 수.

안정성: E2E 테스트 케이스/커버리지, 복원 성공률.

번들: 빌드 용량, TTI(정적 호스팅 기준).
