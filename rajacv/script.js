// =====================================
// 2060 EXECUTIVE INTERFACE LOGIC
// =====================================

// --- TRANSLATIONS ---
const translations = {
    en: {
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        "hero.status": "System Online • Ready",
        "hero.title": "Architecting Financial Clarity and Administrative Excellence for the Future",
        "hero.subtitle": "Hemdi Raja — Administrative and Financial Manager",
        "hero.location": "Ariana 2080, Tunis",
        "hero.explore": "Explore Experience",
        "hero.download": "Download CV",
        "hero.contact": "Contact Me",

        "hero.ind1": "Years Experience",
        "hero.ind2": "Finance & Admin",
        "hero.ind3": "Languages",
        "hero.ind4": "Digital Mastery",

        "about.title": "Executive Profile",
        "about.desc": "A professional in administration, finance, management, and accounting, with solid experience and a mastery of IT tools. I am ready to put my skills at the service of your organization.",

        "exp.title": "Career Architecture",
        "exp.present": "Present",
        "exp.1.role": "Administrative and Financial Manager",
        "exp.1.d1": "Monthly classification of accounting files and preparation of payroll",
        "exp.1.d2": "Preparation of withholding taxes",
        "exp.1.d3": "Debt collection",
        "exp.1.d4": "Preparation of sales and car rental contracts, invoicing on Dolibarr software",
        "exp.1.d5": "Preparation of quotes with reservation by email and communication with customers",
        "exp.1.d6": "Monitoring of the vehicle fleet activity",

        "exp.2.role": "Accounting Assistant",
        "exp.2.d1": "Payroll preparation",
        "exp.2.d2": "Elaboration of fiscal and social declarations",
        "exp.2.d3": "Preparation of provisional installments",

        "exp.3.role": "Accounting Assistant",
        "exp.3.d1": "Entry of various accounting documents",
        "exp.3.d2": "Entry and validation of bank documents",
        "exp.3.d3": "Establishment of bank reconciliation",
        "exp.3.d4": "Justification of accounts",

        "exp.4.role": "Management Controller",
        "exp.4.d1": "Establish activity forecasts in terms of objectives, budgets, and organization for a variety of products using IT analysis tools",
        "exp.4.d2": "Identify significant deviations between achievements and forecasts",
        "exp.4.d3": "Develop and adapt analysis tools for commented dashboards",
        "exp.4.d4": "Measure and analyze discrepancies in the form of statistics",

        "exp.5.role": "Surveyor",
        "exp.5.d1": "Statistics on the environment and the financial state of companies",

        "exp.6.role": "End-of-Studies Internship",
        "exp.6.d1": "Economic intelligence and business strategy",

        "edu.title": "Academic Foundation",
        "edu.1.degree": "Professional Master's Degree in Business Engineering and International Trade",
        "edu.1.school": "Faculty of Economic Sciences and Management of Sousse (FSEGS)",
        "edu.2.degree": "Bachelor's Degree in Management, Finance Specialty",
        "edu.2.school": "Faculty of Law and Economic and Political Sciences of Sousse (FDSEPS)",
        "edu.3.degree": "Baccalaureate in Experimental Sciences",
        "edu.3.school": "Sbikha High School",

        "skills.title": "Executive Intelligence Matrix",
        "skills.cat1": "Functional Expertise",
        "skills.cat2": "Software Proficiency",
        "skills.cat3": "Digital & Interface Awareness",

        "s1": "Financial Services",
        "s2": "Administrative Management",
        "s3": "Accounting",
        "s4": "Payroll preparation",
        "s5": "Tax declarations",
        "s6": "Debt collection",
        "s7": "Budget monitoring",
        "s8": "Bank reconciliation",
        "s9": "Customer communication",
        "s10": "Fleet activity monitoring",

        "lang.title": "Linguistic Capability",
        "lang.ar": "Arabic",
        "lang.fr": "French",
        "lang.en": "English",
        "lang.native": "Native",
        "lang.fluent": "Fluent",

        "contact.title": "Secure Communication Gateway",
        "contact.info": "Direct Lines",
        "contact.phone": "Phone Number",
        "contact.email": "Email Address",
        "contact.address": "Address",
        "contact.send": "Initialize Transmission",
        "contact.name": "Identity (Name)",
        "contact.email_field": "Return Protocol (Email)",
        "contact.message": "Data Payload (Message)",
        "contact.submit": "Transmit Message",

        "footer.role": "Administrative and Financial Manager",
        "footer.copy": "© 2060 All rights reserved. System V1.0"
    },
    fr: {
        "nav.about": "À propos",
        "nav.experience": "Expérience",
        "nav.education": "Éducation",
        "nav.skills": "Compétences",
        "nav.contact": "Contact",

        "hero.status": "Système en Ligne • Prêt",
        "hero.title": "Architecte de la Clarté Financière et de l'Excellence Administrative",
        "hero.subtitle": "Hemdi Raja — Responsable Administratif et Financier",
        "hero.location": "Ariana 2080, Tunis",
        "hero.explore": "Explorer l'Expérience",
        "hero.download": "Télécharger le CV",
        "hero.contact": "Me Contacter",

        "hero.ind1": "Années d'Expérience",
        "hero.ind2": "Finance & Admin",
        "hero.ind3": "Langues",
        "hero.ind4": "Maîtrise Numérique",

        "about.title": "Profil Exécutif",
        "about.desc": "Professionnelle en administration, finance, gestion et comptabilité, disposant d’une solide expérience et d’une excellente maîtrise des outils informatiques. Je suis prête à mettre mes compétences au service d’une organisation ambitieuse.",

        "exp.title": "Architecture de Carrière",
        "exp.present": "Présent",
        "exp.1.role": "Responsable Administratif et Financier",
        "exp.1.d1": "Classement mensuel des dossiers comptables et préparation de la paie",
        "exp.1.d2": "Préparation des retenues à la source",
        "exp.1.d3": "Recouvrement de créances",
        "exp.1.d4": "Préparation des contrats de vente et de location de voitures, facturation sur Dolibarr",
        "exp.1.d5": "Préparation de devis, réservation par mail et communication client",
        "exp.1.d6": "Suivi de l'activité du parc automobile",

        "exp.2.role": "Assistante Comptable",
        "exp.2.d1": "Préparation de la paie",
        "exp.2.d2": "Élaboration des déclarations fiscales et sociales",
        "exp.2.d3": "Préparation des acomptes provisionnels",

        "exp.3.role": "Assistante Comptable",
        "exp.3.d1": "Saisie de diverses pièces comptables",
        "exp.3.d2": "Saisie et validation des documents bancaires",
        "exp.3.d3": "Établissement des états de rapprochement bancaire",
        "exp.3.d4": "Justification des comptes",

        "exp.4.role": "Contrôleur de Gestion",
        "exp.4.d1": "Établir des prévisions d'activité en termes d'objectifs, de budgets et d'organisation",
        "exp.4.d2": "Identifier les écarts significatifs entre réalisations et prévisions",
        "exp.4.d3": "Développer et adapter des outils d'analyse pour des tableaux de bord commentés",
        "exp.4.d4": "Mesurer et analyser les écarts sous forme de statistiques",

        "exp.5.role": "Enquêtrice",
        "exp.5.d1": "Statistiques sur l'environnement et l'état financier des entreprises",

        "exp.6.role": "Stage de Fin d'Études",
        "exp.6.d1": "Intelligence économique et stratégie d'entreprise",

        "edu.title": "Fondation Académique",
        "edu.1.degree": "Master Professionnel en Ingénierie des Affaires et Commerce International",
        "edu.1.school": "Faculté des Sciences Économiques et de Gestion de Sousse (FSEGS)",
        "edu.2.degree": "Licence en Gestion, Spécialité Finance",
        "edu.2.school": "Faculté de Droit et des Sciences Économiques et Politiques de Sousse (FDSEPS)",
        "edu.3.degree": "Baccalauréat en Sciences Expérimentales",
        "edu.3.school": "Lycée Sbikha",

        "skills.title": "Matrice d'Intelligence Exécutive",
        "skills.cat1": "Expertise Fonctionnelle",
        "skills.cat2": "Maîtrise Logicielle",
        "skills.cat3": "Conscience Numérique & Interfaces",

        "s1": "Services Financiers",
        "s2": "Gestion Administrative",
        "s3": "Comptabilité",
        "s4": "Préparation de la Paie",
        "s5": "Déclarations Fiscales",
        "s6": "Recouvrement de Créances",
        "s7": "Suivi Budgétaire",
        "s8": "Rapprochement Bancaire",
        "s9": "Communication Client",
        "s10": "Suivi de Flotte Automobile",

        "lang.title": "Capacité Linguistique",
        "lang.ar": "Arabe",
        "lang.fr": "Français",
        "lang.en": "Anglais",
        "lang.native": "Langue maternelle",
        "lang.fluent": "Courant",

        "contact.title": "Passerelle de Communication Sécurisée",
        "contact.info": "Lignes Directes",
        "contact.phone": "Numéro de Téléphone",
        "contact.email": "Adresse E-mail",
        "contact.address": "Adresse",
        "contact.send": "Initialiser la Transmission",
        "contact.name": "Identité (Nom)",
        "contact.email_field": "Protocole de Retour (E-mail)",
        "contact.message": "Charge de Données (Message)",
        "contact.submit": "Transmettre le Message",

        "footer.role": "Responsable Administratif et Financier",
        "footer.copy": "© 2060 Tous droits réservés. Système V1.0"
    },
    ar: {
        "nav.about": "نبذة عني",
        "nav.experience": "الخبرة",
        "nav.education": "التعليم",
        "nav.skills": "المهارات",
        "nav.contact": "اتصل بي",

        "hero.status": "النظام متصل • جاهز",
        "hero.title": "هندسة الوضوح المالي والتميز الإداري للمستقبل",
        "hero.subtitle": "حمدي رجاء — مسؤولة إدارية ومالية",
        "hero.location": "أريانة 2080، تونس",
        "hero.explore": "استكشف الخبرة",
        "hero.download": "تحميل السيرة الذاتية",
        "hero.contact": "تواصل معي",

        "hero.ind1": "سنوات من الخبرة",
        "hero.ind2": "المالية والإدارة",
        "hero.ind3": "لغات",
        "hero.ind4": "إتقان التقنية",

        "about.title": "الملف التنفيذي",
        "about.desc": "محترفة في الإدارة، المالية، التصرف، والمحاسبة، أتمتع بخبرة قوية وإتقان ممتاز لأدوات تكنولوجيا المعلومات. أنا مستعدة لوضع مهاراتي في خدمة منظمة طموحة.",

        "exp.title": "هيكلية المسيرة المهنية",
        "exp.present": "الحاضر",
        "exp.1.role": "مسؤولة إدارية ومالية",
        "exp.1.d1": "التصنيف الشهري للملفات المحاسبية وإعداد كشوف المرتبات",
        "exp.1.d2": "إعداد الضرائب المقتطعة من المصدر",
        "exp.1.d3": "تحصيل الديون",
        "exp.1.d4": "إعداد عقود البيع وتأجير السيارات والفوترة عبر برنامج Dolibarr",
        "exp.1.d5": "إعداد عروض الأسعار والتواصل مع العملاء عبر البريد الإلكتروني",
        "exp.1.d6": "مراقبة نشاط أسطول السيارات",

        "exp.2.role": "مساعدة محاسبة",
        "exp.2.d1": "إعداد كشوف المرتبات",
        "exp.2.d2": "إعداد التصريحات الجبائية والاجتماعية",
        "exp.2.d3": "إعداد الأقساط الاحتياطية",

        "exp.3.role": "مساعدة محاسبة",
        "exp.3.d1": "إدخال الوثائق المحاسبية المختلفة",
        "exp.3.d2": "إدخال والمصادقة على الوثائق البنكية",
        "exp.3.d3": "إنشاء تقارير المطابقة البنكية",
        "exp.3.d4": "تبرير الحسابات",

        "exp.4.role": "مراقبة تصرف",
        "exp.4.d1": "تحديد توقعات النشاط من حيث الأهداف والميزانيات والتنظيم باستخدام أدوات التحليل",
        "exp.4.d2": "تحديد الفروق الهامة بين الإنجازات والتوقعات",
        "exp.4.d3": "تطوير أدوات تحليل للوحات القيادة المدروسة",
        "exp.4.d4": "قياس وتحليل الفروق في شكل إحصائيات",

        "exp.5.role": "باحثة ميدانية",
        "exp.5.d1": "إحصاءات حول البيئة والوضع المالي للشركات",

        "exp.6.role": "تدريب نهاية الدراسة",
        "exp.6.d1": "الذكاء الاقتصادي واستراتيجية الأعمال",

        "edu.title": "الأساس الأكاديمي",
        "edu.1.degree": "ماجستير مهني في هندسة الأعمال والتجارة الدولية",
        "edu.1.school": "كلية العلوم الاقتصادية والتصرف بسوسة (FSEGS)",
        "edu.2.degree": "إجازة في التصرف، تخصص مالية",
        "edu.2.school": "كلية الحقوق والعلوم الاقتصادية والسياسية بسوسة (FDSEPS)",
        "edu.3.degree": "بكالوريا علوم تجريبية",
        "edu.3.school": "معهد صبيخة",

        "skills.title": "مصفوفة الذكاء التنفيذي",
        "skills.cat1": "الخبرة الوظيفية",
        "skills.cat2": "إتقان البرمجيات",
        "skills.cat3": "الوعي الرقمي والواجهات",

        "s1": "الخدمات المالية",
        "s2": "الإدارة التنفيذية",
        "s3": "المحاسبة",
        "s4": "إعداد الرواتب",
        "s5": "التصريحات الضريبية",
        "s6": "تحصيل الديون",
        "s7": "مراقبة الميزانية",
        "s8": "المطابقة البنكية",
        "s9": "التواصل مع العملاء",
        "s10": "مراقبة نشاط الأسطول",

        "lang.title": "القدرات اللغوية",
        "lang.ar": "العربية",
        "lang.fr": "الفرنسية",
        "lang.en": "الإنجليزية",
        "lang.native": "اللغة الأم",
        "lang.fluent": "بطلاقة",

        "contact.title": "بوابة الاتصال الآمنة",
        "contact.info": "الخطوط المباشرة",
        "contact.phone": "رقم الهاتف",
        "contact.email": "البريد الإلكتروني",
        "contact.address": "العنوان",
        "contact.send": "بدء الإرسال",
        "contact.name": "الهوية (الاسم)",
        "contact.email_field": "بروتوكول العودة (البريد)",
        "contact.message": "حمولة البيانات (الرسالة)",
        "contact.submit": "إرسال الرسالة",

        "footer.role": "مسؤولة إدارية ومالية",
        "footer.copy": "© 2060 جميع الحقوق محفوظة. النظام V1.0"
    }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {

    // 1. Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-set-lang');
            setLanguage(lang);

            // Update active class
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 2. Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('theme-dark')) {
            body.classList.replace('theme-dark', 'theme-light');
        } else {
            body.classList.replace('theme-light', 'theme-dark');
        }
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Staggered children animations
                const staggerElems = entry.target.querySelectorAll('.timeline-item, .edu-card, .skill-category, .lang-card');
                staggerElems.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animated');
                    }, 300 + index * 150);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => observer.observe(sec));

    // 4. Cursor Follower
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }
});

// --- HELPER FUNC: SET LANG ---
function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
