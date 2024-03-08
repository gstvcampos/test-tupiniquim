'use client'

import Image from 'next/image'

const sections = [
  {
    id: 1,
    src: '/solucao1.png',
    title: 'Create your account',
    description:
      'Complete your account with some basic information including your home your work location and your working hours',
  },
  {
    id: 2,
    src: '/solucao2.png',
    title: 'Plan your journeys',
    description:
      'Complete your account with some basic information including your home your work location and your working hours',
  },
  {
    id: 3,
    src: '/solucao3.png',
    title: 'Meet your driver',
    description:
      'Complete your account with some basic information including your home your work location and your working hours',
  },
  {
    id: 4,
    src: '/solucao4.png',
    title: 'Enjoy your journey',
    description:
      'Complete your account with some basic information including your home your work location and your working hours',
  },
]

export default function CarouselHowToGetStarted() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6">
      <h2 className="text-center">How to get start?</h2>
      <div className="carousel rounded-box  max-w-full">
        {sections.map((section) => (
          <div
            className="w-1/2 md:w-1/4 flex-grow shrink-0 p-8 text-center"
            key={section.id}
          >
            <div className="card h-full">
              <div className="overflow-hidden">
                <div className="relative block w-full pt-[100%]">
                  <Image
                    src={section.src}
                    alt="solucao ilustration"
                    fill
                    className="object-cover object-center absolute top-0 left-0"
                  />
                </div>
              </div>
              <div className="card-body p-4">
                <h2 className="font-bold text-base line-clamp-2 min-h-[2.5rem]">
                  {section.title}
                </h2>
                <p className="font-bold self-end">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
