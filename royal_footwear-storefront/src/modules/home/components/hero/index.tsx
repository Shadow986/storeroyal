import { Github, } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Welcome to
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            ROYAL FOOTWEAR
          </Heading>
        </span>
        
        <a
          href="https://landing-page-ten-eta-79.vercel.app/"
          target="_blank"
        >
          <Button variant="secondary">
            HOME
            <Github />
          </Button>
        </a>

        <a
          href="https://www.instagram.com/royal_footwear986jrt/"
          target="_blank"
        >
          <Button variant="secondary">
            INSTAGRAM
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
