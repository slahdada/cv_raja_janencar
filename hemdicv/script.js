/* ============================================================
   SCRIPT.JS – Hemdi Raja Portfolio
   ============================================================ */

/* ==================== TRANSLATIONS ==================== */
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_experience: "Expérience",
    nav_education: "Formation",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    hero_badge: "Experte Finance & Administration",
    hero_title: "Directrice Administrative et Financière",
    hero_tagline: "Professionnelle en administration, finance, comptabilité et gestion avec une solide expérience et une maîtrise des outils numériques modernes.",
    btn_contact: "Me Contacter",
    btn_cv: "Télécharger CV",
    btn_cv2: "Télécharger mon CV",
    badge_expert: "Expert Finance",
    about_tag: "À Propos de Moi",
    about_title: "Profil Professionnel",
    about_lead: "Professionnelle chevronnée avec plus de 10 ans d'expérience dans les domaines de la finance, de la comptabilité et de la gestion administrative.",
    about_p1: "Forte d'une expertise solide en gestion financière et administrative, je maîtrise les outils numériques modernes et les logiciels de gestion d'entreprise. Mon parcours m'a permis d'acquérir une vision globale des enjeux financiers et organisationnels des entreprises.",
    about_p2: "Diplômée en Ingénierie d'Entreprises et Commerce International, je combine excellence académique et expérience terrain pour vous apporter des solutions efficaces et durables.",
    tag_finance: "Gestion Financière",
    tag_admin: "Management Administratif",
    tag_accounting: "Comptabilité",
    tag_digital: "Outils Numériques",
    tag_org: "Organisation Corporate",
    stat_years: "Années d'Expérience",
    stat_companies: "Entreprises",
    stat_projects: "Projets Réalisés",
    stat_langs: "Langues Maîtrisées",
    exp_tag: "Parcours",
    exp_title: "Expérience Professionnelle",
    exp1_period: "2019 – Présent",
    exp1_title: "Directrice Administrative et Financière",
    exp1_r1: "Classification des dossiers comptables",
    exp1_r2: "Préparation des fiches de paie",
    exp1_r3: "Préparation des retenues à la source",
    exp1_r4: "Recouvrement des créances",
    exp1_r5: "Gestion des contrats de vente et de location",
    exp1_r6: "Facturation via le logiciel Dolibarr",
    exp1_r7: "Communication clients et gestion des réservations",
    exp1_r8: "Suivi de l'activité du parc automobile",
    badge_current: "En poste",
    exp2_title: "Assistante Comptable",
    exp2_r1: "Préparation des fiches de paie",
    exp2_r2: "Déclarations fiscales et sociales",
    exp2_r3: "Préparation des acomptes provisionnels",
    exp3_title: "Assistante Comptable",
    exp3_r1: "Saisie des données comptables",
    exp3_r2: "Validation des documents bancaires",
    exp3_r3: "Rapprochement bancaire",
    exp3_r4: "Justification des comptes",
    exp4_title: "Contrôleur de Gestion",
    exp4_r1: "Planification prévisionnelle et budgétaire",
    exp4_r2: "Analyse des tableaux de bord",
    exp4_r3: "Suivi des performances",
    exp4_r4: "Analyse des écarts statistiques",
    exp5_title: "Enquêtrice",
    exp5_r1: "Recherche statistique sur les entreprises et l'environnement",
    exp6_title: "Stage de Fin d'études",
    exp6_r1: "Intelligence économique",
    exp6_r2: "Analyse de la stratégie d'entreprise",
    edu_tag: "Parcours Académique",
    edu_title: "Formation",
    edu1_title: "Master Professionnel",
    edu1_field: "Ingénierie d'Entreprises et Commerce International",
    edu1_school: "Faculté des Sciences Économiques et de Gestion de Sousse",
    edu2_title: "Licence",
    edu2_field: "Gestion – Spécialité Finance",
    edu2_school: "Faculté de Droit et de Sciences Économiques et Politiques de Sousse",
    edu3_title: "Baccalauréat",
    edu3_field: "Sciences Expérimentales",
    edu3_school: "Lycée de Sbikha",
    skills_tag: "Savoir-Faire",
    skills_title: "Compétences",
    skills_pro: "Compétences Professionnelles",
    skills_soft: "Logiciels",
    skills_digital: "Compétences Numériques",
    skills_langs: "Langues",
    sk_finance: "Services Financiers",
    sk_accounting: "Comptabilité",
    sk_admin: "Management Administratif",
    sk_analysis: "Analyse Métier",
    lang_ar: "Arabe",
    lang_fr: "Français",
    lang_en: "Anglais",
    lang_native: "Langue Maternelle",
    lang_fluent: "Courant",
    lang_fluent2: "Courant",
    contact_tag: "Restons en Contact",
    contact_title: "Contactez-Moi",
    contact_intro: "Parlons de Votre Projet",
    contact_desc: "N'hésitez pas à me contacter pour toute opportunité professionnelle ou collaboration.",
    c_phone: "Téléphone",
    c_email: "Email",
    c_location: "Localisation",
    form_name: "Nom Complet",
    form_email: "Adresse Email",
    form_subject: "Sujet",
    form_message: "Message",
    form_send: "Envoyer le Message",
    form_success: "Message envoyé avec succès !"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_badge: "Finance & Administration Expert",
    hero_title: "Administrative and Financial Manager",
    hero_tagline: "A professional in administration, finance, accounting, and management with strong experience and mastery of modern digital tools.",
    btn_contact: "Contact Me",
    btn_cv: "Download CV",
    btn_cv2: "Download my CV",
    badge_expert: "Finance Expert",
    about_tag: "About Me",
    about_title: "Professional Profile",
    about_lead: "Seasoned professional with over 10 years of experience in finance, accounting and administrative management.",
    about_p1: "With solid expertise in financial and administrative management, I master modern digital tools and enterprise management software. My career has given me a global understanding of the financial and organizational challenges businesses face.",
    about_p2: "Holding a Master's in Business Engineering and International Trade, I combine academic excellence with field experience to deliver effective and sustainable solutions.",
    tag_finance: "Financial Management",
    tag_admin: "Administrative Management",
    tag_accounting: "Accounting",
    tag_digital: "Digital Tools",
    tag_org: "Corporate Organization",
    stat_years: "Years of Experience",
    stat_companies: "Companies",
    stat_projects: "Projects Completed",
    stat_langs: "Languages Mastered",
    exp_tag: "Career",
    exp_title: "Professional Experience",
    exp1_period: "2019 – Present",
    exp1_title: "Administrative and Financial Manager",
    exp1_r1: "Accounting file classification",
    exp1_r2: "Payroll preparation",
    exp1_r3: "Preparation of withholding tax",
    exp1_r4: "Debt recovery",
    exp1_r5: "Sales and rental contract management",
    exp1_r6: "Invoicing using Dolibarr software",
    exp1_r7: "Customer communication and reservation management",
    exp1_r8: "Monitoring vehicle fleet activity",
    badge_current: "Current",
    exp2_title: "Accounting Assistant",
    exp2_r1: "Payroll preparation",
    exp2_r2: "Fiscal and social declarations",
    exp2_r3: "Preparation of provisional tax installments",
    exp3_title: "Accounting Assistant",
    exp3_r1: "Accounting data entry",
    exp3_r2: "Bank document validation",
    exp3_r3: "Bank reconciliation",
    exp3_r4: "Account justification",
    exp4_title: "Management Controller",
    exp4_r1: "Forecast and budget planning",
    exp4_r2: "Dashboard analysis",
    exp4_r3: "Performance monitoring",
    exp4_r4: "Statistical discrepancy analysis",
    exp5_title: "Surveyor",
    exp5_r1: "Statistical research on companies and environment",
    exp6_title: "End-of-Studies Internship",
    exp6_r1: "Economic intelligence",
    exp6_r2: "Business strategy analysis",
    edu_tag: "Academic Background",
    edu_title: "Education",
    edu1_title: "Professional Master's Degree",
    edu1_field: "Business Engineering and International Trade",
    edu1_school: "Faculty of Economic Sciences and Management of Sousse",
    edu2_title: "Bachelor's Degree",
    edu2_field: "Management – Finance Specialty",
    edu2_school: "Faculty of Law and Economic and Political Sciences of Sousse",
    edu3_title: "Baccalaureate",
    edu3_field: "Experimental Sciences",
    edu3_school: "Sbikha High School",
    skills_tag: "Expertise",
    skills_title: "Skills",
    skills_pro: "Professional Skills",
    skills_soft: "Software",
    skills_digital: "Digital Skills",
    skills_langs: "Languages",
    sk_finance: "Financial Services",
    sk_accounting: "Accounting",
    sk_admin: "Administrative Management",
    sk_analysis: "Business Analysis",
    lang_ar: "Arabic",
    lang_fr: "French",
    lang_en: "English",
    lang_native: "Native Language",
    lang_fluent: "Fluent",
    lang_fluent2: "Fluent",
    contact_tag: "Let's Connect",
    contact_title: "Contact Me",
    contact_intro: "Let's Talk About Your Project",
    contact_desc: "Feel free to reach out for any professional opportunity or collaboration.",
    c_phone: "Phone",
    c_email: "Email",
    c_location: "Location",
    form_name: "Full Name",
    form_email: "Email Address",
    form_subject: "Subject",
    form_message: "Message",
    form_send: "Send Message",
    form_success: "Message sent successfully!"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_experience: "الخبرة",
    nav_education: "التعليم",
    nav_skills: "المهارات",
    nav_contact: "التواصل",
    hero_badge: "خبيرة في المالية والإدارة",
    hero_title: "مديرة إدارية ومالية",
    hero_tagline: "متخصصة في الإدارة والمالية والمحاسبة والتسيير، تمتلك خبرة واسعة وإتقاناً للأدوات الرقمية الحديثة.",
    btn_contact: "تواصل معي",
    btn_cv: "تنزيل السيرة الذاتية",
    btn_cv2: "تنزيل سيرتي الذاتية",
    badge_expert: "خبيرة مالية",
    about_tag: "من أنا",
    about_title: "الملف المهني",
    about_lead: "متخصصة متمرسة بأكثر من 10 سنوات خبرة في المالية والمحاسبة والتسيير الإداري.",
    about_p1: "بفضل خبرتي الراسخة في الإدارة المالية والتسيير، أتقن الأدوات الرقمية الحديثة وبرامج إدارة المؤسسات. منحني مساري المهني رؤية شاملة للتحديات المالية والتنظيمية للشركات.",
    about_p2: "حاملة ماجستير في هندسة الأعمال والتجارة الدولية، أجمع بين التميز الأكاديمي والخبرة الميدانية لتقديم حلول فعّالة ومستدامة.",
    tag_finance: "التسيير المالي",
    tag_admin: "الإدارة",
    tag_accounting: "المحاسبة",
    tag_digital: "الأدوات الرقمية",
    tag_org: "التنظيم المؤسسي",
    stat_years: "سنوات الخبرة",
    stat_companies: "المؤسسات",
    stat_projects: "المشاريع المنجزة",
    stat_langs: "اللغات المتقنة",
    exp_tag: "المسيرة المهنية",
    exp_title: "الخبرة المهنية",
    exp1_period: "2019 – حتى الآن",
    exp1_title: "مديرة إدارية ومالية",
    exp1_r1: "تصنيف ملفات المحاسبة",
    exp1_r2: "إعداد كشوف الرواتب",
    exp1_r3: "إعداد الاستقطاعات من المصدر",
    exp1_r4: "استرداد الديون",
    exp1_r5: "إدارة عقود البيع والإيجار",
    exp1_r6: "الفوترة ببرنامج Dolibarr",
    exp1_r7: "التواصل مع العملاء وإدارة الحجوزات",
    exp1_r8: "متابعة نشاط حظيرة السيارات",
    badge_current: "في المنصب",
    exp2_title: "محاسبة مساعدة",
    exp2_r1: "إعداد كشوف الرواتب",
    exp2_r2: "التصريحات الجبائية والاجتماعية",
    exp2_r3: "إعداد الأقساط الاحتياطية",
    exp3_title: "محاسبة مساعدة",
    exp3_r1: "إدخال البيانات المحاسبية",
    exp3_r2: "التحقق من الوثائق البنكية",
    exp3_r3: "المطابقة البنكية",
    exp3_r4: "تبرير الحسابات",
    exp4_title: "مراقب تسيير",
    exp4_r1: "تخطيط التوقعات والميزانية",
    exp4_r2: "تحليل لوحات القيادة",
    exp4_r3: "متابعة الأداء",
    exp4_r4: "تحليل الانحرافات الإحصائية",
    exp5_title: "باحثة ميدانية",
    exp5_r1: "بحث إحصائي حول المؤسسات والبيئة",
    exp6_title: "تدريب نهاية الدراسة",
    exp6_r1: "الذكاء الاقتصادي",
    exp6_r2: "تحليل استراتيجية المؤسسة",
    edu_tag: "المسار الأكاديمي",
    edu_title: "التكوين",
    edu1_title: "ماجستير مهني",
    edu1_field: "هندسة الأعمال والتجارة الدولية",
    edu1_school: "كلية العلوم الاقتصادية والتصرف بسوسة",
    edu2_title: "إجازة",
    edu2_field: "التصرف – تخصص مالية",
    edu2_school: "كلية الحقوق والعلوم الاقتصادية والسياسية بسوسة",
    edu3_title: "بكالوريا",
    edu3_field: "علوم تجريبية",
    edu3_school: "ثانوية صبيخة",
    skills_tag: "المعرفة والكفاءات",
    skills_title: "المهارات",
    skills_pro: "الكفاءات المهنية",
    skills_soft: "البرامج",
    skills_digital: "المهارات الرقمية",
    skills_langs: "اللغات",
    sk_finance: "الخدمات المالية",
    sk_accounting: "المحاسبة",
    sk_admin: "الإدارة",
    sk_analysis: "تحليل الأعمال",
    lang_ar: "العربية",
    lang_fr: "الفرنسية",
    lang_en: "الإنجليزية",
    lang_native: "اللغة الأم",
    lang_fluent: "طلاقة",
    lang_fluent2: "طلاقة",
    contact_tag: "لنبقى على تواصل",
    contact_title: "تواصل معي",
    contact_intro: "دعنا نتحدث عن مشروعك",
    contact_desc: "لا تتردد في التواصل معي لأي فرصة مهنية أو شراكة.",
    c_phone: "الهاتف",
    c_email: "البريد الإلكتروني",
    c_location: "الموقع",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_subject: "الموضوع",
    form_message: "الرسالة",
    form_send: "إرسال الرسالة",
    form_success: "تم إرسال الرسالة بنجاح!"
  }
};

