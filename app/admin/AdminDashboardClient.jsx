"use client"

import { useGetAppointments } from "@/app/hooks/use-appointments";
import AdminStats from "@/components/admin/AdminStats";
import DoctorsManagement from "@/components/admin/DoctorsManagement";
import RecentAppointments from "@/components/admin/RecentAppointments";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useGetDoctors } from "../hooks/use-doctor";
const AdminDashboardClient = () => {
  const { user } = useUser();

  const { data: doctors = [], isLoading: doctorsLoading } = useGetDoctors();
  const { data: appointments = [], isLoading: isLoadingAppointments } = useGetAppointments();

  console.log(doctors, appointments);

  // calculate stats from real data

  const stats = {

    totalDoctors: doctors.length,
    totalAppointments: appointments.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    completedAppointments: appointments.filter((app) => app.status === "COMPLETED").length,
  }





  if (doctorsLoading || isLoadingAppointments) {
    return (
      <div className="min-h-screen bg-background  font-[Harmattan]" >
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading dashboard...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background  font-[Harmattan]" >

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* ADMIN WELCOME SECTION */}
        <div className="mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2   bg-green-500  rounded-full animate-pulse"></div>
              <span className="text-sm font-medium textbg ">Admin Dashboard</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your dental practice performance.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">


            <Image
              src={"/d.png"}
              alt="DentWise Logo"
              width={52}
              height={62}


              className=" w-[10rem] h-[10rem]  object-cover" />

          </div>
        </div>

        <AdminStats
          totalDoctors={stats.totalDoctors}
          activeDoctors={stats.activeDoctors}
          totalAppointments={stats.totalAppointments}
          completedAppointments={stats.completedAppointments}

        />

        <DoctorsManagement />
        <RecentAppointments />

      </div>

    </div>
  )
}
export default AdminDashboardClient
