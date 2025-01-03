import Image from 'next/image'
import {Button} from "@/components/ui/button"
import {router} from "next/client";


// todo
// button background color
// button foreground color ? font color ?
interface GridItemProps {
    imageSrc: string
    title: string
    subTitle?: string
    content: string
    buttonLink?: string
    buttonLabel?: string
}

export function ImageTextButtonGridItem({imageSrc, title, subTitle, content, buttonLink, buttonLabel = "확인"}: GridItemProps) {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="h-72">
                <Image
                    src={imageSrc}
                    alt=""
                    width={300}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-col flex-grow p-4 space-y-2">
                <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
                <h3 className="text-2xl font-bold text-gray-800">{subTitle}</h3>
                <p className="text-gray-600 flex-grow">{content}</p>
                {buttonLink && (
                    <Button variant={"outlineHoverFill"} className="mt-2" onClick={() => router.push(buttonLink)}>
                        {buttonLabel}
                    </Button>
                )}

            </div>
        </div>
    );
}

