import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/cfo-craft-logo.png";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        border-t-2 
        border-t-[#122742]
        isolate
        overflow-hidden
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

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-14
          sm:px-6
          lg:px-8
          lg:py-16
        "
      >
        {/* =========================================
            FOOTER GRID
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]
            lg:gap-12
          "
        >
          {/* =====================================
              BRAND
          ====================================== */}

          <div>
            {/* Logo */}
            <a
              href="/"
              className="
                inline-flex
                items-center
                text-2xl
                font-black
                tracking-[-0.04em]
                relative
                -left-13
              "
            >
              <img
                src={logo}
                alt="CFO Craft"
                className="
                  h-32
                  w-auto
                  object-contain
                "
              />
            </a>

            {/* Description */}
            <p
              className="
                max-w-sm
                text-sm
                leading-7
                text-[#8E918B]
              "
            >
              Strategic CFO support for startups, MSMEs, and ambitious
              businesses ready to grow with clarity, control, and confidence.
            </p>
          </div>

          {/* =====================================
              QUICK LINKS
          ====================================== */}

          <div>
            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#eeba7d]
              "
            >
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    text-[#92958F]
                    transition-colors
                    duration-300
                    hover:text-[#F4F1EA]
                  "
                >
                  Home
                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    text-[#92958F]
                    transition-colors
                    duration-300
                    hover:text-[#F4F1EA]
                  "
                >
                  Services
                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="#case-studies"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    text-[#92958F]
                    transition-colors
                    duration-300
                    hover:text-[#F4F1EA]
                  "
                >
                  Case Studies
                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    text-[#92958F]
                    transition-colors
                    duration-300
                    hover:text-[#F4F1EA]
                  "
                >
                  FAQ
                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    text-[#92958F]
                    transition-colors
                    duration-300
                    hover:text-[#F4F1EA]
                  "
                >
                  Contact
                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* =====================================
              SERVICES
          ====================================== */}

          <div>
            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#eeba7d]
              "
            >
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-[#92958F]">CFO Services</li>

              <li className="text-sm text-[#92958F]">Cash Flow Management</li>

              <li className="text-sm text-[#92958F]">
                Profitability Diagnostics
              </li>

              <li className="text-sm text-[#92958F]">
                MIS & SOP Transformation
              </li>

              <li className="text-sm text-[#92958F]">Financial Projections</li>

              <li className="text-sm text-[#92958F]">Business Strategy</li>
            </ul>
          </div>

          {/* =====================================
              CONTACT
          ====================================== */}

          <div>
            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#eeba7d]
              "
            >
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:info@cfocraft.com"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-[#92958F]
                  transition-colors
                  duration-300
                  hover:text-[#F4F1EA]
                "
              >
                <Mail
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#eeba7d]
                  "
                />

                <span>info@cfocraft.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+91%209892560660"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-[#92958F]
                  transition-colors
                  duration-300
                  hover:text-[#F4F1EA]
                "
              >
                <Phone
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#eeba7d]
                  "
                />

                <span>+91 9892560660</span>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-[#92958F]
                "
              >
                <MapPin
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#eeba7d]
                  "
                />

                <span>India</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://web.whatsapp.com/send?phone=919892560660&text="
              target="_blank"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#eeba7d]
                px-5
                py-3
                text-sm
                font-bold
                text-black
                hover:text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#eeba7d]/10
                hover:shadow-xl
                hover:shadow-[#eeba7d]/20
              "
            >
              Talk To Our Expert
              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================== */}

        <div
          className="
            my-10
            h-px
            bg-white/[0.08]
          "
        />

        {/* =========================================
            BOTTOM FOOTER
        ========================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            text-xs
            text-[#6F726D]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}
          <p>© {new Date().getFullYear()} CFO CRAFT. All rights reserved.</p>

          {/* Developer */}
          <p>
            Developed by{" "}
            <span
              className="
                font-semibold
                text-[#eeba7d]
              "
            >
              Karan Kumar
            </span>
          </p>

          {/* Legal */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-[#F4F1EA]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-[#F4F1EA]
              "
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
