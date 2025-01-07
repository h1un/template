'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const qaPairs = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience."
    },
    {
        question: "What are the key features of React?",
        answer: "Key features of React include its virtual DOM for efficient updating, component-based architecture, JSX syntax, and unidirectional data flow."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript, recommended for use with React. It looks similar to XML/HTML and allows you to write HTML structures in the same file as your JavaScript code."
    },
    {
        question: "What are React Hooks?",
        answer: "React Hooks are functions that let you use state and other React features in functional components, without writing a class. Examples include useState, useEffect, and useContext."
    }
]

const QnA = () => {
    return (
            <div className="
            {/*max-w-3xl mx-auto*/}
            ">
                <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
                    React Q&A
                </h1>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AnimatePresence>
                        {qaPairs.map((pair, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold transition-colors duration-200 hover:no-underline hover:text-primary">
                                        {pair.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="px-6 py-4"
                                        >
                                            {pair.answer}
                                        </motion.div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </Accordion>
            </div>
    )
}

export default QnA

