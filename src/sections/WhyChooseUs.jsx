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
        bg-[#0D0E0D]
        px-6
        py-20
        sm:px-8
        lg:px-10
        lg:py-20
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
            bg-[linear-gradient(135deg,#0D0E0D_0%,#111211_48%,#090A09_100%)]
          "
        />

        {/* Top-right red glow */}
        <div
          className="
            absolute
            -right-[14%]
            -top-[18%]
            h-[520px]
            w-[620px]
            rounded-full
            bg-[#E5483F]/[0.10]
            blur-[150px]
          "
        />

        {/* Bottom-left red glow */}
        <div
          className="
            absolute
            -bottom-[20%]
            -left-[15%]
            h-[500px]
            w-[650px]
            rounded-full
            bg-[#E5483F]/[0.09]
            blur-[150px]
          "
        />

        {/* Center subtle glow */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[320px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#E5483F]/[0.025]
            blur-[140px]
          "
        />

        {/* =================================================
            TOP RIGHT FLOWING LINES
        ================================================== */}

        <div
          className="
            absolute
            -right-[8%]
            -top-[5%]
            h-[280px]
            w-[600px]
            rotate-[18deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.12]
          "
        />

        <div
          className="
            absolute
            -right-[10%]
            top-[1%]
            h-[260px]
            w-[620px]
            rotate-[18deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.08]
          "
        />

        <div
          className="
            absolute
            -right-[12%]
            top-[7%]
            h-[240px]
            w-[640px]
            rotate-[18deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.055]
          "
        />

        <div
          className="
            absolute
            -right-[14%]
            top-[13%]
            h-[220px]
            w-[660px]
            rotate-[18deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.035]
          "
        />

        {/* =================================================
            BOTTOM LEFT FLOWING LINES
        ================================================== */}

        <div
          className="
            absolute
            -bottom-[12%]
            -left-[8%]
            h-[260px]
            w-[620px]
            rotate-[8deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.11]
          "
        />

        <div
          className="
            absolute
            -bottom-[16%]
            -left-[10%]
            h-[250px]
            w-[640px]
            rotate-[8deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.075]
          "
        />

        <div
          className="
            absolute
            -bottom-[20%]
            -left-[12%]
            h-[240px]
            w-[660px]
            rotate-[8deg]
            rounded-[50%]
            border
            border-[#E5483F]/[0.045]
          "
        />

        {/* =================================================
            SUBTLE DOT GRID
        ================================================== */}

        <div
          className="
            absolute
            left-[2%]
            top-[25%]
            h-[120px]
            w-[100px]
            opacity-50
            [background-image:radial-gradient(#E5483F_1px,transparent_1px)]
            [background-size:20px_20px]
          "
        />

        <div
          className="
            absolute
            bottom-[16%]
            right-[3%]
            h-[100px]
            w-[100px]
            opacity-30
            [background-image:radial-gradient(#E5483F_1px,transparent_1px)]
            [background-size:18px_18px]
          "
        />

        {/* =================================================
            VIGNETTE
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]
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
            <span className="h-px w-12 bg-[#E5483F]/70" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#E5483F]
                sm:text-sm
              "
            >
              Why Businesses Choose
            </p>

            <span className="h-px w-12 bg-[#E5483F]/70" />
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
            <span className="text-[#E5483F]">
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
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#E5483F] to-transparent" />

            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#E5483F] shadow-[0_0_12px_rgba(229,72,63,0.8)]" />

            <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#E5483F] to-transparent" />
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
                  border-[#E5483F]/30
                  bg-[#111211]/85
                  px-6
                  py-7
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E5483F]/70
                  hover:bg-[#151615]
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
                    bg-[#E5483F]/[0.07]
                    blur-[60px]
                    transition-all
                    duration-500
                    group-hover:bg-[#E5483F]/[0.14]
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
                    via-[#E5483F]
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
                    border-[#E5483F]/50
                    bg-[radial-gradient(circle_at_35%_30%,#F05A50,#A52A2A_55%,#601716_100%)]
                    text-white
                    shadow-[0_0_35px_rgba(229,72,63,0.18)]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:shadow-[0_0_45px_rgba(229,72,63,0.32)]
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
                <div className="mx-auto mt-5 h-px w-12 bg-[#E5483F] transition-all duration-500 group-hover:w-20" />

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
                  <span className="h-1 w-1 rounded-full bg-[#E5483F]" />
                  <span className="h-1 w-1 rounded-full bg-[#E5483F]" />
                  <span className="h-1 w-1 rounded-full bg-[#E5483F]" />
                  <span className="h-1 w-1 rounded-full bg-[#E5483F]" />
                  <span className="h-1 w-1 rounded-full bg-[#E5483F]" />
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