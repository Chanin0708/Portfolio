import { Container } from "@/components/shared/main/Container"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/images/hero.webp",
    alt: "Hero Illustration 1"
  },
  {
    id: 2,
    image: "/images/hero5.webp",
    alt: "Hero Illustration 2"
  },
  {
    id: 3,
    image: "/images/hero4.webp",
    alt: "Hero Illustration 3"
  }
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = slide.image
          img.onload = resolve
          img.onerror = reject
        })
      })
      Promise.all(imagePromises)
        .then(() => setIsLoaded(true))
        .catch(console.error)
    }
    preloadImages()
  }, [])
  useEffect(() => {
  }, [isLoaded])

  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl text-center font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-left lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              MR. CHANIN  PHOLSIRI
            </h1>
            <div className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-400 lg:text-xl xl:text-2xl">
              FULL STACK DEVELOPER
            </div>

            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a href="https://github.com/Chanin0708" className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg role="img" width="24" height="24" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                &nbsp;GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 lg:w-1/2 flex justify-center lg:justify-end">
          <img src="/images/aaa.png" alt="Hero Image" className="h-150 w-auto" />
        </div>
      </Container>

      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2">
              <img 
                src="/images/brands/amazon.svg" 
                alt="Amazon logo" 
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div>
              <img 
                src="/images/brands/verizon.svg" 
                alt="Verizon logo" 
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div>
              <img 
                src="/images/brands/microsoft.svg" 
                alt="Microsoft logo" 
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="pt-1">
              <img 
                src="/images/brands/netflix.svg" 
                alt="Netflix logo" 
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="pt-2">
              <img 
                src="/images/brands/sony.svg" 
                alt="Sony logo" 
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
          </div>
        </div>
      </Container> */}
    </>
  )
}