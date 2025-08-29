1. 학습 우선순위 (짧고 명확하게)

React Hook Form 핵심 모델

register / Controller / useForm / useFieldArray / watch / useWatch / formState

왜: 이 프로젝트의 상태는 RHF가 단일 진실(Single Source of Truth).

체크 과제: <input>, <Select>(커스텀) 각각을 register와 Controller로 연결해 보기.

Zod + @hookform/resolvers

왜: 동기 검증을 중앙집중화(스키마 단일화).

체크 과제: Zod 스키마로 필수/패턴/길이/커스텀 리파인 한 번에 묶기.

가시성 규칙(JSON-Logic) 최소셋

왜: “보일지 말지”만 규칙 엔진으로, 검증은 Zod로 분리.

체크 과제: visibleWhen에 { "==": [ { "var": "age" }, 20 ] } 같은 룰을 넣고, watch 값으로 평가해 보기.

RHF 성능/언마운트 특성

shouldUnregister, 대용량 watch 최적화(useWatch를 섹션 단위로), 재렌더 제어.

체크 과제: 섹션 전환 시 언마운트해도 값 보존 전략 비교(로컬 캐시 vs RHF 유지).

대용량 폼 렌더링 전략

섹션/스텝 기반 마운트(가상화는 입력 포커스/검증과 충돌하기 쉬우므로 초반엔 섹션 단위 권장).

체크 과제: 20개 필드×5섹션 → 전환 시 re-render 횟수 측정.

영속화(LocalStorage)

왜: 저장/복원 UX.

체크 과제: watch()로 스로틀/디바운스 저장, 최초 로드시 defaultValues 주입.

접근성(A11y) & 에러 표시 규약

aria-invalid, aria-describedby, 에러 메시지 일관 규약.
