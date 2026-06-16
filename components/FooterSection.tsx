import Image from "next/image";
import footerLogoImage from "../assets/footer-logo.jpeg";

export default function FooterSection() {
  const currentYear = new Date();
  return (
    <>
      <footer className="w-[90dvw] mx-auto px-4 py-16 mt-40 mb-8 rounded-lg bg-cyan-900">
        <div className="flex flex-wrap justify-between items-center text-slate-100 gap-8">
          <div className="w-3/12">
            <h3 className="text-3xl font-bold">
              Don&apos;t Just Witness the Future. Shape It.
            </h3>
          </div>
        <div className="grid place-content-center  gap-4 text-center">
          <Image
            src={footerLogoImage}
            alt="Hero Image"
            height={100}
            width={100}
            className="object-cover rounded-lg w-20 mx-auto h-20 "
          />
          <p className="italic text-xs">
            Powering Dreams is a registered 501(c)(3) organization. All
            donations are 100% tax-deductible.
          </p>

          <p className="italic text-xs">
            © {currentYear.getFullYear()} Powering Dreams. All rights reserved.
            
            {/* © {currentYear.getFullYear()} Powering Dreams. All rights reserved.
            Privacy Policy | Terms of Service | Annual Financial Report */}
          </p>
        </div>

          <div className="w-3/12">
            <h3 className="text-xl text-balance font-bold">
              Join a network of philanthropists, executives, and
              changemakers dedicated to raising leaders and transforming lives.
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
