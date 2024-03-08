import CarouselHowToGetStarted from '@/components/CarouselHowToGetStarted'
import DownloadSection from '@/components/DownloadSection'
import InfoSection from '@/components/InfoSection'
import WelcomeSection from '@/components/WelcomeSection'

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <CarouselHowToGetStarted />
      <InfoSection />
      <DownloadSection />
    </>
  )
}
