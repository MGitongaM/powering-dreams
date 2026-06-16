import Image from "next/image";
import heroImage from "../../assets/success-story.png";
export default function LeaderStroySection() {
  return (
    <>
      <section className="container mx-auto px-4 py-16 min-h-[75dvh]" id="successStory">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet Amina: The Future You Are Funding
          </h2>
          <div className="flex justify-between items-center gap-8">
          <div className="w-4/12 mr-auto my-16">
            <p className="">
              Three years ago, Amina had a 4.0 GPA, a passion for community
              organizing, and no clear path forward. Raised by a single mother in
              a neighborhood with a 40% high school dropout rate, a university
              education seemed like a luxury from another world.
              <br />
              <br />
              &quot;I knew I had the drive,&quot; Amina says. &quot;I just
              didn&apos;t have the door.&quot;
              <br />
              <br />
              Then, Amina entered The Powering Dreams pipeline. Through the
              Scholar&apos;s Toolkit, she received the technology she needed to
              compete. Through the Leadership Lab, she refined her voice. And
              through the Mentorship Circle, she was paired with the CFO of a
              major tech firm, who helped her navigate the university application
              process and secure a prestigious summer internship.
              <br />
              <br />
              <strong>Where is she now?</strong>
              <br />
              <br />
              Today, Amina is a sophomore studying Data Science on a full
              scholarship, and she has already launched a non-profit coding camp
              for young girls in her hometown.
              <br></br>
              Amina didn&apos;t just change her own life—she is already transforming
              hundreds of others. When you power a dream, you ignite a legacy.
            </p>
          </div>
          <div className="w-8/12">
            <Image
                  src={heroImage}
                  alt="success story"
                  height={500}
                  width={500}
                  className="object-cover w-full h-full rounded-lg"
                />
          </div>

          </div>
      </section>
    </>
  );
}
