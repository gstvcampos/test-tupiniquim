import Image from 'next/image'

export default function StartSection() {
  return (
    <div>
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
    </div>
  )
}
