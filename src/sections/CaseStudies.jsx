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

const getCaseImage = (id) =>
  `${import.meta.env.BASE_URL}case${id}.png`;

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
      return (
        (current - 1 + caseStudies.length) %
        caseStudies.length
      );
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
        bg-[#080909]
        px-4
        py-6
        text-[#F4F1EA]
        sm:px-6
        lg:px-8
        lg:py-20
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#E5483F]/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -bottom-52
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#E5483F]/8
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#E5483F]/[0.025]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
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

            <span className="h-px w-10 bg-[#E5483F]" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#E5483F]
              "
            >
              Our Case Studies
            </span>

            <span className="h-px w-10 bg-[#E5483F]" />

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
            <span className="text-[#E5483F]">
              Measurable Results.
            </span>
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
            Explore how we help businesses transform financial
            complexity into clarity, control, and sustainable growth.
          </p>

        </div>

        {/* ====================================================
            MAIN CASE STUDY IMAGE
        ===================================================== */}

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

          {/* ==================================================
              IMAGE WRAPPER

              IMPORTANT:
              This wrapper itself is exactly 400px high.
          =================================================== */}

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

            {/* =================================================
                MAIN IMAGE

                FIX:
                h-full + w-full + object-contain

                This prevents the image from being cropped.
            ================================================== */}

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

            {/* =================================================
                LEFT ARROW
            ================================================== */}

            <button
              type="button"
              aria-label="Previous case study"
              onClick={(event) => {
                event.stopPropagation();
                prevSlide();
              }}
              className="
                absolute
                left-4
                top-1/2
                z-30
                flex
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
                hover:border-[#E5483F]
                hover:bg-[#E5483F]
                sm:left-6
              "
            >
              <ArrowLeft size={19} />
            </button>

            {/* =================================================
                RIGHT ARROW
            ================================================== */}

            <button
              type="button"
              aria-label="Next case study"
              onClick={(event) => {
                event.stopPropagation();
                nextSlide();
              }}
              className="
                absolute
                right-4
                top-1/2
                z-30
                flex
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
                hover:border-[#E5483F]
                hover:bg-[#E5483F]
                sm:right-6
              "
            >
              <ArrowRight size={19} />
            </button>

            {/* =================================================
                DOTS
            ================================================== */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                z-30
                flex
                -translate-x-1/2
                items-center
                gap-2
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
        </div>

        {/* ====================================================
            THUMBNAILS
        ===================================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-9
          "
        >

          {caseStudies.map((item, index) => {
            const Icon = item.icon;

            const isActive =
              index === activeIndex;

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
                      ? "border-[#E5483F] shadow-[0_0_25px_rgba(229,72,63,0.16)]"
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

                    ${
                      isActive
                        ? "bg-[#E5483F]/[0.10]"
                        : "bg-[#E5483F]/[0.02]"
                    }
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

                      ${
                        isActive
                          ? "text-[#E5483F]"
                          : "text-white/60"
                      }
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
                          ? "border-[#E5483F]/60 bg-[#E5483F]/15 text-[#E5483F]"
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

                    ${
                      isActive
                        ? "text-white"
                        : "text-white/80"
                    }
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
                    bg-[#E5483F]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-8"
                        : "w-0 group-hover:w-5"
                    }
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
            bg-[#101110]/80
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
                text-[#E5483F]
              "
            >
              <Rocket size={20} />
            </div>

            <div>

              <p className="text-sm text-[#D0D2CD]">
                Every business has a story.
              </p>

              <p className="text-sm font-bold text-[#E5483F] sm:text-base">
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
              border-[#E5483F]
              px-6
              py-3
              text-sm
              font-bold
              text-[#F4F1EA]
              transition-all
              duration-300
              hover:bg-[#E5483F]
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