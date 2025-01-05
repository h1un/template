'use client'

import { Timeline, TimelineItem } from "@/components/section/timeline"

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    events: [
      "OOOO 설립 10주년",
      "홍콩, 싱가폴, 일본, 호주 등 수출",
      "유럽 디자인 수출"
    ]
  },
  {
    year: "2023",
    events: [
      "회사이전 서울특별시 강남구 테헤란로 123",
      "ISO 실용실안 특허 획득",
      "유럽 CE 인증서 획득"
    ]
  },
  {
    year: "2022",
    events: [
      "OOOO 설립 10주년",
      "홍콩, 싱가폴, 일본, 호주 등 수출",
      "유럽 디자인 수출"
    ]
  },  {
    year: "2022",
    events: [
      "OOOO 설립 10주년",
      "홍콩, 싱가폴, 일본, 호주 등 수출",
      "유럽 디자인 수출"
    ]
  },  {
    year: "2022",
    events: [
      "OOOO 설립 10주년",
      "홍콩, 싱가폴, 일본, 호주 등 수출",
      "유럽 디자인 수출"
    ]
  },  {
    year: "2022",
    events: [
      "OOOO 설립 10주년",
      "홍콩, 싱가폴, 일본, 호주 등 수출",
      "유럽 디자인 수출"
    ]
  }
]

export default function TimelineSample() {
  return (
      <main className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">회사 연혁</h1>
        <Timeline items={timelineData}
        // showLine={false}
        />

      </main>
  )
}

