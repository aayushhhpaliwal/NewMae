'use client';

import Image from 'next/image'
import Navbar from '../components/NavBar'
import MugImage from '../components/homecompo/MugImage'
import FeaturedIn from '../components/homecompo//FeaturedIn'
import HowIsIt from '../components/homecompo/HowIsIt';
import Footer from '../components/Footer';
import JourneyComponent from '../components/homecompo/Journey';

export default function Home() { 
  return (
   <div>
    <style jsx>{`
    body {
      background-color:#F4EAE2;
    }
    `}

    </style>
    <Navbar />
    <MugImage />
    <FeaturedIn />
    <HowIsIt />
    <JourneyComponent />
    <Footer />
    </div>
   
  )
}
