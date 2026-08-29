import {
  BadgeDollarSign,
  Globe2,
  Handshake,
  UserRoundCheck,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Strategic Finance, Not Just Accounting",
    description:
      "We go beyond numbers to deliver insights that drive growth, efficiency and long-term value.",
  },
  {
    icon: Handshake,
    title: "Local Discipline, Global Expertise",
    description:
      "Deep understanding of local business realities, backed by global best practices.",
  },
  {
    icon: Globe2,
    title: "Multi-Sector Strategic Experience",
    description:
      "Trusted by startups, SMEs and enterprises across industries with diverse financial needs.",
  },
  {
    icon: UserRoundCheck,
    title: "Fast, Frictionless Onboarding",
    description:
      "We integrate quickly, work seamlessly with your team, and deliver results—faster.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
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
        lg:px-10
        lg:py-20
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
            SECTION HEADER
        ================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#0095fd]/70" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#0095fd]
                sm:text-sm
              "
            >
              Why Businesses Choose
            </p>

            <span className="h-px w-12 bg-[#0095fd]/70" />
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-extrabold
              leading-[0.95]
              tracking-[-0.04em]
              text-[#F4F1EA]
              sm:text-5xl
              lg:text-7xl
            "
          >
            CFO{" "}
            <span className="text-[#0095fd]">
              CRAFT
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
            We blend strategic insight with hands-on financial
            leadership to help you scale smarter.
          </p>

          {/* Small divider */}
          <div className="mx-auto mt-8 flex items-center justify-center">
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#0095fd] to-transparent" />

            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#0095fd] shadow-[0_0_12px_rgba(229,72,63,0.8)]" />

            <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#0095fd] to-transparent" />
          </div>
        </div>

        {/* =================================================
            CARDS
        ================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
            xl:gap-6
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#0095fd]/30
                  px-6
                  py-7
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#0095fd]/70
                  hover:shadow-[0_25px_70px_rgba(229,72,63,0.12)]
                "
              >
                {/* Card glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-40
                    w-40
                    -translate-x-1/2
                    rounded-full
                    bg-[#0095fd]/[0.07]
                    blur-[60px]
                    transition-all
                    duration-500
                    group-hover:bg-[#0095fd]/[0.14]
                  "
                />

                {/* Top accent */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-px
                    w-20
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#0095fd]
                    to-transparent
                    opacity-70
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0095fd]/50
                    bg-[radial-gradient(circle_at_35%_30%,#38BDF8,#0095FD_55%,#006BB8_100%)]
                    text-white
                    shadow-[0_0_35px_rgba(0,149,253,0.18)]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:shadow-[0_0_45px_rgba(0,149,253,0.32)]
                  "
                >
                  <Icon
                    size={35}
                    strokeWidth={1.45}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    mt-7
                    min-h-[58px]
                    text-lg
                    font-bold
                    leading-7
                    text-[#F4F1EA]
                    sm:text-xl
                  "
                >
                  {reason.title}
                </h3>

                {/* Red divider */}
                <div className="mx-auto mt-5 h-px w-12 bg-[#0095fd] transition-all duration-500 group-hover:w-20" />

                {/* Description */}
                <p
                  className="
                    relative
                    mx-auto
                    mt-5
                    max-w-[260px]
                    text-sm
                    leading-6
                    text-[#A9AAA4]
                    sm:text-[15px]
                  "
                >
                  {reason.description}
                </p>

                {/* Bottom dots */}
                <div className="relative mt-7 flex justify-center gap-2 opacity-70">
                  <span className="h-1 w-1 rounded-full bg-[#0095fd]" />
                  <span className="h-1 w-1 rounded-full bg-[#0095fd]" />
                  <span className="h-1 w-1 rounded-full bg-[#0095fd]" />
                  <span className="h-1 w-1 rounded-full bg-[#0095fd]" />
                  <span className="h-1 w-1 rounded-full bg-[#0095fd]" />
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-5xl
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08]" />

          <p
            className="
              px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#777A75]
              sm:text-xs
            "
          >
            Strategic Finance · Better Decisions · Sustainable Growth
          </p>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;