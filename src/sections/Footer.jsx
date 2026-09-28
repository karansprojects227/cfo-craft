import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
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
        px-6
        lg:px-10
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

      {/* Main Container */}
      <div
        className="
    relative
    mx-auto
    max-w-7xl
    py-14
    lg:py-16
  "
      >
        {/* =========================================
      FOOTER GRID - 3 COLUMNS
  ========================================== */}

        <div
          className="
      grid
      grid-cols-1
      gap-10
      md:grid-cols-2
      lg:grid-cols-[1.5fr_1fr_1.2fr]
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
          lg:-left-[6px]
        "
            >
              <img
                src={logo}
                alt="CFO Craft"
                className="
            h-16
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
        SERVICES
    ====================================== */}

          <div>
            <h3
              className="
          text-xs
          font-bold
          uppercase
          tracking-[0.22em]
          text-[#A6CBF7]
        "
            >
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-[#92958F]">Finance Diagnostic</li>

              <li className="text-sm text-[#92958F]">Fractional CFO – Starter</li>

              <li className="text-sm text-[#92958F]">
                Fractional CFO – Core
              </li>

              <li className="text-sm text-[#92958F]">
                Fractional CFO – Growth
              </li>

              <li className="text-sm text-[#92958F]">Specialist & Project Work</li>
            </ul>
          </div>

          {/* =====================================
                  GET IN TOUCH
              ====================================== */}

          <div>
            <h3
              className="
          text-xs
          font-bold
          uppercase
          tracking-[0.22em]
          text-[#A6CBF7]
        "
            >
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              {/* Address */}
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
              text-[#A6CBF7]
            "
                />

                <span>
                  CFO CRAFT Advisory Services Pvt Ltd
                  <br />
                  Aditya Heritage, 502,
                  <br />
                  Near Rustomjee Elanza Avenue, Mindspace,
                  <br />
                  Malad West,
                  <br />
                  Mumbai 400064
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:+919892560660"
                className="
            flex
            items-start
            gap-3
            text-sm
            text-[#92958F]
            transition-colors
            duration-300
            hover:text-[#A6CBF7]
          "
              >
                <Phone
                  size={17}
                  className="
              mt-0.5
              shrink-0
              text-[#A6CBF7]
            "
                />

                <span>+91 9892560660</span>
              </a>

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
            hover:text-[#A6CBF7]
          "
              >
                <Mail
                  size={17}
                  className="
              mt-0.5
              shrink-0
              text-[#A6CBF7]
            "
                />

                <span>info@cfocraft.com</span>
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://web.whatsapp.com/send?phone=919892560660&text="
              target="_blank"
              rel="noopener noreferrer"
              className="
          group
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-lg
          bg-[#A6CBF7]
          px-5
          py-3
          text-sm
          font-bold
          text-black
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#A6CBF7]/10
          hover:text-white
          hover:shadow-xl
          hover:shadow-[#A6CBF7]/20
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
      COPYRIGHT / SOCIAL
  ========================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            gap-5
            text-xs
            text-[#6F726D]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}
          <p className="order-1">
            © CFO CRAFT Advisory Services Pvt. Ltd.
          </p>
                
          {/* Social Links */}
          <div
            className="
              order-2
              flex
              items-center
              gap-5
              sm:order-3
            "
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cfo-craft-advisory-services-private-limited/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                text-[#6F726D]
                transition-colors
                duration-300
                hover:text-[#A6CBF7]
              "
            >
              <FaLinkedinIn size={18} />
            </a>
                
            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/CFO-CRAFT/100093439479258/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                text-[#6F726D]
                transition-colors
                duration-300
                hover:text-[#A6CBF7]
              "
            >
              <FaFacebookF size={18} />
            </a>
                
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@CFOCRAFT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="
                text-[#6F726D]
                transition-colors
                duration-300
                hover:text-[#A6CBF7]
              "
            >
              <FaYoutube size={18} />
            </a>
                
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cfo.craft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                text-[#6F726D]
                transition-colors
                duration-300
                hover:text-[#A6CBF7]
              "
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* =========================================
      DIVIDER
  ========================================== */}

        <div
          className="
      my-8
      h-px
      bg-white/[0.08]
    "
        />

        {/* =========================================
      DISCLAIMER
  ========================================== */}

        <div
          className="
      text-xs
      leading-6
      text-[#8E918B]
    "
        >
          <p>
            Disclaimer: Site content, descriptions, and claims are provided by
            CFO CRAFT Advisory Services Private Limited are for informational
            purposes only and do not constitute tax, legal, or accounting
            advice. You should consult your own tax, legal, and accounting
            advisors before engaging in any transaction. References to "CFO
            CRAFT" on this website mean CFO CRAFT Advisory Services Private
            Limited unless expressly stated otherwise. Engagement-specific
            advice requires a formally signed agreement.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
