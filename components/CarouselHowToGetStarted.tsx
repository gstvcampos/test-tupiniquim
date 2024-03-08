'use client'

import Image from 'next/image'

const sections = [
  {
    id: 1,
    src: '/solucao1.png',
    title: 'Create your account',
    description:
      'Complete your account with some basic information including your home your work location and your working hours.',
  },
  {
    id: 2,
    src: '/solucao2.png',
    title: 'Plan your journeys',
    description:
      'Open the app, click the agenda tab and enter your working hours for the coming week. Then you will be presented with  list of our drivers',
  },
  {
    id: 3,
    src: '/solucao3.png',
    title: 'Meet your driver',
    description:
      'Use our chat to get to know your match with our driver. You will ba picked up at your regular location, or agree on an alternative pick-up location',
  },
  {
    id: 4,
    src: '/solucao4.png',
    title: 'Enjoy your journey',
    description:
      'Get in, sit back and enjoy your journey that takes you directly to yout destination with some free cup of coffee from us',
  },
]

export default function CarouselHowToGetStarted() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6">
      <div className="w-full flex flex-col items-center">
        <div className="py-20">
          <Image
            className="py-16"
            src="/linha-reta.jpg"
            alt="linha reta"
            width={150}
            height={100}
          />
          <h2 className="text-4xl font-bold text-primary">
            How to get started?
          </h2>
        </div>
      </div>
      <div className="carousel rounded-box  max-w-full">
        {sections.map((section) => (
          <div
            className="w-1/2 md:w-1/4 flex-grow shrink-0 p-8 lg:p-16 text-center"
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
              <div className="card-body p-2">
                <h2 className="font-bold text-2xl text-primary p-6">
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
