"use client"
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function WhySection() {
  const donations = [
    {
      id: 1,
      title: `$25 / month`,
      description: `The Digital Bridge: Provides a student with reliable, high speed internet and tech support for a full year.`,
    },
    {
      id: 2,
      title: `$100 / month`,
      description: `The Leadership Catalyst: Funds a student's participation in the Mentorship Circle and a full year of Leadership Lab retreats.`,
    },
    {
      id: 3,
      title: `$500 / month`,
      description: `The Legacy Sponsor: Fully funds a comprehensive Scholar's Toolkit (laptop, software, and tuition assistance) for one leader.`,
    },
  ];
  function simulateDonate() {
    toast.info("redirecting...", { position: "top-right" });
  }
  return (
    <>
      <section className="container mx-auto bg-cyan-200 rounded-lg px-4 py-16 min-h-[75dvh]" id="waysToGive">
        <div className="w-6/12 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            The Leaders of 2030 are Waiting on Us Today.
          </h2>
          <p className="">
            Leadership isn&apos;t built overnight; it is forged through years of
            consistent support, access, and cultivation. Every month a brilliant
            young mind spends without access to technology or mentorship is a
            month of lost momentum.
            <br />
            <br />
            We currently have a waiting list of over 450 highly qualified
            students ready to enter our programs before the upcoming academic
            cycle. The only limiting factor is our funding.
            <br />
            <br />
            The decisions we make today shape the world we live in tomorrow. Do
            not wait for change to happen, fund the people who will create it.
            <br />
            <br />
          </p>
        </div>
        <h3 className="text-xl font-bold text-center my-8">
          Choose Your Impact Tier
        </h3>
        <div className="w-11/12 mx-auto  flex flex-wrap justify-center gap-8 mt-16">
          {donations.map((donation) => (
            <Card
              key={donation.id}
              className="w-3/12   h-[40dvh] flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="text-xl text-center font-bold">
                  {donation.title}
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p>{donation.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={simulateDonate}>
                  Donate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
