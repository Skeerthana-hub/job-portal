import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react"; 

const jobs = {
  "realestate-sales": [
    {
      id: 1,
      title: "Director of Real Estate Sales - My Elegant Group",
      location: "Hyderabad",
      pay: "₹100,000.00 - ₹200,000.00 per month",
      type: "Full time",
      image: "/jobs/sale1.webp",
      description: `The Director of Real Estate Sales will lead and oversee the entire sales strategy...`,
      fullDetails: `Director of Real Estate Sales

Location: My Elegant Group, HITEC City, Hyderabad, Telangana

6 Working days from Wednesday to Monday

Role Overview:
The Director of Real Estate Sales will lead and oversee the entire sales strategy, ensuring alignment with company objectives and driving revenue growth. This role requires a strong leader with strategic planning and decision-making abilities to achieve long-term business goals. The ideal candidate will effectively manage a network of channel partners and drive consistent sales performance.

Key Responsibilities:
• Sales Strategy Development
• Leadership and Guidance
• Market Analysis
• Stakeholder Engagement
• Weekly Meetings
• Channel Partner Management
• Sales Targets
• Collaboration with Management
• Performance Reporting

Qualifications:
• Bachelor’s/Master’s in Business, Real Estate, or related
• 10+ years of leadership in real estate sales
• Proven track record
• Excellent communication & negotiation

Contact:
Vikrant Rathod
8143895688 | vikrant@myelegantgroup.com

Job Type: Full-time, Freelance
Contract: 18 months
Benefits: Commuter assist, food
Schedule: Day & morning shift, weekends
Pay: ₹100,000.00 - ₹200,000.00
Extras: Commission, bonus, performance
Experience: 9 yrs total, 5 yrs real estate
Location: In person`,
    },
    {
      id: 2,
      title: "Associate Director / GM / Channel Partner - TIRUMALA REALITY",
      location: "Tirupati",
      pay: "₹100,000",
      type: "Fulltime",
      image: "/jobs/sale2.webp",
      description: "Lead the team to drive real estate sales and partnerships.",
      fullDetails: `Associate Director / GM / Channel Partner - TIRUMALA REALITY

📍 Location: Tirupati

🕒 Work Type: Full-Time

💼 Role Overview:
We are seeking a dynamic and result-oriented Associate Director / GM / Channel Partner to drive real estate sales operations in Tirupati. You will lead sales planning, partnerships, and team coordination.

📌 Key Responsibilities:
• Build, manage, and grow a high-performing sales team
• Develop and implement sales and partner outreach strategies
• Identify new channel partners and develop long-term relationships
• Monitor sales KPIs and report weekly to senior management
• Collaborate with developers and marketing team
• Conduct regular meetings with sales teams and partners

✅ Requirements:
• 5+ years of experience in a leadership role in real estate or related industry
• Excellent leadership and interpersonal skills
• Strong knowledge of Tirupati real estate market
• Graduation mandatory, MBA preferred

🎯 What We Offer:
• Fixed salary with attractive performance bonuses
• Incentives for channel partner performance
• Leadership growth in a fast-scaling company

📞 Contact:
TIRUMALA REALITY
Email: hr@tirumalarealty.com
Phone: +91 9876543210`,
    },
    {
      id: 3,
      title: "Real Estate Sales Executive - TIRUMALA REALITY",
      location: "Tirupati",
      pay: "₹50,000 to 1,00,000",
      type: "Fulltime",
      image: "/jobs/sale3.webp",
      description: "Execute field sales, follow leads, and close deals.",
      fullDetails: `Real Estate Sales Executive - TIRUMALA REALITY

📌 Key Responsibilities:
• Engage with potential customers through site visits, calls, and meetings
• Understand customer requirements and suggest suitable properties
• Build and maintain a strong sales pipeline
• Coordinate with builders and developers to source inventory
• Manage post-sales services including documentation and client support
• Follow up on leads and ensure timely closures
• Participate in promotional and marketing activities/events

✅ Key Requirements:
• 0–5 years of experience (freshers welcome)
• Strong communication and interpersonal skills
• Good understanding of local property markets
• Travel locally for site visits
• Graduation preferred, MBA a plus

💼 What We Offer:
• Attractive incentives on each sale
• Flexible work and growth opportunities
• Ongoing training & development
• Reputed developers and luxury projects

📍 Work Type: Full-Time Field Role (Local Travel Required)`,
    },
  ],
  "channel-partner": [
    {
      id: 1,
      title: "Real Estate Channel Partner - My Elegant Group",
      location: "Hyderabad",
      pay: "Commission Based + Performance Pay + Maintenance Support",
      type: "Full time, part time",
      image: "/jobs/sale1.webp",
      description: "Join as a channel partner to earn commission and grow your network.",
      fullDetails: `Real Estate Channel Partner - My Elegant Group

📍 Location: Hyderabad

🕒 Type: Full time, part time

💼 Description:
We are looking for experienced or aspiring real estate professionals to join our channel partner program. You'll have access to premium property listings, developer support, and ongoing training.

📌 Responsibilities:
• Promote luxury residential/commercial projects
• Close deals and manage client expectations
• Coordinate with internal sales & legal teams

✅ Benefits:
• Commission based + incentives
• Maintenance support for channel
• Weekly payouts and recognition

📞 Contact:
Email: hr@myelegantgroup.com
Phone: +91 8123456789`,
    },
  ],
  accounting: [
    {
      id: 1,
      title: "Accountant - Urban Nest Properties",
      location: "Bangalore",
      pay: "₹30,000 to ₹50,000",
      type: "Full time",
      image: "/jobs/sale4.webp",
      description: "Manage financial records, reconciliation, and tax compliance for a growing real estate firm.",
      fullDetails: `Accountant - Urban Nest Properties

📍 Location: Bangalore, Karnataka

🕒 Job Type: Full-time

💼 Responsibilities:
• Maintain accounting records using Tally/Zoho
• Reconcile bank statements and vendor payments
• Handle GST filing, TDS, and IT returns
• Prepare monthly financial reports and MIS
• Assist in annual audits and compliance

✅ Requirements:
• B.Com/M.Com/CA Inter
• 1–3 years experience in real estate accounting
• Knowledge of Tally ERP, GST, and Excel
• Strong attention to detail

🎯 Perks:
• Fixed salary + incentives
• Flexible office timings
• Performance bonus

📧 Contact:
careers@urbannest.com`,
    },
  ],
  "crm-executive": [
  {
    id: 1,
    title: "CRM Executive - Skyline Properties",
    location: "Pune",
    pay: "₹30,000 - ₹45,000",
    type: "Full Time",
    image: "/jobs/sale2.webp", // sample image
    description: "Manage client relationships, coordinate post-sales, and handle documentation in real estate.",
    fullDetails: `CRM Executive - Skyline Properties

📍 Location: Pune, Maharashtra
🕒 Job Type: Full-time

💼 Overview:
We are seeking a proactive and detail-oriented CRM Executive to join our real estate team. The role involves maintaining strong client relationships, coordinating post-sales documentation, and providing exceptional customer support.

📌 Responsibilities:
• Manage customer interactions post-sale
• Track payment schedules and updates
• Coordinate with legal, sales, and accounts teams
• Handle document handovers and possession scheduling
• Update CRM software and maintain clean data

✅ Requirements:
• Bachelor's degree (Any field)
• 1–2 years experience in real estate CRM preferred
• Excellent communication and organization skills
• Familiarity with CRM tools like Zoho or Salesforce

🎯 Benefits:
• Bonus on client satisfaction ratings
• Performance-linked incentives
• Travel + communication allowance

📧 Contact:
Email: crm@skylineproperties.in
Phone: +91 9876543210`,
  }
],
"digital-marketing": [
  {
    id: 1,
    title: "Digital Marketing Executive - PropZone Realty",
    location: "Chennai",
    pay: "₹35,000 - ₹50,000",
    type: "Full time",
    image: "/jobs/sale3.webp", // ✅ use existing image
    description:
      "Manage digital campaigns, SEO, social media, and lead generation strategies for real estate marketing.",
    fullDetails: `Digital Marketing Executive - PropZone Realty

📍 Location: Chennai, Tamil Nadu  
🕒 Job Type: Full-time

💼 Overview:
Join our marketing team to build digital strategies that generate real estate leads and grow brand visibility across all platforms.

📌 Responsibilities:
• Plan and execute paid marketing campaigns (Google Ads, Meta Ads)  
• Optimize SEO for website and property listings  
• Manage social media presence and content calendar  
• Design basic creatives using Canva or Adobe tools  
• Generate weekly performance reports using analytics tools  
• Collaborate with sales and CRM for campaign follow-up

✅ Requirements:
• 1–3 years experience in digital marketing  
• Real estate industry exposure is a plus  
• Knowledge of SEO, SEM, email, social & content marketing  
• Tools: Google Analytics, Meta Business, Mailchimp, Canva  

🎯 Benefits:
• Performance-based incentives  
• Paid certifications and training access  
• Career growth in property tech marketing  

📧 Contact:  
Email: digital@propzonerealty.com  
Phone: +91 9123454321`
  }
],
"hr-operations": [
  {
    id: 1,
    title: "HR & Operations Manager - RealEstateX Group",
    location: "Hyderabad",
    pay: "₹45,000 - ₹60,000",
    type: "Full time",
    image: "/jobs/sale1.webp", // ✅ Use existing image
    description:
      "Oversee HR activities, coordinate operations, and support real estate team goals with leadership skills.",
    fullDetails: `HR & Operations Manager - RealEstateX Group

📍 Location: Hyderabad, Telangana  
🕒 Job Type: Full-time  

💼 Overview:  
We are looking for a dedicated HR & Operations Manager to oversee employee engagement, hiring, and administrative operations for our real estate company.  

📌 Key Responsibilities:
• Manage end-to-end recruitment process  
• Maintain employee records and payroll coordination  
• Ensure timely onboarding and exit processes  
• Support day-to-day office administration  
• Handle compliance and HR documentation  
• Coordinate team events and meetings  
• Manage vendor relationships and facility needs  

✅ Requirements:
• Graduate in HR/Management (MBA preferred)  
• 3–5 years experience in HR/Operations  
• Familiarity with labor laws & HRMS software  
• Strong communication and problem-solving skills  

🎯 Perks:
• Health insurance  
• Travel allowance  
• Festival bonuses and annual appraisals  

📧 Contact:
Email: hr@realestatexgroup.com  
Phone: +91 9876543210`
  }
],
telecaller: [
  {
    id: 1,
    title: "Telecaller - Realty Connect Services",
    location: "Tirupati",
    pay: "₹18,000 - ₹25,000 + Incentives",
    type: "Full time",
    image: "/jobs/sale4.webp", // ✅ Sample image
    description:
      "Make outbound calls to prospects, explain property listings, and generate site visit leads.",
    fullDetails: `Telecaller - Realty Connect Services

📍 Location: Tirupati, Andhra Pradesh  
🕒 Job Type: Full-time (6 days/week)  

💼 Overview:  
We are hiring enthusiastic telecallers to reach out to potential buyers, promote real estate projects, and fix appointments for site visits.

📌 Key Responsibilities:
• Make daily outbound calls from the lead database  
• Understand customer needs and recommend suitable properties  
• Book appointments for sales representatives  
• Maintain follow-up schedules with clients  
• Log daily call details into CRM  

✅ Skills Required:
• Good verbal communication in Telugu & Hindi/English  
• Prior experience in real estate calling is a plus  
• Basic computer & CRM handling knowledge  
• Patience, persuasion & consistency

🎯 Benefits:
• Fixed salary + weekly incentives for conversions  
• Training & mentoring support  
• Fast promotion track for high performers  

📧 Contact:
Email: careers@realtyconnect.in  
Phone: +91 9845123456`
  }
],
"web-development": [
  {
    id: 1,
    title: "React Developer - BuildNest Technologies",
    location: "Remote / Hyderabad",
    pay: "₹40,000 - ₹60,000",
    type: "Full time",
    image: "/jobs/sale2.webp", // ✅ sample image
    description:
      "Build responsive real estate dashboards and portals using React.js, Tailwind CSS, and REST APIs.",
    fullDetails: `React Developer - BuildNest Technologies

📍 Location: Remote / Hyderabad  
🕒 Job Type: Full-time  

💼 Overview:  
We're seeking a skilled React.js Developer to work on real estate web platforms with a focus on UI performance and modern design systems.

📌 Responsibilities:
• Develop dynamic and responsive web interfaces  
• Integrate RESTful APIs and backend services  
• Maintain clean, scalable code using React, Tailwind, and Vite  
• Collaborate with UI/UX and backend teams  
• Write reusable components and optimize performance  

✅ Requirements:
• 1–3 years experience with React.js  
• Strong understanding of Tailwind CSS & modern JS  
• Familiarity with Git, REST APIs, Vite/CRA  
• Bonus: experience in real estate or dashboard apps  

🎯 Benefits:
• Flexible work hours  
• Weekly code reviews and mentorship  
• Bonus for on-time delivery  
• Learning budget + career growth  

📧 Contact:
Email: techcareers@buildnest.io  
Phone: +91 9911223344`
  }
]
};

const CategoryJobs = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const listings = jobs[category] || [];

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-grey-800 mb-10 text-center capitalize">
        Jobs for {category.replace("-", " ")}
      </h2>
       {listings.length === 0 ?

      (
        <p className="text-center text-gray-500">No jobs found in this category.</p>
      ) : (
        <div className="space-y-10">
          {listings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border border-gray-200"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full md:w-1/3 h-64 object-contain bg-white"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-blue-600">
                    <span>🕒 {job.type}</span>
                    <span>📍 {job.location}</span>
                    <span>💰 {job.pay}</span>
                  </div>
                  <p className="text-gray-600 mt-2 line-clamp-3">{job.description}</p>
                </div>
                <div className="mt-4">
                  <button
                    className="bg-blue-700 text-white py-2 px-4 rounded-lg"
                    onClick={() => navigate(`/jobs/${category}/${job.id}`, { state: job })}
                  >
                    View Details
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default CategoryJobs;
