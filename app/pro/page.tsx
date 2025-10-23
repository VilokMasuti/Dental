import Navbar from "@/components/Navbar";
import { PricingTable } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from 'next/image';
import { redirect } from "next/navigation";

async function ProPage() {
  const user = await currentUser();

  if (!user) redirect("/");

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24  font-[Harmattan]">
        <div className="mb-12 overflow-hidden">
          <div className="flex items-center justify-between bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 border border-primary/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primar/10 rounded-full border border-primary/20 ">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Upgrade to Pro</span>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2">Unlock Premium AI Dental Care</h1>
                <p className="text-muted-foreground">
                  Get unlimited AI consultations, advanced features, and priority support to take
                  your dental health to the next level.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">




                      <Image
                        src={"/pl.png"}
                        alt="DentWise Logo"
                        width={52}
                        height={62}


                        className=" w-[10rem] h-[10rem]  object-cover animate-pulse  duration-1000"
                         />




            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your dental care needs. All plans include secure access
              and bank-level encryption.
            </p>
          </div>

          <PricingTable />
        </div>
      </div>
    </>
  );
}

export default ProPage;
