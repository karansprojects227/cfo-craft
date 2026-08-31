import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  ShieldCheck,
  Users,
} from "lucide-react";

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
          bg-[#0095fd]/40
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
          bg-[#0095fd]/40
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
            border-[#0095fd]
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
            border-[#0095fd]
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
            border-[#0095fd]
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
            border-[#0095fd]
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
            border-[#0095fd]
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
            border-[#0095fd]
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
            border-[#0095fd]
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
          px-6
          py-10
          sm:px-8
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-12
          lg:px-8
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
              text-[#0095fd]
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
            <span className="text-[#0095fd]">Startups, MSMEs & Beyond</span>
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
                bg-[#0095fd]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#0095fd]/10
                hover:shadow-lg
                hover:shadow-[#0095fd]/25
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
                  text-[#0095fd]
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

            {/* Secondary CTA */}

            <a
              href="#services"
              className="
                group
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/15
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#F4F1EA]
                transition-all
                duration-300
                hover:border-[#0095fd]/60
                hover:bg-[#0095fd]/[0.05]
                sm:text-base
              "
            >
              Explore Services
              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
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
              bg-[#0095fd]/[0.08]
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
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`
                    flex
                    gap-4
                    py-4
                    sm:py-5
                    ${
                      index !== services.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#0095fd]/50
                      bg-[#0095fd]/[0.04]
                      text-[#0095fd]
                      transition-all
                      duration-300
                      hover:border-[#0095fd]/80
                      hover:bg-[#0095fd]/[0.08]
                      hover:shadow-[0_0_20px_rgba(0,149,253,0.20)]
                    "
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  {/* Service Content */}

                  <div className="min-w-0">
                    <h3
                      className="
                        text-base
                        font-bold
                        text-[#F4F1EA]
                        sm:text-lg
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        max-w-sm
                        text-sm
                        leading-6
                        text-[#969994]
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
