'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [])

    return (
        <main className="relative w-screen h-screen overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.text}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={`container mx-auto px-4 max-w-6xl absolute inset-0 flex items-center p-8 ${
                        slide.textPosition === 'left' ? 'justify-start' :
                            slide.textPosition === 'center' ? 'justify-center' : 'justify-end'
                    }`}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md text-shadow">
                            {slide.text}
                        </h1>
                    </div>
                </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prevSlide}
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="이전 슬라이드"
                >
                    <ChevronLeft className="w-9 h-9" />
                </button>
                <button
                    onClick={nextSlide}
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="다음 슬라이드"
                >
                    <ChevronRight className="w-9 h-9" />
                </button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors border border-white ${
                            index === currentSlide ? 'bg-white' : 'bg-transparent'
                        }`}
                        aria-label={`${index + 1}번째 슬라이드로 이동`}
                    />
                ))}
            </div>
        </main>
    )
}

