import Image from 'next/image'
import { ClayStoreIcon } from './icons/ClayStoreIcon'
import { PlayAppIcon } from './icons/PlayAppIcon'

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
        <div className="max-w-screen-xl mx-auto h-full w-full flex justify-end">
          <div className="w-3/5 h-full flex flex-col justify-center">
            <Image
              className="py-8"
              src="/linha-white.png"
              alt="linha reta"
              width={150}
              height={100}
            />
            <h2 className="font-bold text-2xl text-primary">
              Download the DriveOn application to get more benefits and
              experience
            </h2>
            <div>
              <button className="btn btn-primary">
                <ClayStoreIcon />
                Clay Store
              </button>
              <button className="btn btn-primary">
                <PlayAppIcon />
                Download on the Play APP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
