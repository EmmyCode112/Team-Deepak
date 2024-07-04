import Service1 from './service-01.png'
import Service2 from './service-02.png'
import Service3 from './service-03.png'

import course1 from './course-01.jpg'
import course2 from './course-02.jpg'
import course3 from './course-03.jpg'
import course4 from './course-04.jpg'
import course5 from './course-05.jpg'
import course6 from './course-06.jpg'

import member1 from './member1.jpg'
import member2 from './member.jpg'
import member3 from './member-03.jpg'
import member4 from './member-04.jpg'

export const sevices = [
    {
        image : Service1,
        service : 'Master In-Demand Skills',
        detail : "Learn Social Media Marketing, Email Marketing, SEO, WhatApp Marketing, and Content Marketing from a global team of experts. Our affordable, one-time fee courses equip you for success.",
        btn : 'See More',
    },
    {
        image : Service2,
        service : ' Charity Through Education',
        detail : "Every enrollment supports a worthy cause focused on education and empowerment. Invest in yourself while giving back to the community.",
        btn : 'See More',
    },
    {
        image : Service3,
        service : 'Lifetime Learning',
        detail : "Once enrolled, you have lifetime access to the course materials. Learn at your own pace, revisit concepts, and solidify your digital marketing foundation.",
        btn : 'See More',
    },
]

export const accordion = [
    {
        firstLine : 'Is there any ongoing support after completing the course?',
        accordionItem : "We offer email support to answer any questions you may have after completing the course. While in-depth assistance may be limited, we're here to help"
    },
    {
        firstLine : 'Is there a monthly fee after the one-time commitment?',
        accordionItem : "Absolutely not. Our courses are designed for accessibility. You pay only once and get lifetime access to the materials."
    },
    {
        firstLine : 'Are these beginner-friendly courses?',
        accordionItem : "Yes! Our courses are crafted to cater to various knowledge levels. We'll take you from the basics to practical application."
    },
    {
        firstLine : 'Will I receive a certificate upon completion?',
        accordionItem : "No, you will not receive a certificate of completion for each course you finish."
    },
    {
        firstLine : 'How long do I have access to the course materials?',
        accordionItem : "Once enrolled, you'll enjoy lifetime access to the course content, allowing you to revisit and refresh your knowledge anytime."
    }
]

