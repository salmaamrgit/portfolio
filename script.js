// AOS.init
AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-quad'
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', newTheme);
    });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
}

// ========== SKILLS FILTER FUNCTIONALITY ==========
const filterButtons = document.querySelectorAll('.skill-filter-btn');
const skillContainers = document.querySelectorAll('.skill-category-container');

function filterSkills(category) {
    skillContainers.forEach(container => {
        if (category === 'all' || container.getAttribute('data-category') === category) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });

    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');
        filterSkills(category);
    });
});

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-experience': 'Experience',
        'nav-skills': 'Skills & Languages',
        'nav-services': 'Services',
        'nav-pricing': 'Pricing',
        'nav-projects': 'Projects',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',

        // Hero
        'hero-badge': '✦ Front-End Developer',
        'hero-greeting': "Hi, I'm",
        'hero-title': 'I turn complex problems into elegant, high-performance web solutions',
        'hero-desc': 'Computer Science graduate & Front-End Engineer specializing in React, TypeScript, and modern web technologies. Currently a MERN scholar @ Digilians, building scalable applications with cutting-edge tools.',
        'hero-btn-work': '✨ View Work',
        'hero-btn-contact': 'Download CV',

        // About
        'about-title': 'What Makes Me Different',
        'about-stat-years': 'Years Coding',
        'about-stat-projects': 'Projects Done',
        'about-stat-accuracy': 'ML Accuracy',
        'about-badge-1': 'Top 5% @ Digilians',
        'about-badge-2': 'Dual Degree Graduate',
        'about-label': 'About Me',
        'about-heading': 'Where Code Meets Creativity — Delivering Excellence Every Time',
        'about-text-1': "I'm Salma, a Computer Science graduate (Bioinformatics) from Ain Shams University & University of East London. My passion for programming started over four years ago, and since then, I've been on a mission to create web experiences that are not just functional, but truly exceptional.",
        'about-text-2': 'I specialize in building scalable, performant applications using React, TypeScript, and modern CSS frameworks. What sets me apart is my unique blend of front-end expertise and machine learning knowledge — I don\'t just build interfaces, I build intelligent systems that solve real problems. My graduation project achieved 99.7% accuracy in brain tumor detection, proving my ability to deliver cutting-edge solutions.',
        'about-usp': '✨ Unique Value: Front-End + ML = Smarter, Data-Driven Web Applications',

        // Education
        'education-label': 'Education & Certifications',
        'education-heading': 'My Academic Journey',
        'education-section-title': '🎓 Education',
        'edu-igcse': 'Foundation in sciences & computing with distinction.',
        'edu-bachelor': 'Dual Bachelor: Computer Science (Bioinformatics) — Graduation project: ML Brain Tumor Detection (99.7% accuracy)',
        'edu-iti-fe': 'Intensive front-end track + certificate in modern web development.',
        'edu-iti-ux': 'Design thinking, Figma, UX research methodologies.',

        // Experience
        'experience-label': 'Professional Experience',
        'experience-heading': 'Work & Training Journey',
        'experience-section-title': '💼 Experience',
        'exp-digilians': 'Competitive national program @ Egyptian Military Academy — intensive training in scalable web apps, APIs, MongoDB, Express, React, Node.',
        'edu-sef': 'Modern React patterns, advanced JavaScript, performance optimization.',

        // Skills
        'skills-label': 'Technical Expertise',
        'skills-heading': 'My Tech Arsenal',
        'skills-filter-hint': 'Click on any category to explore my skills',
        'filter-all': 'All Skills',
        'filter-languages': '💻 Languages',
        'filter-tools': '🛠️ Tools',
        'filter-concepts': '🧠 Concepts',
        'filter-spoken': '🗣️ Languages',
        'skill-lang-title': 'Programming Languages',
        'skill-tools-title': 'Technologies & Tools',
        'skill-concepts-title': 'Concepts & Methodologies',
        'skill-spoken-title': 'Languages',
        'lang-arabic-level': 'Native',
        'lang-english-level': 'B2 - Upper Intermediate',
        'lang-spanish-level': 'B1 - Intermediate (Certified)',

        // Services
        'services-label': 'What I Offer',
        'services-heading': 'Services',
        'service-1-title': 'Responsive Web Dev',
        'service-1-desc': 'Pixel-perfect, mobile-first websites using React, Tailwind, modern CSS.',
        'service-2-title': 'Interactive UI/UX',
        'service-2-desc': 'Dynamic interfaces, animations, API integration, user-centric design.',
        'service-3-title': 'Performance Optimization',
        'service-3-desc': 'SEO-friendly, fast-loading apps, Core Web Vitals best practices.',

        // Pricing
        'pricing-label': 'Ready to start your project?',
        'pricing-heading': 'View Pricing Plans',
        'pricing-view-details': '💰 View Detailed Pricing',
        'price-starter': 'Starter',
        'price-starter-desc': 'Perfect for small businesses',
        'price-starter-1': '1 Landing Page (up to 5 sections)',
        'price-starter-2': 'Fully Responsive Design',
        'price-starter-3': 'Contact Form Integration',
        'price-starter-4': 'Basic SEO Setup',
        'price-starter-5': '1 Week Delivery',
        'price-pro': 'Professional',
        'price-pro-desc': 'Best for growing brands',
        'price-pro-1': 'Up to 5 Pages / React SPA',
        'price-pro-2': 'Custom Animations',
        'price-pro-3': 'REST API Integration',
        'price-pro-4': 'Content Management System',
        'price-pro-5': 'Performance Optimization',
        'price-pro-6': '2-3 Weeks Delivery',
        'price-business': 'Business',
        'price-business-desc': 'Enterprise solutions',
        'price-business-1': 'Full MERN Stack Application',
        'price-business-2': 'User Authentication & Database',
        'price-business-3': 'Admin Dashboard',
        'price-business-4': '3 Months Priority Support',
        'price-business-5': 'Deployment & Maintenance',
        'price-business-6': '4-6 Weeks Delivery',
        'price-btn': 'View Details',
        'price-btn-pro': 'Get Started',
        'price-btn-contact': 'Contact Me',
        'price-btn-choose': 'Choose Plan',
        'popular-badge': 'Most Popular',

        // Projects
        'projects-label': 'Featured Work',
        'projects-heading': 'Projects I\'ve Built',
        'project-1-title': 'Brain Tumor Detection & Staging',
        'project-1-time': '3 months',
        'project-1-place': 'Graduation Project @ ASU',
        'project-1-desc': '99.7% accuracy using EfficientNetB3 for glioma, meningioma, and pituitary tumor classification.',
        'project-1-features': 'MRI image analysis, Real-time classification, Medical report generation',
        'project-2-title': 'Global News & Sports Hub',
        'project-2-time': '2 weeks',
        'project-2-place': 'Personal Project',
        'project-2-desc': 'Real-time news aggregator with category filters and sports leagues data.',
        'project-2-features': 'Live API integration, Category filtering, Search functionality, Dark mode',
        'project-3-title': 'Space Explorer',
        'project-3-time': '3 weeks',
        'project-3-place': 'Personal Project',
        'project-3-desc': 'NASA APOD gallery + 3D planet viewer with interactive space exploration.',
        'project-3-features': 'NASA API integration, 3D planet models, Date picker, Favorites save',
        'project-4-title': 'To-Do Master',
        'project-4-time': '1 week',
        'project-4-place': 'Personal Project',
        'project-4-desc': 'Drag & drop tasks, local storage, dark mode, and productivity tracking.',
        'project-4-features': 'Drag & drop, Local storage, Dark/light mode, Task categories, Due dates',
        'project-features-label': 'Features',
        'view-project': 'View Project',

        // Testimonials
        'testimonials-label': 'Client Feedback',
        'testimonials-heading': 'What People Say',
        'testimonial-1-text': 'Coming Soon! I\'m currently gathering feedback from my amazing clients. Your testimonial could be here!',
        'testimonial-1-name': 'Future Client',
        'testimonial-1-role': 'Be the first to leave a review',
        'testimonial-2-text': '✨ Coming Soon! I\'m excited to work with you and earn your trust. Let\'s build something amazing together!',
        'testimonial-2-name': 'Your Name Here',
        'testimonial-2-role': 'Share your experience',
        'testimonial-3-text': '🚀 Coming Soon! Ready to deliver exceptional results for your project. Contact me to get started!',
        'testimonial-3-name': 'Your Business',
        'testimonial-3-role': 'Let\'s collaborate',

        // Contact
        'contact-label': 'Get In Touch',
        'contact-heading': 'Let\'s Talk',
        'contact-sub': 'Have a project in mind?',
        'contact-desc': 'Reach out for collaborations or tech chats.',
        'contact-location': 'Cairo, Egypt',
        'contact-available': 'Available worldwide',
        'contact-whatsapp': 'Chat on WhatsApp',
        'contact-send': 'Send Message',
        'contact-name-placeholder': 'Your Name',
        'contact-email-placeholder': 'Email address',
        'contact-msg-placeholder': 'Tell me about your project...',

        // Footer
        // Footer
        'footer-shy-title': "DREAM IT, CODE IT", 'footer-message': "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        'footer-name': "S.A.",
        'footer-role': "I'm a <strong>Front-End Developer & MERN Stack Enthusiast</strong>, passionate and dedicated to my work. I have acquired the skills and knowledge necessary to design and develop user-friendly, scalable web applications that make your project a success.",
        'footer-response': "🛠️ Usually responds within 24 hours",

        // Pricing Page
        'back-home': 'Back to Home',
        'pricing-badge': '✦ Transparent Pricing',
        'pricing-main-title': 'Choose the Perfect Plan for Your Project',
        'pricing-subtitle': 'Flexible options tailored to your needs — from simple landing pages to full-scale applications',
        'pricing-note-title': 'Need a Custom Solution?',
        'pricing-note-desc': 'Every project is unique. Contact me for a personalized quote based on your specific requirements, timeline, and budget.',
        'pricing-note-btn': 'Let\'s Discuss Your Project →'
    },
    ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-about': 'عني',
        'nav-education': 'التعليم',
        'nav-experience': 'الخبرات',
        'nav-skills': 'المهارات واللغات',
        'nav-services': 'الخدمات',
        'nav-pricing': 'الأسعار',
        'nav-projects': 'المشاريع',
        'nav-testimonials': 'آراء العملاء',
        'nav-contact': 'اتصل بي',

        // Hero
        'hero-badge': '✦ مطورة واجهات أمامية',
        'hero-greeting': 'مرحباً، أنا',
        'hero-title': 'أحول المشكلات المعقدة إلى حلول ويب أنيقة وعالية الأداء',
        'hero-desc': 'خريجة علوم حاسب ومهندسة واجهات أمامية متخصصة في React و TypeScript والتقنيات الحديثة. حالياً متدربة في برنامج MERN @ Digilians، أبني تطبيقات قابلة للتطوير بأحدث الأدوات.',
        'hero-btn-work': '✨ أعمالي',
        'hero-btn-contact': 'تحميل السيرة الذاتية',

        // About
        'about-title': 'ما يميزني',
        'about-stat-years': 'سنوات برمجة',
        'about-stat-projects': 'مشروع منجز',
        'about-stat-accuracy': 'دقة النموذج',
        'about-badge-1': 'أفضل 5% في Digilians',
        'about-badge-2': 'خريجة درجة مزدوجة',
        'about-label': 'عني',
        'about-heading': 'حيث يلتقي الكود مع الإبداع — تقديم التميز في كل مرة',
        'about-text-1': 'أنا سلمى، خريجة علوم حاسب (بيوانفورماتيكس) من جامعة عين شمس وجامعة شرق لندن. بدأت شغفي بالبرمجة منذ أكثر من أربع سنوات، ومنذ ذلك الحين وأنا في مهمة لإنشاء تجارب ويب ليست عملية فحسب، بل استثنائية حقاً.',
        'about-text-2': 'أتخصص في بناء تطبيقات قابلة للتطوير وعالية الأداء باستخدام React و TypeScript وأطر CSS الحديثة. ما يميزني هو مزجي الفريد بين خبرة الواجهات الأمامية ومعرفة التعلم الآلي — فأنا لا أبني واجهات فقط، بل أبني أنظمة ذكية تحل مشاكل حقيقية. حقق مشروع تخرجي دقة 99.7% في كشف أورام الدماغ، مما يثبت قدرتي على تقديم حلول مبتكرة.',
        'about-usp': '✨ قيمة فريدة: الواجهات الأمامية + التعلم الآلي = تطبيقات ويب أذكى تعتمد على البيانات',

        // Education
        'education-label': 'التعليم والشهادات',
        'education-heading': 'رحلتي الأكاديمية',
        'education-section-title': '🎓 التعليم',
        'edu-igcse': 'أساسيات العلوم والحوسبة مع تميز.',
        'edu-bachelor': 'بكالوريوس مزدوج في علوم الحاسب (بيوانفورماتيكس) — مشروع التخرج: كشف أورام الدماغ بنسبة دقة 99.7%',
        'edu-iti-fe': 'برنامج مكثف في تطوير الواجهات الأمامية مع شهادة.',
        'edu-iti-ux': 'التفكير التصميمي، Figma، وأساليب بحث تجربة المستخدم.',

        // Experience
        'experience-label': 'الخبرات المهنية',
        'experience-heading': 'رحلة العمل والتدريب',
        'experience-section-title': '💼 الخبرات',
        'exp-digilians': 'برنامج وطني تنافسي في الأكاديمية العسكرية المصرية — تدريب مكثف في تطوير تطبيقات الويب القابلة للتطوير.',
        'edu-sef': 'أنماط React الحديثة، جافاسكريبت متقدم، تحسين الأداء.',

        // Skills
        'skills-label': 'الخبرات التقنية',
        'skills-heading': 'ترسانتي التقنية',
        'skills-filter-hint': 'انقر على أي فئة لاستكشاف مهاراتي',
        'filter-all': 'كل المهارات',
        'filter-languages': '💻 لغات البرمجة',
        'filter-tools': '🛠️ الأدوات',
        'filter-concepts': '🧠 المفاهيم',
        'filter-spoken': '🗣️ اللغات',
        'skill-lang-title': 'لغات البرمجة',
        'skill-tools-title': 'التقنيات والأدوات',
        'skill-concepts-title': 'المفاهيم والمنهجيات',
        'skill-spoken-title': 'اللغات',
        'lang-arabic-level': 'لغة أم',
        'lang-english-level': 'B2 - فوق المتوسط',
        'lang-spanish-level': 'B1 - متوسط (معتمد)',

        // Services
        'services-label': 'ماذا أقدم',
        'services-heading': 'خدماتي',
        'service-1-title': 'تطوير ويب متجاوب',
        'service-1-desc': 'مواقع متوافقة مع جميع الأجهزة باستخدام React و Tailwind.',
        'service-2-title': 'واجهات تفاعلية',
        'service-2-desc': 'واجهات ديناميكية مع رسوم متحركة وتكامل API.',
        'service-3-title': 'تحسين الأداء',
        'service-3-desc': 'تطبيقات سريعة ومتوافقة مع محركات البحث.',

        // Pricing
        'pricing-label': 'مستعد لبدء مشروعك؟',
        'pricing-heading': 'خطط الأسعار',
        'pricing-view-details': '💰 عرض الأسعار التفصيلية',
        'price-starter': 'ابتدائي',
        'price-starter-desc': 'مثالي للشركات الصغيرة',
        'price-starter-1': 'صفحة تعريفية واحدة (حتى 5 أقسام)',
        'price-starter-2': 'تصميم متجاوب بالكامل',
        'price-starter-3': 'نموذج تواصل',
        'price-starter-4': 'إعداد SEO أساسي',
        'price-starter-5': 'تسليم خلال أسبوع',
        'price-pro': 'احترافي',
        'price-pro-desc': 'الأفضل للعلامات التجارية المتنامية',
        'price-pro-1': 'حتى 5 صفحات / تطبيق React',
        'price-pro-2': 'رسوم متحركة وتفاعلات مخصصة',
        'price-pro-3': 'تكامل واجهات برمجة التطبيقات',
        'price-pro-4': 'نظام إدارة محتوى',
        'price-pro-5': 'تحسين الأداء',
        'price-pro-6': 'تسليم خلال 2-3 أسابيع',
        'price-business': 'الأعمال',
        'price-business-desc': 'للحلول المؤسسية',
        'price-business-1': 'تطبيق MERN كامل',
        'price-business-2': 'مصادقة المستخدم وقاعدة بيانات',
        'price-business-3': 'لوحة تحكم إدارية',
        'price-business-4': 'دعم أولوية لمدة 3 أشهر',
        'price-business-5': 'نشر وصيانة',
        'price-business-6': 'تسليم خلال 4-6 أسابيع',
        'price-btn': 'عرض التفاصيل',
        'price-btn-pro': 'ابدأ الآن',
        'price-btn-contact': 'تواصل معي',
        'price-btn-choose': 'اختر الخطة',
        'popular-badge': 'الأكثر طلباً',

        // Projects
        'projects-label': 'أعمالي المميزة',
        'projects-heading': 'المشاريع التي قمت ببنائها',
        'project-1-title': 'كشف وتصنيف أورام الدماغ',
        'project-1-time': '3 أشهر',
        'project-1-place': 'مشروع التخرج @ جامعة عين شمس',
        'project-1-desc': 'دقة 99.7% باستخدام EfficientNetB3 لتصنيف أورام الجليوما والسينوميا والغدة النخامية.',
        'project-1-features': 'تحليل صور الرنين المغناطيسي، تصنيف فوري، تقارير طبية',
        'project-2-title': 'مركز الأخبار والرياضة العالمي',
        'project-2-time': 'أسبوعين',
        'project-2-place': 'مشروع شخصي',
        'project-2-desc': 'تجميع أخبار فوري مع فلاتر الفئات وبيانات الدوريات الرياضية.',
        'project-2-features': 'تكامل API مباشر، تصفية الفئات، وظيفة البحث، الوضع الليلي',
        'project-3-title': 'مستكشف الفضاء',
        'project-3-time': '3 أسابيع',
        'project-3-place': 'مشروع شخصي',
        'project-3-desc': 'معرض صور ناسا + عارض كواكب ثلاثي الأبعاد مع استكشاف تفاعلي.',
        'project-3-features': 'تكامل NASA API، نماذج كواكب ثلاثية الأبعاد، منتقي التاريخ، حفظ المفضلة',
        'project-4-title': 'مدير المهام',
        'project-4-time': 'أسبوع',
        'project-4-place': 'مشروع شخصي',
        'project-4-desc': 'سحب وإسقاط المهام، تخزين محلي، وضع ليلي، وتتبع الإنتاجية.',
        'project-4-features': 'سحب وإسقاط، تخزين محلي، وضع ليلي/نهاري، فئات المهام، تواريخ الاستحقاق',
        'project-features-label': 'المميزات',
        'view-project': 'عرض المشروع',

        // Testimonials
        'testimonials-label': 'آراء العملاء',
        'testimonials-heading': 'ماذا يقول الناس',
        'testimonial-1-text': 'قريباً! أقوم حالياً بجمع الآراء من عملائي الرائعين. رأيك يمكن أن يكون هنا!',
        'testimonial-1-name': 'عميل مستقبلي',
        'testimonial-1-role': 'كن أول من يترك رأياً',
        'testimonial-2-text': '✨ قريباً! متحمسة للعمل معك وكسب ثقتك. لنبني شيئاً رائعاً معاً!',
        'testimonial-2-name': 'اسمك هنا',
        'testimonial-2-role': 'شارك تجربتك',
        'testimonial-3-text': '🚀 قريباً! مستعدة لتقديم نتائج استثنائية لمشروعك. تواصل معي للبدء!',
        'testimonial-3-name': 'عملك',
        'testimonial-3-role': 'لنتعاون',

        // Contact
        'contact-label': 'تواصل معي',
        'contact-heading': 'لنتحدث',
        'contact-sub': 'هل لديك مشروع في ذهنك؟',
        'contact-desc': 'لا تتردد في التواصل للتعاون.',
        'contact-location': 'القاهرة، مصر',
        'contact-available': 'متاحة للعمل عن بُعد حول العالم',
        'contact-whatsapp': 'محادثة واتساب',
        'contact-send': 'إرسال الرسالة',
        'contact-name-placeholder': 'اسمك',
        'contact-email-placeholder': 'البريد الإلكتروني',
        'contact-msg-placeholder': 'أخبرني عن مشروعك...',

        // Footer
        // Footer
        'footer-shy-title': "احلم بها، ابرمجها",
        'footer-message': "لا تتردد في التواصل معي. أنا دائمًا منفتحة لمناقشة المشاريع الجديدة والأفكار الإبداعية أو فرص أن أكون جزءًا من رؤيتك.",
        'footer-name': "س.ع.",
        'footer-role': "أنا <strong>مطورة واجهات أمامية ومتحمسة لمكدس MERN</strong>، شغوفة ومخلصة لعملي. لقد اكتسبت المهارات والمعرفة اللازمة لتصميم وتطوير تطبيقات ويب سهلة الاستخدام وقابلة للتطوير تجعل مشروعك ناجحًا.",
        'footer-response': "🛠️ عادةً ما أرد خلال 24 ساعة",

        // Pricing Page
        'back-home': 'العودة للرئيسية',
        'pricing-badge': '✦ أسعار شفافة',
        'pricing-main-title': 'اختر الخطة المناسبة لمشروعك',
        'pricing-subtitle': 'خيارات مرنة مصممة حسب احتياجاتك — من الصفحات التعريفية البسيطة إلى التطبيقات المتكاملة',
        'pricing-note-title': 'هل تحتاج حلاً مخصصاً؟',
        'pricing-note-desc': 'كل مشروع فريد. تواصل معي للحصول على عرض سعر مخصص بناءً على متطلباتك الخاصة والجدول الزمني والميزانية.',
        'pricing-note-btn': 'لنناقش مشروعك ←'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Handle regular text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Handle placeholder-only elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = lang === 'en' ? '<span>ع</span>' : '<span>EN</span>';
    }
}

