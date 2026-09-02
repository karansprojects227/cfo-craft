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
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
      "
    >

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
        ================================================= */}

        <a
          href="/"
          aria-label="CFO Craft home"
          className="
            shrink-0
            transition-opacity
            duration-300
            hover:opacity-90
            relative
            -left-8
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

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

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

              {/* Hover underline */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#eeba7d]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

          {/* =================================================
              CONTACT BUTTON
          ================================================= */}

          <a
            href="/contact"
            className="
              group
              flex
              items-center
              gap-2
              rounded-lg
              bg-[#eeba7d]
              px-5
              py-2.5
              text-sm
              font-bold
              text-black
              hover:text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#eeba7d]/10
              hover:shadow-lg
              hover:shadow-[#eeba7d]/25
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
        ================================================= */}

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
            hover:border-[#eeba7d]/60
            hover:bg-[#eeba7d]/[0.05]
            hover:text-[#eeba7d]
            lg:hidden
          "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            bg-[#172437]/95
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
                  hover:bg-white/[0.05]
                  hover:text-[#F4F1EA]
                "
              >
                {item.label}
              </a>
            ))}

            {/* =================================================
                MOBILE CONTACT
            ================================================= */}

            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#eeba7d]
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#eeba7d]/10
                hover:shadow-lg
                hover:shadow-[#eeba7d]/20
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