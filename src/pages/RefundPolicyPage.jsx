import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const RefundPolicyPage = () => {
    return (
        <PolicyLayout title="Refund Policy">
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. General Policy</h2>
                <p>We want you to be satisfied with our services. If you are not entirely happy with your purchase, we're here to help.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Subscription Refunds</h2>
                <p>BillingMitra offers a free trial for all our Pro and Business plans. We encourage you to use the free trial to ensure the service meets your needs before subscribing.</p>
                <p className="mt-2">Refunds for monthly or annual subscriptions are generally not provided once the service has been used. However, we may consider refunds in exceptional circumstances, such as technical issues that we are unable to resolve.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Cancellation</h2>
                <p>You can cancel your subscription at any time. Upon cancellation, you will continue to have access to the service until the end of your current billing period.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
                <p>If you have any questions about our Refund Policy, please contact us at support@billingmitra.com.</p>
            </section>
        </PolicyLayout>
    );
};

export default RefundPolicyPage;
