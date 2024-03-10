import Image from 'next/image'
import Link from 'next/link'

export default function InfoSection() {
  return (
    <section
      className="w-full md:bg-[url('/infoImage1.png'),_url('/infoImage2.png')] bg-no-repeat md:bg-[length:50vh] lg:bg-[length:60vh]"
      style={{
        backgroundPosition: 'left top, right bottom',
      }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6">
        <div className="flex justify-center md:justify-end min-h-[70vh]">
          <div className="md:w-3/5 text-neutral text-2xl">
            <Image
              className="py-16"
              src="/linha-reta.jpg"
              alt="linha reta"
              width={150}
              height={100}
            />
            <p className="">
              Driveon is a mobile carpool platform that effortlessly brings
              commuters together in one car.
            </p>
            <p>
              Traveling home and work will never be he same again. Our mission
              is to stop traffic jams and CO2 pollution as a result of
              inefficient car commuting
            </p>
            <p className="py-8">Are you in?</p>
            <Link
              href={'/'}
              className="text-accent inline-flex font-bold items-center py-4 space-x-2"
            >
              <span className="hover:underline">Learn more</span>
              <span className="text-sm">❯❯</span>
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-start md:items-end min-h-[70vh]">
          <div className="md:w-3/5 text-neutral text-2xl">
            <Image
              className="py-8"
              src="/linha-reta.jpg"
              alt="linha reta"
              width={150}
              height={100}
            />
            <h3 className="text-primary font-bold text-4xl py-16">
              Our commitment <br />
              to your safely
            </h3>
            <p className="py-8 text-neutral">
              With every safety feature we add and every standard in the
              community Guide that we uphold, we are committed to protecting you
              throughout the journey. Learn more about our Community Guide
              <span>here</span>
            </p>
            <Link
              href={'/'}
              className="text-accent inline-flex items-center py-4 space-x-2"
            >
              <span className="hover:underline">See all safety features </span>
              <span className="text-sm">❯❯</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
