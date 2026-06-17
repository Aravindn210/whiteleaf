console.log('%c[Whiteleaf Animations] main.js file loaded at top-level', 'background: #FDFCF9; color: #9DCB47; font-size: 14px; font-weight: bold; padding: 4px;');

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Whiteleaf Animations] DOMContentLoaded fired');
    console.log('[Whiteleaf Animations] gsap loaded:', typeof gsap !== 'undefined');
    console.log('[Whiteleaf Animations] ScrollTrigger loaded:', typeof ScrollTrigger !== 'undefined');
    console.log('[Whiteleaf Animations] Lenis loaded:', typeof Lenis !== 'undefined');

    // ====================================================
    // 1. Translation Dictionary (Bilingual Engine)
    // ====================================================
    const translations = {
        'logo-sub': {
            en: 'Interiors',
            ar: 'التصميم الداخلي'
        },
        'nav-home': {
            en: 'Home',
            ar: 'الرئيسية'
        },
        'nav-services': {
            en: 'Services',
            ar: 'الخدمات'
        },
        'nav-about': {
            en: 'About',
            ar: 'من نحن'
        },
        'nav-contact': {
            en: 'Get in Touch',
            ar: 'تواصل معنا'
        },
        'theme-toggle-label': {
            en: 'Dark Mode',
            ar: 'الوضع الداكن'
        },
        'hero-tagline': {
            en: 'Bespoke Space & Form',
            ar: 'تصميم وتنفيذ متكامل للفراغ'
        },
        'hero-title-1': {
            en: 'Crafting',
            ar: 'صياغة'
        },
        'hero-title-2': {
            en: 'Bespoke',
            ar: 'تصاميم مخصصة'
        },
        'hero-title-3': {
            en: 'Environments.',
            ar: 'لبيئات ملهمة.'
        },
        'hero-desc': {
            en: 'We design and execute award-winning international trade show pavilions, corporate office interiors, and luxury brand launch experiences across Dubai and globally.',
            ar: 'نقوم بتصميم وتنفيذ أجنحة المعارض الدولية الحائزة على جوائز، والتصميم الداخلي المتميز للمكاتب والشركات، وفعاليات إطلاق العلامات التجارية الفاخرة في دبي والعالم.'
        },
        'hero-btn': {
            en: 'Explore Portfolio',
            ar: 'اكتشف أعمالنا'
        },
        'services-hero-tag': {
            en: 'Mastery',
            ar: 'إتقان تسليم المفتاح'
        },
        'services-hero-title': {
            en: 'OUR EXPERTISE & SERVICES',
            ar: 'خبراتنا وخدماتنا'
        },
        'services-hero-desc': {
            en: 'From luxury workplace architecture in Business Bay to award-winning country exhibition pavilions globally, we build environments that embody Silent Luxury and Flawless Execution.',
            ar: 'بدءاً من التجهيزات المكتبية الفاخرة في الخليج التجاري إلى أجنحة المعارض الدولية الحائزة على جوائز حول العالم، نصمم وننفذ بيئات تجسد الفخامة الهادئة والتنفيذ الخالي من العيوب.'
        },
        'service-1-tag': {
            en: '01 / ARCHITECTURAL FIT-OUT',
            ar: '٠١ / التجهيز المعماري'
        },
        'service-1-title': {
            en: 'Interior Design & Fit-Out',
            ar: 'التصميم الداخلي المتكامل والتجهيز'
        },
        'service-1-desc': {
            en: 'We create corporate offices and commercial settings that cultivate productivity and project brand authority. Our interior division handles spatial layouts, detailed 3D rendering, authority approvals (Dubai Municipality, Civil Defense), custom joinery, MEP engineering, and structural execution.',
            ar: 'نبتكر مساحات عمل ومحلات تجارية تعزز الإنتاجية وتجسد حضور العلامة التجارية. يتولى قسم التصميم الداخلي لدينا تخطيط المساحات، والمخططات التنفيذية، والموافقات الحكومية (بلدية دبي، الدفاع المدني)، والتصنيع، والأعمال الكهروميكانيكية، والتشطيبات النهائية.'
        },
        'service-1-feat-1': {
            en: 'Grade-A In-House Joinery',
            ar: 'أعمال خشبية مصنعة داخلياً بجودة عالية'
        },
        'service-1-feat-2': {
            en: 'Bespoke Workspace Planning',
            ar: 'تخطيط مخصص لمساحات العمل'
        },
        'service-1-feat-3': {
            en: 'Integrated MEP Engineering',
            ar: 'أعمال هندسة كهروميكانيكية متكاملة'
        },
        'service-2-tag': {
            en: '02 / TRADE SHOW PAVILIONS',
            ar: '٠٢ / أجنحة المعارض التجارية'
        },
        'service-2-title': {
            en: 'Exhibition Stands & Country Pavilions',
            ar: 'أجنحة المعارض والمنصات الدولية'
        },
        'service-2-desc': {
            en: 'High-impact brand architectures designed for trade shows. With integrated fabrication facilities in Dubai and Mumbai, we build premium double-deckers, custom wood stands, and pavilions. We handle the entire engineering, safety certifications, custom graphics, AV integration, and worldwide logistics.',
            ar: 'هندسة معمارية للمنصات ذات تأثير عالٍ ومصممة لجذب الزوار. بفضل مصانعنا في دبي ومومباي، نقوم بتنفيذ أجنحة ذات طابقين، ومنصات خشبية مخصصة، وهياكل ألومنيوم وعالمياً، ونتولى الهندسة، وشهادات السلامة، والرسومات، وتكامل الصوت والصورة، والخدمات اللوجستية.'
        },
        'service-2-feat-1': {
            en: 'Double-Decker Certified Engineering',
            ar: 'هندسة معتمدة للمنصات ذات الطابقين'
        },
        'service-2-feat-2': {
            en: 'In-House CNC Fabrication',
            ar: 'تصنيع داخلي دقيق باستخدام CNC'
        },
        'service-2-feat-3': {
            en: 'Global Logistics & Setup Control',
            ar: 'إدارة كاملة للخدمات اللوجستية والتركيب عالمياً'
        },
        'service-3-tag': {
            en: '03 / BRAND ARCHITECTURES',
            ar: '٠٣ / فعاليات العلامات التجارية'
        },
        'service-3-title': {
            en: 'Experiential Events & Brand Activations',
            ar: 'الفعاليات التجريبية وتنشيط العلامات التجارية'
        },
        'service-3-desc': {
            en: 'We turn blank canvases into temporary theatrical landscapes. Our events team handles scenic design, advanced illumination arrays, structure styling, staging, audio-visual networks, and interactive digital activations for luxury product reveals and corporate summits.',
            ar: 'نحول المساحات إلى مسارح للعلامات التجارية. يقوم قسم الفعاليات لدينا بتخطيط وتنفيذ منصات العرض الفاخرة، وأنظمة الإضاءة المتقدمة، والديكورات المخصصة، وتكامل الوسائط الرقمية لإطلاق المنتجات الفاخرة وقمم الشركات.'
        },
        'service-3-feat-1': {
            en: 'Immersive Projection Mapping',
            ar: 'إسقاط ضوئي غامر ثلاثي الأبعاد'
        },
        'service-3-feat-2': {
            en: 'Custom Scenic Styling',
            ar: 'ديكورات وتنسيقات مخصصة'
        },
        'service-3-feat-3': {
            en: 'End-to-End AV & Staging Control',
            ar: 'تحكم كامل بالصوت والصورة والمسارح'
        },
        'material-tag': {
            en: 'Our Execution Standard',
            ar: 'معيار التنفيذ لدينا'
        },
        'material-title': {
            en: 'MATERIALITY & CRAFTSMANSHIP',
            ar: 'المواد والصناعة اليدوية'
        },
        'material-desc': {
            en: 'Every piece of wood, steel, glass, and acoustical fabric is curated to deliver silent luxury and high-end sensory appeal.',
            ar: 'يتم اختيار كل قطعة من الخشب والصلب والزجاج والأقمشة بعناية لتقديم فخامة هادئة وتأثير حسي راقٍ.'
        },
        'material-1-title': {
            en: 'Oak & Walnut Veneers',
            ar: 'قشرة خشب البلوط والجوز'
        },
        'material-1-desc': {
            en: 'Custom book-matched veneers crafted in our joinery studio.',
            ar: 'قشرة خشبية مخصصة ومطابقة للفراغات الإنشائية.'
        },
        'material-2-title': {
            en: 'Architectural Metals',
            ar: 'معادن معمارية'
        },
        'material-2-desc': {
            en: 'PVD-coated brass and structural black iron details.',
            ar: 'تفاصيل من النحاس المطلي بـ PVD والحديد الأسود الإنشائي.'
        },
        'material-3-title': {
            en: 'Fluted & Ribbed Glass',
            ar: 'زجاج مضلع ومحزز'
        },
        'material-3-desc': {
            en: 'Textured glass panels for luxury architectural partitioning.',
            ar: 'ألواح زجاجية محكمة لتجزئة المساحات بطابع فاخر.'
        },
        'material-4-title': {
            en: 'Eco Acoustics',
            ar: 'صوتيات صديقة للبيئة'
        },
        'material-4-desc': {
            en: 'Recycled PET felt panels for premium sound control.',
            ar: 'ألواح لباد معاد تدويرها للتحكم الصوتي المتميز.'
        },
        'services-cta-title': {
            en: 'READY TO COLLABORATE?',
            ar: 'جاهز للتعاون معنا؟'
        },
        'services-cta-desc': {
            en: 'Let us transform your commercial vision into a physical statement of architecture. Get in touch with our design directors today.',
            ar: 'دعنا نحول رؤيتك إلى واقع معماري ملموس. تواصل مع مديري التصميم لدينا اليوم.'
        },
        'services-cta-btn': {
            en: 'Initiate Project Dialogue',
            ar: 'ابدأ مناقشة مشروعك'
        },
        'scroll-text': {
            en: 'Scroll to experience',
            ar: 'انزل للأسفل لتجربة العرض'
        },
        'pillar-span-1': {
            en: '01 // INTERNATIONAL STANDS',
            ar: '٠١ // أجنحة معارض دولية'
        },
        'pillar-title-1': {
            en: 'EXHIBITIONS',
            ar: 'المعارض'
        },
        'pillar-desc-1': {
            en: 'Bespoke custom-built exhibition stands and pavilions engineered for international trade shows, maximizing impact and commercial authority.',
            ar: 'منصات وأجنحة عرض مخصصة ومصممة خصيصاً للمعارض التجارية الدولية لزيادة الحضور والتأثير الفعال للعلامة التجارية.'
        },
        'pillar-span-2': {
            en: '02 // FIT-OUT',
            ar: '٠٢ // تسليم مفتاح متكامل'
        },
        'pillar-title-2': {
            en: 'INTERIOR DESIGN',
            ar: 'التصميم الداخلي'
        },
        'pillar-desc-2': {
            en: 'Premium corporate offices, high-end commercial showrooms, and luxury workspaces designed with spatial precision and delivery.',
            ar: 'مكاتب شركات متميزة، وصالات عرض تجارية راقية، ومساحات عمل فاخرة مصممة بدقة هندسية وتسليم متكامل بالكامل.'
        },
        'pillar-span-3': {
            en: '03 // EXPERIENTIAL SETUPS',
            ar: '٠٣ // فعاليات تجريبية'
        },
        'pillar-title-3': {
            en: 'EVENTS',
            ar: 'الفعاليات'
        },
        'pillar-desc-3': {
            en: 'Immersive brand launch events, high-end corporate summits, and experiential settings planned with cutting-edge staging, audio-visuals, and styling.',
            ar: 'تجارب إطلاق منتجات غامرة، وقمم شركات رفيعة المستوى، وتجهيزات تجريبية مخططة بأحدث تقنيات المسارح والديكورات والصوت والصورة.'
        },
        'about-tag': {
            en: 'Design Philosophy',
            ar: 'فلسفتنا في التصميم'
        },
        'about-title-1': {
            en: 'SILENT LUXURY,',
            ar: 'الفخامة الهادئة،'
        },
        'about-title-2': {
            en: 'Flawless Execution.',
            ar: 'والتنفيذ الخالي من العيوب.'
        },
        'about-desc-1': {
            en: 'We believe that a space is a storytelling canvas. Whether it is a temporary exhibition stand at a world congress or a headquarters office in Dubai, the form must reflect a refined architectural voice—silent luxury that communicates without being loud.',
            ar: 'نؤمن بأن المساحة هي لوحة لسرد القصص. وسواء كان جناح عرض مؤقتاً في مؤتمر عالمي أو مكتباً رئيسياً لشركة في دبي، يجب أن يعكس الشكل صوتاً معمارياً راقياً وفخامة هادئة تتحدث بوضوح دون صخب.'
        },
        'about-desc-2': {
            en: 'With integrated design studios, engineering teams, and in-house fabrication facilities in Dubai and Mumbai, we offer complete project control from visualization to structural delivery.',
            ar: 'مع استوديوهات تصميم متكاملة، وفرق هندسية، ومرافق تصنيع داخلية في دبي ومومباي، نقدم تحكماً شاملاً بالكامل للمشروع بدءاً من الفكرة والتخيل وحتى التسليم الإنشائي الفعلي.'
        },
        'stat-label-1': {
            en: 'Countries Executed',
            ar: 'دولة نفذنا فيها مشاريع'
        },
        'stat-label-2': {
            en: 'Projects Delivered',
            ar: 'مشروع تم تسليمه'
        },
        'stat-label-3': {
            en: 'On-Time Delivery',
            ar: 'تسليم متكامل في الوقت المحدد'
        },
        'portfolio-tag': {
            en: 'Curated Works',
            ar: 'أعمال منتقاة'
        },
        'portfolio-title': {
            en: 'FEATURED PROJECTS',
            ar: 'مشاريعنا المميزة'
        },
        'p1-tag': {
            en: 'Exhibitions // Pavilions',
            ar: 'المعارض // الأجنحة'
        },
        'p1-title': {
            en: 'Aerospace Expo Pavilion',
            ar: 'جناح معرض الفضاء والطيران'
        },
        'p2-tag': {
            en: 'Interiors // Corporate Office',
            ar: 'التصميم الداخلي // مكاتب شركات'
        },
        'p2-title': {
            en: 'Tech Hub Headquarters, Dubai',
            ar: 'المقر الرئيسي لـ مركز التكنولوجيا، دبي'
        },
        'p3-tag': {
            en: 'Events // Product Launch',
            ar: 'الفعاليات // إطلاق منتجات'
        },
        'p3-title': {
            en: 'Vanguard EV Launch Show',
            ar: 'عرض إطلاق سيارة فانجارد الكهربائية'
        },
        'p4-tag': {
            en: 'Interiors // Showrooms',
            ar: 'التصميم الداخلي // صالات العرض'
        },
        'p4-title': {
            en: 'Chronos Luxury Boutique',
            ar: 'معرض كرونوس الفاخر'
        },
        'process-tag': {
            en: 'Our Methodology',
            ar: 'منهجيتنا'
        },
        'process-title': {
            en: 'THE PATH',
            ar: 'مسار التسليم المتكامل'
        },
        'step-title-1': {
            en: 'CONSULTATION',
            ar: 'الاستشارة والاستماع'
        },
        'step-desc-1': {
            en: 'Analyzing space layout, brand positioning, and functional targets to draft a clear architectural brief.',
            ar: 'تحليل مخطط المساحة، وموقع العلامة التجارية، والأهداف التشغيلية لصياغة موجز معماري واضح للعمل.'
        },
        'step-title-2': {
            en: 'DESIGN & VR',
            ar: 'التصميم والواقع الافتراضي'
        },
        'step-desc-2': {
            en: 'Rendering highly detailed 3D spatial models and virtual walkthroughs for complete spatial clarity.',
            ar: 'نمذجة مساحية ثلاثية الأبعاد عالية التفاصيل وجولات افتراضية لتوفير وضوح تام للمساحة للفراغ المعماري.'
        },
        'step-title-3': {
            en: 'FABRICATION',
            ar: 'التصنيع والjoinery'
        },
        'step-desc-3': {
            en: 'Constructing custom joinery and structural elements in our advanced in-house production facilities.',
            ar: 'تصنيع أعمال الخشب والديكور المخصصة والعناصر الإنشائية في مرافق الإنتاج والمصانع المتقدمة لدينا.'
        },
        'step-title-4': {
            en: 'HANDOVER',
            ar: 'التسليم وإدارة الموقع'
        },
        'step-desc-4': {
            en: 'Managing full logistics, on-site structural assembly, fine finishing, and keys-in-hand delivery.',
            ar: 'إدارة الخدمات اللوجستية الكاملة، والتركيب الإنشائي في الموقع، والتشطيبات النهائية الفاخرة، والتسليم الجاهز للمفتاح.'
        },
        'contact-title-1': {
            en: 'START A DIALOGUE',
            ar: 'ابدأ حواراً مع فريقنا'
        },
        'contact-title-2': {
            en: 'With Whiteleaf.',
            ar: 'مع وايت ليف'
        },
        'contact-detail-1': {
            en: 'General Inquiries',
            ar: 'الاستفسارات العامة'
        },
        'contact-detail-2': {
            en: 'Dubai Design Studio',
            ar: 'استوديو دبي للتصميم'
        },
        'contact-detail-3': {
            en: 'Business Bay, Dubai, United Arab Emirates',
            ar: 'الخليج التجاري، دبي، الإمارات العربية المتحدة'
        },
        'contact-detail-4': {
            en: 'Mumbai Studio',
            ar: 'استوديو مومباي للتصميم'
        },
        'contact-detail-5': {
            en: 'Bandra Kurla Complex, Mumbai, India',
            ar: 'مجمع باندرا كورلا، مومباي، الهند'
        },
        'form-name': {
            en: 'Full Name',
            ar: 'الاسم الكامل'
        },
        'form-email': {
            en: 'Email Address',
            ar: 'البريد الإلكتروني'
        },
        'form-type': {
            en: 'Project Type (e.g. Interior Design, Exhibition)',
            ar: 'نوع المشروع (مثل: تصميم داخلي، جناح معرض)'
        },
        'form-brief': {
            en: 'Project Brief & Timeline',
            ar: 'ملخص المشروع والجدول الزمني المطلوب'
        },
        'form-submit': {
            en: 'Submit Inquiry',
            ar: 'إرسال الطلب'
        },
        'footer-copy': {
            en: 'All Rights Reserved.',
            ar: 'جميع الحقوق محفوظة.'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        
        // Toggle dir property for RTL compatibility
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        // Apply translations
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(elem => {
            const key = elem.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                // If it is a form placeholder/label or just text
                elem.textContent = translations[key][lang];
            }
        });

        // Update translation switch buttons label
        const switchButtons = document.querySelectorAll('#lang-toggle, #lang-toggle-mobile');
        switchButtons.forEach(btn => {
            const label = btn.querySelector('.lang-label');
            if (label) {
                label.textContent = lang === 'en' ? 'العربية' : 'English';
            }
        });

        // Update theme toggler label translation
        const mobileLabel = document.querySelector('#theme-toggle-mobile .theme-label');
        if (mobileLabel) {
            const isDark = document.documentElement.classList.contains('dark-mode');
            if (isDark) {
                mobileLabel.textContent = lang === 'en' ? 'Light Mode' : 'الوضع المضيء';
            } else {
                mobileLabel.textContent = lang === 'en' ? 'Dark Mode' : 'الوضع الداكن';
            }
        }
    }

    // Bind lang buttons
    const langBtn = document.getElementById('lang-toggle');
    const langBtnMobile = document.getElementById('lang-toggle-mobile');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }
    if (langBtnMobile) {
        langBtnMobile.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }

    // Initialize Language translation
    setLanguage(currentLang);

    // ====================================================
    // 1.5. Theme Switcher Logic (Light/Dark Mode)
    // ====================================================
    const themeBtn = document.getElementById('theme-toggle');
    const themeBtnMobile = document.getElementById('theme-toggle-mobile');

    function updateThemeUI(isDark) {
        const mobileLabel = document.querySelector('#theme-toggle-mobile .theme-label');
        if (mobileLabel) {
            if (isDark) {
                mobileLabel.textContent = currentLang === 'en' ? 'Light Mode' : 'الوضع المضيء';
            } else {
                mobileLabel.textContent = currentLang === 'en' ? 'Dark Mode' : 'الوضع الداكن';
            }
        }
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeUI(isDark);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    if (themeBtnMobile) {
        themeBtnMobile.addEventListener('click', toggleTheme);
    }

    // Initialize theme UI
    updateThemeUI(document.documentElement.classList.contains('dark-mode'));

    // ====================================================
    // 2. Premium Lenis Smooth Scroll Setup
    // ====================================================
    let lenis;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.5, // slightly longer for more premium feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // Sync GSAP ScrollTrigger with Lenis
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0, 0);
        }
    }

    // ====================================================
    // 3. Custom Magnetic Cursor Loop
    // ====================================================
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isHovering = false;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (cursorDot) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }
    });
    
    function animateCursor() {
        if (cursor) {
            const lerpFactor = isHovering ? 0.2 : 0.12;
            cursorX += (mouseX - cursorX) * lerpFactor;
            cursorY += (mouseY - cursorY) * lerpFactor;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    const hoverElements = document.querySelectorAll('a, button, .pillar-card, .project-card, .service-detail-item');
    
    hoverElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('hover');
            isHovering = true;
        });
        elem.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('hover');
            isHovering = false;
            if (typeof gsap !== 'undefined') {
                gsap.to(elem, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
            }
        });
        
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const dx = (relX - centerX) * 0.4; 
            const dy = (relY - centerY) * 0.4;
            
            if(elem.classList.contains('btn-cta') || elem.classList.contains('btn-explore') || elem.classList.contains('btn-submit')) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(elem, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
                }
            }
        });
    });

    // ====================================================
    // 4. Dramatic Preloader Sequence (GSAP)
    // ====================================================
    const preloader = document.querySelector('.preloader');
    const preloaderLogoContainer = document.querySelector('.preloader-logo-container');
    const debugBadge = document.getElementById('whiteleaf-debug-badge');

    // Set initial states for hero elements so they don't flash before preloader finishes
    if (typeof gsap !== 'undefined') {
        console.log('[Whiteleaf Animations] Setting initial GSAP states for hero elements');
        gsap.set('.hero-img-inner', { 
            clipPath: 'inset(100% 100% 100% 100%)', 
            scale: 1.8, 
            opacity: 0,
            rotation: () => gsap.utils.random(-8, 8)
        });
        gsap.set('.h2g', { yPercent: 120, opacity: 0 });
        gsap.set('.hero-desc-text, .scroll-indicator-bottom', { opacity: 0, y: 20 });
    }

    if (preloader && typeof gsap !== 'undefined') {
        console.log('[Whiteleaf Animations] Starting preloader timeline');
        // Make preloader background pure dark for premium contrast
        preloader.style.backgroundColor = "#FDFCF9";

        const tlPreloader = gsap.timeline();
        if (lenis) {
            console.log('[Whiteleaf Animations] Temporarily pausing Lenis smooth scrolling during preloader');
            lenis.stop();
        }

        if (preloaderLogoContainer) {
            tlPreloader.to(preloaderLogoContainer, { opacity: 1, duration: 0.4, ease: 'power2.out' });
        }

        const preloaderLogoImg = document.querySelector('.preloader-logo-img');
        if (preloaderLogoImg) {
            gsap.set(preloaderLogoImg, { opacity: 0, scale: 0.85 });
            tlPreloader.to(preloaderLogoImg, { 
                opacity: 1, 
                scale: 1, 
                duration: 1.5, 
                ease: 'power3.out' 
            });
        }

        if (preloaderLogoContainer) {
            tlPreloader.to(preloaderLogoContainer, { 
                scale: 0.8, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power3.inOut',
                delay: 0.3
            });
        }

        tlPreloader.to(preloader, {
            yPercent: -100,
            duration: 1.4,
            ease: 'expo.inOut',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%'
        }, "-=0.4")
        .set(preloader, { display: 'none' }) // Completely display none after exit
        .call(() => {
            console.log('[Whiteleaf Animations] Preloader exit complete');
            if (lenis) {
                console.log('[Whiteleaf Animations] Resuming Lenis smooth scrolling');
                lenis.start();
            }
            // Fade out the debug badge
            if (debugBadge) {
                gsap.to(debugBadge, { opacity: 0, y: -20, duration: 0.5, onComplete: () => debugBadge.style.display = 'none' });
            }
            animateHero();
        });
    } else {
        console.log('[Whiteleaf Animations] Preloader or GSAP not found, bypassing preloader');
        if (preloader) preloader.style.display = 'none';
        if (debugBadge) debugBadge.style.display = 'none';
        animateHero();
    }

    // ====================================================
    // 5. GSAP Hero Sequence (Ultra Premium)
    // ====================================================
    function animateHero() {
        if (typeof gsap === 'undefined') return;
        console.log('[Whiteleaf Animations] Starting hero entrance animations timeline');

        const tlHero = gsap.timeline();

        // 1. Reveal central branding
        tlHero.to('.h2g', {
            yPercent: 0,
            opacity: 1,
            duration: 1.6,
            ease: 'power4.out'
        })
        // 2. Staggered reveal of the collage images (scale, clip-path, rotation)
        .to('.hero-img-inner', {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 2.2,
            stagger: 0.18,
            ease: 'power4.inOut'
        }, "-=1.4")
        // 3. Subtext reveal
        .to('.hero-desc-text, .scroll-indicator-bottom', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, "-=1.0");

        // 4. Parallax scroll effect on floating intro images as you scroll down
        const introImages = gsap.utils.toArray('.hero-img-inner');
        introImages.forEach((img, idx) => {
            const depth = (idx + 1) * 20; // varying depths for 3D feel
            gsap.to(img, {
                y: -depth,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.mn_screen',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // 5. Parallax Scroll for Hero Background
        if (document.querySelector('.hero-bg')) {
            gsap.to('.hero-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.mn_screen',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
        
        initScrollReveals();
    }

    // ====================================================
    // 6. GSAP ScrollTrigger Intense Section Reveals
    // ====================================================
    function initScrollReveals() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        // 6.1 Generic text blocks - Skew and fade up
        const revealElements = gsap.utils.toArray('.reveal');
        revealElements.forEach(elem => {
            if (elem.closest('.hero-content') || elem.classList.contains('hero-visual')) return;

            gsap.fromTo(elem, 
                { opacity: 0, y: 80, skewY: 3 },
                {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // 6.2 Pillar Cards - Dramatic Stagger
        const pillarCards = gsap.utils.toArray('.pillar-card');
        if (pillarCards.length > 0) {
            gsap.fromTo(pillarCards, 
                { opacity: 0, y: 150, rotateX: -10, transformPerspective: 1000 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1.5,
                    stagger: 0.15,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.pillars-grid',
                        start: 'top 75%'
                    }
                }
            );
            
            // Image Parallax inside Pillar Cards
            pillarCards.forEach(card => {
                const bg = card.querySelector('.card-bg');
                if (bg) {
                    gsap.to(bg, {
                        yPercent: 25,
                        scale: 1.1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    });
                }
            });
        }
        
        // 6.3 Projects - Full-Screen Parallax Shifting & Service reveals
        const parallaxSections = gsap.utils.toArray('.parallax_sections .ps');
        parallaxSections.forEach(section => {
            const bg = section.querySelector('.bgp');
            const txt = section.querySelector('.fixed_t');
            
            if (bg) {
                gsap.fromTo(bg,
                    { yPercent: -15 },
                    {
                        yPercent: 15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                );
            }
            
            if (txt) {
                gsap.to(txt, {
                    opacity: 0,
                    y: -60,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            }
        });

        // Animates service detail items in services.html
        const serviceItems = gsap.utils.toArray('.service-detail-item');
        serviceItems.forEach(item => {
            const img = item.querySelector('.service-img-col');
            if (img) {
                gsap.fromTo(img, 
                    { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', scale: 1.25 },
                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                        scale: 1,
                        duration: 1.8,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%'
                        }
                    }
                );
            }
        });

        // 6.4 Section Grid Divider Lines Reveal (Horizontal and Vertical)
        const horizontalGridLines = gsap.utils.toArray('.grid-line-h');
        horizontalGridLines.forEach(line => {
            gsap.fromTo(line, 
                { scaleX: 0, transformOrigin: 'left center' },
                {
                    scaleX: 1,
                    duration: 1.8,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        const verticalGridLines = gsap.utils.toArray('.grid-line-v');
        verticalGridLines.forEach(line => {
            gsap.fromTo(line, 
                { scaleY: 0, transformOrigin: 'center top' },
                {
                    scaleY: 1,
                    duration: 1.8,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    // ====================================================
    // 7. Scroll Sticky Navbar Header state
    // ====================================================
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ====================================================
    // 8. Mobile Hamburger Navigation Overlay Toggle
    // ====================================================
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const overlayLinks = document.querySelectorAll('.mobile-nav-links a');
    
    if (menuBtn && navOverlay) {
        menuBtn.addEventListener('click', () => {
            const isActive = navOverlay.classList.toggle('active');
            
            if (isActive) {
                menuBtn.children[0].style.transform = 'translateY(6px) rotate(45deg)';
                menuBtn.children[1].style.opacity = '0';
                menuBtn.children[2].style.transform = 'translateY(-7px) rotate(-45deg)';
                if (typeof lenis !== 'undefined' && lenis) lenis.stop();
            } else {
                menuBtn.children[0].style.transform = 'none';
                menuBtn.children[1].style.opacity = '1';
                menuBtn.children[2].style.transform = 'none';
                if (typeof lenis !== 'undefined' && lenis) lenis.start();
            }
        });
        
        overlayLinks.forEach(link => {
            link.addEventListener('click', () => {
                navOverlay.classList.remove('active');
                menuBtn.children[0].style.transform = 'none';
                menuBtn.children[1].style.opacity = '1';
                menuBtn.children[2].style.transform = 'none';
                if (typeof lenis !== 'undefined' && lenis) lenis.start();
            });
        });
    }

    // ====================================================
    // 9. Hero visual arch slider / cycler & Parallax Tilt
    // ====================================================
    const heroSlides = document.querySelectorAll('.hero-frame-slide');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 5000);
    }

    const heroFrame = document.querySelector('.hero-frame-container');
    if (heroFrame && typeof gsap !== 'undefined') {
        document.addEventListener('mousemove', (e) => {
            const rect = heroFrame.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const tiltX = (dy / window.innerHeight) * -15; 
            const tiltY = (dx / window.innerWidth) * 15; 
            
            gsap.to(heroFrame, {
                rotationX: tiltX,
                rotationY: tiltY,
                scale: 1.02,
                transformPerspective: 1000,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
        
        document.addEventListener('mouseleave', () => {
            gsap.to(heroFrame, {
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                transformPerspective: 1000,
                duration: 1.2,
                ease: 'elastic.out(1, 0.4)'
            });
        });
    }

    // ====================================================
    // 10. Symmetrical Pillars Mouse Parallax Shifts
    // ====================================================
    const pillarCardsParallax = document.querySelectorAll('.pillar-card');
    pillarCardsParallax.forEach(card => {
        const bg = card.querySelector('.card-bg');
        card.addEventListener('mousemove', (e) => {
            if (bg && typeof gsap !== 'undefined') {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const percentX = (x / rect.width) - 0.5;
                const percentY = (y / rect.height) - 0.5;
                
                gsap.to(bg, {
                    x: percentX * -30,
                    y: percentY * -30,
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (bg && typeof gsap !== 'undefined') {
                gsap.to(bg, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out'
                });
            }
        });
    });
});
