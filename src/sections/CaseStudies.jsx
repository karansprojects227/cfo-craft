import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChartNoAxesCombined,
  Eye,
  Factory,
  FileText,
  LineChart,
  RefreshCw,
  Rocket,
  Target,
  Users,
} from "lucide-react";

/* ============================================================
   IMAGE PATH HELPERS
============================================================ */

const getCaseImage = (id) => `${import.meta.env.BASE_URL}case${id}.png`;

const getCaseThumbnail = (id) =>
  `${import.meta.env.BASE_URL}case${id}-thumb.png`;

/* ============================================================
   CASE STUDY DATA
============================================================ */

const caseStudies = [
  {
    id: 1,
    shortTitle: "Pricing Strategy",
    icon: Target,
  },
  {
    id: 2,
    shortTitle: "Cash Burn & Runway",
    icon: ChartNoAxesCombined,
  },
  {
    id: 3,
    shortTitle: "Profitability & Pricing",
    icon: Factory,
  },
  {
    id: 4,
    shortTitle: "ERP Implementation",
    icon: Building2,
  },
  {
    id: 5,
    shortTitle: "Financial Projections",
    icon: LineChart,
  },
  {
    id: 6,
    shortTitle: "Organisation Restructuring",
    icon: Users,
  },
  {
    id: 7,
    shortTitle: "Profitability Clarity",
    icon: Eye,
  },
  {
    id: 8,
    shortTitle: "MIS & SOP",
    icon: FileText,
  },
  {
    id: 9,
    shortTitle: "Startup Turnaround",
    icon: RefreshCw,
  },
];

/* ============================================================
   COMPONENT
============================================================ */

