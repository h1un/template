import { Wrench, Handshake, HardHat } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {motion} from 'framer-motion'

export default function IconTextRowBox() {
  const features = [
    {
      icon: Wrench,
      title: "다년간 다져온",
      description: "전문성과 열정의 조화"
    },
    {
      icon: Handshake,
      title: "고객 최우선",
      description: "신뢰 가능한 파트너"
    },
    {
      icon: HardHat,
      title: "최고의 품질과 안전을",
      description: "선도하는 기업"
    }
  ]

  return (
      <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.5}}
      >
      <Card className="p-6 bg-white/50 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {features.map((feature, index) => (
              <div key={index} className="flex items-center w-full">
                <CardContent className="flex flex-col items-center justify-center text-center w-full">
                  <feature.icon className="w-16 h-16 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
                {index < features.length - 1 && (
                    <Separator className="hidden sm:block h-20 self-center" orientation="vertical" />
                )}
              </div>
          ))}
        </div>
      </Card>
      </motion.div>
  )
}

