
import { Button } from "../ui/button";

import heroImage1 from "../../assets/hero-image.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* <section className="conatiner mx-auto bg-cover bg-center px-4 py-16 min-h-[75dvh]" style={{ backgroundImage: `url(${heroImage1.src})` }}> */}
      <section className="max-w-7xl 2xl:container mx-auto rounded-t-lg bg-cover bg-center px-4 py-16 min-h-[75dvh]" style={{ backgroundImage: `url(${heroImage1.src})` }}>
        <div className="flex gap-8 justify-center">
          <div className=" w-11/12 lg:w-6/12 mx-auto space-y-8 text-slate-100 text-center ">
            <h1 className="text-3xl lg:text-5xl font-bold">
              The Next Generation of Ethical Leaders is Already Here. They Just
              Need the Power to Lead.
            </h1>
            <p className="text-lg font-medium">
              Potential is distributed equally, but opportunity is not. At
              Powering Dreams, we bridge the gap. We transform under-resourced
              youth into high-impact leaders through world-class mentorship,
              education, and life skills. Invest in a leader today.
            </p>
            <div className="flex justify-center gap-2">
              <Button size="lg" className="bg-primary text-white px-4 py-8">
                <Link href="/#waysToGive">
                Empower a Leader Today
                </Link>
              </Button>
              {/* <Button
                size="lg"
                className="bg-secondary text-secondary-foreground px-4 py-8"
                
              >
                <Link href="/#impact">
                See Our Impact Model
                </Link>
              </Button> */}
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
}
