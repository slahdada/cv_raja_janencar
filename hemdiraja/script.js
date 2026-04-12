/* ════════════════════════════════════════════════
   SCRIPT.JS — HEMDI RAJA PORTFOLIO
   Multilingue · Thème · Particules · Animations
════════════════════════════════════════════════ */

/* ─── TRADUCTIONS ─────────────────────────────── */
const translations = {
    fr: {
        nav_logo: "Hemdi Raja",
        nav_home: "Accueil", nav_about: "À propos",
        nav_exp: "Expérience", nav_edu: "Formation",
        nav_skills: "Compétences", nav_contact: "Contact",
        hero_subtitle_top: "Administrative & Financial Manager",
        hero_tagline: "Excellence Administrative · Leadership Financier",
        hero_bio: "Professionnelle senior en administration, finance et comptabilité — alliant rigueur analytique, maîtrise digitale et vision stratégique au service de l'excellence organisationnelle.",
        hero_cta1: "Me contacter", hero_cta2: "Envoyer un e-mail", hero_cta3: "Appeler",
        stat_years: "Années d'exp.", stat_companies: "Entreprises", stat_langs: "Langues",
        scroll_hint: "Défiler",
        about_label: "Profil", about_title: "À propos de moi",
        about_card1_title: "Profil professionnel",
        about_card1_text: "Professionnelle de l'administration, de la finance, de la gestion et de la comptabilité, dotée d'une solide expérience et d'une bonne maîtrise des outils informatiques. Prête à mettre ses compétences au service d'une organisation structurée et ambitieuse.",
        about_card2_title: "Localisation",
        about_card3_title: "Formation",
        about_card3_text: "Master Professionnel en Ingénierie d'Affaires — FSEGS 2013",
        exp_label: "Parcours", exp_title: "Expérience professionnelle",
        present: "Présent",
        exp1_role: "Administrative and Financial Manager",
        exp1_t1: "Classement mensuel des dossiers comptables et préparation de la paie",
        exp1_t2: "Préparation des retenues à la source",
        exp1_t3: "Recouvrement des créances",
        exp1_t4: "Préparation des contrats de vente et de location, facturation sur Dolibarr",
        exp1_t5: "Préparation des devis, réservation par e-mail et suivi client",
        exp1_t6: "Suivi de l'activité du parc automobile",
        badge_current: "Poste actuel",
        exp2_role: "Accounting Assistant",
        exp2_t1: "Préparation de la paie",
        exp2_t2: "Déclarations fiscales et sociales",
        exp2_t3: "Préparation des acomptes provisionnels",
        exp3_role: "Accounting Assistant",
        exp3_t1: "Saisie des pièces comptables",
        exp3_t2: "Saisie et validation des pièces bancaires",
        exp3_t3: "Rapprochements bancaires",
        exp3_t4: "Justification des comptes",
        exp4_role: "Management Controller",
        exp4_t1: "Prévisions d'activité, budgets et organisation",
        exp4_t2: "Analyse des écarts entre réalisations et prévisions",
        exp4_t3: "Développement d'outils d'analyse et tableaux de bord",
        exp4_t4: "Mesure et analyse statistique des écarts",
        exp5_role: "Surveyor",
        exp5_t1: "Statistiques sur l'environnement et la situation financière des entreprises",
        exp6_role: "Stage de fin d'études",
        exp6_t1: "Veille économique et stratégie d'entreprise",
        edu_label: "Académique", edu_title: "Formation",
        edu1_degree: "Master Professionnel", edu1_field: "Ingénierie d'Affaires et Commerce International",
        edu2_degree: "Licence en Gestion", edu2_field: "Spécialité Finance",
        edu3_degree: "Baccalauréat", edu3_field: "Sciences expérimentales", edu3_school: "Lycée Sbikha",
        skills_label: "Expertise", skills_title: "Compétences",
        skills_business: "Compétences Métiers",
        sk_finance: "Services Financiers", sk_admin: "Administration", sk_accounting: "Comptabilité",
        sk_payroll: "Préparation de paie", sk_fiscal: "Déclarations fiscales", sk_debt: "Recouvrement",
        sk_invoicing: "Facturation", sk_budget: "Suivi budgétaire", sk_bank: "Rapprochements bancaires",
        sk_dashboard: "Tableaux de bord",
        skills_software: "Logiciels & Outils",
        skills_tech: "Technologies Numériques",
        skills_tech_note: "Compétences complémentaires en outils numériques et technologies web",
        skills_langs: "Langues",
        lang_arabic: "Arabe", lang_french: "Français", lang_english: "Anglais",
        lang_native: "Langue maternelle", lang_fluent: "Courant",
        contact_label: "Collaboration", contact_title: "Me contacter",
        contact_phone_label: "Téléphone", contact_email_label: "E-mail", contact_address_label: "Adresse",
        cta_contact: "Me contacter", cta_email: "Envoyer un e-mail", cta_call: "Appeler maintenant",
        cv_title: "Administrative & Financial Manager", cv_quote: "« Rigueur · Excellence · Innovation »",
        footer_role: "Administrative & Financial Manager", footer_rights: "Tous droits réservés",
    },
    en: {
        nav_logo: "Hemdi Raja",
        nav_home: "Home", nav_about: "About",
        nav_exp: "Experience", nav_edu: "Education",
        nav_skills: "Skills", nav_contact: "Contact",
        hero_subtitle_top: "Administrative & Financial Manager",
        hero_tagline: "Administrative Excellence · Financial Leadership",
        hero_bio: "Senior professional in administration, finance and accounting — combining analytical rigor, digital proficiency and strategic vision in the service of organizational excellence.",
        hero_cta1: "Contact me", hero_cta2: "Send an email", hero_cta3: "Call now",
        stat_years: "Years exp.", stat_companies: "Companies", stat_langs: "Languages",
        scroll_hint: "Scroll",
        about_label: "Profile", about_title: "About me",
        about_card1_title: "Professional profile",
        about_card1_text: "Professional in administration, finance, management and accounting, with solid experience and strong computer skills. Ready to put her skills at the service of a structured and ambitious organization.",
        about_card2_title: "Location",
        about_card3_title: "Education",
        about_card3_text: "Professional Master's in Business Engineering — FSEGS 2013",
        exp_label: "Career", exp_title: "Professional Experience",
        present: "Present",
        exp1_role: "Administrative and Financial Manager",
        exp1_t1: "Monthly filing of accounting records and payroll preparation",
        exp1_t2: "Preparation of withholding taxes",
        exp1_t3: "Debt collection",
        exp1_t4: "Preparation of sale and rental contracts, invoicing on Dolibarr",
        exp1_t5: "Quotes preparation, email reservations and client follow-up",
        exp1_t6: "Monitoring of vehicle fleet activity",
        badge_current: "Current position",
        exp2_role: "Accounting Assistant",
        exp2_t1: "Payroll preparation",
        exp2_t2: "Tax and social declarations",
        exp2_t3: "Preparation of provisional installments",
        exp3_role: "Accounting Assistant",
        exp3_t1: "Entry of accounting records",
        exp3_t2: "Entry and validation of bank records",
        exp3_t3: "Bank reconciliations",
        exp3_t4: "Account justification",
        exp4_role: "Management Controller",
        exp4_t1: "Activity forecasts, budgets and organization",
        exp4_t2: "Variance analysis between actuals and forecasts",
        exp4_t3: "Development of analysis tools and dashboards",
        exp4_t4: "Statistical measurement and analysis of variances",
        exp5_role: "Surveyor",
        exp5_t1: "Statistics on business environment and financial situation",
        exp6_role: "End-of-Studies Internship",
        exp6_t1: "Economic intelligence and corporate strategy",
        edu_label: "Academic", edu_title: "Education",
        edu1_degree: "Professional Master's Degree", edu1_field: "Business Engineering and International Trade",
        edu2_degree: "Bachelor's Degree in Management", edu2_field: "Finance Specialty",
        edu3_degree: "Baccalaureate", edu3_field: "Experimental Sciences", edu3_school: "Sbikha High School",
        skills_label: "Expertise", skills_title: "Skills",
        skills_business: "Business Skills",
        sk_finance: "Financial Services", sk_admin: "Administration", sk_accounting: "Accounting",
        sk_payroll: "Payroll preparation", sk_fiscal: "Tax declarations", sk_debt: "Debt collection",
        sk_invoicing: "Invoicing", sk_budget: "Budget monitoring", sk_bank: "Bank reconciliation",
        sk_dashboard: "Dashboard analysis",
        skills_software: "Software & Tools",
        skills_tech: "Digital Technologies",
        skills_tech_note: "Complementary skills in digital tools and web technologies",
        skills_langs: "Languages",
        lang_arabic: "Arabic", lang_french: "French", lang_english: "English",
        lang_native: "Native language", lang_fluent: "Fluent",
        contact_label: "Collaboration", contact_title: "Contact me",
        contact_phone_label: "Phone", contact_email_label: "Email", contact_address_label: "Address",
        cta_contact: "Contact me", cta_email: "Send an email", cta_call: "Call now",
        cv_title: "Administrative & Financial Manager", cv_quote: "« Rigor · Excellence · Innovation »",
        footer_role: "Administrative & Financial Manager", footer_rights: "All rights reserved",
    },
    ar: {
        nav_logo: "همدي راجا",
        nav_home: "الرئيسية", nav_about: "من أنا",
        nav_exp: "الخبرة", nav_edu: "التكوين",
        nav_skills: "المهارات", nav_contact: "التواصل",
        hero_subtitle_top: "مديرة إدارية ومالية",
        hero_tagline: "التميّز الإداري · القيادة المالية",
        hero_bio: "متخصصة في الإدارة والمال والمحاسبة — تجمع بين الدقة التحليلية والكفاءة الرقمية والرؤية الاستراتيجية في خدمة التميز التنظيمي.",
        hero_cta1: "تواصل معي", hero_cta2: "أرسل بريداً", hero_cta3: "اتصل الآن",
        stat_years: "سنوات خبرة", stat_companies: "شركات", stat_langs: "لغات",
        scroll_hint: "اسحب للأسفل",
        about_label: "الملف", about_title: "من أنا",
        about_card1_title: "الملف المهني",
        about_card1_text: "متخصصة في الإدارة والمالية والمحاسبة، تتمتع بخبرة واسعة وإتقان جيد للأدوات المعلوماتية. مستعدة لتقديم مهاراتها لصالح منظمة منظمة وطموحة.",
        about_card2_title: "الموقع",
        about_card3_title: "التكوين",
        about_card3_text: "ماستر مهني في هندسة الأعمال — FSEGS 2013",
        exp_label: "المسار", exp_title: "الخبرة المهنية",
        present: "الحاضر",
        exp1_role: "مديرة إدارية ومالية",
        exp1_t1: "التصنيف الشهري للملفات المحاسبية وإعداد الرواتب",
        exp1_t2: "إعداد الضرائب المقتطعة من المصدر",
        exp1_t3: "تحصيل الديون",
        exp1_t4: "إعداد عقود البيع والإيجار، الفوترة على Dolibarr",
        exp1_t5: "إعداد عروض الأسعار، الحجز عبر البريد الإلكتروني ومتابعة العملاء",
        exp1_t6: "متابعة نشاط أسطول السيارات",
        badge_current: "المنصب الحالي",
        exp2_role: "مساعدة محاسبة",
        exp2_t1: "إعداد الرواتب",
        exp2_t2: "التصريحات الضريبية والاجتماعية",
        exp2_t3: "إعداد الأقساط المؤقتة",
        exp3_role: "مساعدة محاسبة",
        exp3_t1: "إدخال الوثائق المحاسبية",
        exp3_t2: "إدخال والتحقق من الوثائق البنكية",
        exp3_t3: "تسوية الحسابات البنكية",
        exp3_t4: "تبرير الحسابات",
        exp4_role: "مراقبة التسيير",
        exp4_t1: "توقعات النشاط والميزانيات والتنظيم",
        exp4_t2: "تحليل الانحرافات بين المحقق والتوقعات",
        exp4_t3: "تطوير أدوات التحليل ولوحات القيادة",
        exp4_t4: "القياس والتحليل الإحصائي للانحرافات",
        exp5_role: "باحثة",
        exp5_t1: "إحصاءات حول البيئة والوضع المالي للمؤسسات",
        exp6_role: "تدريب ختم الدراسة",
        exp6_t1: "اليقظة الاقتصادية واستراتيجية المؤسسة",
        edu_label: "الأكاديمي", edu_title: "التكوين",
        edu1_degree: "ماستر مهني", edu1_field: "هندسة الأعمال والتجارة الدولية",
        edu2_degree: "إجازة في التسيير", edu2_field: "تخصص مالية",
        edu3_degree: "بكالوريا", edu3_field: "علوم تجريبية", edu3_school: "معهد صبيخة",
        skills_label: "الخبرات", skills_title: "المهارات",
        skills_business: "المهارات المهنية",
        sk_finance: "الخدمات المالية", sk_admin: "الإدارة", sk_accounting: "المحاسبة",
        sk_payroll: "إعداد الرواتب", sk_fiscal: "التصريحات الضريبية", sk_debt: "تحصيل الديون",
        sk_invoicing: "الفوترة", sk_budget: "متابعة الميزانية", sk_bank: "تسوية الحسابات البنكية",
        sk_dashboard: "تحليل لوحات القيادة",
        skills_software: "البرامج والأدوات",
        skills_tech: "التقنيات الرقمية",
        skills_tech_note: "مهارات تكميلية في الأدوات الرقمية والتقنيات الرقمية",
        skills_langs: "اللغات",
        lang_arabic: "العربية", lang_french: "الفرنسية", lang_english: "الإنجليزية",
        lang_native: "اللغة الأم", lang_fluent: "طلاقة",
        contact_label: "التعاون", contact_title: "تواصل معي",
        contact_phone_label: "الهاتف", contact_email_label: "البريد الإلكتروني", contact_address_label: "العنوان",
        cta_contact: "تواصل معي", cta_email: "أرسل بريداً إلكترونياً", cta_call: "اتصل الآن",
        cv_title: "مديرة إدارية ومالية", cv_quote: "« دقة · تميّز · ابتكار »",
        footer_role: "مديرة إدارية ومالية", footer_rights: "جميع الحقوق محفوظة",
    }
};

