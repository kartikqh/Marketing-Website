import { useEffect } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CtaButton from "../components/CtaButton";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Hireus = () => {
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
              <div class="header">Onkar Digital Service: New Service Request Received</div>
              <div class="details">
                <p><span class="label">Name:</span> ${data.name}</p>
                <p><span class="label">Email:</span> ${data.email}</p>
                <p><span class="label">Service:</span> ${data.service}</p>
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
                <p>We have received your inquiry regarding ${data.service}. Our team will review your request and get back to you shortly.</p>
                <p>Your request details have been recorded with the following information:</p>
                <ul>
                  <li>Service: ${data.service}</li>
                  <li>Subject: ${data.subject}</li>
                </ul>
                <p>We appreciate your interest in our services and aim to respond within 24-48 business hours.</p>
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
            email: "oberoi181994@gmail.com",
            name: "Site Owner"
          }],
          subject: `New Service Request: ${data.service}`,
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
    
    <div className=" secondary-font">
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
      <NavBar />
      <div className="mt-40 md:mt-30">
        <h1 className="text-center text-[#7A6960] md:text-5xl text-3xl font-semibold my-10 p-5 md:p-0">Share your idea & we will <br /> turn it into reality!</h1>
        <div className="w-full min-h-screen flex justify-center">
          {/* form */}
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="lg:w-[60%] h-fit px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-purple-600 bg-white"
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
                <label htmlFor="service">Service Required</label>
                <select
                  {...register("service", { required: true })}
                  id="service"
                  className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-purple-600 outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="social-media-marketing">Social Media Marketing</option>
                  <option value="search-engine-optimization">Search Engine Optimization</option>
                  <option value="search-engine-marketing">Search Engine Marketing</option>
                  <option value="other">Other</option>
                </select>
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
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F8F8FE] border-b border-purple-100 mt-20 md:mt-0">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-purple-100">
        <Footer />
      </section>
    </div>
  );
};

export default Hireus;
