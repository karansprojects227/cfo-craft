import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  ShieldCheck,
  Users,
} from "lucide-react";

import MIS_Financial_Reporting from "../assets/MIS_Financial_Reporting.mp4";

const services = [
  {
    icon: BarChart3,
    title: "Strategic Financial Planning",
    description: "Make data-driven decisions with clear financial roadmaps.",
  },
  {
    icon: CircleDollarSign,
    title: "Cash Flow Optimization",
    description: "Improve liquidity and maintain healthy cash flow.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Management",
    description: "Stay compliant and reduce financial risks.",
  },
  {
    icon: Users,
    title: "Scalable CFO Support",
    description: "Flexible engagement models tailored to your growth.",
  },
];

function Hero() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[calc(100dvh-80px)]
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        mt-20
        px-6
        lg:px-10
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Top-right LIGHT BLUE ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[220px]
          -z-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#A6CBF7]/40
          blur-[150px]
        "
        aria-hidden="true"
      />

      {/* Bottom-left LIGHT BLUE ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[250px]
          -left-[180px]
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#A6CBF7]/40
          blur-[150px]
        "
        aria-hidden="true"
      />

      {/* Very subtle center darkness */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.015),transparent_55%)]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          SUBTLE FLOWING LIGHT BLUE LINES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[120px]
          top-[80px]
          -z-10
          h-[360px]
          w-[850px]
          rotate-[-8deg]
          opacity-30
          "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            inset-0
            rounded-[50%]
            border-t
            border-[#A6CBF7]
            blur-[0.2px]
          "
        />

        <div
          className="
            absolute
            left-[80px]
            right-[-40px]
            top-[45px]
            h-[230px]
            rounded-[50%]
            border-t
            border-[#A6CBF7]
          "
        />

        <div
          className="
            absolute
            left-[150px]
            right-[-80px]
            top-[95px]
            h-[190px]
            rounded-[50%]
            border-t
            border-[#A6CBF7]
          "
        />

        <div
          className="
            absolute
            left-[220px]
            right-[-120px]
            top-[140px]
            h-[160px]
            rounded-[50%]
            border-t
            border-[#A6CBF7]
          "
        />
      </div>

      {/* Bottom-left flowing lines */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[150px]
          -left-[220px]
          -z-10
          h-[300px]
          w-[700px]
          rotate-[7deg]
          opacity-25
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            inset-0
            rounded-[50%]
            border-t
            border-[#A6CBF7]
            border-8
          "
        />

        <div
          className="
            absolute
            left-[80px]
            right-[-30px]
            top-[55px]
            h-[180px]
            rounded-[50%]
            border-t
            border-[#A6CBF7]
          "
        />

        <div
          className="
            absolute
            left-[150px]
            right-[-80px]
            top-[105px]
            h-[150px]
            rounded-[50%]
            border-t
            border-[#A6CBF7]
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          grid
          min-h-[calc(100dvh-80px)]
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          py-10
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-12
          lg:py-8
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div>
          {/* Eyebrow */}

          <p
            className="
              mb-5
              text-sm
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#A6CBF7]
            "
          >
            Your Growth, Our Financial Expertise
          </p>

          {/* Main Heading */}

          <h1
            className="
              max-w-3xl
              text-5xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.035em]
              text-[#F4F1EA]
              sm:text-6xl
              lg:text-[58px]
              xl:text-[62px]
            "
          >
            Your Trusted CFO Partner For{" "}
            <span className="text-[#A6CBF7]">Startups, MSMEs & Beyond</span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-[#969994]
              sm:text-lg
              sm:leading-7
            "
          >
            Expert CFO support that unifies cash flow, profitability, compliance
            and more.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div className="mt-7 flex flex-wrap gap-4">
            {/* Primary CTA */}

            <a
              href="/contact"
              className="
                group
                flex
                items-center
                gap-3
                rounded-lg
                bg-[#A6CBF7]
                px-6
                py-3.5
                text-sm
                font-bold
                text-black
                hover:text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#A6CBF7]/10
                hover:shadow-lg
                hover:shadow-[#A6CBF7]/25
                sm:text-base
              "
            >
              Book a Free Consultation
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#A6CBF7]
                "
              >
                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </a>
          </div>
        </div>

        {/* =================================================
            RIGHT SERVICE PANEL
        ================================================== */}

        <div className="relative">
          {/* Red glow behind service card */}

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              -z-10
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#A6CBF7]/[0.08]
              blur-[100px]
            "
            aria-hidden="true"
          />

          {/* Service Card */}

          <div
            className="
              rounded-3xl
              border
              border-white/[0.12]
              bg-[#2A3D53]/80
              p-5
              shadow-2xl
              shadow-black/30
              backdrop-blur-xl
              sm:p-6
              flex
              justify-center
              md:justify-end
            "
          >
            <video
              src={MIS_Financial_Reporting}
              autoPlay
              muted
              loop
              playsInline
              className="
                w-full
                max-w-[700px]
                rounded-2xl
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
