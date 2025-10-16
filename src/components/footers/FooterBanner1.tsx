import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Partner {
  name: string;
  logoUrl: string;
  href: string;
}

const partners: Partner[] = [
  {
    name: "LVMH",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/lvmh.webp",
    href: "https://www.lvmh.com/en",
  },
  {
    name: "Pirelli",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/pirelli.webp",
    href: "http://bit.ly/2IjWDjE",
  },
  {
    name: "Aramco",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/aramco.webp",
    href: "https://www.saudiaramco.com/",
  },
  {
    name: "AWS",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL.webp",
    href: "https://aws.amazon.com/f1/",
  },
  {
    name: "Lenovo",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/lenovo.webp",
    href: "https://www.lenovo.com/",
  },
  {
    name: "DHL",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/dhl.webp",
    href: "https://inmotion.dhl/en/formula-1/?utm_content=DHL-F1&utm_source=f1&utm_medium=website&utm_campaign=DHL-F1",
  },
  {
    name: "Qatar Airways",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/qatar.webp",
    href: "https://www.qatarairways.com/",
  },
  {
    name: "MSC",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/msc.webp",
    href: "http://www.msccruises.com",
  },
  {
    name: "Crypto.com",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/crypto.com.webp",
    href: "https://www.crypto.com",
  },
  {
    name: "Salesforce",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/salesforce.webp",
    href: "https://www.salesforce.com/campaign/formula1/?d=7013y000002RO1gAAG&utm_source=formula1&utm_medium=referral&utm_campaign=us_c360aw&utm_content=formula1-salesforce-logo_7013y000002RO1gAAG",
  },
];

export default function FooterBanner1() {
  return (
    <section className=" bg-black text-white py-12">
      <div className=" mx-[10%] px-4">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold uppercase">Our Partners</h2>
            <a href="/partners">
              <Button variant="ghost" className="text-white">
                View All
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-6 md:gap-8 lg:gap-12">
            {partners.map((p, idx) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block p-2 rounded hover:bg-gray-800 flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <img
                  src={p.logoUrl}
                  alt={p.name}
                  className="object-contain w-[90px] h-[60px]"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
