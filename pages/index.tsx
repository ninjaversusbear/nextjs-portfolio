import Image from 'next/image'
import { Inter } from 'next/font/google'
import Name from '@/components/Nametitle'
import Getintouch from '@/components/Getintouch'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import CertificateandTrainings from '@/components/Certificatesandtrainings'
import Socialaccounts from '@/components/Socialaccounts'
import Specializations from '@/components/Specializations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='grid grid-cols-1'>
      <div>
      <Name/>
      <hr />
      <Getintouch/><hr />
      <Specializations/><hr />
      <Experience/><hr />
      <Education/><hr />
      <CertificateandTrainings/><hr />
      <Socialaccounts/>
      </div>
    </div>
    </>
  )
}