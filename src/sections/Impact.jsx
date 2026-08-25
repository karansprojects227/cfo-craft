import {
  Award,
  Building2,
  Users,
} from "lucide-react";

const impactStats = [
  {
    icon: Award,
    number: "25+",
    title: "Years of",
    subtitle: "experience",
  },
  {
    icon: Building2,
    number: "10+",
    title: "Industries served with",
    subtitle: "financial expertise",
  },
  {
    icon: Users,
    number: "50+",
    title: "Happy",
    subtitle: "clients served",
  },
];

function Impact() {
  return (
    <section
      id="impact"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#080A0C]
        px-6
        py-20
        sm:px-8
        lg:px-12
        lg:py-16
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
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
        {/* Base background */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,#17141A_0%,#0B0C0E_45%,#070809_100%)]
          "
        />

        {/* Top-right red glow */}
        <div
          className="
            absolute
            -right-[12%]
            -top-[12%]
            h-[480px]
            w-[700px]
            rounded-full
            bg-[#E5483F]/[0.10]
            blur-[150px]
          "
        />

        {/* Bottom-left red glow */}
        <div
          className="
            absolute
            -bottom-[18%]
            -left-[12%]
            h-[500px]
            w-[700px]
            rounded-full
            bg-[#E5483F]/[0.08]
            blur-[150px]
          "
        />

        {/* Center subtle purple glow */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[400px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#743D91]/[0.035]
            blur-[150px]
          "
        />

        {/* =================================================
            TOP FLOWING LINES
        ================================================== */}

        <div
          className="
            absolute
            -right-[8%]
            top-[2%]
            h-[260px]
            w-[760px]
            rotate-[8deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.08]
          "
        />

        <div
          className="
            absolute
            -right-[5%]
            top-[7%]
            h-[220px]
            w-[700px]
            rotate-[8deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.045]
          "
        />

        <div
          className="
            absolute
            right-[3%]
            top-[13%]
            h-[170px]
            w-[580px]
            rotate-[8deg]
            rounded-[100%_0_100%_0]
            border
            border-white/[0.025]
          "
        />

        {/* =================================================
            BOTTOM FLOWING LINES
        ================================================== */}

        <div
          className="
            absolute
            -bottom-[7%]
            -left-[8%]
            h-[240px]
            w-[760px]
            rotate-[-8deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.08]
          "
        />

        <div
          className="
            absolute
            -bottom-[2%]
            -left-[5%]
            h-[200px]
            w-[680px]
            rotate-[-8deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.045]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.42)_100%)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
              text-xs
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#E5483F]
              sm:text-sm
            "
          >
            <span className="h-px w-10 bg-[#E5483F]/70" />

            <span>Our Impact</span>

            <span className="h-px w-10 bg-[#E5483F]/70" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#F4F1EA]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Numbers That Reflect
            <br />

            <span className="text-[#E5483F]">
              Our Commitment
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-[#A9AAA4]
              sm:text-lg
              sm:leading-8
            "
          >
            Delivering financial clarity, strategic insights,
            and measurable growth for businesses across
            industries.
          </p>

          {/* Small divider */}

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-[#E5483F]
              to-transparent
              shadow-[0_0_15px_rgba(229,72,63,0.6)]
            "
          />
        </div>

        {/* =================================================
            STATS GRID
        ================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
            lg:mt-16
            lg:gap-7
          "
        >
          {impactStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E5483F]/30
                  bg-gradient-to-br
                  from-[#29151B]
                  via-[#171426]
                  to-[#0D1020]
                  px-6
                  py-8
                  text-center
                  shadow-[0_20px_70px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E5483F]/70
                  hover:shadow-[0_25px_80px_rgba(229,72,63,0.14)]
                  sm:px-8
                  sm:py-10
                "
              >
                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#E5483F]/[0.12]
                    blur-[70px]
                    transition-all
                    duration-500
                    group-hover:bg-[#E5483F]/[0.20]
                  "
                />

                {/* Bottom purple glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    left-1/2
                    h-44
                    w-52
                    -translate-x-1/2
                    rounded-full
                    bg-[#743D91]/[0.10]
                    blur-[70px]
                  "
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E5483F]/70
                    bg-[#0D0E0D]/70
                    text-[#E5483F]
                    shadow-[0_0_25px_rgba(229,72,63,0.12)]
                    transition-all
                    duration-500
                    group-hover:border-[#FF6258]
                    group-hover:bg-[#E5483F]/[0.08]
                    group-hover:shadow-[0_0_35px_rgba(229,72,63,0.25)]
                  "
                >
                  <Icon
                    size={28}
                    strokeWidth={1.6}
                  />
                </div>

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div
                  className="
                    relative
                    mt-7
                    text-6xl
                    font-extrabold
                    tracking-[-0.04em]
                    text-[#F4F1EA]
                    sm:text-7xl
                  "
                >
                  {stat.number}
                </div>

                {/* Number glow */}

                <div
                  className="
                    mx-auto
                    mt-3
                    h-px
                    w-16
                    bg-gradient-to-r
                    from-transparent
                    via-[#E5483F]
                    to-transparent
                    shadow-[0_0_12px_rgba(229,72,63,0.8)]
                  "
                />

                {/* =================================================
                    TITLE
                ================================================== */}

                <div
                  className="
                    relative
                    mt-5
                    text-lg
                    font-semibold
                    leading-7
                    text-[#F4F1EA]
                    sm:text-xl
                  "
                >
                  {stat.title}
                </div>

                <div
                  className="
                    relative
                    text-lg
                    font-semibold
                    leading-7
                    text-[#F4F1EA]
                    sm:text-xl
                  "
                >
                  {stat.subtitle}
                </div>

                {/* Hover line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#E5483F]
                    shadow-[0_0_12px_rgba(229,72,63,0.8)]
                    transition-all
                    duration-500
                    group-hover:w-1/2
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM DIVIDER
        ================================================== */}

        <div
          className="
            mx-auto
            mt-16
            h-px
            max-w-6xl
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          "
        />

      </div>
    </section>
  );
}

export default Impact;