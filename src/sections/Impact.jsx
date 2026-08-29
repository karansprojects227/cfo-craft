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
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        border-t
        px-6
        py-20
        sm:px-8
        lg:px-12
        lg:py-16
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
              text-[#0095fd]
              sm:text-sm
            "
          >
            <span className="h-px w-10 bg-[#0095fd]/70" />

            <span>Our Impact</span>

            <span className="h-px w-10 bg-[#0095fd]/70" />
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

            <span className="text-[#0095fd]">
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
              via-[#0095fd]
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
                  border-[#0095fd]/30
                  px-6
                  py-8
                  text-center
                  shadow-[0_20px_70px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#0095fd]/70
                  hover:shadow-[0_25px_80px_rgba(0,149,253,0.14)]
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
                    bg-[#0095fd]/[0.12]
                    blur-[70px]
                    transition-all
                    duration-500
                    group-hover:bg-[#0095fd]/[0.20]
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
                    border-[#0095fd]/70
                    text-[#0095fd]
                    shadow-[0_0_25px_rgba(229,72,63,0.12)]
                    transition-all
                    duration-500
                    group-hover:border-[#0095fd]
                    group-hover:bg-[#0095fd]/[0.08]
                    group-hover:shadow-[0_0_35px_rgba(0,149,253,0.25)]
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
                    via-[#0095fd]
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
                    bg-[#0095fd]
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