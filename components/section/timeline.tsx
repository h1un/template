'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

interface TimelineProps {
  items: TimelineItem[];
  showLine?: boolean;
}

export interface TimelineItem {
  year: string;
  events: string[];
}


export function Timeline({ items, showLine = true }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false))

  const handleVisibilityChange = useCallback((index: number, isVisible: boolean) => {
    setVisibleItems(prev => {
      const newVisibleItems = [...prev]
      newVisibleItems[index] = isVisible
      return newVisibleItems
    })
  }, [])

  return (
      <div className="relative max-w-2xl mx-auto py-16 px-4" ref={timelineRef}>
        {/* Vertical line */}
        {showLine && (
            <div className="absolute top-0 bottom-0 w-px bg-border left-4" />
        )}

        <div className="space-y-16">
          {items.map((item, index) => (
              <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  onVisibilityChange={handleVisibilityChange}
                  isVisible={visibleItems[index]}
                  showLine={showLine}
              />
          ))}
        </div>
      </div>
  )
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  onVisibilityChange: (index: number, isVisible: boolean) => void;
  isVisible: boolean;
  showLine: boolean;
}

function TimelineItem({ item, index, onVisibilityChange, isVisible, showLine }: TimelineItemProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      onVisibilityChange(index, true)
    }
  }, [inView, index, onVisibilityChange])

  return (
      <motion.div
          ref={ref}
          className={`relative ${showLine ? 'pl-12' : 'pl-0'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          {showLine && (
              <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-background border-2 border-border rounded-full -ml-4" />
          )}
          <h3 className={`text-2xl font-bold ${showLine ? '' : 'ml-0'}`}>{item.year}</h3>
        </div>
        <div className="space-y-2 text-muted-foreground">
          {item.events.map((event, eventIndex) => (
              <p key={eventIndex}>{event}</p>
          ))}
        </div>
      </motion.div>
  )
}