const savedLang = localStorage.getItem('language');
setLanguage(savedLang === 'ar' ? 'ar' : 'en');

const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
}

// Smooth scroll
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href === 'pricing.html') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = document.querySelector('.portfolio-navbar')?.offsetHeight || 70;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
            document.querySelector('.navbar-collapse')?.classList.remove('show');
        }
    });
});

// Active nav highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id], header[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Set current year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const msgDiv = document.getElementById('formMessage');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' +
            (currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...');
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                msgDiv.innerHTML = '<div class="alert alert-success mt-3">✓ ' +
                    (currentLang === 'en' ? 'Message sent successfully! I will get back to you soon. ✨' : '✓ تم إرسال الرسالة بنجاح! سأرد عليك قريباً. ✨') +
                    '</div>';
                contactForm.reset();
            } else {
                throw new Error('Failed');
            }
        } catch (error) {
            msgDiv.innerHTML = '<div class="alert alert-danger mt-3">❌ ' +
                (currentLang === 'en' ? 'Error sending message. Please email me directly at salma_amr200311@yahoo.com' : '❌ خطأ في إرسال الرسالة. يرجى التواصل عبر البريد الإلكتروني مباشرة salma_amr200311@yahoo.com') +
                '</div>';
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            setTimeout(() => {
                if (msgDiv.innerHTML) msgDiv.innerHTML = '';
            }, 5000);
        }
    });
}

