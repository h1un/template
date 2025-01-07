'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
    { name: 'Partner 1', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 2', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 3', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 4', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 5', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 6', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 7', logo: '/placeholder.svg?height=240&width=240' },
    { name: 'Partner 8', logo: '/placeholder.svg?height=240&width=240' },
]

export default function ScrollingPartnerLogos() {
    return (
        <div className="py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Partners</h2>
                <motion.div
                    className="flex"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="flex-shrink-0 mx-12">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={120}
                                height={120}
                                className="max-h-24 object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

