import React from "react";
import { processType } from "./interface";

export const START_DATE = "START_DATE" as const;
export const END_DATE = "END_DATE" as const;
export const FIRST_ANNOUNCEMENT = "FIRST_ANNOUNCEMENT" as const;
export const BEFORE_INTERVIEW = "BEFORE_INTERVIEW" as const;
export const INTERVIEW = "INTERVIEW" as const;
export const SECOND_ANNOUNCEMENT = "SECOND_ANNOUNCEMENT" as const;
export const BEFORE_SECOND_ANNOUNCE = "BEFORE_SECOND_ANNOUNCE" as const;
export const NOT_APPLICATION_PERIOD = "NOT_APPLICATION_PERIOD" as const;
export const BEFORE_FIRST_ANNOUNCE = "BEFORE_FIRST_ANNOUNCE" as const;
export const APPLICATION_PERIOD = "APPLICATION_PERIOD" as const;
export const END = "END" as const;

export type scheduleType =
  | typeof START_DATE
  | typeof END_DATE
  | typeof FIRST_ANNOUNCEMENT
  | typeof SECOND_ANNOUNCEMENT
  | typeof INTERVIEW
  | typeof NOT_APPLICATION_PERIOD
  | typeof BEFORE_FIRST_ANNOUNCE
  | typeof BEFORE_SECOND_ANNOUNCE
  | typeof BEFORE_INTERVIEW
  | typeof END
  | typeof APPLICATION_PERIOD;

const scheduleConstance: Record<scheduleType, processType> = {
  [NOT_APPLICATION_PERIOD]: {
    title: <p>지금은 원서접수기간이 아닙니다.</p>,
    getDescription: (date?: string) => (
      <p>원서접수 기간은 {<span>{date}</span>} 에 시작됩니다.</p>
    ),
    buttonText: "일정 수정",
  },
  [START_DATE]: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date?: string) => (
      <p>원서 접수 기간은 {<span>{date}</span>} 까지 입니다.</p>
    ),
    buttonText: "일정 수정",
  },
  [BEFORE_FIRST_ANNOUNCE]: {
    title: <p>원서 접수가 끝났습니다.</p>,
    getDescription: (date?: string) => (
      <p>1차 발표일은 {<span>{date}</span>} 입니다.</p>
    ),
    buttonText: "일정 수정",
  },
  [FIRST_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>1차 발표</span>} 기간입니다.</p>,
    getDescription: () => "",
    buttonText: "일정 수정",
  },
  [BEFORE_INTERVIEW]: {
    title: <p>면접 진행 전입니다.</p>,
    getDescription: (date?: string) => (
      <p>면접 기간은 {<span>{date}</span>} 입니다.</p>
    ),
    buttonText: "일정 수정",
  },
  [INTERVIEW]: {
    title: <p>지금은 {<span>면접</span>} 기간입니다.</p>,
    getDescription: (date?: string) => (
      <p>면접 기간은 {<span>{date}</span>} 입니다. </p>
    ),
    buttonText: "일정 수정",
  },
  [BEFORE_SECOND_ANNOUNCE]: {
    title: <p>면접이 끝났습니다.</p>,
    getDescription: (date?: string) => (
      <p>2차 발표일은 {<span>{date}</span>} 입니다.</p>
    ),
    buttonText: "일정 수정",
  },
  [SECOND_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>발표 및 등록</span>} 기간입니다.</p>,
    getDescription: (date?: string) => (
      <p>등록 기간은 {<span>{date}</span>} 입니다.</p>
    ),
    buttonText: "일정 수정",
  },
  [END_DATE]: {
    title: "원서 접수가 마감되었습니다.",
    getDescription: () => "",
    buttonText: "일정 수정",
  },
  [END]: {
    title: "2022년 입학 전형이 끝났습니다.",
    getDescription: () => <p>내년을 기약해 주세요.</p>,
    buttonText: "일정 수정",
  },
  [APPLICATION_PERIOD]: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date: string) => (
      <p>원서 접수 기간은 {<span>{date}</span>}까지 입니다.</p>
    ),
    buttonText: "일정 수정",
  },
};

export const mainProcessNumber = {
  [NOT_APPLICATION_PERIOD]: 1,
  [APPLICATION_PERIOD]: 2,
  [BEFORE_FIRST_ANNOUNCE]: 3,
  [FIRST_ANNOUNCEMENT]: 4,
  [INTERVIEW]: 5,
  [SECOND_ANNOUNCEMENT]: 6,
};

export default scheduleConstance;