// ========== DOWNLOAD CV ==========
const downloadCVBtn = document.getElementById('downloadCVBtn');
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cvPath = 'Cv.pdf';
        window.open(cvPath, '_blank');
    });
}

// ========== CONTACT HANDLERS ==========
const phoneLink = document.getElementById('phoneLink');
const whatsappLink = document.getElementById('whatsappLink');
const emailLink = document.getElementById('emailLink');

if (phoneLink) {
    phoneLink.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '+201060431949';
        const confirmMessage = currentLang === 'en'
            ? `Would you like to call ${phoneNumber}?`
            : `هل تريد الاتصال بـ ${phoneNumber}؟`;

        if (confirm(confirmMessage)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    });
}

if (whatsappLink) {
    whatsappLink.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '201060431949';
        const message = encodeURIComponent(currentLang === 'en'
            ? 'Hello Salma! I would like to discuss a project with you.'
            : 'مرحباً سلمى! أود مناقشة مشروع معك.');
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    });
}

if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'salma_amr200311@yahoo.com';
        const subject = encodeURIComponent(currentLang === 'en' ? 'Project Inquiry' : 'استفسار عن مشروع');
        const body = encodeURIComponent(currentLang === 'en'
            ? 'Hello Salma,\n\nI would like to discuss a project with you.\n\nBest regards,'
            : 'مرحباً سلمى،\n\nأود مناقشة مشروع معك.\n\nمع التحية،');

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
}

// ========== PROJECT BUTTONS ==========
document.querySelectorAll('.btn-view-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.tagName === 'A') return;
        alert(currentLang === 'en' ? 'Project link will be available soon!' : 'رابط المشروع سيكون متاح قريباً!');
    });
});

// ========== PRICE BUTTONS ==========
document.querySelectorAll('.btn-price, .price-card .btn-gradient').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.tagName === 'A') return;
        alert(currentLang === 'en' ? 'Thank you for your interest! Please contact me directly for pricing details.' : 'شكراً لاهتمامك! يرجى التواصل معي مباشرة للحصول على تفاصيل الأسعار.');
    });
});