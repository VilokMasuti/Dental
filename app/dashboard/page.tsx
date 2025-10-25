import ActivityOverview from '@/components/dashboard/ActivityOverview'
import WelcomeSection from '@/components/dashboard/WelcomeSection'
import Navbar from '@/components/Navbar'

import MainAction from '@/components/dashboard/MainActions'

const DashboardPage
 = () => {
  return (
    <>
      <Navbar/>

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
  <WelcomeSection />
        <MainAction />
        <ActivityOverview/>
      </div>
    </>

  )
}
export default DashboardPage
