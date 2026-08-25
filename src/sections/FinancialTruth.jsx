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
        overflow-hidden
        border-t
        border-white/[0.05]
        bg-[#090A09]
        py-20
        sm:py-24
        lg:py-14
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Main background */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#090A09_0%,#0D0E0D_48%,#100B0B_100%)]
          "
        />

        {/* Top-right red glow */}
        <div
          className="
            absolute
            -right-[12%]
            -top-[20%]
            h-[520px]
            w-[620px]
            rounded-full
            bg-[#E5483F]/[0.08]
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
            bg-[#E5483F]/[0.055]
            blur-[150px]
          "
        />

        {/* Right ambient glow */}
        <div
          className="
            absolute
            right-[15%]
            top-[35%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#E5483F]/[0.025]
            blur-[120px]
          "
        />

        {/* Top-right flowing lines */}
        <div
          className="
            absolute
            -right-[8%]
            top-[5%]
            h-[260px]
            w-[800px]
            rotate-[-13deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.055]
          "
        />

        <div
          className="
            absolute
            -right-[4%]
            top-[12%]
            h-[200px]
            w-[700px]
            rotate-[-13deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.035]
          "
        />

        <div
          className="
            absolute
            right-[4%]
            top-[19%]
            h-[150px]
            w-[580px]
            rotate-[-13deg]
            rounded-[100%_0_100%_0]
            border
            border-white/[0.018]
          "
        />

        {/* Bottom-left flowing lines */}
        <div
          className="
            absolute
            -left-[10%]
            bottom-[3%]
            h-[220px]
            w-[700px]
            rotate-[12deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.045]
          "
        />

        <div
          className="
            absolute
            -left-[6%]
            bottom-[10%]
            h-[170px]
            w-[600px]
            rotate-[12deg]
            rounded-[100%_0_100%_0]
            border
            border-[#E5483F]/[0.025]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]
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
            <span className="h-px w-9 bg-[#E5483F]" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#E5483F]
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
            <span className="text-[#E5483F]">10 Minutes.</span>
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
                    bg-[#E5483F]/15
                    text-[#E5483F]
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
      bg-[#101110]/60
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
        Get clear financial insights and practical guidance for your business.
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
          bg-[#E5483F]
          px-6
          py-3
          text-sm
          font-bold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#FF6258]
          hover:shadow-xl
          hover:shadow-[#E5483F]/20
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

        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Image glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-8
              rounded-full
              bg-[#E5483F]/[0.08]
              blur-[100px]
            "
          />

          {/* Image wrapper */}

          <div
            className="
              relative
              w-2/3
              max-w-[560px]
              overflow-hidden
              rounded-[28px]
              border
              border-[#E5483F]/30
              bg-[#0D0E0D]
              shadow-[0_25px_80px_rgba(0,0,0,0.55)]
              mr-24
            "
          >
            <img
              src={dashboardImage}
              alt="Complete Financial Visibility Dashboard"
              className="
                block
                h-auto
                w-full
                object-cover
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
                to-[#E5483F]/[0.025]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialTruth;
