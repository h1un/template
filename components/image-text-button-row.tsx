import {motion} from 'framer-motion'
import {ImageTextButtonRowItem} from './image-text-button-row-item'

interface ImageTextRowProps {
    imageSrc: string
    title: string
    subTitle?: string
    content: string
    imageFirst?: boolean
    alignTextTop?: boolean
    buttonLink?: string
    buttonLabel?: string
}

export function ImageTextButtonRow({
                                 imageSrc,
                                 title,
                                 subTitle,
                                 content,
                                 imageFirst = true,
                                 alignTextTop = false,
                                 buttonLink,
                                 buttonLabel
                             }: ImageTextRowProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{duration: 0.5}}
        >
            <ImageTextButtonRowItem
                imageSrc={imageSrc}
                title={title}
                subTitle={subTitle}
                content={content}
                imageFirst={imageFirst}
                alignTextTop={alignTextTop}
                buttonLink={buttonLink}
                buttonLabel={buttonLabel}
            />
        </motion.div>
    )
}

