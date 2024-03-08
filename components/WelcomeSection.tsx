export default function WelcomeSection() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: 'url(banner.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6 text-primary">
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Start Your Workday Comportably
          </h1>
          <p className="mb-5 text-neutral">
            Get in, sit back and experience the comfort of car that takes your
            directly to your destination. Arriving work as a sardine with public
            transport or sweating is a thing of the past
          </p>
          <button className="btn btn-primary">Discover</button>
        </div>
      </div>
    </div>
  )
}
