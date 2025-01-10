
import { Helmet } from "react-helmet";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Onkar Digital Services</title>
        <meta
          name="description"
          content="Terms of Service for Onkar Digital Services. Read our terms and conditions for digital marketing services."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using the services provided by Onkar Digital Services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Services Description</h2>
            <p className="text-gray-700">
              Onkar Digital Services provides digital marketing services including but not limited to SEO, social media marketing, content creation, and web development. The specific scope of services will be detailed in individual service agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Payment Terms</h2>
            <p className="text-gray-700">
              Payment terms and conditions will be specified in the service agreement. All fees are non-refundable unless otherwise stated in writing. Late payments may result in service suspension.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Client Responsibilities</h2>
            <p className="text-gray-700">
              Clients are responsible for providing necessary materials, feedback, and access required for service delivery in a timely manner. Delays from the client's side may affect project timelines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
            <p className="text-gray-700">
              All intellectual property rights in the deliverables will transfer to the client upon full payment. Onkar Digital Services retains the right to use non-confidential work in its portfolio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Confidentiality</h2>
            <p className="text-gray-700">
              We maintain strict confidentiality of client information and project details. Neither party shall disclose confidential information without prior written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              Onkar Digital Services shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mt-8 pt-8 border-t">
            <p className="text-gray-600 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              For questions about these terms, please contact us at onkardigitalservices@gmail.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService; 