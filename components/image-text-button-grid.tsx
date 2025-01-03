import { motion } from 'framer-motion'
import { ImageTextButtonGridItem } from './image-text-button-grid-item'

interface ImageTextGridProps {
    items: Array<{
        imageSrc: string
        title: string
        subTitle?: string
        content: string
        buttonLink?: string
        buttonLabel?: string
    }>
}

export function ImageTextButtonGrid({ items }: ImageTextGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <ImageTextButtonGridItem
                        imageSrc={item.imageSrc}
                        title={item.title}
                        subTitle={item.subTitle}
                        content={item.content}
                        buttonLink={item.buttonLink}
                        buttonLabel={item.buttonLabel}
                    />
                </motion.div>
            ))}
        </div>
    )
}

