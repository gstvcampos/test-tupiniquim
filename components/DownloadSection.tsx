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
      <div className="w-full h-[400px] md:h-[700px] lg:h-[950px]">
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
