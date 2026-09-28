import React from "react";
import Manufacturing from '../assets/Manufacturing.mp4'
import Trading_Distribution from '../assets/Trading_Distribution.mp4'
import Service_Industry from '../assets/Service_Industry.mp4'
import Startup_Finance from '../assets/Startup_Finance.mp4'

const industries = [
  {
    title: "Manufacturing",
    video: Manufacturing,
    description:
      "Costing, inventory, plant-level P&L, capex decisions and the working-capital squeeze of growth. We speak BOMs, job costing and prime cost – not just ledgers.",
    points: [
      "Product costing",
      "Margin analysis",
      "Capex",
      "Working capital",
    ],
  },

  {
    title: "Trading & Distribution",
    video: Trading_Distribution,
    description:
      "Thin margins, high volumes, credit risk and inventory turns. We give you SKU- and customer-level profitability and tighten the cash cycle.",
    points: [
      "Gross margin by SKU",
      "Credit control",
      "Inventory turns",
      "Cash cycle",
    ],
  },

  {
    title: "Services",
    video: Service_Industry,
    description:
      "Utilisation, realisation and owner economics – the numbers that decide whether a busy company is actually profitable.",
    points: [
      "Utilisation",
      "Project profitability",
      "Owner draws vs. profit",
    ],
  },

  {
    title: "High-Growth Startups",
    video: Startup_Finance,
    description:
      "Investor-ready reporting, runway and burn visibility, and a finance function that survives diligence.",
    points: [
      "Runway & burn",
      "Investor MIS",
      "Unit economics",
      "Diligence-ready",
    ],
  },
];

function IndustryVideo({ video }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.12]
        bg-[#2A3D53]/80
        p-5
        shadow-2xl
        shadow-black/30
        backdrop-blur-xl
        sm:p-6
      "
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="
          aspect-video
          w-full
          rounded-2xl
          object-cover
          bg-[#081629]
        "
      />
    </div>
  );
}

function IndustryContent({ industry }) {
  return (
    <div className="flex h-full flex-col justify-center">
      {/* Industry Heading */}

      <h2
        className="
          text-4xl
          font-semibold
          leading-[1.04]
          tracking-[-0.045em]
          text-[#A6CBF7]
          sm:text-5xl
          lg:text-[52px]
        "
      >
        {industry.title}
      </h2>

      {/* Industry Description */}

      <p
        className="
          mt-5
          max-w-xl
          text-base
          leading-8
          text-[#969994]
          sm:text-lg
        "
      >
        {industry.description}
      </p>

      {/* Industry Points */}

      <ul
        className="
          mt-7
          space-y-4
          text-base
          text-[#F4F1EA]
          sm:text-lg
        "
      >
        {industry.points.map((point) => (
          <li key={point} className="flex items-center gap-4">
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#A6CBF7]
              "
            />

            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
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
          TOP-RIGHT FLOWING LINES
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

      {/* =====================================================
          BOTTOM-LEFT FLOWING LINES
      ====================================================== */}

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
          HERO / INTRO
      ====================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          pb-12
          pt-20
          lg:pb-16
          lg:pt-24
        "
      >
        {/* Small label */}

        <div className="mb-3 flex items-center gap-3">
          <span
            className="
              text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A6CBF7]
                sm:text-sm
            "
          >
            Our Industry Expertise
          </span>

          <span
            className="
              h-px
              w-10
              bg-[#A6CBF7]/70
            "
          />
        </div>

        {/* Main heading */}

        <h1
          className="
            text-[38px]
            font-semibold
            leading-[1.04]
            tracking-[-0.045em]
            text-[#F4F1EA]
            sm:text-[46px]
            md:text-[52px]
            lg:text-[56px]
            xl:text-[60px]
          "
        >
          We know your business,{" "}
          <span className="text-[#A6CBF7]">not just your books.</span>
        </h1>

        {/* Paragraph */}

        <p
          className="
            mt-4
            max-w-[780px]
            text-[14px]
            leading-6
            text-[#969994]
            sm:text-[15px]
            sm:leading-7
          "
        >
          We&apos;re deliberately focused — deep where we add the most value:
          asset-heavy, working-capital-intensive businesses where cash and
          margin discipline decide who wins.
        </p>
      </div>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          pb-20
          sm:px-8
          lg:px-8
          lg:pb-28
        "
      >
        {industries.map((industry, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={industry.title}
              className="
                relative
                border-t
                border-white/[0.10]
                py-16
                lg:py-20
              "
            >
              <div
                className={`
                  grid
                  grid-cols-1
                  items-center
                  gap-10
                  lg:grid-cols-2
                  lg:gap-20
                  ${
                    isReversed
                      ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                      : ""
                  }
                `}
              >
                {/* Content */}

                <IndustryContent industry={industry} />

                {/* Video */}

                <IndustryVideo video={industry.video} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