/* ==================== LANGUAGE SYSTEM ==================== */
let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update form placeholders
  const placeholders = {
    fr: { name: 'Votre nom', email: 'votre@email.com', subject: "Objet du message", message: 'Votre message...' },
    en: { name: 'Your name', email: 'your@email.com', subject: "Message subject", message: 'Your message...' },
    ar: { name: 'اسمك الكامل', email: 'بريدك@الإلكتروني.com', subject: "موضوع الرسالة", message: 'رسالتك...' }
  };
  const ph = placeholders[lang];
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  if (nameInput) nameInput.placeholder = ph.name;
  if (emailInput) emailInput.placeholder = ph.email;
  if (subjectInput) subjectInput.placeholder = ph.subject;
  if (messageInput) messageInput.placeholder = ph.message;

  // HTML lang + dir
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });

  // Font for Arabic
  document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";

  // Show language selector on mobile if needed
  document.querySelector('.lang-selector').style.display = 'flex';
}

/* ==================== THEME TOGGLE ==================== */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

/* ==================== PRELOADER ==================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 500);
    }
  }, 1800);
});

/* ==================== NAVBAR ==================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
  updateActiveNav();
  updateBackToTop();
});

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu?.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navMenu?.classList.remove('open');
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}

/* ==================== BACK TO TOP ==================== */
const backToTop = document.getElementById('backToTop');

