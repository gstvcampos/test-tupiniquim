import Link from 'next/link'

export default function InfoSection() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: 'url(infoImage1.png), url(infoImage2.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top, right bottom',
      }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6 text-primary">
        <div>
          <p className="mb-5 text-neutral">
            Driveon is a mobile carpool platform that effortlessly brings
            commuters together in one car. Traveling home and work will never be
            he same again. Our mission is to stop traffic jams and CO2 pollution
            as a result of inefficient car commuting
          </p>
          <span>Are you in?</span>
          <Link href={'/'} className="link">
            Learn more
          </Link>
        </div>
        <div>
          <h3>Our commitment to your safely</h3>
          <p className="mb-5 text-neutral">
            With every safety feature we add and every standard in the community
            Guide that we uphold, we are committed to protecting you throughout
            the journey. Learn more about our Community Guide <span>here</span>
          </p>
          <Link href={'/'} className="link">
            See all safety features
          </Link>
        </div>
      </div>
    </div>
  )
}