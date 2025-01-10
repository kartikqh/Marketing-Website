import  { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    try {
     
      // Email template for site owner
      const ownerEmailContent = `
        <html>
          <head>
            <style>
              .container { font-family: Arial, sans-serif; padding: 20px; }
              .header { color: #7A6960; font-size: 24px; margin-bottom: 20px; }
              .details { background: #f5f5f5; padding: 15px; border-radius: 5px; }
              .label { font-weight: bold; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Onkar Digital Service: New Enquiry Received</div>
              <div class="details">
                <p><span class="label">Name:</span> ${data.name}</p>
                <p><span class="label">Email:</span> ${data.email}</p>
                <p><span class="label">Subject:</span> ${data.subject}</p>
                <p><span class="label">Message:</span> ${data.message}</p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Email template for customer
      const customerEmailContent = `
        <html>
          <head>
            <style>
              .container { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
              .header { color: #CF58B2; font-size: 24px; margin-bottom: 20px; text-align: center; }
              .content { line-height: 1.6; color: #444; }
              .footer { margin-top: 30px; text-align: center; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Thank You for Contacting Us!</div>
              <div class="content">
                <p>Dear ${data.name},</p>
                <p>We have received your enquiry. Our team will review your message and get back to you shortly.</p>
                <p>Your enquiry details have been recorded with the following information:</p>
                <ul>
                  <li>Subject: ${data.subject}</li>
                  <li>Message: ${data.message}</li>
                </ul>
                <p>We appreciate your interest and aim to respond within 24-48 business hours.</p>
              </div>
              <div class="footer">
                <p>Best Regards,<br/>Onkar Digital Service Team</p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Send email to owner
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_REACT_APP_BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: "Onkar Digital Service",
            email: "onkardigitalservices@gmail.com"
          },
          to: [{
            email: "onkardigitalservices@gmail.com",
            name: "Site Owner"
          }],
          subject: `New Enquiry: ${data.subject}`,
          htmlContent: ownerEmailContent
        })
      });

      // Send acknowledgement email to customer
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_REACT_APP_BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: "Onkar Digital Service",
            email:  "onkardigitalservices@gmail.com"
          },
          to: [{
            email: data.email,
            name: data.name
          }],
          subject: "Thank you for contacting Onkar Digital Service",
          htmlContent: customerEmailContent
        })
      });

      toast.success("Message sent successfully");
      e.target.reset();
    } catch (error) {
      console.error("Error sending emails:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Contact
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-purple-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Reach out for a new project or just say hello
      </p>

      <div className="lg:flex gap-6">
        {/* map */}
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-purple-600 mb-7 lg:mb-0"
        >
          <div className="flex gap-3 mt-3 mb-12">
            <div
              className="rounded-full h-fit bg-purple-100 p-2"
              style={{ color: "#CF58B2", fontSize: "28px" }}
            >
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Address
              </h2>
              <p className="text-sm text-slate-800">
                51 Saraswati Vihar  Raipur road,Dehrdaun, UK(In) 248001
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div
              className="rounded-full h-fit bg-purple-100 p-2"
              style={{ color: "#CF58B2", fontSize: "28px" }}
            >
              <IoCallOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Call Us
              </h2>
              <p className="text-sm text-slate-800">+91 88006 44378</p>
            </div>
          </div>

          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit bg-purple-100 p-2"
              style={{ color: "#CF58B2", fontSize: "28px" }}
            >
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Email Us
              </h2>
              <p className="text-sm text-slate-800">onkardigitalservices@gmail.com</p>
            </div>
          </div>

          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3080.8473589649675!2d78.06152887556436!3d30.319918774786032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzExLjciTiA3OMKwMDMnNTAuOCJF!5e1!3m2!1sen!2sin!4v1734350556142!5m2!1sen!2sin" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-purple-600"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-purple-600 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-purple-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                {...register("subject", { required: true })}
                type="text"
                id="subject"
                placeholder="Your subject"
                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-purple-600 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Enter your message"
                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-purple-600 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center m-3">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
