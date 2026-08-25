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
    description:
      "Make data-driven decisions with clear financial roadmaps.",
  },
  {
    icon: CircleDollarSign,
    title: "Cash Flow Optimization",
    description:
      "Improve liquidity and maintain healthy cash flow.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Management",
    description:
      "Stay compliant and reduce financial risks.",
  },
  {
    icon: Users,
    title: "Scalable CFO Support",
    description:
      "Flexible engagement models tailored to your growth.",
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
        bg-[#080908]
        text-[#F4F1EA]
        mt-20
      "
    >
      {/* =====================================================
          PREMIUM CFO CRAFT BACKGROUND
          Black + Graphite + Corporate Red
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
        aria-hidden="true"
      >
        {/* =================================================
            BASE BLACK / GRAPHITE BACKGROUND
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#070807_0%,#0B0C0B_45%,#090909_100%)]
          "
        />

        {/* =================================================
            TOP-RIGHT RED GLOW
            Stronger like reference image
        ================================================== */}

        <div
          className="
            absolute
            -right-[260px]
            -top-[260px]
            h-[720px]
            w-[720px]
            rounded-full
            bg-[#E5483F]/[0.13]
            blur-[180px]
          "
        />

        {/* Additional tighter red light */}
        <div
          className="
            absolute
            -right-[120px]
            -top-[120px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#E5483F]/[0.08]
            blur-[120px]
          "
        />

        {/* =================================================
            BOTTOM-LEFT RED GLOW
        ================================================== */}

        <div
          className="
            absolute
            -bottom-[280px]
            -left-[260px]
            h-[680px]
            w-[680px]
            rounded-full
            bg-[#E5483F]/[0.09]
            blur-[180px]
          "
        />

        {/* Additional bottom-left warm light */}
        <div
          className="
            absolute
            -bottom-[120px]
            -left-[80px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#E5483F]/[0.05]
            blur-[120px]
          "
        />

        {/* =================================================
            CENTER SOFT LIGHT
            Keeps middle area readable
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.018),transparent_55%)]
          "
        />

        {/* =================================================
            TOP-RIGHT FLOWING RED LINES
        ================================================== */}

        <div
          className="
            absolute
            -right-[220px]
            -top-[20px]
            h-[460px]
            w-[1050px]
            rotate-[-9deg]
            opacity-70
          "
        >
          {/* Line 1 */}
          <div
            className="
              absolute
              inset-0
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.16]
            "
          />

          {/* Line 2 */}
          <div
            className="
              absolute
              left-[70px]
              right-[-50px]
              top-[55px]
              h-[330px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.11]
            "
          />

          {/* Line 3 */}
          <div
            className="
              absolute
              left-[150px]
              right-[-100px]
              top-[105px]
              h-[270px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.09]
            "
          />

          {/* Line 4 */}
          <div
            className="
              absolute
              left-[230px]
              right-[-140px]
              top-[155px]
              h-[210px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.07]
            "
          />

          {/* Line 5 */}
          <div
            className="
              absolute
              left-[310px]
              right-[-180px]
              top-[205px]
              h-[160px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.05]
            "
          />
        </div>

        {/* =================================================
            BOTTOM-LEFT FLOWING RED LINES
        ================================================== */}

        <div
          className="
            absolute
            -bottom-[180px]
            -left-[300px]
            h-[420px]
            w-[900px]
            rotate-[8deg]
            opacity-65
          "
        >
          {/* Line 1 */}
          <div
            className="
              absolute
              inset-0
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.15]
            "
          />

          {/* Line 2 */}
          <div
            className="
              absolute
              left-[80px]
              right-[-50px]
              top-[60px]
              h-[300px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.11]
            "
          />

          {/* Line 3 */}
          <div
            className="
              absolute
              left-[160px]
              right-[-100px]
              top-[110px]
              h-[250px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.09]
            "
          />

          {/* Line 4 */}
          <div
            className="
              absolute
              left-[240px]
              right-[-140px]
              top-[155px]
              h-[200px]
              rounded-[50%]
              border-t
              border-[#E5483F]/[0.06]
            "
          />
        </div>

        {/* =================================================
            SUBTLE DARK VIGNETTE
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.38)_100%)]
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
              text-[#E5483F]
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
            <span className="text-[#E5483F]">
              Startups, MSMEs & Beyond
            </span>
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
            Expert CFO support that unifies cash flow, profitability,
            compliance and more.
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
                bg-[#E5483F]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#FF6258]
                hover:shadow-lg
                hover:shadow-[#E5483F]/25
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
                  text-[#E5483F]
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
                hover:border-[#E5483F]/60
                hover:bg-[#E5483F]/[0.05]
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
              inset-[-30px]
              -z-10
              rounded-full
              bg-[#E5483F]/[0.035]
              blur-[110px]
            "
            aria-hidden="true"
          />

          {/* Service Card */}

          <div
            className="
              rounded-3xl
              border
              border-white/[0.10]
              bg-[#111211]/[0.84]
              p-5
              shadow-2xl
              shadow-black/50
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
                      border-[#E5483F]/50
                      bg-[#E5483F]/[0.04]
                      text-[#E5483F]
                      transition-all
                      duration-300
                      hover:border-[#E5483F]/80
                      hover:bg-[#E5483F]/[0.08]
                      hover:shadow-[0_0_20px_rgba(229,72,63,0.14)]
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                    />
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