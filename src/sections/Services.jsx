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
    title: "Finance Diagnostic",
    description:
      "A fixed-fee health check of your finance function. We review books, cash, margins and compliance, then hand you a clear diagnosis and a prioritised action plan — no lock-in.",
  },

  {
    icon: CircleDollarSign,
    title: "Fractional CFO – Starter",
    description:
      "Your core financials, automated from your data and delivered each month — plus a monthly call with a CFO to walk you through the numbers. For businesses whose team can run the books, but has no one to make the numbers make sense.",
  },

  {
    icon: TrendingUp,
    title: "Fractional CFO – Core",
    description:
      "An experienced CFO embedded on a monthly retainer — reading your numbers and owning the finance rhythm, without the cost or hiring risk of a full-time CFO.",
  },

  {
    icon: Workflow,
    title: "Fractional CFO – Growth",
    description:
      "Everything in Core, plus forward-looking FP&A and banking support — for businesses making bigger calls on capex, pricing, hiring and growth.",
  },

  {
    icon: Presentation,
    title: "Specialist & Project Work",
    description:
      "Depth on demand, beyond the monthly rhythm — brought in when the stakes justify it: a raise, a system change, a deal, a cash crunch.",
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
        border-t-2 
        border-t-[#122742]
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        py-2
        lg:py-8
        scroll-mt-[25px]
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
          py-8
          lg:py-9
          px-6
          lg:px-10
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
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A6CBF7]
                sm:text-sm
              "
            >
              Our Services
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
            <span className="text-[#A6CBF7]">built around your growth.</span>
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
            From strategic finance to compliance and fundraising, we build the
            financial systems that help ambitious businesses make better
            decisions.
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
  "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
          group
          relative
          min-w-0
          border-b
          border-white/[0.10]
          px-0
          py-4
          last:border-b-0

          sm:py-4.5
          lg:py-5
        "
              >
                {/* Top hover accent */}
                <span
                  className="
            absolute
            left-0
            top-[-1px]
            h-[2px]
            w-0
            bg-[#A6CBF7]
            transition-all
            duration-500
            group-hover:w-16
          "
                />

                {/* Service Content */}
                <div className="flex items-start gap-3.5 lg:gap-4">
                  {/* Icon */}
                  <div
                    className="
              mt-0.5
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.14]
              bg-white/[0.01]
              text-[#A6CBF7]
              transition-all
              duration-300

              group-hover:border-[#A6CBF7]/60
              group-hover:bg-[#A6CBF7]/[0.05]
            "
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    {/* Title */}
                    <h3
                      className="
                text-[14px]
                font-bold
                leading-[1.3]
                tracking-[-0.01em]
                text-[#F4F1EA]

                sm:text-[15px]
                lg:text-[16px]
              "
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                mt-1.5
                max-w-[850px]
                text-[11px]
                leading-[1.5]
                text-[#858984]

                sm:text-[12px]
                lg:text-[13px]
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
            border-[#A6CBF7]/55
            px-5
            py-4
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-[#A6CBF7]/80
            hover:bg-[#A6CBF7]/10
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
                border-[#A6CBF7]/70
                text-[#A6CBF7]
              "
            >
              <Headphones size={19} strokeWidth={1.55} />
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
            href="https://wa.me/919892560660"
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              text-[13px]
              font-semibold
              text-white
              hover:text-[#A6CBF7]
              transition-colors
              duration-300
              sm:text-[15px]
            "
          >
            <span className="hidden sm:inline">Talk to our CFO team</span>

            <span className="sm:hidden">Talk to us</span>

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
