import Image from 'next/image'
import MotionDiv from './MotionDiv'

export default function RegisterSection() {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-6 py-20">
      <MotionDiv className="flex flex-wrap gap-20 md:gap-0 justify-center">
        <div className="md:w-1/2">
          <div className="flex md:gap-24 pb-10">
            <h3 className="text-4xl text-primary">
              Register to be <br />a driver partner
            </h3>
            <div>
              <Image src="/seta.png" alt="seta" width={70} height={70} />
            </div>
          </div>
          <Image
            src="/linha-reta.jpg"
            alt="linha reta"
            width={150}
            height={150}
          />
        </div>
        <div className="md:w-1/2">
          <div className="flex md:gap-24 pb-10">
            <h3 className="text-4xl text-primary">
              Register to start <br />
              your journey
            </h3>
            <div>
              <Image src="/seta.png" alt="seta" width={70} height={70} />
            </div>
          </div>
          <Image
            src="/linha-reta.jpg"
            alt="linha reta"
            width={150}
            height={150}
          />
        </div>
      </MotionDiv>
    </section>
  )
}
