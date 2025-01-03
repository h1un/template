// import { ImageTextRow } from './image-text-row'
import { ImageTextButtonGrid } from './image-text-button-grid'

const gridItems = [
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"#", buttonLabel:"확인", title: '첫 번째 제목', subTitle : "사실은 이렇지롱",content: '첫 번째 항목에 대한 자세한 설명입니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"#", buttonLabel:"제품알아보기", title: '두 번째 제목', content: '두 번째 항목에 대한 흥미로운 내용이 여기에 들어갑니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"#", buttonLabel:"확인", title: '세 번째 제목', content: '세 번째 항목은 더욱 길고 상세한 설명을 포함할 수 있습니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"", buttonLabel:"이동", title: '네 번째 제목', content: '네 번째 항목에서는 중요한 정보를 강조할 수 있습니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"", buttonLabel:"확인", title: '다섯 번째 제목', content: '마지막 항목으로, 전체 내용을 요약하거나 결론을 내릴 수 있습니다.' },
    { imageSrc: '/placeholder.svg?height=200&width=300', buttonLink:"", buttonLabel:"확인", title: '다섯 번째 제목', content: '마지막 항목으로, 전체 내용을 요약하거나 결론을 내릴 수 있습니다.' },
]

export function ImageTextButtonGridSample() {
    return (
        <div className="container mx-auto px-4 py-8">
                <ImageTextButtonGrid items={gridItems}/>
        </div>
    )
}

