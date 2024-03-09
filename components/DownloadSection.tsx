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
        <div className="max-w-screen-xl flex items-center justify-end h-full">
          <div className="flex flex-col w-">
            <Image
              className="py-8"
              src="/linha-white.png"
              alt="linha reta"
              width={150}
              height={100}
            />
            <p className="mb-5 text-neutral">
              Download the DriveOn application to get more benefits and
              experience
            </p>
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
