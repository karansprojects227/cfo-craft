import {
  ArrowRight,
  Play,
} from "lucide-react";

import aboutVideo from "../assets/about-video.png";

function AboutUs() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        border-t
        text-[#F4F1EA]
        py-20
        sm:py-24
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
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-14 text-center sm:mb-16">
          {/* Eyebrow */}

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#0095fd]" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#0095fd]
                sm:text-sm
              "
            >
              About Us
            </p>

            <span className="h-px w-10 bg-[#0095fd]" />
          </div>

          {/* Heading */}

          <h2
            className="
              mx-auto
              max-w-4xl
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#F4F1EA]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Financial clarity.
            <span className="text-[#0095fd]">
              {" "}Strategic growth.
            </span>
          </h2>
        </div>

        {/* =================================================
            CONTENT GRID
        ================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div>
            {/* Small label */}

            <p
              className="
                mb-5
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#0095fd]
              "
            >
              Your Financial Growth Partner
            </p>

            {/* Main text */}

            <div
              className="
                space-y-5
                text-base
                leading-7
                text-[#A9AAA4]
                sm:text-lg
                sm:leading-8
              "
            >
              <p>
                At CFO Craft, we empower businesses with financial
                clarity, strategy, and structure, empowering
                startups, SMEs, and global enterprises to scale
                with confidence.
              </p>

              <p>
                Our expertise lies in crafting robust business
                strategies and financial management solutions.
              </p>
            </div>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-8 space-y-4">
              {[
                "Financial clarity that drives confident decisions",
                "Strategic guidance built around your growth stage",
                "Practical finance systems that scale with your business",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  {/* Red check */}

                  <span
                    className="
                      mt-1
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0095fd]/10
                      text-[#0095fd]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0095fd]" />
                  </span>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-[#C5C5BE]
                      sm:text-base
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-9">
              <a
                target="_black"
                href="https://web.whatsapp.com/send?phone=919892560660&text="
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
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
                  hover:shadow-xl
                  hover:shadow-[#0095fd]/20
                  sm:px-7
                  sm:py-4
                  sm:text-base
                "
              >
                Talk To Our Expert

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
            </div>
          </div>

          {/* =================================================
              RIGHT VIDEO
          ================================================== */}

          <div className="relative">
            {/* Glow behind video */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-8
                -z-10
                rounded-[40px]
                bg-[#0095fd]/[0.055]
                blur-[70px]
              "
              aria-hidden="true"
            />

            {/* =================================================
                YOUTUBE VIDEO CARD
            ================================================== */}

            <a
              href="https://youtu.be/sl7bM9oJDSA?si=oLamN5ZULwOa-C2t"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch CFO Craft video on YouTube"
              className="
                group
                relative
                block
                overflow-hidden
                rounded-[28px]
                border
                border-[#0095fd]/30
                bg-[#0D0E0D]
                shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#0095fd]/70
                hover:shadow-[0_30px_90px_rgba(0,149,253,0.15)]
              "
            >
              {/* Thumbnail */}

              <img
                src={aboutVideo}
                alt="CFO Craft financial leadership video"
                className="
                  block
                  aspect-video
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.025]
                "
              />

              {/* Dark overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/5
                  transition-all
                  duration-500
                  group-hover:bg-black/20
                "
              />

              {/* Bottom gradient */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-gradient-to-t
                  from-black/75
                  via-black/20
                  to-transparent
                "
              />

              {/* =================================================
                  CENTER PLAY BUTTON
              ================================================== */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  flex
                  h-16
                  w-16
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-[18px]
                  bg-[#0095fd]
                  text-white
                  shadow-[0_12px_40px_rgba(255,0,0,0.35)]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-[#0095fd]
                  group-hover:shadow-[0_15px_50px_rgba(255,0,0,0.45)]
                  sm:h-[72px]
                  sm:w-[72px]
                "
              >
                <Play
                  size={27}
                  fill="white"
                  strokeWidth={0}
                  className="ml-1"
                />
              </div>

              {/* =================================================
                  VIDEO BOTTOM LABEL
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-10
                  flex
                  items-center
                  justify-between
                  px-5
                  pb-5
                  sm:px-6
                  sm:pb-6
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black/30
                      backdrop-blur-md
                    "
                  >
                    <Play
                      size={13}
                      fill="white"
                      className="ml-0.5 text-white"
                    />
                  </span>

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-white
                      sm:text-base
                    "
                  >
                    Watch on YouTube
                  </span>
                </div>

                <ArrowRight
                  size={19}
                  className="
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>

              {/* Inner border */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[28px]
                  ring-1
                  ring-inset
                  ring-white/[0.08]
                "
              />
            </a>

            {/* Video label */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                px-1
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#666963]
                  sm:text-xs
                "
              >
                CFO Craft · Financial Leadership
              </p>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  text-[#666963]
                  sm:text-xs
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0095fd]" />
                YouTube
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM TRUST STRIP
        ================================================== */}

        <div
          className="
            mt-16
            border-t
            border-white/[0.07]
            pt-7
            sm:mt-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#62645F]
                sm:text-xs
              "
            >
              Strategic Finance · Better Decisions · Sustainable Growth
            </p>

            <a
              href="#services"
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#C9C8C1]
                transition-colors
                duration-300
                hover:text-[#0095fd]
              "
            >
              Explore Our Expertise

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;