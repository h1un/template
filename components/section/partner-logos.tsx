'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
    { name: 'Partner 1', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 2', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 3', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 4', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 5', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 6', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 7', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 8', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 9', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 10', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 11', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 12', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 13', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 14', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 15', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 16', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 17', logo: '/placeholder.svg?height=400&width=400' },
    { name: 'Partner 18', logo: '/placeholder.svg?height=400&width=400' },
]

export default function PartnerLogos() {
    return (
            <div className="">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Partners</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="col-span-1 flex justify-center items-center"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={400}
                                height={400}
                                className="max-h-24 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
    )
}

