import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">Welcome to Driven</h1>
          <p className="mt-4">
            Driven is a ride-sharing app that connects drivers and passengers.
          </p>
          <button>Discover</button>
        </div>
        <div className="relative block h-96 w-1/2">
          <Image
            src="/banner.png"
            alt="banner driven"
            fill
            priority
            className="object-contain"
          />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <h2>How to get start?</h2>
        <div className="flex">
          <div className="relative h-20 w-20">
            <Image
              src="/solucao1.png"
              alt="solucao ilustration"
              fill
              priority
              className="object-contain"
            />
            <h3>Create your account</h3>
            <p>
              Complete your account with some basic information including your
              home your work location and your working hours
            </p>
          </div>
          <div className="relative h-20 w-20">
            <Image
              src="/solucao2.png"
              alt="solucao ilustration"
              fill
              priority
              className="object-contain"
            />
            <h3>Plan your journeys</h3>
            <p>
              Complete your account with some basic information including your
              home your work location and your working hours
            </p>
          </div>
          <div className="relative h-20 w-20">
            <Image
              src="/solucao3.png"
              alt="solucao ilustration"
              fill
              priority
              className="object-contain"
            />
            <h3>Meet your driver</h3>
            <p>
              Complete your account with some basic information including your
              home your work location and your working hours
            </p>
          </div>
          <div className="relative h-20 w-20">
            <Image
              src="/solucao4.png"
              alt="solucao ilustration"
              fill
              priority
              className="object-contain"
            />
            <h3>Enjoy your journey</h3>
            <p>
              Complete your account with some basic information including your
              home your work location and your working hours
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
