import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const PrivacyPolicyPage = () => {
    return (
        <PolicyLayout title="Privacy Policy">
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>Welcome to BillingMitra. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@billingmitra.com.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Name and Contact Data</li>
                    <li>Credentials</li>
                    <li>Payment Data</li>
                    <li>Business Information (GSTIN, Inventory, etc.)</li>
                </ul>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
            </section>
        </PolicyLayout>
    );
};

export default PrivacyPolicyPage;