/* ─── ÉTAT GLOBAL ─────────────────────────────── */
let currentLang = 'fr';
let currentTheme = 'dark';

/* ─── INITIALISATION ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initTheme();
    initLang();
    initNavbar();
    initParticles();
    initReveal();
    initHamburger();
});

/* ─── CURSOR ─────────────────────────────── */
function initCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
    });

    function animRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(animRing);
    }
    animRing();

    document.addEventListener('mousedown', () => dot.style.transform = 'translate(-50%,-50%) scale(0.6)');
    document.addEventListener('mouseup', () => dot.style.transform = 'translate(-50%,-50%) scale(1)');
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ─── THEME ─────────────────────────────── */
function initTheme() {
    const saved = localStorage.getItem('hr-theme') || 'dark';
    setTheme(saved);

    document.getElementById('themeToggle')?.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hr-theme', theme);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ─── LANGUE ─────────────────────────────── */
function initLang() {
    const saved = localStorage.getItem('hr-lang') || 'fr';
    setLang(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
}

function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('hr-lang', lang);

    // Direction RTL/LTR
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : lang === 'en' ? 'en' : 'fr');
    document.body.setAttribute('data-dir', isRTL ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Traduire
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
}

/* ─── NAVBAR ─────────────────────────────── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('navLinks')?.classList.remove('open');
                document.getElementById('hamburger')?.classList.remove('open');
            }
        });
    });
}

/* ─── HAMBURGER ─────────────────────────────── */
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks?.classList.toggle('open');
    });
}

/* ─── REVEAL ON SCROLL ─────────────────────────────── */
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
}

/* ─── CANVAS PARTICLES ─────────────────────────────── */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, () => createParticle(W, H));

    window.addEventListener('resize', () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    function createParticle(w, h) {
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.5 + 0.3,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            alpha: Math.random() * 0.6 + 0.1,
            gold: Math.random() > 0.6
        };
    }

    function drawParticle(p) {
        ctx.save();
        if (p.gold) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#c9a227';
        }
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.gold ? '#c9a227' : (currentTheme === 'dark' ? '#ffffff' : '#888888');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.save();
                    ctx.globalAlpha = (1 - dist / 120) * 0.12;
                    ctx.strokeStyle = '#c9a227';
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);
        drawConnections();
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;
            drawParticle(p);
        });
        requestAnimationFrame(animate);
    }
    animate();
}
