import { BanknoteArrowDown, ChartPie, MonitorPlay } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import clsx from "clsx";


export default function ImpactSection() {
    const impactStats = [
    {
      id: 1,
      title: `100% Direct-to-Program Funding`,
      description: `Every dollar you donate goes directly to student services. Our corporate partners completely cover our administrative overhead, maximizing your social ROI.`,
      icon: <BanknoteArrowDown />,
    },
    {
      id: 2,
      title: `95% Success Rate`,
      description: `Within 6 months of graduation, 95% of our alumni secure university placements or stable, high-trajectory employment.`,
      icon: <ChartPie />,
    },
    {
      id: 3,
      title: `Quarterly Video Accountability`,
      description: `We value your trust. Donors receive direct, quarterly video updates from the specific student they sponsor, letting you watch your investment grow in real-time.`,
      icon: <MonitorPlay />,
    },
  ];
  return (
    <section className="container bg-cyan-200 rounded-b-lg mx-auto px-4 py-16 min-h-[75dvh]" id="impact">
        <div className="w-6/12 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
            IMPACT STATISTICS
            </h2>
            <p className="">
            
            </p>
        </div>
         {/* <div className="w-11/12 mx-auto  flex flex-wrap justify-center gap-8 mt-16"> */}
         <div className="w-11/12 mx-auto  flex flex-col items-center   gap-8 mt-16">
          {impactStats.map((impact) => (
            <Card key={impact.id} className={clsx({"w-6/12 -ml-96":impact.id===1,"w-7/12 -ml-40":impact.id===2,"w-8/12 -mr-60":impact.id===3})}>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
                {impact.icon}
              </CardHeader>
              <CardContent>
                <h4 className="text-xl font-bold mb-4">{impact.title}</h4>
                <p>{impact.description}</p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </section>
  )
}
