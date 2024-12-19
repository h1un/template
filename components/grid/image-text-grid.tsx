import { ImageTextRow } from './image-text-row'

const gridItems = [
    { imageSrc: '/placeholder.svg', text: '첫 번째 항목' },
    { imageSrc: '/placeholder.svg', text: '두 번째 항목' },
    { imageSrc: '/placeholder.svg', text: '세 번째 항목' },
    { imageSrc: '/placeholder.svg', text: '네 번째 항목' },
    { imageSrc: '/placeholder.svg', text: '다섯 번째 항목' },
]

export function ImageTextGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">버전 1: 모든 행이 동일한 순서</h2>
            <div className="space-y-4 mb-8" role="list" aria-label="애니메이션 그리드 버전 1">
                {gridItems.map((item, index) => (
                    <ImageTextRow
                        key={`v1-${index}`}
                        imageSrc={item.imageSrc}
                        text={item.text}
                        delay={index * 200}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">버전 2: 번갈아가며 바뀌는 순서</h2>
            <div className="space-y-4" role="list" aria-label="애니메이션 그리드 버전 2">
                {gridItems.map((item, index) => (
                    <ImageTextRow
                        key={`v2-${index}`}
                        imageSrc={item.imageSrc}
                        text={item.text}
                        delay={index * 200}
                        imageFirst={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    )
}

