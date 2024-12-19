import { useEffect, useState } from 'react'
import { RowItem } from './row-item'

interface AnimatedRowProps {
    imageSrc: string
    text: string
    delay: number
    imageFirst?: boolean
}

export function ImageTextRow({ imageSrc, text, delay, imageFirst = true }: AnimatedRowProps) {
    //TODO useState, useEffect 빼고 css 로 처리할수있게 변경
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div
            className={`transition-all duration-500 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <RowItem imageSrc={imageSrc} text={text} imageFirst={imageFirst} />
        </div>
    )
}

