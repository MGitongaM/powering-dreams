import { Speech, Toolbox, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function SolutionSection() {
  const solutions = [
    {
      id: 1,
      title: `The Mentorship Circle`,
      description: `Guiding the Next Generation. We pair our students one-on-one with C-suite executives, industry pioneers, and elite entrepreneurs. This isn't just advice, it's social capital, network expansion, and a roadmap to the top.`,
      icon: <Users />,
    },
    {
      id: 2,
      title: `The Scholar's Toolkit`,
      description: `Leveling the Digital Playing Field. Leadership requires resources. We provide every student with a high-performance laptop, reliable high speed internet access, and targeted tuition assistance to ensure financial barriers never halt academic ambition.`,
      icon: <Toolbox />,
    },
    {
      id: 3,
      title: `The Leadership Program`,
      description: `Forging Character and Action. Through intensive weekend retreats, our students master the critical soft skills the modern world demands: persuasive public speaking, rigorous critical thinking, and agile project management.`,
      icon: <Speech />,
    },
  ];
  return (
    <>
      <section className="container mx-auto bg-linear-to-b from-cyan-200  to-cyan-200 px-4 py-16 min-h-[75dvh]">
        <div className="w-11/12 lg:w-6/12 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            How We Build Tomorrow&apos;s Visionaries: Raising leaders,
            transforming lives.
          </h2>
          <p className="">
            We don&apos;t believe in band-aid solutions. Powering Dreams
            identifies high-potential youth in underserved communities and
            provides a rigorous, holistic pathway to excellence. We don&apos;t
            just help them survive; we equip them to lead.
          </p>
        </div>
        <h3 className="text-xl font-bold text-center my-8">Our Three Core Pillars</h3>
        <div className="w-11/12 mx-auto  flex flex-wrap justify-center gap-8 mt-16">
          {solutions.map((solution) => (
            <Card key={solution.id} className="w-11/12 lg:w-3/12 ">
              <CardHeader className="grid place-content-center">
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
                {solution.icon}
              </CardHeader>
              <CardContent>
                <h4 className="text-xl font-bold mb-4">{solution.title}</h4>
                <p>{solution.description}</p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
