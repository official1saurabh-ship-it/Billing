import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const TermsOfServicePage = () => {
    return (
        <PolicyLayout title="Terms of Service">
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and BillingMitra ("we," "us" or "our"), concerning your access to and use of our website and services.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
                <p>Unless otherwise indicated, the Services and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Services (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. User Representations</h2>
                <p>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Prohibited Activities</h2>
                <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            </section>
        </PolicyLayout>
    );
};

export default TermsOfServicePage;
