'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

interface SlideData {
  image: string
  text: string
  textPosition: 'left' | 'center' | 'right'
}

const slides: SlideData[] = [
  {
    image: '/placeholder.svg?height=1080&width=1920',
    text: '왼쪽에 있는 텍스트',
    textPosition: 'left'
  },
  {
    image: '/placeholder.svg?height=1080&width=1920',
    text: '가운데 있는 텍스트',
    textPosition: 'center'
  },
  {
    image: '/placeholder.svg?height=1080&width=1920',
    text: '오른쪽에 있는 텍스트',
    textPosition: 'right'
  },
]

const SLIDE_DURATION = 5000 // 5 seconds
const PROGRESS_UPDATE_INTERVAL = 50 // 50 milliseconds

export default function FullscreenSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(nextSlide, SLIDE_DURATION)
  }

  const startProgressInterval = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100
        return newProgress > 100 ? 100 : newProgress
      })
    }, PROGRESS_UPDATE_INTERVAL)
  }

  useEffect(() => {
    if (isPlaying) {
      startTimer()
      startProgressInterval()
    } else {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [isPlaying, currentSlide])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const handleSlideChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      nextSlide()
    } else {
      prevSlide()
    }
    if (isPlaying) {
      startTimer()
      setProgress(0)
      startProgressInterval()
    }
  }

  return (
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
              />
                {/* 텍스트 영역 */}
              {/*TODO container 통일*/}
              <div className={`container mx-auto px-4 max-w-6xl absolute inset-0 flex items-center p-8 ${
                  slide.textPosition === 'left' ? 'justify-start' :
                      slide.textPosition === 'center' ? 'justify-center' : 'justify-end'
              }`}>
                <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md">
                  {slide.text}
                </h1>
              </div>
            </div>
        ))}

        {/* 컨트롤 영역 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          {/* 프로그레스 바 */}
          <div className="w-[200px] h-[2px] bg-white/30">
            <div
                className="h-full bg-white transition-all duration-50"
                style={{ width: `${progress}%` }}
            />
          </div>

          {/* 컨트롤 버튼 */}
          <div className="flex items-center gap-8">
            <button
                onClick={() => handleSlideChange('prev')}
                className="text-white hover:text-white/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
              <span className="sr-only">이전 슬라이드</span>
            </button>

            <button
                onClick={togglePlayPause}
                className="text-white hover:text-white/80 transition-colors"
            >
              {isPlaying ? (
                  <Pause className="w-6 h-6" />
              ) : (
                  <Play className="w-6 h-6" />
              )}
              <span className="sr-only">
              {isPlaying ? '일시정지' : '재생'}
            </span>
            </button>

            <button
                onClick={() => handleSlideChange('next')}
                className="text-white hover:text-white/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
              <span className="sr-only">다음 슬라이드</span>
            </button>
          </div>
        </div>
      </div>
  )
}

