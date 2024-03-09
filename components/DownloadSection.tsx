import Image from 'next/image'
import { ClayStoreIcon } from './icons/ClayStoreIcon'
import { PlayAppIcon } from './icons/PlayAppIcon'

export default function DownloadSection() {
  return (
    <section className="w-full h-[400px] md:h-[700px] lg:h-[950px] sm:bg-[url('/downloadImage.png')] bg-contain bg-no-repeat bg-center">
      <div className="max-w-screen-xl mx-auto h-full w-full flex justify-center sm:justify-end">
        <div className="md:w-2/4 h-full flex flex-col justify-center">
          <Image
            className="hidden sm:block py-8"
            src="/linha-white.png"
            alt="linha reta"
            width={150}
            height={100}
          />
          <Image
            className="py-8 sm:hidden"
            src="/linha-reta.jpg"
            alt="linha reta"
            width={150}
            height={100}
          />
          <h2 className="font-bold text-2xl text-primary py-8">
            Download the DriveOn application <br />
            to get more benefits and experience
          </h2>
          <div className="space-x-10">
            <button className="btn bg-black text-white border-none hover:bg-black">
              <ClayStoreIcon />
              <p className="flex flex-col items-start">
                <span className="font-normal text-xs">GET IT ON</span>
                <span className="text-lg">Clay Store</span>
              </p>
            </button>
            <button className="btn bg-black text-white border-none hover:bg-black">
              <PlayAppIcon />
              <p className="flex flex-col items-start">
                <span className="font-normal text-xs">Download on the</span>
                <span className="text-lg">Play APP</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
