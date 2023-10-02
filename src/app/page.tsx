import Image from 'next/image'
import Navbar from '@/components/NavBar'
import MugImage from '@/components/homecompo/MugImage'
import FeaturedIn from '@/components/homecompo/FeaturedIn'

export default function Home() {
  return (
   <div>
    <Navbar />
    <MugImage />
    <FeaturedIn />
    </div>
   
  )
}
