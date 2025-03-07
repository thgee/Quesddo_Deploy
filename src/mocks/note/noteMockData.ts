// 노트 관련 Mock 데이터를 정의하는 파일

import { TeamIdNotesGet200ResponseNotesInner } from "@/types/types";

export const noteDetailMockData = (
  noteId: number,
): TeamIdNotesGet200ResponseNotesInner => ({
  id: noteId,
  teamId: "quesddo",
  userId: 1,
  goal: { id: 1, title: "매일 꾸준히 운동하기" },
  todo: { id: 1, done: false, title: "오늘의 운동 계획" },
  updatedAt: "2024-02-25T12:00:00Z",
  createdAt: "2024-02-25T12:00:00Z",
  title: `운동 기록 - ${noteId}`,
  linkUrl: "https://www.youtube.com/embed/W2jfXmfeFo0",
  content: `
오늘 아침, 이른 시간에 일어나 창문을 열고 신선한 공기를 마시며 하루를 시작했다. 
눈을 뜬 순간부터 몸의 각 근육을 깨우기 위해 가벼운 스트레칭과 호흡 운동을 진행하였으며, 평소보다 더 집중하여 준비 운동을 했다. 
따뜻한 햇살 아래서 공원으로 향하며, 자연의 소리와 함께 마음을 진정시켰다. 
공원의 산책로를 따라 걷다 보면, 주변의 나무와 꽃들이 주는 생동감이 운동의 즐거움을 배가시켰다. 
가벼운 조깅과 함께 빠르게 걷는 동작을 번갈아 가며, 심박수를 올리고 전신의 혈액 순환을 원활하게 만들기 위한 준비 과정을 철저하게 수행했다.

본격적인 운동 세션에서는 먼저 인터벌 트레이닝을 선택하여, 1분간 빠른 속도로 달린 후 1분간 천천히 걷는 식으로 반복했다. 
이 과정에서 몸이 점점 열을 받으며 근육의 긴장이 풀리고, 운동의 효율이 극대화되는 것을 느낄 수 있었다. 
다양한 자세 전환과 함께 스트레칭 동작도 병행하여, 부상 예방에 신경 썼다.

중간에 잠시 휴식을 취하며, 물 한잔과 에너지 보충을 위한 과일을 섭취하였다. 
이 시간 동안 심신을 재정비하며, 앞으로의 운동 계획에 대해 다시 한 번 집중할 수 있었다. 
짧은 휴식이었지만, 충분한 재충전의 기회가 되어 다음 운동 세션으로 원활하게 넘어갈 수 있었다.

이어지는 세션에서는 근력 운동에 집중했다. 
스쿼트, 런지, 푸시업, 플랭크 등 여러 동작을 조합하여 전신 근육을 고루 사용하도록 계획하였으며, 
각 동작마다 정확한 자세와 호흡을 유지하려 노력했다. 
매 동작마다 운동의 효과를 극대화하기 위해 근육의 긴장을 느끼며 천천히 진행하였고, 반복 횟수를 조절하여 자신에게 맞는 적정 강도를 유지하였다.

운동의 마지막 단계에서는 쿨다운과 정리 운동을 실시하였다. 
심박수를 서서히 낮추고, 근육의 이완과 회복을 돕기 위해 부드러운 스트레칭을 반복하였다. 
이 과정에서 오늘 하루 동안의 운동 기록과 몸 상태를 점검하며, 
앞으로의 개선 방향과 목표를 다시 한 번 상기하는 소중한 시간이 되었다.

전반적으로 오늘의 운동은 체력 향상과 정신적 집중 모두를 만족시킬 수 있는 알찬 시간이었으며, 
운동 전, 중, 후의 모든 과정에서 몸과 마음의 균형을 맞추기 위한 노력이 돋보였다. 
앞으로도 이러한 세심한 계획과 기록을 통해 지속 가능한 운동 루틴을 유지하고, 더 나은 건강과 체력을 목표로 삼아나갈 것이다. 

오늘의 운동 기록은 단순한 신체 활동의 기록을 넘어, 일상의 소소한 행복과 성취감을 재확인하는 중요한 시간이었다. 
매 순간 최선을 다하며, 운동을 즐기는 마음가짐이 내 삶에 긍정적인 영향을 주고 있음을 느낄 수 있었다. 
앞으로도 이 기록을 토대로 꾸준히 자기 발전을 도모하고, 새로운 목표에 도전하는 모습을 기대해본다.
`,
});
