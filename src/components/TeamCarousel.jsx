import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// TeamCarousel component accepts a domain and an array of member objects.
export function TeamCarousel({ domain, members }) {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4 flex justify-center items-center">{domain}</h2>
      <Carousel
        plugins={[autoplayPlugin.current]}
        className="w-full overflow-hidden"
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent>
          {members.map((member, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="rounded-xl shadow-md">
                  <CardContent className="flex flex-col items-center justify-center p-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-30 h-30 rounded-full object-cover mb-2"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-md text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
