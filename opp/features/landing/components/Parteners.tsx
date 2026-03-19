'use client'

import Image from "next/image"

const partnersRow1 = [
  { name: "Google Cloud", logo: "/partners/googlecloud.svg" },
  { name: "Bristol Quantum", logo: "/partners/bristol.svg" },
  { name: "DivHacks", logo: "/partners/divhacks.svg" },
  { name: "LazyHacks", logo: "/partners/lazyhacks.svg" },
  { name: "SC Quantum", logo: "/partners/scquantum.svg" },
  { name: "CERN", logo: "/partners/cern.svg" },
]

const partnersRow2 = [
  { name: "Celestia", logo: "/partners/celestia.svg" },
  { name: "Scroll", logo: "/partners/scroll.svg" },
  { name: "OKX", logo: "/partners/okx.svg" },
  { name: "Metis", logo: "/partners/metis.svg" },
  { name: "Stellar", logo: "/partners/stellar.svg" },
  { name: "TRON", logo: "/partners/tron.svg" },
]

export default function Partners() {
  return (
    <section className="bg-white py-16 overflow-hidden">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Trusted by Leading Ecosystems
        </h2>

        <p className="text-gray-500 mt-2">
          Startups, universities and technology platforms working together
        </p>
      </div>

      <div className="space-y-6">

        {/* Row 1 */}
        <div className="marquee">
          <div className="marquee-track left">

            {[...partnersRow1, ...partnersRow1].map((partner, i) => (
              <div key={i} className="logo">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                />
              </div>
            ))}

          </div>
        </div>

        {/* Row 2 (opposite direction) */}
        <div className="marquee">
          <div className="marquee-track right">

            {[...partnersRow2, ...partnersRow2].map((partner, i) => (
              <div key={i} className="logo">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      <style jsx>{`

        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 80px;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        .marquee-track.right {
          animation-direction: reverse;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        .logo {
          display: flex;
          align-items: center;
          opacity: 0.7;
          transition: 0.3s;
        }

        .logo:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

      `}</style>
    </section>
  )
}