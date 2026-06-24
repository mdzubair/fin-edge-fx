
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Images } from "../../../constants-image";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SupportItem = {
  title: string;
  description: string;
  srcLink: string;
  actionLink: string;
  buttonText: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Something went wrong!");
    }
  };

  const supportBox: SupportItem[] = [
    {
      title: "Live Chat",
      description: "Chat with our support team anytime",
      srcLink: Images.contactLoaction,
      actionLink: "#",
      buttonText: "Start Chat",
    },
    {
      title: "Email Support",
      description: "support@finedgefx.com",
      srcLink: Images.emailIcon,
      actionLink: "mailto:support@finedgefx.com",
      buttonText: "Send Email",
    },
    {
      title: "Phone Support",
      description: "+1-629 298 9186",
      srcLink: Images.contactTel,
      actionLink: "tel:+16292989186",
      buttonText: "Call Now",
    },
  ];

return (
  <>
    {/* ================= SUPPORT CARDS ================= */}
      <section className="support-section py-5">
        <div className="container">
          <div className="row g-4">

            {supportBox.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="support-card h-100 text-center">

                  <div className="support-icon">
                    <img
                      src={item.srcLink}
                      alt={item.title}
                      className="img-fluid"
                      height={42}
                    />
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <a
                    href={item.actionLink}
                    className="btn support-btn"
                  >
                    {item.buttonText}
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

        
        <section className="py-4">
          <div className="container">
            <div className="support-card info-box text-center">

              <h2 className="form-title">Office Address </h2>

              <p className="hero-subtitle mx-auto mb-0">
                Raw Trading Ltd Suite 1, Second Floor Sound & Vision House Francis Rachel Street Victoria, Mahe, Seychelles
              </p>

            </div>
          </div>
      </section>
{/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section">
        <div className="container">

          <div className="form-card">

            <div className="text-center mb-5">
              <h2 className="form-title">
                Send us a <span>Message</span>
              </h2>

              <p className="form-subtitle">
                Fill out the form below and our support
                team will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="row">

                {/* NAME */}
                <div className="col-md-4 mb-4">
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your Name"
                    className="form-control modern-input"
                  />

                  <small className="text-danger">
                    {errors.name?.message}
                  </small>
                </div>

                {/* EMAIL */}
                <div className="col-md-4 mb-4">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email Address"
                    className="form-control modern-input"
                  />

                  <small className="text-danger">
                    {errors.email?.message}
                  </small>
                </div>

                {/* PHONE */}
                <div className="col-md-4 mb-4">
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="form-control modern-input"
                  />

                  <small className="text-danger">
                    {errors.phone?.message}
                  </small>
                </div>

                {/* MESSAGE */}
                <div className="col-12 mb-4">
                  <textarea
                    rows={6}
                    {...register("message")}
                    placeholder="Write your message..."
                    className="form-control modern-input"
                  />

                  <small className="text-danger">
                    {errors.message?.message}
                  </small>
                </div>

                {/* BUTTON */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn submit-btn"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </section>
  </>
);
};

export default ContactUs;