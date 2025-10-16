import { motion } from "framer-motion";

interface Partner {
  name: string;
  logoUrl: string;
  href: string;
}

const partners: Partner[] = [
  {
    name: "Louis Vuitton",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/louis%20vuitton.webp",
    href: "https://louisvuitton.com",
  },
  {
    name: "TAG Heuer",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/TAGH_Shield_Monochrome_White-pw1.webp",
    href: "https://www.tagheuer.com/f1.html",
  },
  {
    name: "American Express",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/Amex.webp",
    href: "https://americanexpress.com",
  },
  {
    name: "Santander",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/santander.webp",
    href: "https://santander.com",
  },
  {
    name: "Allwyn",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/allwyn.webp",
    href: "https://allwyn.com",
  },
  {
    name: "Globant",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/globant.webp",
    href: "https://globant.com",
  },
  {
    name: "Las Vegas Convention and Visitors Authority",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/las%20vegas.webp",
    href: "https://visitlasvegas.com",
  },
  {
    name: "Paramount+",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/Paramount+.webp",
    href: "https://paramountplus.com",
  },
  {
    name: "Barilla",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/barilla.webp",
    href: "https://barillagroup.com",
  },
  {
    name: "Liqui Moly",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/liqui-moly.webp",
    href: "https://liqui-moly.com",
  },
];

export default function FooterBanner2() {
  return (
    <section className="w-full bg-gray-900 text-white py-12">
      <div className="mx-[10%] px-4">
        <div className="flex flex-col gap-6">
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
