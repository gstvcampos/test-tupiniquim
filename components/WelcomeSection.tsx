export default function WelcomeSection() {
  return (
    <section className="w-full lg:min-h-[90vh] bg-none md:bg-[url('/banner.png')] bg-right bg-no-repeat bg-contain">
      <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6">
        <div className="md:w-1/3 py-28">
          <h1 className="mb-5 text-6xl font-bold text-primary">
            Start Your Workday Comportably
          </h1>
          <div className="text-lg text-neutral py-14">
            <p>
              Get in, sit back and experience the comfort of car that takes your
              directly to your destination.
            </p>
            <p>
              Arriving work as a sardine with public transport or sweating is a
              thing of the past.
            </p>
          </div>

          <button className="btn btn-linear-gradient text-lg px-8">
            Discover
          </button>
        </div>
      </div>
    </section>
  )
}
