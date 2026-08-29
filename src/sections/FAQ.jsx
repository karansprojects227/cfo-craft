import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Handshake,
  Rocket,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do CFO Services differ from Accounting Services?",
    icon: UserRound,
    answer:
      "CFO services are focused on financial management and strategy, while accounting services are focused on financial record-keeping. CFO services typically involve higher-level financial analysis and strategic planning & reporting, while accounting services focus on day-to-day financial transactions.",
  },

  {
    id: 2,
    question: "How do CFOs work with other members of a business?",
    icon: Users,
    answer:
      "CFOs work closely with other members of a business, including CEOs and other executives. They may also work with accounting and finance teams, as well as external stakeholders such as investors and lenders. CFOs provide financial expertise and guidance to support business decision-making and help businesses achieve their goals.",
  },

  {
    id: 3,
    question: "What types of companies can benefit from CFO services?",
    icon: Building2,
    answer:
      "CFO services can benefit companies of all sizes and across all industries. Small businesses, startups, and mid-sized companies can benefit from the financial management expertise provided by a CFO, while larger companies may need a CFO to help them manage complex financial operations and optimize their financial performance.",
  },

  {
    id: 4,
    question: "What are the benefits of CFO services?",
    icon: Rocket,
    benefits: [
      "Strategic Growth Acceleration — Turn financial insight into measurable business outcomes.",
      "Investor-Ready Financials — Build credibility with accurate, transparent, and timely reporting.",
      "Cash Flow Confidence — Predict, plan, and optimize cash for smooth operations.",
      "Smarter Decision-Making — Access data-driven insights that guide every major move.",
      "Scalable Financial Systems — Build processes and dashboards that grow with your business.",
    ],
  },

  {
    id: 5,
    question: "Can businesses outsource CFO services?",
    icon: Handshake,
    answer:
      "Yes. Outsourced CFO services give you the experience of a senior financial leader without the overhead of a full-time role. You get structured financial planning, forecasting, and strategic guidance that help your business scale confidently.",
  },

  {
    id: 6,
    question: "Why do companies need CFO services?",
    icon: ShieldCheck,
    answer:
      "Companies need CFO services to bring clarity, control, and strategy to their finances. A CFO ensures that every decision, from planning to investment, is backed by data, foresight, and financial discipline, helping businesses grow with confidence.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  const Icon = faq.icon;

  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        transition-all
        duration-300
      `}
    >
      {/* ================================
          QUESTION
      ================================= */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          gap-4
          px-5
          py-5
          text-left
          sm:px-6
          sm:py-5
        "
      >
        {/* Icon */}

        <span
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            ${
              isOpen
                ? "border-[#0095fd] bg-[#0095fd]/10 text-[#0095fd]"
                : "border-[#0095fd]/45 bg-[#0095fd]/[0.04] text-[#0095fd]"
            }
          `}
        >
          <Icon size={19} strokeWidth={1.7} />
        </span>

        {/* Question */}

        <span
          className={`
            min-w-0
            flex-1
            text-sm
            font-bold
            leading-6
            transition-colors
            duration-300
            sm:text-[15px]
            lg:text-base
            ${
              isOpen
                ? "text-[#0095fd]"
                : "text-[#E8E7E2] group-hover:text-white"
            }
          `}
        >
          {faq.question}
        </span>

        {/* Arrow */}

        <span
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            ${
              isOpen
                ? "rotate-180 border-[#0095fd] bg-[#0095fd] text-white"
                : "border-white/10 text-[#0095fd]"
            }
          `}
        >
          <ChevronDown size={17} strokeWidth={2} />
        </span>
      </button>

      {/* ================================
          ANSWER
      ================================= */}

      <div
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-out
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/[0.07] px-5 pb-6 pt-5 sm:px-6">
            {faq.benefits ? (
              <div className="space-y-3">
                {faq.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="
                      flex
                      items-start
                      gap-3
                      border-b
                      border-white/[0.06]
                      pb-3
                      last:border-0
                      last:pb-0
                    "
                  >
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
                        bg-[#0095fd]
                        text-white
                      "
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-[#B8BBB5]
                        sm:text-[15px]
                      "
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p
                className="
                  max-w-3xl
                  text-sm
                  leading-7
                  text-[#B8BBB5]
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                {faq.answer}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleFAQ = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const leftColumn = faqs.filter((faq) => [1, 2, 3].includes(faq.id));

  const rightColumn = faqs.filter((faq) => [4, 5, 6].includes(faq.id));

  return (
    <section
      id="faq"
      className="
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        scroll-mt-20
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
          SUBTLE DOT TEXTURE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-28
          -z-10
          h-56
          w-56
          opacity-20
          [background-image:radial-gradient(#0095fd_1px,transparent_1px)]
          [background-size:14px_14px]
          [mask-image:linear-gradient(to_right,black,transparent)]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          right-0
          -z-10
          h-52
          w-52
          opacity-15
          [background-image:radial-gradient(#0095fd_1px,transparent_1px)]
          [background-size:14px_14px]
          [mask-image:linear-gradient(to_left,black,transparent)]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-12">
          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#0095fd]/70" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#0095fd]
              "
            >
              FAQ
            </span>

            <span className="h-px w-10 bg-[#0095fd]/70" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.045em]
              text-[#F4F1EA]
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Frequently Asked <span className="text-[#0095fd]">Questions</span>
          </h2>

          {/* Accent line */}

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#0095fd] to-transparent" />

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-[#969994]
              sm:text-[15px]
              sm:leading-7
            "
          >
            Clear answers to help you understand how our CFO services create
            clarity, control, and long-term growth.
          </p>
        </div>

        {/* =====================================================
            FAQ GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            lg:grid-cols-2
            lg:gap-5
          "
        >
          {/* LEFT COLUMN */}

          <div className="space-y-4">
            {leftColumn.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.has(faq.id)}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-4">
            {rightColumn.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.has(faq.id)}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-[#0095fd]/30
            px-5
            py-5
            shadow-[0_0_45px_rgba(229,72,63,0.05)]
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
            lg:px-7
          "
        >
          {/* CTA Content */}

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
                border-[#0095fd]/60
                bg-[#0095fd]/[0.06]
                text-[#0095fd]
              "
            >
              <Rocket size={20} strokeWidth={1.7} />
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  text-[#F4F1EA]
                  sm:text-[15px]
                "
              >
                Still have questions?
              </p>

              <p className="mt-0.5 text-xs text-[#858780] sm:text-sm">
                We're here to help you make{" "}
                <span className="text-[#0095fd]">
                  confident financial decisions.
                </span>
              </p>
            </div>
          </div>

          {/* CTA Button */}

          <a
            target="_black"
            href="https://web.whatsapp.com/send?phone=919892560660&text="
            className="
              group
              flex
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-[#0095fd]/70
              px-5
              py-3
              text-sm
              font-bold
              text-[#0095fd]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0095fd]
              hover:text-white
              hover:shadow-lg
              hover:shadow-[#0095fd]/20
            "
          >
            TALK TO OUR EXPERT
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

export default FAQ;
