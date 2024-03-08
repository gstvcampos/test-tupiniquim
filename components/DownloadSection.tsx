export default function DownloadSection() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: 'url(downloadImage.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-6 text-primary">
        <div>
          <p className="mb-5 text-neutral">
            Download the DriveOn application to get more benefits and experience
          </p>
          <div>
            <button className="btn btn-primary">Clay Store</button>
            <button className="btn btn-primary">Play APP</button>
          </div>
        </div>
      </div>
    </div>
  )
}
