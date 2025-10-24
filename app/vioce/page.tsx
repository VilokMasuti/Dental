import Navbar from '@/components/Navbar';
import FeatureCards from '@/components/vioce/FeatureCards';
import ProPlanRequired from '@/components/vioce/ProPlanRequired';
import VapiWidget from '@/components/vioce/VapiWidget';
import WelcomeSection from '@/components/vioce/WelcomeSection';
import { auth } from '@clerk/nextjs/server';

const Voicepage = async() => {

  const {has} = await auth()

  const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });
  if(!hasProPlan){
    return (
 <ProPlanRequired/>
    )
  }
  return (
   <div className="min-h-screen bg-background font-[Harmattan]">
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <FeatureCards />
      </div>

      <VapiWidget/>

   </div>
  )
}
export default Voicepage
