// import { ImageTextRow } from './image-text-row'
import { ImageTextButtonGrid } from './image-text-button-grid'
import {ImageTextButtonRow} from "@/components/image-text-button-row";

const gridItems = [
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"#", buttonLabel:"확인", title: '첫 번째 제목', subTitle : "사실은 이렇지롱",content: '첫 번째 항목에 대한 자세한 설명입니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"#", buttonLabel:"제품알아보기", title: '두 번째 제목', content: '두 번째 항목에 대한 흥미로운 내용이 여기에 들어갑니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"#", buttonLabel:"확인", title: '세 번째 제목', content: '세 번째 항목은 더욱 길고 상세한 설명을 포함할 수 있습니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"", buttonLabel:"이동", title: '네 번째 제목', content: '네 번째 항목에서는 중요한 정보를 강조할 수 있습니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"", buttonLabel:"확인", title: '다섯 번째 제목', content: '마지막 항목으로, 전체 내용을 요약하거나 결론을 내릴 수 있습니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"", buttonLabel:"확인", title: '다섯 번째 제목', content: '마지막 항목으로, 전체 내용을 요약하거나 결론을 내릴 수 있습니다.' },
]

export function ImageTextButtonSample() {
    return (
        <div>
            <ImageTextButtonGrid items={gridItems}/>
            <h2 className="text-2xl font-bold mb-4">버전 1: 모든 행이 동일한 순서</h2>
            <div className="space-y-6 mb-12" role="list" aria-label="이미지 텍스트 그리드 버전 1">
                {gridItems.map((item, index) => (
                    <ImageTextButtonRow
                        key={`v1-${index}`}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        content={item.content}
                        buttonLink={item.buttonLink}
                        buttonLabel={item.buttonLabel}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">버전 2: 번갈아가며 바뀌는 순서 (상단 정렬)</h2>
            <div className="space-y-6" role="list" aria-label="이미지 텍스트 그리드 버전 2">
                {gridItems.map((item, index) => (
                    <ImageTextButtonRow
                        key={`v2-${index}`}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        content={item.content}
                        imageFirst={index % 2 === 0}
                        alignTextTop={true}
                        buttonLink={item.buttonLink}
                        buttonLabel={item.buttonLabel}

                    />
                ))}
            </div>
        </div>
    )
}