export const courses = [
    {
        id : 1,
        image : course1,
        teacher : 'Digital Deepak',
        courseName : 'Content Marketing',
        category: 'Marketing',
        price: 2000,
        btn : 'Add to cart',
        detailHead: 'Write Your Way to Riches (Well, Maybe Not Riches, But Definitely More Leads!) ',
        details : 'Content is king, but how do you create content that actually converts? Learn the secrets to crafting compelling content that keeps readers glued and begging for more.',
        courseDetail : "Introduction to Content Marketing, What to Expect, Mapping Your Customer Journey, CMM_Mapping Your Customer Journey, Different Variations of Content, Different Formats of Content, Content Repurposing, Content Distribution - Search Engine Optimization, Facebook Marketing."
    },
    {
        id : 2,
        image : course2,
        teacher : 'Digital Deepak',
        courseName : 'Social Media Marketing',
        category: 'Marketing',
        price: 3000,
        btn : 'Add to cart',
        detailHead: 'Go Viral or Go Home.',
        details : ' Master the art of social media domination. Learn to build a raving fan base, craft killer content, and become a social media rockstar.',
        courseDetail : "Introduction to Social Media Mastery, Choosing The Right Social Media Platform For Your Business, Providing Customer Service On Social Media, Facebook Marketing Best Practices And Walkthrough,Facebook Page Insights Walkthrough, LinkedIn Company Page Analytics Walkthrough, 10 Social Media Metrics You Must Measure, LinkedIn Marketing Best Practices and Examples, 9 Must Have Social Media Tools, Twitter Analytics Walkthrough, Building Social Media Landing Pages Which Convert, Pinterest Marketing - Best Practices & Walkthrough, Social Media And Google Analytics Integration, Twitter Marketing - Best Practices & Examples, YouTube Marketing, YouTube Analytics Walkthrough "
    },
    {
        id : 3,
        image : course3,
        teacher : 'Digital Deepak',
        courseName : 'Email Marketing',
        category: 'Marketing',
        price: 3500,
        btn : 'Add to cart',
        detailHead: 'Turn Clicks into Customers.',
        details : ' Email Marketing is dead? Not a chance! Discover the secrets to crafting captivating emails that drive sales and skyrocket engagement.',
        courseDetail : "Introduction to Email Marketing Course, How to Build Your Email List, Collecting Leads via Landing Pages, How to Track Subscriber Activity in Your CRM, How to Trigger SMS via Indian SMS Gateway, How to Create Facebook Lead Ads for Lead Generation, How to Create Email Workflows with Decision Trees, How to Send Emails Using Amazon SES, How to Send Emails via Mail Merge using Gmail & Yesware, What is Integrated Digital Marketing, how to Drive Quality Traffic to Your Website, A Tour of Drip Email Marketing Tool, $2,446.53 (₹2,04,460) on a Single Day with Email Marketing, How to Setup Behavior Based Email Triggers, Email Workflows for OptinChat SaaS Product, Behavior-Based Sales Automation, [Case Study] 7,586 FREE Leads with a Viral Marketing Campaign"
    },

    {
        id : 4,
        image : course4,
        teacher : 'Digital Deepak',
        courseName : 'Search Engine Optimization (SEO)',
        category: 'Marketing',
        price: 4000,
        btn : 'Add to cart',
        detailHead: 'Become a Search Engine Magnet.',
        details : ' Unlock the secrets of Google and dominate search results. Learn how to make any website the ultimate traffic magnet, equipped to crush the competition.',
        courseDetail: "Introduction to On-Page SEO, Adding a Website Inside the Search Console, Setting Up the Preferred Website Version, Fetch as Google for Quick Indexing, Security and Malware Prevention for Good SEO, Search Analytics and Keyword Analysis, Crawl Data, Sitemaps, and URL Parameters, Other Resources in Search Console, Page Load Speed, Title, Meta Description & URL, Ideal Content-Length for Good SEO, Search Engine & User-Friendly Content"
    },
    {
        id : 5,
        image : course5,
        teacher : 'Sam Harvard',
        courseName : 'Google Analytics ',
        category: 'Marketing',
        price: 3000,
        btn : 'Add to cart',
        details : 'Unlock Google Analytics mastery. Discover hidden data, gain powerful insights, and boost any business strategy. Enroll now to become an analytical boss.',
        courseDetail: "Introduction to Analytics Mastery, How to Create an Analytics Code and Install on Your Site, How to Setup IP Filters in Your Account, A General Tour of Google Analytics, How to Create Custom Dashboards and Reports, Building Links with UTM Parameters, Real-Time Reports Explained in Detail, udience Reports- Overview & Active Users, Audience Reports- Lifetime Value Report, Audience- Cohort Analysis, Audiences Report for Paid Ads, User Explorer, Demographics & Geo Reports, Frequency, Recency, and Engagement Reports, Technology Reports, Acquisition Reports"
        
    },

]

export const team = [
    {
        id: 1,
        image: member1,
        work: 'Digital Marketer',
        Name: 'Sam Harvard',
        media1: 'fab fa-facebook',
        media2: 'fab fa-twitter',
        media3: 'fab fa-linkedin',
    },
    {
        id: 2,
        image: member2,
        work: 'Digital Marketer',
        Name: 'Deepak Kanakaraju',
        media1: 'fab fa-facebook', 
        media2: 'fab fa-twitter',
        media3: 'fab fa-linkedin',
    },
    {
        id: 3,
        image: member3,
        work: 'SEO Specialist',
        Name: 'David Hutson',
        media1: 'fab fa-facebook',
        media2: 'fab fa-twitter',
        media3: 'fab fa-linkedin',
    },
    {
        id: 4,
        image: member4,
        work: 'Email Marketer',
        Name: 'Stella Blair',
        media1: 'fab fa-facebook',
        media2: 'fab fa-twitter',
        media3: 'fab fa-linkedin',
    },
];


