import Image from 'next/image'

export default function RegisterSection() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-6">
      <div className="flex">
        <div className="w-1/2">
          <h3>Register to be a driver partner</h3>
          <div>
            <Image src="/seta.png" alt="seta" width={70} height={70} />
          </div>
          <div>
            <Image
              src="/linha-reta.jpg"
              alt="linha reta"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Register to start your journey</h3>
        </div>
      </div>
    </div>
  )
}
