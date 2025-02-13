import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Onkar Digital Services</title>
        <meta
          name="description"
          content="Privacy Policy for Onkar Digital Services. Learn how we collect, use, and protect your information."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect personal information that you provide to us directly, such as your name, email address, and any other information you choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell or rent your personal information to third parties. We may share your information with trusted partners to help us operate our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p className="text-gray-700">
              We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal information. You can also object to or restrict the processing of your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
            </p>
          </section>

          <section className="mt-8 pt-8 border-t">
            <p className="text-gray-600 text-sm">
              Effective date: 01-Jan-2025
            </p>
            <p className="text-gray-600 text-sm mt-2">
              For questions about this privacy policy, please contact us at onkardigitalservices@gmail.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 