function updateBackToTop() {
  if (window.scrollY > 400) {
    backToTop?.classList.add('visible');
  } else {
    backToTop?.classList.remove('visible');
  }
}

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==================== CUSTOM CURSOR ==================== */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (window.matchMedia('(hover: hover)').matches) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    if (cursorRing) {
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
    }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .skill-chip, .tag, .stat-card, .edu-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing?.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorRing?.classList.remove('hovered'));
  });
}

/* ==================== ANIMATED COUNTERS ==================== */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const update = () => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      return;
    }
    el.textContent = Math.floor(current);
    requestAnimationFrame(update);
  };
  update();
}

/* ==================== SKILL BARS ==================== */
function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
}

/* ==================== INTERSECTION OBSERVER ==================== */
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// Stats counter observer
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) statsObserver.observe(aboutStats);

// Skills bars observer
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);

/* ==================== CONTACT FORM ==================== */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name')?.value?.trim();
  const email = document.getElementById('email')?.value?.trim();
  const message = document.getElementById('message')?.value?.trim();

  if (!name || !email || !message) return;

  // Simulate submit
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Envoi en cours...</span>';
  }

  setTimeout(() => {
    if (formSuccess) {
      formSuccess.classList.remove('hidden');
      const t = translations[currentLang] || translations.fr;
      formSuccess.querySelector('span').textContent = t.form_success;
    }
    contactForm.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      const t = translations[currentLang] || translations.fr;
      submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> <span>${t.form_send}</span>`;
    }
    setTimeout(() => formSuccess?.classList.add('hidden'), 5000);
  }, 1500);
});

/* ==================== SCROLL ANIMATIONS ==================== */
// Parallax on hero orbs
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orbs = document.querySelectorAll('.hero-orb');
  orbs.forEach((orb, i) => {
    const speed = [0.08, 0.12, 0.06][i] || 0.08;
    orb.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setLanguage('fr');

  // Fallback for profile photo
  const profilePhoto = document.getElementById('profilePhoto');
  if (profilePhoto) {
    profilePhoto.onerror = function() {
      this.style.display = 'none';
      const container = this.parentElement;
      if (container) {
        container.style.background = 'linear-gradient(135deg, #6366f1, #a78bfa)';
        container.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:900;color:#fff;font-family:Inter,sans-serif;">HR</div>';
      }
    };
  }
});
