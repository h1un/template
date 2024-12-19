import Image from 'next/image'

interface RowItemProps {
    imageSrc: string
    text: string
    imageFirst?: boolean
}

export function RowItem({ imageSrc, text, imageFirst = true }: RowItemProps) {
    const imageElement = (
        <Image
            src={imageSrc}
            alt=""
            width={300}
            height={500}
            className="w-1/2 h-60 object-cover rounded-lg"
        />
    )

    const textElement = (
        <p className="p-4 text-gray-800 w-1/2">{text}</p>
    )

    return (
        <div className="flex flex-row items-center overflow-hidden">
            {imageFirst ? (
                <>
                    {imageElement}
                    {textElement}
                </>
            ) : (
                <>
                    {textElement}
                    {imageElement}
                </>
            )}
        </div>
    )
}

