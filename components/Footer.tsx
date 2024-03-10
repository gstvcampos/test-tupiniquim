import { CenterIcon } from './icons/CenterIcon'
import { ChatIcon } from './icons/ChatIcon'
import { FacebookIcon } from './icons/FacebookIcon'
import { InstaIcon } from './icons/InstaIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { LogoWhiteIcon } from './icons/LogoWhiteIcon'
import { TwitterIcon } from './icons/TwitterIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'

export default function Footer() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: 'url(footerImage.jpg)',
        backgroundPosition: 'top',
      }}
    >
      <div className="w-full min-h-[400px]">
        <footer className="footer text-base-100 max-w-screen-xl mx-auto py-32 px-4">
          <nav className="md:col-span-2 space-y-6">
            <LogoWhiteIcon />
            <a className="link-hover text-xl mb-4 flex gap-2 link">
              <CenterIcon /> Resolution Center
            </a>
            <a className="link-hover text-xl mb-4 flex gap-2 link">
              <ChatIcon />
              <span>English</span>
            </a>
          </nav>
          <nav>
            <h6 className="text-2xl mb-2">About Us</h6>
            <a className="link link-hover">Newsroom</a>
            <a className="link link-hover">Investor relations</a>
            <a className="link link-hover">Global citizenship</a>
            <a className="link link-hover">Safety</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Career</a>
          </nav>
          <nav>
            <h6 className="text-2xl mb-2">Our product</h6>
            <a className="link link-hover">Take a trip</a>
            <a className="link link-hover">Drive it</a>
            <a className="link link-hover">Eats</a>
            <a className="link link-hover">DriveOn for Business</a>
            <a className="link link-hover">DriveOn Freight</a>
            <a className="link link-hover">Health</a>
            <a className="link link-hover">DriveOn Air</a>
            <a className="link link-hover">Advanced Technologies Group</a>
          </nav>
        </footer>
        <footer className="footer text-base-100 max-w-screen-xl w-[calc(100%-2rem)] mx-auto py-4 border-t gap-y-4">
          <aside className="items-center grid-flow-col">
            <p>© 2019 DriveOn Technologies Inc</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <FacebookIcon />
              </a>
              <a>
                <TwitterIcon />
              </a>
              <a>
                <YoutubeIcon />
              </a>
              <a>
                <InstaIcon />
              </a>
              <a>
                <LinkedinIcon />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  )
}
