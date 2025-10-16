import { motion } from "framer-motion";

interface Partner {
  name: string;
  logoUrl: string;
  href: string;
}
const partners: Partner[] = [
  {
    name: "Puma",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/puma.webp",
    href: "https://louisvuitton.com",
  },
  {
    name: "Tata",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/TATA.webp",
    href: "https://www.tatacommunications.com/sports/powering-f1",
  },
  {
    name: "Tata",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/aggreko.webp",
    href: "https://www.tatacommunications.com/sports/powering-f1",
  },
  {
    name: "Tata",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/BBS.webp",
    href: "https://www.tatacommunications.com/sports/powering-f1",
  },
  {
    name: "Tata",
    logoUrl:
      "https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/mcdonalds.webp",
    href: "https://www.tatacommunications.com/sports/powering-f1",
  },
];
function FooterBanner3() {
  return (
    <div className="bg-gray-500 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-6 md:gap-8 lg:gap-12">
            {partners.map((p, idx) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block p-2 rounded  flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <img
                  src={p.logoUrl}
                  alt={p.name}
                  className="object-contain w-[100px] h-[80px]"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner3;
