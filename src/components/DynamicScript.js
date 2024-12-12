// components/DynamicScript.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DynamicScript = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set to true once the component is mounted on the client side
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Return nothing before mounting
    }

    let scriptContent = null;

    if (pathname === "/services/digital-marketing") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital marketing is the practice of promoting products or services through online channels such as search engines, social media, email, and websites. It involves various strategies like SEO, PPC, content marketing, and social media marketing to reach and engage with your target audience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to see results from digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The timeframe for seeing results from digital marketing varies depending on several factors, including your industry, competition, and the specific strategies implemented. While some campaigns may yield quick results, others may take several months to show significant impact. Consistency and patience are key in digital marketing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does digital marketing cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of digital marketing can vary widely depending on your budget, goals, and the scope of your campaign. Factors such as the size of your business, your target audience, and the specific strategies you choose will influence the overall cost. It's important to discuss your budget with your digital marketing agency or consultant to determine a suitable plan."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between SEO and PPC?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SEO (Search Engine Optimization): This involves optimizing your website's content and structure to improve its ranking in search engine results pages (SERPs) organically. It is a long-term strategy that can take time to yield results. PPC (Pay-Per-Click): This involves paying for ads to appear at the top of search engine results pages or on social media platforms. It provides immediate visibility but requires ongoing investment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I measure the success of my digital marketing campaigns?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are various metrics to track the success of your digital marketing campaigns, including: Website Traffic, Conversion Rates, Social Media Engagement, Return on Investment (ROI), Brand Awareness. By tracking these metrics, you can assess the effectiveness of your campaigns and make data-driven decisions to improve your digital marketing strategy."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/web-development") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the website development services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Web development encompasses a wide range of services, from creating the visual interface and user experience of a website (front-end development) to building server-side functionality and database interactions (back-end development). We also offer full-stack development, which combines both front-end and back-end development. Additionally, we specialize in custom web development, e-commerce development, CMS development, and PWA development."
                    }
                }, {
                    "@type": "Question",
                    "name": "How much does website development cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of website development can vary significantly depending on several factors. Websites with simple designs and basic features are generally less expensive than complex ones with advanced features and integrations. The time required to create the design and code can also impact the cost. It's best to get quotes from multiple developers to compare pricing and services."
                    }
                }, {
                    "@type": "Question",
                    "name": "Who needs web development services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Businesses of all sizes can benefit from web development services. A website is essential for establishing an online presence, building and promoting your brand identity, providing information and services to customers, generating leads, driving sales, and implementing digital marketing strategies."
                    }
                }, {
                    "@type": "Question",
                    "name": "Will I lose Google ranking if I redevelop my website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While redeveloping a website can potentially impact your Google ranking, it doesn't have to be a negative experience. By carefully planning and executing the redevelopment process, you can minimize any potential ranking loss. Factors to consider include maintaining content consistency, redirecting old URLs to the corresponding new pages, optimizing the new website for search engines, and ensuring it's mobile-friendly."
                    }
                }, {
                    "@type": "Question",
                    "name": "Which tool is best for web development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best tool for web development depends on your specific needs and preferences. Some popular options include code editors like Visual Studio Code, Sublime Text, and Atom, integrated development environments (IDEs) like PhpStorm, WebStorm, and Eclipse, content management systems (CMS) like WordPress, Drupal, and Joomla, and frameworks like React, Angular, Vue.js, Django, and Laravel."
                    }
                }, {
                    "@type": "Question",
                    "name": "What are the 4 principles of web development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While there are many principles of web development, four key ones are accessibility, performance, security, and user experience. Accessibility ensures that your website is usable by people with disabilities. Performance refers to optimizing your website for fast loading times and responsiveness. Security involves protecting your website and user data from threats. User experience focuses on creating a website that is easy to navigate and enjoyable to use."
                    }
                }, {
                    "@type": "Question",
                    "name": "What kind of website do you create?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We can create a wide variety of websites, including corporate websites, e-commerce websites, portfolio websites, blog websites, and landing pages."
                    }
                }, {
                    "@type": "Question",
                    "name": "I am not sure of my website requirements. Can you help?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! We can help you define your website requirements through a consultation process. We'll discuss your goals, target audience, and desired features to create a tailored website solution."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/hubspot-development") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What exactly is HubSpot used for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "HubSpot is a comprehensive CRM and marketing platform that offers a wide range of tools to help businesses attract, engage, and delight customers. It can be used for various purposes, including marketing automation, customer relationship management (CRM), website development, content management, and analytics."
                    }
                }, {
                    "@type": "Question",
                    "name": "How much does HubSpot Development cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of HubSpot development varies depending on the specific services you require and the complexity of your project. Factors that can influence the cost include the scope of the project, your existing website or CRM, and your business goals. It's best to contact WebGuruz for a personalized quote based on your specific requirements."
                    }
                }, {
                    "@type": "Question",
                    "name": "What does a HubSpot Developer do?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A HubSpot developer is responsible for implementing and customizing HubSpot solutions to meet your business needs. They typically have expertise in HubSpot's API and integrations, CMS and website development, CRM and marketing automation tools, and custom module development. A HubSpot developer will work closely with you to understand your goals and create a tailored solution that drives results."
                    }
                }, {
                    "@type": "Question",
                    "name": "How are HubSpot Development Services at WebGuruz better?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WebGuruz offers several advantages when it comes to HubSpot development services, including a proven track record of successful projects, an experienced team of developers, customized solutions tailored to your specific needs, excellent customer support, and competitive pricing."
                    }
                }, {
                    "@type": "Question",
                    "name": "Will I need HubSpot Development if I am migrating my website to HubSpot?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you will likely need HubSpot development services if you are migrating your website to HubSpot. While HubSpot offers a user-friendly interface, migrating your existing website and data may require technical expertise. A HubSpot developer can help you migrate your website content and design, migrate your existing customer data to HubSpot's CRM, configure HubSpot's marketing automation tools, and customize your HubSpot website to meet your specific needs. By working with a HubSpot developer, you can ensure a smooth and efficient migration process and maximize the benefits of HubSpot for your business."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/pay-per-click-management") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the full form of PPC?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "PPC stands for \"Pay-Per-Click,\" a digital marketing model where advertisers pay each time a user clicks on their ads."
                    }
                }, {
                    "@type": "Question",
                    "name": "What are paid advertising services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paid advertising services involve creating and managing ad campaigns across various platforms to promote products or services, driving targeted traffic and generating leads."
                    }
                }, {
                    "@type": "Question",
                    "name": "How much do paid ads cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of paid ads varies based on factors like the platform, targeting options, and competition. Typically, businesses set a budget that aligns with their marketing goals and monitor performance to optimize spending."
                    }
                }, {
                    "@type": "Question",
                    "name": "What is paid advertising on social media?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paid advertising on social media involves creating sponsored posts or ads on platforms like Facebook, Instagram, and LinkedIn to reach specific audiences and drive engagement or conversions."
                    }
                }, {
                    "@type": "Question",
                    "name": "Why use paid ads?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paid ads provide immediate visibility, allow for precise targeting, and are measurable, helping businesses achieve their marketing objectives quickly and effectively."
                    }
                }, {
                    "@type": "Question",
                    "name": "What paid marketing strategies do you use?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We utilize a mix of strategies including keyword targeting, audience segmentation, retargeting, A/B testing, and continuous optimization to maximize campaign performance."
                    }
                }, {
                    "@type": "Question",
                    "name": "Which metrics do you track to measure the success of paid advertising campaigns?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We track key metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and overall ROI to evaluate campaign effectiveness."
                    }
                }, {
                    "@type": "Question",
                    "name": "What are the benefits of working with WebGuruz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Partnering with WebGuruz gives you access to a team of experts, tailored strategies, transparent reporting, and ongoing support to ensure your PPC campaigns are successful."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/search-engine-optimization") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "How much does it cost for SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO pricing varies depending on the scope of your project, the level of competition in your industry, and the specific services required. At WebGuruz, we offer flexible pricing plans tailored to your needs. Whether you're a small business or an enterprise, we have solutions that fit every budget. For a more accurate estimate, feel free to reach out for a consultation, and we'll provide you with a detailed breakdown of costs."
                }
            }, {
                "@type": "Question",
                "name": "What is SEO and its purpose?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO, or Search Engine Optimization, refers to the practice of optimizing your website to improve its visibility in search engine results. The primary purpose of SEO is to increase organic traffic by ranking higher for relevant keywords, which ultimately leads to more website visitors, higher conversions, and increased revenue. It’s a long-term investment in your business's online presence."
                }
            }, {
                "@type": "Question",
                "name": "Is SEO a marketing service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, SEO is an essential part of digital marketing. It involves improving your website's visibility in search engines like Google and Bing, which helps attract potential customers who are actively searching for your products or services. By integrating SEO into your marketing strategy, you can enhance your brand's online presence and reach a wider audience."
                }
            }, {
                "@type": "Question",
                "name": "What is the difference between SEO and online marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a specific aspect of online marketing focused on improving organic search engine rankings. Online marketing, on the other hand, encompasses a broad range of tactics, including SEO, social media marketing, content marketing, paid advertising (PPC), and email marketing. SEO is just one of many tools used in a comprehensive digital marketing strategy."
                }
            }, {
                "@type": "Question",
                "name": "Which is better: Google Ads or SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both Google Ads (PPC) and SEO have their unique advantages. SEO focuses on long-term organic growth and provides lasting results, while Google Ads offers immediate visibility through paid search results. The best choice depends on your goals: SEO is ideal for sustained, long-term growth, while Google Ads can drive instant traffic. For most businesses, a combination of both strategies works best."
                }
            }]

        };
    }
    if (pathname === "/services/organic-seo") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What are organic SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Organic SEO services refer to optimizing your website using strategies like keyword targeting, content creation, and link building to increase your rankings on search engines without paid advertising."
                }
            }, {
                "@type": "Question",
                "name": "How much does organic SEO cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of organic SEO services can vary depending on the complexity of your project, the industry you're in, and the level of competition. At WebGuruz, we offer competitive pricing tailored to your needs."
                }
            }, {
                "@type": "Question",
                "name": "Is organic SEO better than paid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, organic SEO provides long-term results that grow over time, while paid advertising only works as long as you're paying for it. Organic traffic builds trust and drives sustainable growth."
                }
            }, {
                "@type": "Question",
                "name": "How long does organic SEO take to show results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It typically takes 4 to 6 months to see noticeable improvements in rankings, but organic SEO is a long-term strategy that delivers sustainable results over time."
                }
            }, {
                "@type": "Question",
                "name": "How can I increase my organic traffic SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on optimizing your content, targeting the right keywords, building backlinks, and ensuring your site is technically sound. Our organic SEO services can help you achieve these goals."
                }
            }, {
                "@type": "Question",
                "name": "Does organic search pay for clicks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, organic search results are free, and you don't pay for clicks. This is one of the key benefits of investing in organic SEO over paid advertising."
                }
            }, {
                "@type": "Question",
                "name": "How does organic SEO work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Organic SEO works by improving the relevance, structure, and authority of your website so that search engines rank it higher in results. It involves keyword research, on-page optimization, and building a strong backlink profile."
                }
            }]
        };
    }
    if (pathname === "/services/local-seo") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What are local SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Local SEO services focus on optimizing your online presence to attract more business from local searches. This includes managing Google My Business, building local citations, and optimizing your website with local keywords."
                }
            }, {
                "@type": "Question",
                "name": "How much do local SEO services cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of local SEO services varies depending on your business needs. A typical campaign can range from $300 to $2000 per month, depending on the level of service required."
                }
            }, {
                "@type": "Question",
                "name": "Is local SEO worth it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, local SEO is worth it. It increases your visibility to nearby customers, making it easier for them to find and engage with your business."
                }
            }, {
                "@type": "Question",
                "name": "Do I need a website for local SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While having a website isn’t mandatory for local SEO, it significantly improves your chances of ranking higher in search results and attracting more customers."
                }
            }, {
                "@type": "Question",
                "name": "Do backlinks help local SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, backlinks from local websites help improve your site’s authority and ranking in local search results."
                }
            }, {
                "@type": "Question",
                "name": "What is the best URL structure for local SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best URL structure for local SEO includes the business name, location, and target keyword. For example, www.businessname.com/city-service would be ideal."
                }
            }]

        };
    }
    if (pathname === "/services/technical-seo") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is technical SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO services focus on optimizing the backend structure of a website to make it easier for search engines to crawl, index, and rank. These services include tasks like improving website speed, mobile-friendliness, and fixing crawl errors."
                }
            }, {
                "@type": "Question",
                "name": "How much does technical SEO cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of technical SEO services varies depending on the scope of the project, the size of your website, and the specific requirements. Contact us for a detailed quote based on your unique needs."
                }
            }, {
                "@type": "Question",
                "name": "Is technical SEO hard?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO can be complex, requiring expertise in website structure, coding, and search engine algorithms. However, with the right team, like WebGuruz, it becomes a manageable and rewarding process."
                }
            }, {
                "@type": "Question",
                "name": "What are the types of technical SEO?Technical SEO covers several areas including site speed optimization, mobile optimization, site architecture, security (HTTPS), and structured data implementation.",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO covers several areas including site speed optimization, mobile optimization, site architecture, security (HTTPS), and structured data implementation."
                }
            }, {
                "@type": "Question",
                "name": "What is the difference between technical SEO and SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While general SEO focuses on optimizing content and keywords, Technical SEO ensures the website’s infrastructure is optimized for search engines to access and rank your content."
                }
            }, {
                "@type": "Question",
                "name": "What is the main objective of technical SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main goal of technical SEO is to enhance the technical elements of your website, making it easier for search engines to crawl, index, and rank, while improving user experience."
                }
            }, {
                "@type": "Question",
                "name": "How does technical SEO work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO works by optimizing your website’s structure, performance, and security. This makes it easier for search engines to access and index your site, ultimately improving your rankings."
                }
            }]
        };
    }
    if (pathname === "/seo-packages") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "How much does it cost to hire an SEO agency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of hiring an SEO agency varies based on the services provided, business size, and goals. At WebGuruz, we offer flexible packages that start with essential services for small businesses and scale up for larger enterprises with extensive SEO needs. Our goal is to provide an affordable solution without compromising quality or results."
                }
            }, {
                "@type": "Question",
                "name": "Is SEO a one-time cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, SEO is an ongoing process rather than a one-time cost. SEO requires continuous optimization to stay effective, as search engines frequently update their algorithms. Regular efforts ensure that your website remains competitive and visible over time."
                }
            }, {
                "@type": "Question",
                "name": "Why is SEO so expensive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO can be resource-intensive due to the need for skilled experts, quality content, and ongoing adjustments. However, it offers a high return on investment by driving organic, sustainable traffic and enhancing your brand’s credibility, making it a worthwhile investment."
                }
            }, {
                "@type": "Question",
                "name": "Can I do SEO myself?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While it’s possible to learn the basics of SEO, achieving significant results requires expertise, tools, and a time commitment. Working with SEO professionals lets you focus on your business while experts handle the technical aspects, increasing your chances of success."
                }
            }, {
                "@type": "Question",
                "name": "Is it worth it to hire someone for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Hiring an SEO professional provides you with advanced skills, insights, and tools that maximize your website’s performance. It’s an investment that can lead to higher rankings, increased traffic, and a better ROI in the long run."
                }
            }, {
                "@type": "Question",
                "name": "Do people pay for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, businesses across all industries pay for SEO services as they recognize the value of high search engine visibility in attracting and retaining customers."
                }
            }, {
                "@type": "Question",
                "name": "Which is better, PPC or SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both have their advantages. SEO builds long-term, sustainable traffic, while PPC provides immediate visibility. For maximum benefit, combining SEO and PPC often produces the best results."
                }
            }, {
                "@type": "Question",
                "name": "Is Google Ads better than SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Google Ads offers immediate visibility, while SEO takes time to build but provides sustained, long-term traffic. Both have a role in a comprehensive digital marketing strategy."
                }
            }, {
                "@type": "Question",
                "name": "Who needs SEO the most?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses that rely on online visibility, including e-commerce, professional services, and local businesses, benefit most from SEO as it drives targeted traffic and builds brand credibility."
                }
            }, {
                "@type": "Question",
                "name": "What type of SEO is best?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best SEO combines on-page, off-page, and technical elements. Each plays a vital role in creating a well-rounded strategy that improves your rankings and user experience."
                }
            }, {
                "@type": "Question",
                "name": "Which type of domain is best for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Domains with brandable names and .com extensions often perform well for SEO. However, using a keyword-relevant domain may help in niche industries where relevance is a priority."
                }
            }]

        };
    }
    if (pathname === "/services/content-management-system") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is CMS web development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CMS (Content Management System) web development involves creating websites using platforms that allow users to manage and update content without requiring extensive technical skills. With a CMS, you can easily add, edit, and organize text, images, videos, and other website elements through an intuitive interface. Popular CMS platforms like WordPress, Joomla, and Drupal provide flexibility, scalability, and customization options for a wide range of businesses. CMS web development is ideal for creating blogs, e-commerce stores, corporate websites, and more. It saves time and costs by empowering non-technical users to maintain their websites with minimal reliance on developers."
                }
            }, {
                "@type": "Question",
                "name": "Is CMS better than HTML?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CMS and HTML serve different purposes, so the choice depends on your needs. A CMS is better for most users as it offers a user-friendly interface, templates, and plugins, allowing you to create and manage websites without coding knowledge. In contrast, HTML is a markup language used to build websites from scratch, offering complete control but requiring technical expertise. CMS platforms are more efficient for managing dynamic content, while HTML is suitable for static, custom websites where performance and design precision are critical. For businesses needing scalability and easy updates, CMS is often the preferred choice."
                }
            }, {
                "@type": "Question",
                "name": "What does CMS stand for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CMS stands for Content Management System. It is software that enables users to create, edit, manage, and publish website content without requiring advanced technical skills. A CMS provides a user-friendly interface, tools for organizing content, and features for website customization, such as themes and plugins. Popular CMS platforms include WordPress, Joomla, Drupal, and Magento. They are used for various applications, from blogs and corporate websites to e-commerce platforms and forums. The primary benefit of a CMS is empowering users to manage website content efficiently, reducing reliance on web developers for day-to-day updates."
                }
            }, {
                "@type": "Question",
                "name": "Is WordPress a CMS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, WordPress is one of the most popular CMS platforms in the world. Originally designed for blogging, WordPress has evolved into a powerful CMS that supports websites of all types, including e-commerce stores, portfolios, corporate websites, and online forums. It is open-source, user-friendly, and highly customizable, offering thousands of themes and plugins to enhance functionality and design. WordPress is widely chosen because it balances simplicity for beginners and flexibility for advanced users, allowing businesses to create dynamic and feature-rich websites without extensive coding knowledge."
                }
            }, {
                "@type": "Question",
                "name": "What is a CMS example?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A great example of a CMS is WordPress, which powers over 40% of websites globally. Other notable examples include Joomla, Drupal, Shopify, and Magento. For instance, Shopify is ideal for e-commerce websites, while Drupal is preferred for complex, enterprise-level sites. These CMS platforms enable users to create, update, and manage website content using an intuitive interface. They offer a wide range of templates, plugins, and customization options to cater to different business needs. With a CMS, managing content, adding new pages, or integrating advanced features becomes simple and accessible, even for non-technical users."
                }
            }, {
                "@type": "Question",
                "name": "What are the types of CMS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are several types of CMS, including: Open- Source CMS(e.g., WordPress, Joomla, Drupal) – Free to use and highly customizable. Proprietary CMS(e.g., Shopify, Squarespace) – Paid platforms with built -in support and limited customization. Cloud - Based CMS(e.g., Wix, HubSpot) – Hosted on the cloud, offering ease of access and scalability.Headless CMS(e.g., Contentful, Strapi) – Focuses on delivering content via APIs to various front- end platforms. Each type caters to different needs, from blogs and e - commerce to enterprise - level systems, offering diverse features and benefits based on business requirements."
                }
            }, {
                "@type": "Question",
                "name": "What is the difference between CSS and CMS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CSS (Cascading Style Sheets) and CMS (Content Management System) are distinct tools in web development. CSS is a style sheet language used to control the layout, design, and visual appearance of a website, such as colors, fonts, and spacing. In contrast, a CMS is software that allows users to create, edit, and manage website content without coding. While CMS platforms like WordPress use CSS to style websites, they provide an interface that simplifies content management. CSS requires technical expertise, whereas a CMS enables non-technical users to update content easily while leveraging predefined CSS styles."
                }
            }]

        };
    }
    if (pathname === "/book-an-appointment") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What services do you offer under web development and digital marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide various services, including website design and development, e-commerce development, custom web applications, SEO, social media marketing, email marketing, PPC campaigns, content marketing, and marketing automation. Our solutions are tailored to meet your business goals."
                }
            }, {
                "@type": "Question",
                "name": "How do I schedule an appointment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scheduling an appointment is easy! Simply click this page's \"Book an Appointment\" button, choose your preferred date and time, and fill in your contact details. You’ll receive a confirmation email with all the necessary information."
                }
            }, {
                "@type": "Question",
                "name": "Can I get a free consultation before booking a paid service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a free initial consultation to understand your requirements and discuss how our services can help you achieve your goals. You can schedule a free consultation through this appointment page."
                }
            }, {
                "@type": "Question",
                "name": "How long does a typical consultation last?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A typical consultation lasts between 30 and 60 minutes, depending on the complexity of your project and the questions you have. We’ll ensure you get all the clarity needed before proceeding."
                }
            }, {
                "@type": "Question",
                "name": "What should I prepare before my appointment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To make the most of your appointment, have a clear idea of your business goals, target audience, current digital presence, and any specific requirements or challenges. Feel free to share any relevant documents or links in advance."
                }
            }, {
                "@type": "Question",
                "name": "Can I reschedule or cancel my appointment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can reschedule or cancel your appointment up to 24 hours in advance. Please refer to the confirmation email you received for the rescheduling or cancellation link. For last-minute changes, contact our support team."
                }
            }, {
                "@type": "Question",
                "name": "What happens after the consultation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After the consultation, we’ll provide you with a tailored proposal outlining the services, timelines, and costs. Once approved, we’ll kick-start the project with a detailed plan and regular updates to keep you in the loop."
                }
            }, {
                "@type": "Question",
                "name": "Do you offer ongoing support and maintenance for websites?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! We provide ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and optimized for performance. We can discuss this in detail during your consultation."
                }
            }]


        };
    }
    if (pathname === "/hubspot-consulting") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What does a HubSpot consultant do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A HubSpot consultant helps businesses optimize the platform by providing strategic guidance, technical support, and hands-on implementation tailored to their specific needs."
                }
            }, {
                "@type": "Question",
                "name": "What is HubSpot consulting?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot consulting services involve expert advice designed to help businesses utilize HubSpot's features effectively, from marketing automation to CRM management."
                }
            }, {
                "@type": "Question",
                "name": "Why should I get HubSpot consulting done?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Expert consultation ensures you’re using HubSpot efficiently, saving time, increasing ROI, and achieving business goals faster."
                }
            }, {
                "@type": "Question",
                "name": "How much does HubSpot consulting cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost varies based on your requirements and the complexity of your needs. Contact us for a tailored quote."
                }
            }, {
                "@type": "Question",
                "name": "Do you offer consulting services as per the HubSpot plans?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our consulting services are fully aligned with HubSpot’s plans and tailored to your subscription."
                }
            }, {
                "@type": "Question",
                "name": "What would I get from your HubSpot consulting services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You’ll receive comprehensive support, including technical assistance, strategy building, training, and performance audits."
                }
            }, {
                "@type": "Question",
                "name": "Why WebGuruz for HubSpot Consulting?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We combine experience, technical expertise, and a customer-first approach to deliver exceptional results with HubSpot."
                }
            }]
        };
    }
    if (pathname === "/hubspot-migration-services") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is HubSpot migration, and why is it important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot migration involves transferring data, workflows, and marketing assets from another platform to HubSpot. This process includes moving CRM records, contacts, emails, campaigns, and automation sequences. Migration is crucial because it ensures that your business continues to operate seamlessly on a more advanced, user-friendly platform like HubSpot. A successful migration allows you to leverage HubSpot’s comprehensive tools for marketing, sales, and customer service. Without proper migration, businesses risk data loss, broken workflows, and operational disruptions. At WebGuruz, we prioritize accuracy and efficiency to ensure a smooth transition that maximizes the benefits of HubSpot."
                }
            }, {
                "@type": "Question",
                "name": "How long does the HubSpot migration process take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot consulting services involves expert services designed to help businesses utilize HubSpot's features effectively, from marketing automation to CRM management."
                }
            }, {
                "@type": "Question",
                "name": "Why should I get HubSpot consulting done?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The duration of a HubSpot migration depends on factors like the volume of data, the complexity of workflows, and the specific systems involved. Simple migrations, such as transferring basic CRM data, can take a few days. However, complex migrations involving custom workflows, automation, and integrations can take several weeks. At WebGuruz, we provide a detailed timeline after assessing your specific needs. Our priority is to balance speed with accuracy, ensuring minimal downtime and a seamless transition."
                }
            }, {
                "@type": "Question",
                "name": "Will there be any data loss during migration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our meticulous approach ensures that data loss is minimal to non-existent. Before migration, we conduct a comprehensive data assessment to identify potential risks and develop strategies to mitigate them. During the migration process, we use secure extraction and import methods to preserve data integrity. Additionally, we perform extensive validation testing post-migration to confirm that all data has been accurately transferred. Our team also creates backups as a safety measure. While data loss is unlikely, our commitment to quality assurance provides peace of mind for our clients."
                }
            }, {
                "@type": "Question",
                "name": "Can you migrate custom workflows and automation to HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in migrating custom workflows and automation sequences to HubSpot. Our experts analyze your existing processes and map them to HubSpot’s features, ensuring they function as intended. We adapt and optimize workflows to take advantage of HubSpot’s capabilities, enhancing efficiency and performance. Whether you have simple automation tasks or complex multi-step workflows, our team ensures they are recreated and tested thoroughly in the new system. This ensures continuity and a smooth transition without interrupting your operations."
                }
            }, {
                "@type": "Question",
                "name": "What platforms can you migrate to HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer migration services from a variety of platforms, including Marketo, Salesforce, PipeDrive, WordPress, Wix, Zoho, Zendesk, Bitrix24, and more. Each migration is customized to fit the specific needs of the client. Whether it’s CRM data, marketing campaigns, website content, or customer support tools, our team ensures a comprehensive and accurate transfer. We also handle data formatting, field mapping, and system integrations to make sure your HubSpot environment is fully functional and optimized for your business."
                }
            }]

        };
    }
    if (pathname === "/hubspot-cms-migration") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is HubSpot automation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot automation involves using HubSpot tools to automate marketing, sales, and customer service processes, saving time and improving efficiency."
                }
            }, {
                "@type": "Question",
                "name": "Can you automate tasks in HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, HubSpot allows automation of tasks like email marketing, lead scoring, CRM updates, and reporting, enabling seamless workflows."
                }
            }, {
                "@type": "Question",
                "name": "What is the difference between HubSpot automation and workflow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Automation refers to any process HubSpot manages automatically, while workflows are specific sequences of automated actions within the platform."
                }
            }, {
                "@type": "Question",
                "name": "How do I add automation to HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Automation in HubSpot can be added via workflows, sequences, and integrations. A certified partner like WebGuruz ensures smooth setup and optimization."
                }
            }, {
                "@type": "Question",
                "name": "Can you automate reports in HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, HubSpot enables you to schedule automated reports for email delivery and real-time dashboard updates."
                }
            }, {
                "@type": "Question",
                "name": "Can you automate sequences in HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Sequences automate follow-ups for leads and contacts, helping sales teams stay efficient and consistent."
                }
            }]


        };
    }
    if (pathname === "/hubspot-automation-services") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "Why Should I Migrate to HubSpot CMS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Migrating to HubSpot CMS provides significant benefits beyond just hosting your website. HubSpot CMS is an all-in-one platform that integrates content management, marketing automation, customer relationship management (CRM), and advanced analytics under a single roof. This seamless integration empowers businesses to manage their digital presence more effectively and efficiently. HubSpot's drag-and-drop editor, customizable themes, and mobile-responsive designs make it easy to create a visually appealing and highly functional website without requiring extensive technical expertise. Additionally, the platform’s built-in tools for SEO, content personalization, and lead generation allow you to attract, engage, and convert visitors more effectively. Migrating to HubSpot CMS also ensures enhanced security with features like SSL certification, firewall protection, and automatic updates. Whether you're a small business or a global enterprise, HubSpot CMS is scalable to meet your growing needs, making it a future-proof investment for your business."
                }
            }, {
                "@type": "Question",
                "name": "How Long Does the Migration Process Take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The duration of a HubSpot CMS migration depends on several factors, including the size of your website, the complexity of its structure, the amount of content to be transferred, and the need for custom design or development. On average, a full migration can take anywhere from 4 to 6 weeks. However, for more complex projects involving extensive customization or multiple integrations, the timeline may be extended. The process involves several stages, including initial assessment, data and content backup, custom theme development, SEO strategy implementation, and thorough testing to ensure functionality and performance. At WebGuruz, we follow a structured approach to minimize any delays and keep you informed at every step of the process, ensuring a smooth and efficient migration."
                }
            }, {
                "@type": "Question",
                "name": "Will My Website Experience Downtime During Migration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, your website will not experience downtime during the migration process. At WebGuruz, we employ a zero-downtime strategy to ensure that your website remains live and accessible to users throughout the transition. This approach involves meticulous planning and execution, including backing up all data, staging the migrated website on a temporary domain for testing, and conducting rigorous quality checks before making the final switch. We also coordinate the timing of the go-live phase to minimize any potential disruption, often scheduling it during low-traffic periods. By following these best practices, we ensure that your business operations and user experience remain uninterrupted during the migration process."
                }
            }, {
                "@type": "Question",
                "name": "Can You Migrate Content from Non-HubSpot Platforms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we can migrate content from a wide range of non-HubSpot platforms, including popular content management systems (CMS) like WordPress, Joomla, Drupal, Wix, and even custom-built websites. Our team of experts is skilled in handling complex migrations, ensuring that all your pages, posts, images, files, and metadata are transferred accurately and efficiently. During the migration, we also take care of content formatting, URL mapping, and 301 redirects to preserve your SEO performance. Whether your current website is built on a proprietary platform or a traditional CMS, we develop a tailored strategy to seamlessly transition your content to HubSpot CMS, ensuring no data is lost and that your new site retains its functionality and user experience."
                }
            }, {
                "@type": "Question",
                "name": "What Happens to My SEO Rankings During Migration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Preserving and improving your SEO rankings is one of our top priorities during the migration process. We understand that search engine visibility is critical to your business’s success, so we implement a comprehensive SEO strategy to minimize any potential impact. This includes creating a detailed URL mapping plan to ensure that all old URLs are redirected to their new counterparts using 301 redirects, preserving link equity, and avoiding 404 errors. We also retain and optimize critical on-page elements such as title tags, meta descriptions, header tags, and image alt text. Additionally, we conduct a thorough audit of your content to identify opportunities for optimization and ensure that the new site adheres to SEO best practices. Post-migration, we run performance tests and monitor search engine rankings to address any issues promptly, ensuring a smooth transition without compromising your search visibility."
                }
            }]
        };
    }
    if (pathname === "/hubspot-marketing-automation") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is HubSpot Marketing Automation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot Marketing Automation is a suite of tools designed to streamline marketing tasks such as email campaigns, lead nurturing, and data analysis. It enables businesses to create personalized customer journeys and manage workflows, freeing up time and resources for strategic planning."
                }
            }, {
                "@type": "Question",
                "name": "Can you automate marketing tasks in HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! HubSpot allows you to automate a variety of tasks, from sending emails based on user behavior to updating CRM records automatically. It simplifies complex processes, enabling you to focus on engaging with customers and optimizing campaigns."
                }
            }, {
                "@type": "Question",
                "name": "How does HubSpot improve ROI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By automating repetitive tasks and providing actionable insights through analytics, HubSpot helps businesses save time, target the right audience, and execute campaigns effectively – all of which contribute to higher ROI."
                }
            }, {
                "@type": "Question",
                "name": "Do I need technical expertise to use HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not necessarily. HubSpot’s intuitive interface makes it user-friendly. However, working with experts like WebGuruz ensures that you maximize the platform’s potential and customize it to fit your business perfectly."
                }
            }]

        };
    }
    if (pathname === "/hubspot-developer") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is HubSpot development, and why is it important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot development involves customizing and enhancing the HubSpot platform to align with a business’s specific operational needs. This includes creating custom modules, integrating third-party applications through APIs, designing unique themes, and configuring the CRM to streamline workflows. It’s important because HubSpot, while powerful out of the box, becomes significantly more effective when tailored to a company’s processes. Custom development allows businesses to leverage the platform’s full potential, improving their marketing automation, sales management, and customer service functions. By optimizing these areas, businesses can enhance efficiency, boost customer engagement, and ultimately drive better results."
                }
            }, {
                "@type": "Question",
                "name": "How can HubSpot API integrations benefit my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot API integrations connect HubSpot with various external applications and systems, enabling seamless data exchange and automation. This connectivity ensures that data flows smoothly between tools like CRMs, ERPs, e-commerce platforms, and marketing tools. For businesses, the benefits are immense. Automating repetitive tasks such as data entry and synchronization saves time and reduces errors. Additionally, integrating customer data across platforms allows for more personalized marketing efforts and better decision-making. Ultimately, API integrations improve operational efficiency, enhance the customer experience, and allow teams to focus on strategic initiatives rather than manual processes."
                }
            }, {
                "@type": "Question",
                "name": "What certifications do WebGuruz developers hold?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We have a team of certified Hubspot CRM developers, experienced in multiple areas, including CMS development, marketing automation, and CRM customization. These certifications demonstrate our team’s proficiency in building and optimizing solutions within the HubSpot ecosystem. By undergoing rigorous training and assessments, our developers stay current with the latest HubSpot features and best practices. This expertise ensures that clients receive high-quality, innovative solutions tailored to their specific needs. Certifications also provide assurance that our team can handle complex projects while adhering to HubSpot’s standards for performance, security, and scalability."
                }
            }, {
                "@type": "Question",
                "name": "How long does a typical HubSpot project take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline for a HubSpot project depends on several factors, including the project’s scope, complexity, and specific requirements. For example, a simple theme customization might take a few weeks, whereas a comprehensive CRM setup with multiple integrations could span several months. At WebGuruz, we begin each project with a thorough assessment of the client’s needs, followed by a detailed project plan outlining tasks, milestones, and deadlines. Our team is committed to adhering to these timelines, ensuring timely completion without compromising quality. Open communication and regular updates throughout the project also help keep everything on track."
                }
            }, {
                "@type": "Question",
                "name": "Can you customize HubSpot themes and templates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Hubspot app developers specialize in designing and customizing HubSpot themes and templates that reflect your brand identity and business objectives. We understand that every business is unique, and a one-size-fits-all approach doesn’t always work. By tailoring themes and templates, we can create visually appealing, user-friendly designs that enhance the customer experience and improve engagement. Our customizations go beyond aesthetics, incorporating SEO best practices, responsive design, and functionality enhancements to ensure that your website not only looks great but also performs optimally across devices."
                }
            }]


        };
    }
    if (pathname === "/hubspot-cms-development") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What are the website development services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Web development encompasses a wide range of services, from creating the visual interface and user experience of a website (front-end development) to building server-side functionality and database interactions (back-end development). We also offer full-stack development, which combines both front-end and back-end development. Additionally, we specialize in custom web development, e-commerce development, CMS development, and PWA development."
                }
            }, {
                "@type": "Question",
                "name": "How much does website development cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of website development can vary significantly depending on several factors. Websites with simple designs and basic features are generally less expensive than complex ones with advanced features and integrations. The time required to create the design and code can also impact the cost. It's best to get quotes from multiple developers to compare pricing and services."
                }
            }, {
                "@type": "Question",
                "name": "Who needs web development services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses of all sizes can benefit from web development services. A website is essential for establishing an online presence, building and promoting your brand identity, providing information and services to customers, generating leads, driving sales, and implementing digital marketing strategies."
                }
            }, {
                "@type": "Question",
                "name": "Will I lose Google ranking if I redevelop my website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While redeveloping a website can potentially impact your Google ranking, it doesn't have to be a negative experience. By carefully planning and executing the redevelopment process, you can minimize any potential ranking loss. Factors to consider include maintaining content consistency, redirecting old URLs to the corresponding new pages, optimizing the new website for search engines, and ensuring it's mobile-friendly."
                }
            }, {
                "@type": "Question",
                "name": "Which tool is best for web development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best tool for web development depends on your specific needs and preferences. Some popular options include code editors like Visual Studio Code, Sublime Text, and Atom, integrated development environments (IDEs) like PhpStorm, WebStorm, and Eclipse, content management systems (CMS) like WordPress, Drupal, and Joomla, and frameworks like React, Angular, Vue.js, Django, and Laravel."
                }
            }, {
                "@type": "Question",
                "name": "What are the 4 principles of web development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While there are many principles of web development, four key ones are accessibility, performance, security, and user experience. Accessibility ensures that your website is usable by people with disabilities. Performance refers to optimizing your website for fast loading times and responsiveness. Security involves protecting your website and user data from threats. User experience focuses on creating a website that is easy to navigate and enjoyable to use."
                }
            }, {
                "@type": "Question",
                "name": "What kind of website do you create?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We can create a wide variety of websites, including corporate websites, e-commerce websites, portfolio websites, blog websites, and landing pages."
                }
            }, {
                "@type": "Question",
                "name": "I am not sure of my website requirements. Can you help?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! We can help you define your website requirements through a consultation process. We'll discuss your goals, target audience, and desired features to create a tailored website solution."
                }
            }]
        };
    }
    if (pathname === "/hubspot-onboarding") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is HubSpot onboarding, and why is it important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot onboarding is a structured process designed to set up and configure your HubSpot account in alignment with your business goals. It involves various essential steps, including technical setup, CRM configuration, workflow automation, and personalized team training. During onboarding, your account is customized to streamline your marketing, sales, and customer service efforts, ensuring a seamless experience for users. Proper onboarding is critical because it allows businesses to unlock the full potential of HubSpot’s powerful tools. Without a tailored setup, users may struggle to utilize features effectively, leading to inefficiencies and missed opportunities. Effective onboarding not only accelerates user adoption but also drives better results by automating processes, improving customer engagement, and delivering actionable insights. Ultimately, it ensures your organization achieves a higher return on investment (ROI) from the platform."
                }
            }, {
                "@type": "Question",
                "name": "How long does HubSpot onboarding take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The duration of HubSpot onboarding varies based on the complexity of your business needs, the number of integrations required, and the level of customization necessary. For standard setups, the process can take around 4 to 6 weeks. However, for more complex implementations involving advanced automation, data migrations, and extensive customization, onboarding may extend to 8 to 12 weeks or more. At WebGuruz, we begin with a detailed discovery phase to understand your goals and create a tailored timeline. Our team works efficiently while ensuring each step, from CRM configuration to user training, is meticulously executed. We provide regular updates and check-ins throughout the process, ensuring transparency and keeping your team informed."
                }
            }, {
                "@type": "Question",
                "name": "Can you integrate HubSpot with other tools we use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, HubSpot’s flexibility allows it to integrate seamlessly with a wide range of third-party tools, enhancing its functionality and helping you maintain a unified workflow. WebGuruz specializes in integrating HubSpot with various platforms, including customer relationship management (CRM) systems, marketing automation tools, analytics platforms, and e-commerce solutions. We offer both standard integrations and custom solutions tailored to your unique business needs. Whether you need HubSpot to sync with Salesforce, Google Analytics, Shopify, or custom-built applications, we ensure a smooth and secure connection. Our goal is to create a cohesive ecosystem where data flows freely, eliminating silos and improving operational efficiency."
                }
            }, {
                "@type": "Question",
                "name": "What support do you offer after onboarding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After completing the onboarding process, WebGuruz provides comprehensive post-onboarding support to ensure your HubSpot setup continues to meet your evolving business needs. Our support services include troubleshooting, regular updates, and strategic optimization to keep your system running smoothly. We also monitor performance metrics and provide recommendations to enhance your workflows, automation, and integrations over time. If your business goals change, we help adjust your HubSpot configuration to reflect new strategies. Additionally, our team offers ongoing training sessions to keep your staff up-to-date with new features and best practices, empowering them to make the most of HubSpot’s capabilities."
                }
            }, {
                "@type": "Question",
                "name": "Is training included in the onboarding process?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Training is a crucial part of our onboarding process at WebGuruz. We believe that empowering your team with the right knowledge and skills is essential for long-term success with HubSpot. Our training sessions are tailored to your team’s specific roles and responsibilities, ensuring they gain a thorough understanding of the tools they need. Our training covers everything from navigating the platform to creating workflows, managing leads, automating tasks, and generating reports. We provide hands-on sessions, video tutorials, and detailed documentation to support learning. Whether your team is new to HubSpot or experienced users looking to deepen their knowledge, our goal is to build confidence and competence across all users. This ensures smooth adoption and maximizes the effectiveness of your HubSpot investment."
                }
            }]

        };
    }
    if (pathname === "/hubspot-crm-migration") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "Why should I choose HubSpot for CRM migration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot stands out as a comprehensive, user-friendly CRM platform that simplifies and enhances business operations. Its intuitive interface, combined with powerful features, allows for seamless automation of tasks, advanced reporting, and effective customer management. HubSpot is highly scalable, meaning it can grow alongside your business, accommodating your evolving needs. Additionally, it offers easy integration with a wide range of tools, from marketing automation platforms to e-commerce systems, creating a unified tech ecosystem. With robust customer support and a commitment to continuous improvement, HubSpot ensures that your CRM remains a valuable asset for driving growth and success."
                }
            }, {
                "@type": "Question",
                "name": "How long does the migration process take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The duration of a HubSpot CRM migration depends on various factors, including the complexity of your data, the number of records being transferred, and the extent of customizations required. On average, migrations can take anywhere from 2 to 6 weeks. Simple migrations with minimal customizations can be completed quickly, while larger, more complex projects may take longer to ensure accuracy and data integrity. At WebGuruz, we prioritize a smooth, efficient process, balancing speed with thoroughness to minimize disruption to your business operations."
                }
            }, {
                "@type": "Question",
                "name": "Is there a risk of data loss during migration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Data security and integrity are at the core of our migration process. While any data transfer carries inherent risks, WebGuruz employs robust protocols to minimize these risks. We conduct thorough data assessments, implement secure transfer methods, and maintain regular backups throughout the migration. Our team also performs extensive testing and validation to ensure all data is accurately mapped and transferred to HubSpot. With these precautions in place, we mitigate the risk of data loss and ensure a seamless transition to your new CRM."
                }
            }, {
                "@type": "Question",
                "name": "Can you integrate HubSpot with other tools?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, integrating HubSpot with third-party tools is one of our specialties. We can connect HubSpot to a wide range of platforms, including marketing automation systems, ERP software, e-commerce platforms, and customer support tools. These integrations create a unified system that enhances efficiency and improves data flow across departments. Our team customizes each integration to meet your specific needs, ensuring that HubSpot works seamlessly within your existing tech stack. This connectivity helps you maximize the value of your CRM and other business applications."
                }
            }, {
                "@type": "Question",
                "name": "Do you offer post-migration support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! At WebGuruz, we believe that a successful migration is only the beginning. We offer comprehensive post-migration support to ensure you get the most out of your HubSpot CRM. Our team provides ongoing assistance, troubleshooting, and optimization services to fine-tune your CRM and address any challenges that arise. We also offer training and best-practice guidance to help your team leverage HubSpot’s full capabilities. With our continued support, you can confidently manage your CRM and drive business growth long after the migration is complete."
                }
            }]

        };
    }
    if (pathname === "/hubspot-services") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is HubSpot, and How Can it Benefit My Business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot is an all-in-one software platform designed to help businesses streamline and enhance their marketing, sales, customer service, and customer relationship management (CRM) efforts. It provides a range of tools for email marketing, social media management, content creation, lead nurturing, sales pipeline tracking, and customer support. With its robust automation capabilities, HubSpot allows businesses to automate repetitive tasks, freeing up time to focus on strategic initiatives. The platform’s CRM centralizes customer data, offering a 360-degree view of interactions across all touchpoints. This leads to more personalized customer experiences, better engagement, and improved decision-making. By leveraging HubSpot, businesses can enhance efficiency, boost lead generation, and drive sustainable growth."
                }
            }, {
                "@type": "Question",
                "name": "How Long Does It Take to Implement HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The time required to implement HubSpot depends on various factors, such as the size of your organization, the complexity of your existing systems, and the scope of the services you need. For a basic setup, the process may take a few weeks, while more advanced configurations involving custom workflows, integrations, and extensive data migration could take several months. At WebGuruz, we follow a structured onboarding process to ensure a smooth transition. Our experts handle everything from initial setup and configuration to training and support, minimizing disruptions to your daily operations. We work closely with your team to meet deadlines and ensure your business starts leveraging HubSpot’s capabilities as quickly as possible."
                }
            }, {
                "@type": "Question",
                "name": "Can I Integrate HubSpot with Other Tools My Business Uses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, HubSpot is designed to integrate seamlessly with a wide range of third-party applications and platforms. It offers native integrations with popular tools like Salesforce, Shopify, Slack, Google Workspace, and Microsoft 365, among others. Additionally, HubSpot’s API allows for custom integrations to meet specific business needs. Our team at WebGuruz specializes in setting up these integrations to ensure your business processes run smoothly. We help you connect HubSpot with your existing tech stack, enabling data synchronization and workflow automation across platforms, which improves efficiency and enhances collaboration."
                }
            }, {
                "@type": "Question",
                "name": "Do You Provide Training for Using HubSpot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! At WebGuruz, we believe that proper training is crucial for maximizing the value of HubSpot. As part of our onboarding process, we offer comprehensive training sessions tailored to your team’s needs. Our training covers everything from basic platform navigation and CRM management to advanced features like automation workflows, reporting, and campaign management. We also provide role-specific training, ensuring that each department- whether marketing, sales, or customer service- can effectively use HubSpot’s tools to achieve their goals. Our ongoing support ensures that your team remains confident and up-to-date as new features and updates are released."
                }
            }, {
                "@type": "Question",
                "name": "How Much Does it Cost to Work with WebGuruz for HubSpot Services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of HubSpot services varies based on the scope and complexity of your requirements. Factors such as the type of HubSpot subscription, the number of integrations, and the level of customization needed will influence the overall pricing. At WebGuruz, we offer flexible and customized packages to suit businesses of all sizes and budgets. Our pricing is transparent, and we provide detailed quotes after understanding your specific needs. Whether you require a basic setup or a comprehensive end-to-end solution, we ensure you receive the best value for your investment. Contact us for a personalized consultation and quote."
                }
            }, {
                "@type": "Question",
                "name": "What Kind of Support can I Expect After Implementation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WebGuruz provides ongoing support to ensure that your HubSpot system continues to deliver value long after implementation. Our post-launch services include troubleshooting, software updates, performance monitoring, and optimization. We offer proactive support to address any issues before they impact your business operations. Additionally, we provide periodic reviews and recommendations to help you optimize your workflows and take advantage of new HubSpot features. Our dedicated support team is always available to assist with queries, customizations, and enhancements, ensuring that your HubSpot environment evolves with your business needs."
                }
            }]


        };
    }

    if (scriptContent) {
        return (
            <script type="application/ld+json">
                {JSON.stringify(scriptContent)}
            </script>
        );
    }

    return null; // No script for other pathnames
};

export default DynamicScript;

