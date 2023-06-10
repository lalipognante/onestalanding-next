import Image from 'next/image'
import styles from './page.module.css'
import { Hero } from '@/sections/Hero'
import { FixedNavbar } from '@/sections/FixedNavbar'
import { Navbar } from '@/sections/Navbar'
import { Services } from '@/sections/Servicies'
import '@fortawesome/fontawesome-free/css/all.css';
import { Details } from '@/sections/Details'
import Areas from '@/sections/Areas'
import { ContactBanner } from '@/sections/ContactBanner'
import { TeamMembers } from '@/sections/TeamMembers'
import Footer from '@/sections/Footer'
import Whatsapp from '@/sections/Whatsapp'

export default function Home() {
  return (
    <>
      <FixedNavbar />
      <Whatsapp />
      <Navbar />
      <Hero />
      <Services />
      <Details />
      <Areas />
      <ContactBanner />
      <TeamMembers />
      <Footer /> 
    </>
  )
}