function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ==========================================================
     CURRENT CASE
  ========================================================== */

  const activeCase = caseStudies[activeIndex];

  const activeImage = getCaseImage(activeCase.id);

  /* ==========================================================
     NEXT SLIDE
  ========================================================== */

  const nextSlide = () => {
    setActiveIndex((current) => {
      return (current + 1) % caseStudies.length;
    });
  };

  /* ==========================================================
     PREVIOUS SLIDE
  ========================================================== */

  const prevSlide = () => {
    setActiveIndex((current) => {
      return (current - 1 + caseStudies.length) % caseStudies.length;
    });
  };

  /* ==========================================================
     SELECT CASE
  ========================================================== */

  const selectCase = (index) => {
    setActiveIndex(index);
  };

  /* ==========================================================
     AUTOPLAY
  ========================================================== */

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % caseStudies.length;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  /* ==========================================================
     PRELOAD MAIN IMAGES
  ========================================================== */

  useEffect(() => {
    caseStudies.forEach((item) => {
      const image = new Image();
      image.src = getCaseImage(item.id);
    });
  }, []);

  /* ==========================================================
     PRELOAD THUMBNAILS
  ========================================================== */

  useEffect(() => {
    caseStudies.forEach((item) => {
      const thumbnail = new Image();
      thumbnail.src = getCaseThumbnail(item.id);
    });
  }, []);

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <section
      id="case-studies"
      className="
        relative
        isolate
        overflow-hidden
        px-4
        py-6
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        border-t-2 
        border-t-[#122742]
        text-[#F4F1EA]
        sm:px-6
        lg:px-8
        lg:py-20
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
          bg-[#eeba7d]/40
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
          bg-[#eeba7d]/40
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
            border-[#eeba7d]
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
            border-[#eeba7d]
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
            border-[#eeba7d]
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
            border-[#eeba7d]
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
            border-[#eeba7d]
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
            border-[#eeba7d]
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
            border-[#eeba7d]
          "
        />
      </div>

      {/* ======================================================
          CONTENT
      ======================================================= */}

      <div className="mx-auto max-w-7xl">
        {/* ====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto mb-5 max-w-4xl text-center lg:mb-6">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#eeba7d]" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#eeba7d]
              "
            >
              Our Case Studies
            </span>

            <span className="h-px w-10 bg-[#eeba7d]" />
          </div>

          <h2
            className="
              text-3xl
              font-black
              leading-[1.02]
              tracking-tight
              sm:text-4xl
              lg:text-[46px]
            "
          >
            Real Challenges.{" "}
            <span className="text-[#eeba7d]">Measurable Results.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-6
              text-[#9B9D98]
              sm:text-lg
            "
          >
            Explore how we help businesses transform financial complexity into
            clarity, control, and sustainable growth.
          </p>
        </div>

        {/* ====================================================
            MAIN CASE STUDY IMAGE
        ===================================================== */}

        <div className="relative w-full">
          {/* ==================================================
      MAIN IMAGE BOX
  =================================================== */}

          <div
            className="
      relative
      h-[400px]
      w-full
      overflow-hidden
      rounded-[24px]
      bg-[#050606]
      shadow-[0_30px_100px_rgba(0,0,0,0.55)]
    "
          >
            {/* IMAGE WRAPPER */}

            <div
              className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#050606]
      "
            >
              <img
                key={`main-case-${activeCase.id}`}
                src={activeImage}
                alt={activeCase.shortTitle}
                className="
          block
          h-full
          w-full
          max-h-full
          max-w-full
          object-contain
          object-center
          select-none
        "
                draggable="false"
              />

              {/* DESKTOP LEFT ARROW */}

              <button
                type="button"
                aria-label="Previous case study"
                onClick={(event) => {
                  event.stopPropagation();
                  prevSlide();
                }}
                className="
                  absolute
                  left-6
                  top-1/2
                  z-30
                  hidden
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[#eeba7d]
                  hover:bg-[#eeba7d]
                  lg:flex
        "
              >
                <ArrowLeft size={19} />
              </button>

              {/* DESKTOP RIGHT ARROW */}

              <button
                type="button"
                aria-label="Next case study"
                onClick={(event) => {
                  event.stopPropagation();
                  nextSlide();
                }}
                className="
                  absolute
                  right-6
                  top-1/2
                  z-30
                  hidden
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[#eeba7d]
                  hover:bg-[#eeba7d]
                  lg:flex
        "
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          {/* ==================================================
      MOBILE NAVIGATION
      IMAGE KE NICHE
  =================================================== */}

          <div
            className="
      mt-4
      flex
      items-center
      justify-between
      px-2
      lg:hidden
    "
          >
            <button
              type="button"
              aria-label="Previous case study"
              onClick={(event) => {
                event.stopPropagation();
                prevSlide();
              }}
              className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#eeba7d]/40
        bg-[#eeba7d]/10
        text-[#eeba7d]
        transition-all
        duration-300
        active:scale-95
      "
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              aria-label="Next case study"
              onClick={(event) => {
                event.stopPropagation();
                nextSlide();
              }}
              className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#eeba7d]/40
        bg-[#eeba7d]/10
        text-[#eeba7d]
        transition-all
        duration-300
        active:scale-95
      "
            >
              <ArrowRight size={19} />
            </button>
          </div>

          {/* ==================================================
      MOBILE DOTS
      ARROWS KE NICHE
  =================================================== */}

          <div
            className="
      mt-4
      flex
      items-center
      justify-center
      gap-2
      lg:hidden
    "
          >
            {caseStudies.map((item, index) => (
              <button
                key={`mobile-dot-${item.id}`}
                type="button"
                aria-label={`Go to case study ${item.id}`}
                onClick={(event) => {
                  event.stopPropagation();
                  selectCase(index);
                }}
                className={`
          h-2
          rounded-full
          transition-all
          duration-300

          ${
            index === activeIndex
              ? "w-7 bg-[#eeba7d] shadow-[0_0_12px_rgba(238,186,125,0.6)]"
              : "w-2 bg-white/45"
          }
        `}
              />
            ))}
          </div>

          {/* ==================================================
      DESKTOP DOTS
  =================================================== */}

          <div
            className="
      absolute
      bottom-4
      left-1/2
      z-30
      hidden
      -translate-x-1/2
      items-center
      gap-2
      lg:flex
    "
          >
            {caseStudies.map((item, index) => (
              <button
                key={`dot-${item.id}`}
                type="button"
                aria-label={`Go to case study ${item.id}`}
                onClick={(event) => {
                  event.stopPropagation();
                  selectCase(index);
                }}
                className={`
          h-2
          rounded-full
          transition-all
          duration-300

          ${
            index === activeIndex
              ? "w-7 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
              : "w-2 bg-white/45 hover:bg-white/80"
          }
        `}
              />
            ))}
          </div>
        </div>

        {/* ====================================================
            THUMBNAILS
        ===================================================== */}

        <div
          className="
            mt-3
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-9
            hidden
            lg:grid
          "
        >
          {caseStudies.map((item, index) => {
            const Icon = item.icon;

            const isActive = index === activeIndex;

            return (
              <button
                key={`thumbnail-${item.id}`}
                type="button"
                aria-label={`Open ${item.shortTitle}`}
                onClick={(event) => {
                  event.stopPropagation();
                  selectCase(index);
                }}
                className={`
                  group
                  relative
                  h-[115px]
                  overflow-hidden
                  rounded-2xl
                  border
                  text-left
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "border-[#eeba7d] shadow-[0_0_25px_rgba(229,72,63,0.16)]"
                      : "border-white/[0.08] hover:border-white/20"
                  }
                `}
              >
                {/* =================================================
                    THUMBNAIL IMAGE
                ================================================== */}

                <img
                  src={getCaseThumbnail(item.id)}
                  alt=""
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    select-none
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  draggable="false"
                />

                {/* =================================================
                    DARK OVERLAY
                ================================================== */}

                <span
                  className={`
                    absolute
                    inset-0
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-black/45"
                        : "bg-black/65 group-hover:bg-black/50"
                    }
                  `}
                />

                {/* =================================================
                    RED OVERLAY
                ================================================== */}

                <span
                  className={`
                    absolute
                    inset-0
                    transition-all
                    duration-300

                    ${isActive ? "bg-[#eeba7d]/[0.10]" : "bg-[#eeba7d]/[0.02]"}
                  `}
                />

                {/* =================================================
                    NUMBER + ICON
                ================================================== */}

                <div
                  className="
                    absolute
                    left-4
                    right-4
                    top-4
                    z-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className={`
                      text-sm
                      font-black

                      ${isActive ? "text-[#eeba7d]" : "text-white/60"}
                    `}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border

                      ${
                        isActive
                          ? "border-[#eeba7d]/60 bg-[#eeba7d]/15 text-[#eeba7d]"
                          : "border-white/15 bg-black/20 text-white/60"
                      }
                    `}
                  >
                    <Icon size={15} />
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <span
                  className={`
                    absolute
                    bottom-4
                    left-4
                    right-3
                    z-10
                    text-sm
                    font-semibold
                    leading-5

                    ${isActive ? "text-white" : "text-white/80"}
                  `}
                >
                  {item.shortTitle}
                </span>

                {/* =================================================
                    ACTIVE LINE
                ================================================== */}

                <span
                  className={`
                    absolute
                    bottom-2
                    left-4
                    z-10
                    h-0.5
                    bg-[#eeba7d]
                    transition-all
                    duration-300

                    ${isActive ? "w-8" : "w-0 group-hover:w-5"}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* ====================================================
            CTA
        ===================================================== */}

        <div
          className="
            mt-3
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-white/[0.08]
            px-6
            py-5
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
          "
        >
          <div className="flex items-center gap-4">
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
                border-white/10
                bg-[#181A19]
                text-[#eeba7d]
              "
            >
              <Rocket size={20} />
            </div>

            <div>
              <p className="text-sm text-[#D0D2CD]">
                Every business has a story.
              </p>

              <p className="text-sm font-bold text-[#eeba7d] sm:text-base">
                Let&apos;s create your success story next.
              </p>
            </div>
          </div>

          <a
            target="_black"
            href="https://web.whatsapp.com/send?phone=919892560660&text="
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#eeba7d]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              hover:text-black
              transition-all
              duration-300
              hover:bg-[#eeba7d]
              hover:shadow-[0_0_30px_rgba(229,72,63,0.2)]
            "
          >
            Talk To Our Expert
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
    </section>
  );
}

export default CaseStudies;
