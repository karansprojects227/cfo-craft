import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Pencil,
  Phone,
  UserRound,
  FileText,
} from "lucide-react";

function ContactInfo({ icon, title, children, last = false }) {
  return (
    <div
      className={`
        group
        flex
        items-start
        gap-3.5
        py-3
        ${!last ? "border-b border-white/[0.07]" : ""}
      `}
    >
      {/* Icon */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#eeba7d]/30
          bg-[#eeba7d]/[0.035]
          text-[#eeba7d]
          transition-all
          duration-300
          group-hover:border-[#eeba7d]/70
          group-hover:bg-[#eeba7d]/[0.08]
        "
      >
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0 pt-0.5">
        <h3
          className="
            text-sm
            font-bold
            leading-5
            text-[#F4F1EA]
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-0.5
            text-[13px]
            leading-5
            text-[#858780]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function FormField({ icon, children, textarea = false }) {
  return (
    <div
      className={`
        group
        rounded-xl
        border
        border-white/[0.10]
        px-4
        transition-all
        duration-300
        focus-within:border-[#eeba7d]/55
        ${textarea ? "py-3" : "flex h-[52px] items-center"}
      `}
    >
      <div
        className="
          flex
          w-full
          items-start
          gap-3
          text-[#686B67]
          transition-colors
          duration-300
          group-focus-within:text-[#eeba7d]
        "
      >
        <span className="shrink-0 pt-0.5">{icon}</span>

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  let [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    const valid =
      updatedFormData.name.trim() !== "" &&
      updatedFormData.email.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedFormData.email) &&
      updatedFormData.subject.trim() !== "" &&
      updatedFormData.message.trim() !== "";

    setIsFormValid(valid);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const valid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.subject.trim() !== "" &&
      formData.message.trim() !== "";

    if (!valid) {
      setErrorMessage(
        "Please fill in all fields and enter a valid email address.",
      );
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_83pka7i",
        "template_zszc3hw",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "fY3JLmicNAcHHh5kT",
      );

      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(
        "Something went wrong while sending your message. Please try again.",
      );
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        mt-20
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(110deg,#0C1B31_0%,#081629_50%,#061323_100%)]
        text-[#F4F1EA]
        scroll-mt-20
        lg:min-h-[calc(100vh-80px)]
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

      {/* Dot texture */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-24
          -z-10
          h-56
          w-56
          opacity-20
          [background-image:radial-gradient(#eeba7d_1px,transparent_1px)]
          [background-size:14px_14px]
          [mask-image:linear-gradient(to_right,black,transparent)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-16
          right-0
          -z-10
          h-52
          w-52
          opacity-15
          [background-image:radial-gradient(#eeba7d_1px,transparent_1px)]
          [background-size:14px_14px]
          [mask-image:linear-gradient(to_left,black,transparent)]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-full
          max-w-7xl
          items-center
          px-5
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-8
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-start
            gap-9
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="w-full">
            {/* Label */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[#eeba7d]/70" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#eeba7d]
                "
              >
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1
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
              Contact <span className="text-[#eeba7d]">Us</span>
            </h1>

            {/* Accent */}
            <div className="mt-5 h-px w-14 bg-[#eeba7d]" />

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[520px]
                text-sm
                leading-6
                text-[#969994]
                sm:text-[15px]
                sm:leading-7
              "
            >
              Have a question, project in mind, or just want to say hello? We'd
              love to hear from you. Fill out the form or reach us directly
              using the details below.
            </p>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="mt-6 max-w-[540px]">
              <ContactInfo
                icon={<MapPin size={18} strokeWidth={1.8} />}
                title="Our Office"
              >
                <p>CFO CRAFT Advisory Services Pvt Ltd</p>
                <p>Aditya Heritage, 502,</p>
                <p>Near Rustomjee Elanza Avenue, Mindspace, Malad West,</p>
                <p>Mumbai 400064</p>
              </ContactInfo>

              <ContactInfo
                icon={<Mail size={18} strokeWidth={1.8} />}
                title="Email Us"
              >
                <a
                  href="mailto:info@cfocraft.com"
                  className="
                    transition-colors
                    duration-300
                    hover:text-[#eeba7d]
                  "
                >
                  info@cfocraft.com
                </a>
              </ContactInfo>

              <ContactInfo
                icon={<Phone size={18} strokeWidth={1.8} />}
                title="Call Us"
              >
                <a
                  href="tel:+919876543210"
                  className="
                    transition-colors
                    duration-300
                    hover:text-[#eeba7d]
                  "
                >
                  +91 9892560660
                </a>
              </ContactInfo>

              <ContactInfo
                icon={<Clock3 size={18} strokeWidth={1.8} />}
                title="Working Hours"
                last
              >
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </ContactInfo>
            </div>

            {/* =================================================
                SMALL CTA
            ================================================= */}

            <div className="mt-5 flex items-center gap-3">
              {/* Left: Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#eeba7d]/40
                  bg-[#eeba7d]/[0.05]
                  text-[#eeba7d]
                "
              >
                <MessageCircle size={18} />
              </div>

              {/* Middle: Text */}
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-[#F4F1EA]">
                  Prefer to talk?
                </p>

                <p className="mt-0.5 text-xs text-[#777]">
                  Let's connect over a quick call.
                </p>
              </div>

              {/* Right: Button */}
              <button
                type="button"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#eeba7d]
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#eeba7d]
                  transition-all
                  duration-300
                  hover:bg-[#eeba7d]
                  hover:text-white
                "
              >
                Schedule a Call
                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================= */}

          <div
            className="
              relative
              w-3/4
              rounded-2xl
              border
              border-white/[0.10]
              p-5
              shadow-[0_0_45px_rgba(229,72,63,0.035)]
              backdrop-blur-xl
              sm:p-6
              lg:p-7
              lg:mr-8
              lg:ml-auto
              xl:p-8
            "
          >
            {/* Form glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-[#eeba7d]/[0.055]
                blur-[80px]
              "
            />

            <div className="relative z-10">
              {/* ================================================= */}
              {/* CONTACT FORM */}
              {/* ================================================= */}

              {formStatus === "idle" && (
                <>
                  {/* Form Header */}
                  <div className="mb-5">
                    <h2
                      className="
            text-2xl
            font-black
            leading-tight
            tracking-[-0.025em]
            text-[#F4F1EA]
            sm:text-[26px]
          "
                    >
                      Send Us a Message
                    </h2>

                    <div className="mt-3 h-px w-14 bg-[#eeba7d]" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Name + Email */}
                    <div
                      className="
            grid
            grid-cols-1
            gap-3.5
            sm:grid-cols-2
          "
                    >
                      <FormField
                        icon={<UserRound size={17} strokeWidth={1.7} />}
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="contact-input"
                        />
                      </FormField>

                      <FormField icon={<Mail size={17} strokeWidth={1.7} />}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="contact-input"
                        />
                      </FormField>
                    </div>

                    {/* Subject */}
                    <FormField icon={<FileText size={17} strokeWidth={1.7} />}>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="contact-input"
                      />
                    </FormField>

                    {/* Message */}
                    <FormField
                      textarea
                      icon={<Pencil size={17} strokeWidth={1.7} />}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={4}
                        className="
              contact-input
              resize-none
            "
                      />
                    </FormField>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!isFormValid || formStatus === "sending"}
                      className="
                        contact-submit-btn
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-[#eeba7d]
                        px-5
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#eeba7d]/10
                        hover:shadow-[0_10px_30px_rgba(0,149,253,0.20)]
                      "
                    >
                      Send Message
                      <ArrowRight
                        size={17}
                        strokeWidth={2}
                        className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                      />
                    </button>
                  </form>
                </>
              )}

              {/* ================================================= */}
              {/* STATUS SCREEN */}
              {/* ================================================= */}

              {formStatus !== "idle" && (
                <div className="form-success-container">
                  {/* ============================================= */}
                  {/* TOP PROGRESS TRACKER */}
                  {/* ============================================= */}

                  <div className="success-progress">
                    {/* =========================================== */}
                    {/* STEP 1 - YOUR MESSAGE */}
                    {/* =========================================== */}

                    <div className="progress-step completed">
                      <div className="step-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                      </div>

                      <span>1. Your Message</span>
                    </div>

                    {/* LINE 1 */}
                    <div className="progress-line active" />

                    {/* =========================================== */}
                    {/* STEP 2 - SENDING */}
                    {/* =========================================== */}

                    <div
                      className={`progress-step ${
                        formStatus === "sending"
                          ? "sending"
                          : formStatus === "success"
                            ? "completed"
                            : "error"
                      }`}
                    >
                      <div className="step-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </div>

                      <span>2. Sending</span>
                    </div>

                    {/* =========================================== */}
                    {/* LINE 2 */}
                    {/* =========================================== */}

                    <div
                      className={`progress-line ${
                        formStatus === "success"
                          ? "active"
                          : formStatus === "error"
                            ? "error"
                            : ""
                      }`}
                    />

                    {/* =========================================== */}
                    {/* STEP 3 - RESULT */}
                    {/* =========================================== */}

                    <div
                      className={`progress-step ${
                        formStatus === "success"
                          ? "success"
                          : formStatus === "error"
                            ? "error"
                            : "pending"
                      }`}
                    >
                      <div className="step-icon">
                        {/* SUCCESS + PENDING ICON */}
                        {formStatus !== "error" && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        )}

                        {/* ERROR ICON */}
                        {formStatus === "error" && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        )}
                      </div>

                      <span>
                        {formStatus === "error" ? "3. Failed" : "3. Success"}
                      </span>
                    </div>
                  </div>

                  {/* ============================================= */}
                  {/* SENDING CARD */}
                  {/* ============================================= */}

                  {formStatus === "sending" && (
                    <div className="status-card sending-card">
                      <div className="sending-loader">
                        <div className="loader-ring"></div>

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </div>

                      <h2>Sending Your Message...</h2>

                      <p>
                        Please wait while we securely deliver
                        <br />
                        your message.
                      </p>
                    </div>
                  )}

                  {/* ============================================= */}
                  {/* SUCCESS CARD */}
                  {/* ============================================= */}

                  {formStatus === "success" && (
                    <div className="success-card">
                      {/* Celebration */}
                      <div className="celebration">
                        <span className="confetti c1"></span>
                        <span className="confetti c2"></span>
                        <span className="confetti c3"></span>
                        <span className="confetti c4"></span>
                        <span className="confetti c5"></span>
                        <span className="confetti c6"></span>
                        <span className="confetti c7"></span>
                        <span className="confetti c8"></span>
                        <span className="confetti c9"></span>
                        <span className="confetti c10"></span>
                        <span className="confetti c11"></span>
                        <span className="confetti c12"></span>
                        <span className="confetti c13"></span>
                        <span className="confetti c14"></span>
                        <span className="confetti c15"></span>
                        <span className="confetti c16"></span>
                        <span className="confetti c17"></span>
                        <span className="confetti c18"></span>
                      </div>

                      {/* Big Success Icon */}
                      <div className="success-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </div>

                      <h2>Thank You!</h2>

                      <p>
                        Your message was sent successfully.
                        <br />
                        We'll be in touch soon.
                      </p>

                      <button
                        type="button"
                        className="success-btn"
                        onClick={() => {
                          window.location.href = "/";
                        }}
                      >
                        Go Back To Home
                        <span>→</span>
                      </button>
                    </div>
                  )}

                  {/* ============================================= */}
                  {/* ERROR CARD */}
                  {/* ============================================= */}

                  {formStatus === "error" && (
                    <div className="status-card error-card">
                      <div className="error-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      </div>

                      <h2>Message Not Sent</h2>

                      <p>
                        {errorMessage ||
                          "Something went wrong while sending your message. Please try again."}
                      </p>

                      <button
                        type="button"
                        className="retry-btn"
                        onClick={() => {
                          setFormStatus("idle");
                          setErrorMessage("");
                        }}
                      >
                        Try Again
                        <span>↻</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INPUT STYLES
      ====================================================== */}

      <style>{`
        .contact-input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #f4f1ea;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-input::placeholder {
          color: #70736f;
        }

        .contact-input:focus::placeholder {
          color: #555853;
        }

        textarea.contact-input {
          min-height: 112px;
          padding-top: 1px;
        }
      `}</style>
    </section>
  );
}

export default Contact;
