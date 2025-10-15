import CTA from '@/components/Landing/CTA'
import Footer from '@/components/Landing/Footer'
import Header from '@/components/Landing/Header'
import Hero from '@/components/Landing/Hero'
import HowItWorks from '@/components/Landing/HowItWorks'
import PricingSection from '@/components/Landing/PricingSection'
import WhatToAsk from '@/components/Landing/WhatToAsk'
import { syncUser } from '@/lib/ServerActions/User'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
const  Home = async () => {
  const user = await currentUser()

  await syncUser()

  if (user) redirect("/dashboard")

  return (
   <main className=' min-h-screen bg-background  flex
   flex-col gap-5 '>
    <Header
    />
    <Hero/>

    <HowItWorks/>

    <WhatToAsk/>
    <CTA/>
    <PricingSection/>
   <Footer />

   </main>
  )
}
export default Home
