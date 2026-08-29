import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  TrendingUp,
  Workflow,
  Presentation,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "CFO Services",
    description:
      "A full-time CFO experience, without the full-time cost that offers clarity, confidence, and long-term financial direction.",
  },
  {
    icon: CircleDollarSign,
    title: "Cashflow, Working Capital & Runway Management",
    description:
      "PLIGHT BLUEict, control and optimize liquidity — so growth never runs out of cash.",
  },
  {
    icon: TrendingUp,
    title: "Profitability & Unit Economics Diagnostics",
    description:
      "Identify what drives profit — and fix what silently erodes it.",
  },
  {
    icon: Workflow,
    title: "MIS, SOPs & Finance Process Transformation",
    description:
      "Build systems that replace guesswork with visibility, discipline and decision-readiness.",
  },
  {
    icon: Presentation,
    title: "Fundraising Support & Investor Pack",
    description:
      "Investor-ready numbers, decks and diligence support that accelerate funding outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance, Governance & Internal Controls",
    description:
      "Stay audit-clean, structuLIGHT BLUE, and risk-proof with controls that scale as you do.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        scroll-mt-20
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
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-[1400px]
          flex-col
          justify-center
          px-6
          py-8
          sm:px-8
          lg:px-10
          lg:py-9
          xl:px-12
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-7 lg:mb-8">
          {/* Small label */}

          <div className="mb-3 flex items-center gap-3">
            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#0095fd]
              "
            >
              Our Services
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#0095fd]/70
              "
            />
          </div>

          {/* Main heading */}

          <h2
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
            Financial expertise{" "}
            <span className="text-[#0095fd]">
              built around your growth.
            </span>
          </h2>

          {/* Description */}

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
            From strategic finance to compliance and fundraising,
            we build the financial systems that help ambitious
            businesses make better decisions.
          </p>
        </div>

        {/* =================================================
            SERVICES GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            border-t
            border-white/[0.10]
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`
                  group
                  relative
                  min-w-0
                  border-b
                  border-white/[0.10]
                  px-0
                  py-5

                  sm:py-6

                  md:px-5
                  md:py-6

                  lg:min-h-[150px]
                  lg:px-6
                  lg:py-6

                  ${
                    index % 3 !== 0
                      ? "lg:border-l"
                      : ""
                  }

                  ${
                    index % 2 !== 0
                      ? "md:border-l lg:border-l"
                      : ""
                  }
                `}
              >
                {/* Top hover accent */}

                <span
                  className="
                    absolute
                    left-0
                    top-[-1px]
                    h-[2px]
                    w-0
                    bg-[#0095fd]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                {/* =================================================
                    SERVICE CONTENT
                ================================================== */}

                <div className="flex items-start gap-4 lg:gap-5">
                  {/* Icon */}

                  <div
                    className="
                      mt-0.5
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.14]
                      bg-white/[0.01]
                      text-[#0095fd]
                      transition-all
                      duration-300
                      group-hover:border-[#0095fd]/60
                      group-hover:bg-[#0095fd]/[0.05]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.55}
                    />
                  </div>

                  {/* Text */}

                  <div className="min-w-0 flex-1">
                    {/* Title + Arrow */}

                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="
                          max-w-[340px]
                          text-[15px]
                          font-bold
                          leading-[1.35]
                          tracking-[-0.015em]
                          text-[#F4F1EA]
                          sm:text-[16px]
                          lg:text-[17px]
                        "
                      >
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#0095fd]/50
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-[#0095fd]
                        "
                      />
                    </div>

                    {/* Full description */}

                    <p
                      className="
                        mt-2
                        max-w-[390px]
                        text-[12px]
                        leading-[1.65]
                        text-[#858984]
                        sm:text-[13px]
                        sm:leading-[1.65]
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            mt-6
            flex
            min-h-[78px]
            items-center
            justify-between
            gap-6
            rounded-[14px]
            border
            border-[#0095fd]/55
            px-5
            py-4
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-[#0095fd]/80
            hover:bg-[#0095fd]/10
            sm:px-6
            lg:px-8
          "
        >
          {/* Left */}

          <div className="flex min-w-0 items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#0095fd]/70
                text-[#0095fd]
              "
            >
              <Headphones
                size={19}
                strokeWidth={1.55}
              />
            </div>

            <p
              className="
                text-[13px]
                font-medium
                text-[#F4F1EA]
                sm:text-[15px]
              "
            >
              Need a finance function built for your stage?
            </p>
          </div>

          {/* Divider */}

          <div
            className="
              hidden
              h-8
              w-px
              bg-white/[0.10]
              md:block
            "
          />

          {/* Right */}

          <a
            target="_black"
            href="https://web.whatsapp.com/send?phone=919892560660&text="
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              text-[13px]
              font-semibold
              text-[#0095fd]
              transition-colors
              duration-300
              sm:text-[15px]
            "
          >
            <span className="hidden sm:inline">
              Talk to our CFO team
            </span>

            <span className="sm:hidden">
              Talk to us
            </span>

            <ArrowRight
              size={19}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;