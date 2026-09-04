import { Check } from "lucide-react";

import dashboardImage from "../assets/financial-visibility-dashboard.png";

const benefits = [
  "Instantly know if your business is financially healthy",
  "Spot hidden red flags (before they become cash crisis)",
  "See the KPIs investors, banks & advisors look at",
  "Understand your burn & runway with simple visuals",
];

function FinancialTruth() {
  return (
    <section
      id="financial-truth"
      className="
        relative
        isolate
        border-t-2
        border-t-[#122742]
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        py-20
        sm:py-24
        lg:py-14
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
          CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-6
          lg:grid-cols-[1.08fr_0.92fr]
          lg:gap-16
          lg:px-8
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div className="max-w-3xl">
          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#A6CBF7]" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A6CBF7]
                sm:text-sm
              "
            >
              Financial Clarity. Confident Decisions.
            </p>
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-3xl
              text-4xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.04em]
              text-[#F4F1EA]
              sm:text-5xl
              lg:text-[56px]
              xl:text-[62px]
            "
          >
            Get Your Financial Truth in Under{" "}
            <span className="text-[#A6CBF7]">10 Minutes.</span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-[#A9AAA4]
              sm:text-lg
              sm:leading-8
            "
          >
            A quick snapshot of your business health — so you can act faster,
            grow smarter, and lead with confidence.
          </p>

          {/* Benefits */}

          <div className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#A6CBF7]/15
                    text-[#A6CBF7]
                  "
                >
                  <Check size={13} strokeWidth={3} />
                </span>

                <p
                  className="
                    text-sm
                    leading-6
                    text-[#D5D2CB]
                    sm:text-base
                  "
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* =================================================
    CONTACT CTA
================================================== */}

          <div className="mt-9">
            <div
              className="
      flex
      flex-col
      gap-4
      rounded-2xl
      border
      border-white/[0.08]
      p-5
      backdrop-blur-sm
      sm:flex-row
      sm:items-center
      sm:justify-between
    "
            >
              {/* CTA TEXT */}

              <div>
                <p
                  className="
          text-sm
          font-semibold
          text-[#F4F1EA]
          sm:text-base
        "
                >
                  Let’s talk about your financial goals.
                </p>

                <p
                  className="
          mt-1
          text-xs
          leading-5
          text-[#858780]
          sm:text-sm
        "
                >
                  Get clear financial insights and practical guidance for your
                  business.
                </p>
              </div>

              {/* CONTACT BUTTON */}

              <a
                href="/contact"
                className="
          group
          inline-flex
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#A6CBF7]
          px-6
          py-3
          text-sm
          font-bold
          text-black
          hover:text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#A6CBF7]/10
          hover:shadow-xl
          hover:shadow-[#A6CBF7]/20
        "
              >
                Contact Us
                <span
                  className="
            ml-2
            text-base
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}

        <div className="relative flex w-full h-full items-start justify-center lg:justify-end sm:justify-center">
          {/* Image glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-8
              rounded-full
              bg-[#A6CBF7]/[0.08]
              blur-[100px]
            "
          />

          {/* Image wrapper */}

          <div
            className="
              relative
              h-[100vw]
              md:h-[60vw]
              lg:h-[40vw]
              overflow-hidden
              rounded-[14px]
              border
              border-[#A6CBF7]/30
              shadow-[0_25px_80px_rgba(0,0,0,0.55)]
              lg:mr-24
            "
          >
            <img
              src={dashboardImage}
              alt="Complete Financial Visibility Dashboard"
              className="
                block
                h-full
                object-cover
                object-center
              "
            />

            {/* Subtle image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/10
                via-transparent
                to-[#A6CBF7]/[0.025]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialTruth;
