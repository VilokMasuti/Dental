import { SignUpButton } from "@clerk/nextjs";
import { CalendarIcon, MicIcon, Star as StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden pt-20 sm:pt-24  font-[Harmattan]">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_65%,transparent_110%)] opacity-15 sm:opacity-20"></div>
      </div>

      {/* GRADIENT ORBS (reduced on mobile) */}
      <div className="absolute top-10 left-1/3 hidden sm:block w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-1/4 hidden md:block w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <div className="space-y-5">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* MAIN HEADING */}
                {/* MAIN HEADING */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI dental assistant for instant advice, book smart appointments, and
                  get personalized care recommendations. Available 24/7.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <SignUpButton mode="modal">
                  <Button size="lg" className="w-full sm:w-auto">
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* USER TESTIMONIALS */}
              <div className="pt-4 sm:pt-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* USER AVATARS */}
                  <div className="flex -space-x-3">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                      alt="Jessica Davis"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      alt="Sam Miller"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                      alt="Anna Lopez"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                      alt="Mike Rodriguez"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                      alt="Katie Lee"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 sm:ring-4 ring-background"
                    />
                  </div>

                  {/* RATING AND STATS */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Trusted by <span className="font-semibold text-foreground">1,200+ patients</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - HERO IMAGE */}
            <div className="relative lg:pl-8">
              {/* Decorative accents (hidden on small) */}
              <div className="absolute -top-4 -left-4 hidden sm:block w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 hidden md:block w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <div className="relative mx-auto max-w-[520px] sm:max-w-[600px] lg:max-w-none">
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] lg:mt-[-8rem]">
                  <Image
                    src={"/hero.png"}
                alt="DentWise AI"
                width={600}
                height={600}
                className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
