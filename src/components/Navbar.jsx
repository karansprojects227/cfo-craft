import { Menu, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/cfo-craft-logo.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "About Us", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        isolate
        overflow-hidden
        border-white/[0.08]
      "
    >
      {/* =====================================================
          NAVBAR BACKGROUND
          Same visual language as Hero + Services
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
            bg-[#090A09]
          "
        />

        {/* =================================================
            SUBTLE TOP-RIGHT RED GLOW
        ================================================== */}

        <div
          className="
            absolute
            -right-[140px]
            -top-[180px]
            h-[360px]
            w-[500px]
            rounded-full
            bg-[#E5483F]/[0.065]
            blur-[130px]
          "
        />

        {/* =================================================
            SUBTLE LEFT AMBIENT GLOW
        ================================================== */}

        <div
          className="
            absolute
            -left-[180px]
            -top-[120px]
            h-[300px]
            w-[420px]
            rounded-full
            bg-[#E5483F]/[0.025]
            blur-[130px]
          "
        />

        {/* =================================================
            VERY SUBTLE CENTER LIGHT
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.012),transparent_60%)]
          "
        />

        {/* =================================================
            SUBTLE RED FLOWING LINE
        ================================================== */}

        <div
          className="
            absolute
            -right-[80px]
            top-[5px]
            h-[100px]
            w-[600px]
            rotate-[-5deg]
            opacity-20
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-[50%]
              border-t
              border-[#E5483F]/20
            "
          />

          <div
            className="
              absolute
              left-[80px]
              right-[-30px]
              top-[18px]
              h-[70px]
              rounded-[50%]
              border-t
              border-[#E5483F]/10
            "
          />
        </div>
      </div>

      {/* =====================================================
          NAVBAR CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <a
          href="/"
          aria-label="CFO Craft home"
          className="
            shrink-0
            transition-opacity
            duration-300
            hover:opacity-90
          "
        >
          <img
            src={logo}
            alt="CFO Craft"
            className="
              h-14
              w-auto
              object-contain
              invert
            "
          />
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-7
            lg:flex
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                relative
                py-2
                text-sm
                font-semibold
                text-[#E9E6DF]/75
                transition-colors
                duration-300
                hover:text-[#F4F1EA]
              "
            >
              {item.label}

              {/* Burgundy / Red underline */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#E5483F]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

          {/* =================================================
              CONTACT BUTTON
          ================================================== */}

          <a
            href="/contact"
            className="
              group
              flex
              items-center
              gap-2
              rounded-lg
              bg-[#E5483F]
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#FF6258]
              hover:shadow-lg
              hover:shadow-[#E5483F]/20
            "
          >
            Contact Us

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </nav>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            text-[#F4F1EA]
            transition-all
            duration-300
            hover:border-[#E5483F]/60
            hover:bg-[#E5483F]/[0.05]
            hover:text-[#E5483F]
            lg:hidden
          "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      {isMenuOpen && (
        <div
          className="
            relative
            border-t
            border-white/[0.08]
            bg-[#090A09]/95
            px-6
            py-6
            backdrop-blur-xl
            lg:hidden
          "
        >
          <nav
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              gap-1
            "
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-lg
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#E9E6DF]/80
                  transition-all
                  duration-300
                  hover:bg-[#E5483F]/[0.04]
                  hover:text-[#F4F1EA]
                "
              >
                {item.label}
              </a>
            ))}

            {/* =================================================
                MOBILE CONTACT
            ================================================== */}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#E5483F]
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#FF6258]
                hover:shadow-lg
                hover:shadow-[#E5483F]/20
              "
            >
              Contact Us

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                "
              />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;