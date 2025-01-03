import Image from 'next/image'
import {Button} from "@/components/ui/button"
import {router} from "next/client";
import clsx from 'clsx';

interface RowItemProps {
    imageSrc: string
    title: string
    subTitle?: string
    content: string
    imageFirst?: boolean
    alignTextTop?: boolean
    buttonLink?: string
    buttonLabel?: string
    buttonColor?: string
}

export function ImageTextButtonRowItem({
                            imageSrc,
                            title,
                            subTitle,
                            content,
                            imageFirst = true,
                            alignTextTop = false,
                            buttonLink,
                            buttonLabel = "확인",
                        }: RowItemProps) {


    const imageElement = (
        <Image
            src={imageSrc}
            alt=""
            width={300}
            height={200}
            className="w-full h-96 object-cover rounded-lg"
        />
    )

    const textElement = (
        <div className={`flex flex-col p-4 space-y-2 h-full ${alignTextTop ? 'justify-start' : 'justify-center'}`}>
            <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
            <h1 className="text-2xl font-bold text-gray-800">{subTitle}</h1>
            <p className="text-gray-600">{content}</p>
            {buttonLink && (
                <Button variant={"outlineHoverFill"} size={"xl"} onClick={() => router.push(buttonLink)}>
                    {buttonLabel}
                </Button>
            )}
        </div>
    )

    return (
        <div className="flex flex-col sm:flex-row items-stretch overflow-hidden rounded-lg h-full">
            <div className="w-full sm:w-1/2">
                {imageFirst ? imageElement : textElement}
            </div>
            <div className="w-full sm:w-1/2">
                {imageFirst ? textElement : imageElement}
            </div>
        </div>
    )
}

