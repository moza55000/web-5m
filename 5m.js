// تطبيق متجر FiveM
document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const DOM = {
        loginBtn: document.getElementById('login-btn'),
        registerBtn: document.getElementById('register-btn'),
        loginModal: document.getElementById('login-modal'),
        registerModal: document.getElementById('register-modal'),
        cartModal: document.getElementById('cart-modal'),
        productDetailModal: document.getElementById('product-detail-modal'),
        closeModalBtns: document.querySelectorAll('.close-modal'),
        showRegisterLink: document.getElementById('show-register'),
        showLoginLink: document.getElementById('show-login'),
        cartBtn: document.getElementById('cart-btn'),
        continueShoppingBtn: document.getElementById('continue-shopping'),
        checkoutBtn: document.getElementById('checkout'),
        cartItemsContainer: document.getElementById('cart-items'),
        cartTotalPrice: document.getElementById('cart-total-price'),
        cartCount: document.getElementById('cart-count'),
        emptyCartMessage: document.getElementById('empty-cart-message'),
        productDetailContent: document.getElementById('product-detail-content'),
        notification: document.getElementById('notification'),
        notificationMessage: document.getElementById('notification-message'),
        notificationClose: document.querySelector('.notification-close'),
        currentYear: document.getElementById('current-year'),
        productsGrid: document.querySelector('.products-grid'),
        featuresGrid: document.querySelector('.features-grid'),
        testimonialsGrid: document.querySelector('.testimonials-grid'),
        footerGrid: document.querySelector('.footer-grid')
    };

    // بيانات المنتجات
    const products = {
        1: {
            name: "سكربت متجر سيارات",
            description: "سكربت متجر سيارات متكامل مع نظام شراء وبيع وخصومات. يدعم جميع مركبات FiveM مع إمكانية إضافة مركبات جديدة بسهولة. يحتوي على لوحة تحكم سهلة الاستخدام مع إحصائيات المبيعات.",
            price: 29.99,
            images: [
                "images/products/car-shop-1.jpg",
                "images/products/car-shop-2.jpg",
                "images/products/car-shop-3.jpg"
            ],
            category: "سكربتات",
            version: "1.2.5",
            updated: "2023-10-15",
            badge: "الأكثر مبيعاً"
        },
        2: {
            name: "مركبة لامبورغيني",
            description: "مركبة لامبورغيني عالية الجودة مع تفاصيل دقيقة وأداء واقعي. تحتوي على تفاصيل داخلية كاملة مع إمكانية التعديل على الأداء. تدعم جميع خصائص FiveM بما في ذلك نظام الضرر.",
            price: 19.99,
            images: [
                "images/products/lamborghini-1.jpg",
                "images/products/lamborghini-2.jpg",
                "images/products/lamborghini-3.jpg"
            ],
            category: "مركبات",
            version: "2.0.1",
            updated: "2023-09-20"
        },
        3: {
            name: "باقة أسلحة واقعية",
            description: "مجموعة من الأسلحة الواقعية مع تأثيرات صوتية وبصرية مميزة. تحتوي على 15 سلاح مختلف مع إمكانية التعديل على الإحصائيات. تدعم نظام إعادة التلقيم والتحسينات المختلفة.",
            price: 24.99,
            images: [
                "images/products/weapons-1.jpg",
                "images/products/weapons-2.jpg",
                "images/products/weapons-3.jpg"
            ],
            category: "أسلحة",
            version: "1.5.3",
            updated: "2023-11-05",
            badge: "جديد"
        },
        4: {
            name: "خريصة مدينة حديثة",
            description: "خريصة مدينة كاملة مع مباني وتفاصيل دقيقة لسيرفرات RP. تحتوي على مناطق سكنية وتجارية وترفيهية. مدعومة بأداء عالي مع إمكانية إضافة نقاط تفاعل.",
            price: 39.99,
            images: [
                "images/products/map-1.jpg",
                "images/products/map-2.jpg",
                "images/products/map-3.jpg"
            ],
            category: "خرائط",
            version: "3.1.0",
            updated: "2023-08-12"
        },
        5: {
            name: "نظام وظائف متقدم",
            description: "نظام وظائف متكامل مع إمكانية الترقيات والمهام اليومية. يدعم أكثر من 20 وظيفة مختلفة مع نظام رواتب متقدم. يحتوي على لوحة تحكم لإدارة الوظائف والموظفين.",
            price: 34.99,
            images: [
                "images/products/jobs-1.jpg",
                "images/products/jobs-2.jpg",
                "images/products/jobs-3.jpg"
            ],
            category: "سكربتات",
            version: "2.3.4",
            updated: "2023-10-30"
        },
        6: {
            name: "باقة سيارات فاخرة",
            description: "10 مركبات فاخرة بجودة عالية مع تفاصيل داخلية دقيقة. تشمل سيارات من مختلف الفئات مع إمكانية التعديل على الأداء. جميع المركبات مدعومة بنظام ضرر واقعي.",
            price: 49.99,
            images: [
                "images/products/car-pack-1.jpg",
                "images/products/car-pack-2.jpg",
                "images/products/car-pack-3.jpg"
            ],
            category: "مركبات",
            version: "1.8.2",
            updated: "2023-11-15",
            badge: "خصم 20%"
        }
    };

    // بيانات المميزات
    const features = [
        {
            icon: "⚡",
            title: "أداء عالي",
            description: "منتجاتنا مصممة لتعمل بسلاسة دون التأثير على أداء السيرفر"
        },
        {
            icon: "🛠️",
            title: "دعم فني",
            description: "فريق دعم فني متاح 24/7 لمساعدتك في أي مشكلة تواجهك"
        },
        {
            icon: "🔄",
            title: "تحديثات دورية",
            description: "نقوم بتحديث منتجاتنا باستمرار لإضافة مميزات جديدة"
        },
        {
            icon: "💯",
            title: "جودة عالية",
            description: "منتجاتنا تتميز بجودة عالية وتفاصيل دقيقة"
        }
    ];

    // بيانات آراء العملاء
    const testimonials = [
        {
            text: "لقد اشتريت عدة منتجات من هذا المتجر وكانت جميعها ممتازة، الدعم الفني سريع ومحترف، أنصح الجميع بالتسوق من هنا.",
            author: {
                name: "أحمد محمد",
                role: "مالك سيرفر RP",
                avatar: "images/testimonials/1.jpg"
            }
        },
        {
            text: "سكربت المتجر الذي اشتريته يعمل بشكل ممتاز، التثبيت كان سهلًا والإرشادات واضحة، شكرًا لكم على هذا العمل الرائع.",
            author: {
                name: "سارة خالد",
                role: "مطورة FiveM",
                avatar: "images/testimonials/2.jpg"
            }
        },
        {
            text: "السيارات التي اشتريتها بجودة عالية جدًا وتعمل بدون أي مشاكل، الأسعار معقولة مقارنة بالجودة المقدمة.",
            author: {
                name: "علي عبدالله",
                role: "مسؤول سيرفر",
                avatar: "images/testimonials/3.jpg"
            }
        }
    ];

    // بيانات تذييل الصفحة
    const footerLinks = {
        about: {
            title: "عن المتجر",
            content: "متجر FiveM يقدم أفضل المنتجات لسيرفرات الجي تي أي بجودة عالية وأسعار مناسبة."
        },
        quickLinks: {
            title: "روابط سريعة",
            links: [
                { text: "الرئيسية", href: "#home" },
                { text: "المنتجات", href: "#products" },
                { text: "المميزات", href: "#features" },
                { text: "آراء العملاء", href: "#testimonials" }
            ]
        },
        contact: {
            title: "اتصل بنا",
            links: [
                { text: "info@fivemstore.com", href: "mailto:info@fivemstore.com" },
                { text: "+123456789", href: "tel:+123456789" },
                { text: "support@fivemstore.com", href: "mailto:support@fivemstore.com" }
            ]
        },
        social: {
            title: "تابعنا",
            links: [
                { text: "تويتر", href: "#", aria: "Twitter" },
                { text: "فيسبوك", href: "#", aria: "Facebook" },
                { text: "ديскорد", href: "#", aria: "Discord" },
                { text: "يوتيوب", href: "#", aria: "YouTube" }
            ]
        }
    };

    // سلة التسوق
    let cart = JSON.parse(localStorage.getItem('fivem-cart')) || [];

    // تحديث سنة حقوق النشر
    DOM.currentYear.textContent = new Date().getFullYear();

    // عرض المنتجات
    function renderProducts() {
        let productsHTML = '';
        
        for (const [id, product] of Object.entries(products)) {
            productsHTML += `
                <div class="product-card">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    <div class="product-media">
                        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-sm add-to-cart" 
                                    data-id="${id}" 
                                    data-name="${product.name}" 
                                    data-price="${product.price}">
                                إضافة للسلة
                            </button>
                            <button class="btn btn-outline btn-sm view-details" data-id="${id}">
                                تفاصيل
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        DOM.productsGrid.innerHTML = productsHTML;
    }

    // عرض المميزات
    function renderFeatures() {
        let featuresHTML = '';
        
        features.forEach(feature => {
            featuresHTML += `
                <div class="feature-card">
                    <div class="feature-icon">${feature.icon}</div>
                    <h3 class="feature-title">${feature.title}</h3>
                    <p class="feature-description">${feature.description}</p>
                </div>
            `;
        });
        
        DOM.featuresGrid.innerHTML = featuresHTML;
    }

    // عرض آراء العملاء
    function renderTestimonials() {
        let testimonialsHTML = '';
        
        testimonials.forEach(testimonial => {
            testimonialsHTML += `
                <div class="testimonial-card">
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img src="${testimonial.author.avatar}" alt="${testimonial.author.name}" loading="lazy">
                        </div>
                        <div class="author-info">
                            <h4>${testimonial.author.name}</h4>
                            <p>${testimonial.author.role}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        DOM.testimonialsGrid.innerHTML = testimonialsHTML;
    }

    // عرض تذييل الصفحة
    function renderFooter() {
        let footerHTML = `
            <div class="footer-column">
                <h3>${footerLinks.about.title}</h3>
                <p>${footerLinks.about.content}</p>
            </div>
            
            <div class="footer-column">
                <h3>${footerLinks.quickLinks.title}</h3>
                <ul>
                    ${footerLinks.quickLinks.links.map(link => `
                        <li><a href="${link.href}">${link.text}</a></li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="footer-column">
                <h3>${footerLinks.contact.title}</h3>
                <ul>
                    ${footerLinks.contact.links.map(link => `
                        <li><a href="${link.href}">${link.text}</a></li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="footer-column">
                <h3>${footerLinks.social.title}</h3>
                <ul>
                    ${footerLinks.social.links.map(link => `
                        <li><a href="${link.href}" aria-label="${link.aria}">${link.text}</a></li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        DOM.footerGrid.innerHTML = footerHTML;
    }

    // إدارة الأحداث
    function setupEventListeners() {
        // أحداث النوافذ المنبثقة
        DOM.loginBtn.addEventListener('click', () => toggleModal(DOM.loginModal));
        DOM.registerBtn.addEventListener('click', () => toggleModal(DOM.registerModal));
        DOM.cartBtn.addEventListener('click', () => {
            updateCartDisplay();
            toggleModal(DOM.cartModal);
        });
        DOM.continueShoppingBtn.addEventListener('click', () => toggleModal(DOM.cartModal));
        DOM.checkoutBtn.addEventListener('click', checkout);
        DOM.showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(DOM.loginModal, false);
            toggleModal(DOM.registerModal, true);
        });
        DOM.showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(DOM.registerModal, false);
            toggleModal(DOM.loginModal, true);
        });
        DOM.closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.modal').forEach(modal => {
                    toggleModal(modal, false);
                });
            });
        });
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                toggleModal(e.target, false);
            }
        });

        // أحداث المنتجات (يتم إضافتها ديناميكياً بعد عرض المنتجات)
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart')) {
                const btn = e.target;
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const price = parseFloat(btn.getAttribute('data-price'));
                addToCart(id, name, price);
            }
            
            if (e.target.classList.contains('view-details')) {
                const id = e.target.getAttribute('data-id');
                showProductDetails(id);
            }
        });

        // أحداث الإشعارات
        DOM.notificationClose.addEventListener('click', hideNotification);

        // أحداث النماذج
        document.getElementById('login-form').addEventListener('submit', loginHandler);
        document.getElementById('register-form').addEventListener('submit', registerHandler);

        // حدث التمرير للنافذة
        window.addEventListener('scroll', handleScroll);
    }

    // إدارة النوافذ المنبثقة
    function toggleModal(modal, show = true) {
        if (show) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // إدارة سلة التسوق
    function addToCart(id, name, price, quantity = 1) {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id,
                name,
                price,
                quantity
            });
        }
        
        updateCartCount();
        saveCartToLocalStorage();
        showNotification(`تمت إضافة ${quantity} من ${name} إلى السلة`);
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartCount();
        updateCartDisplay();
        saveCartToLocalStorage();
        showNotification('تمت إزالة المنتج من السلة');
    }

    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        DOM.cartCount.textContent = count;
        
        // تأثير النبض عند التحديث
        if (count > 0) {
            DOM.cartCount.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                DOM.cartCount.style.animation = '';
            }, 500);
        }
    }

    function updateCartDisplay() {
        if (cart.length === 0) {
            DOM.emptyCartMessage.style.display = 'block';
            DOM.cartItemsContainer.innerHTML = '';
            DOM.cartItemsContainer.appendChild(DOM.emptyCartMessage);
            DOM.cartTotalPrice.textContent = '$0.00';
            return;
        }
        
        DOM.emptyCartMessage.style.display = 'none';
        
        let itemsHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            itemsHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-info">
                        <div class="cart-item-image">
                            <img src="${products[item.id].images[0]}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                        </div>
                    </div>
                    <div class="cart-item-remove" data-id="${item.id}">&times;</div>
                </div>
            `;
        });
        
        DOM.cartItemsContainer.innerHTML = itemsHTML;
        DOM.cartTotalPrice.textContent = `$${total.toFixed(2)}`;
        
        // إضافة أحداث لأزرار الإزالة
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                removeFromCart(id);
            });
        });
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('fivem-cart', JSON.stringify(cart));
    }

    function checkout() {
        if (cart.length === 0) {
            showNotification('سلة التسوق فارغة', 'error');
            return;
        }
        
        showNotification('جاري تحويلك إلى صفحة الدفع...', 'success');
        setTimeout(() => {
            cart = [];
            updateCartCount();
            updateCartDisplay();
            saveCartToLocalStorage();
            toggleModal(DOM.cartModal, false);
        }, 1500);
    }

    // إدارة تفاصيل المنتج
    function showProductDetails(id) {
        const product = products[id];
        
        DOM.productDetailContent.innerHTML = `
            <div class="product-gallery">
                <div class="product-main-image">
                    <img src="${product.images[0]}" alt="${product.name}" id="product-main-image" loading="lazy">
                </div>
                <div class="product-thumbnails">
                    ${product.images.map((img, index) => `
                        <div class="product-thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                            <img src="${img}" alt="${product.name} - ${index + 1}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                
                <div class="product-meta">
                    <div class="meta-item">
                        <span class="meta-label">الفئة:</span>
                        <span>${product.category}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">الإصدار:</span>
                        <span>${product.version}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">آخر تحديث:</span>
                        <span>${product.updated}</span>
                    </div>
                </div>
                
                <div class="product-description">${product.description}</div>
                
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity-input" value="1" min="1">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <button class="btn btn-primary add-to-cart-detail" 
                            data-id="${id}" 
                            data-name="${product.name}" 
                            data-price="${product.price}">
                        إضافة للسلة
                    </button>
                </div>
            </div>
        `;
        
        // أحداث الصور المصغرة
        document.querySelectorAll('.product-thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                document.getElementById('product-main-image').src = thumb.getAttribute('data-image');
            });
        });
        
        // أحداث كمية المنتج
        const minusBtn = DOM.productDetailContent.querySelector('.minus');
        const plusBtn = DOM.productDetailContent.querySelector('.plus');
        const quantityInput = DOM.productDetailContent.querySelector('.quantity-input');
        
        minusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
        
        // حدث إضافة إلى السلة
        const addToCartBtn = DOM.productDetailContent.querySelector('.add-to-cart-detail');
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(id, product.name, product.price, quantity);
            toggleModal(DOM.productDetailModal, false);
        });
        
        toggleModal(DOM.productDetailModal, true);
    }

    // إدارة الإشعارات
    function showNotification(message, type = 'success') {
        DOM.notification.className = 'notification';
        DOM.notification.classList.add('show', type);
        DOM.notificationMessage.textContent = message;
        
        setTimeout(() => {
            hideNotification();
        }, 3000);
    }

    function hideNotification() {
        DOM.notification.classList.remove('show');
    }

    // معالجات الأحداث
    function loginHandler(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // هنا يجب إرسال البيانات إلى الخادم
        console.log('Login attempt:', { email, password });
        
        showNotification('تم تسجيل الدخول بنجاح');
        setTimeout(() => {
            toggleModal(DOM.loginModal, false);
        }, 1000);
    }

    function registerHandler(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        if (password !== confirmPassword) {
            showNotification('كلمة المرور غير متطابقة', 'error');
            return;
        }
        
        // هنا يجب إرسال البيانات إلى الخادم
        console.log('Registration:', { name, email, password });
        
        showNotification('تم إنشاء الحساب بنجاح');
        setTimeout(() => {
            toggleModal(DOM.registerModal, false);
            toggleModal(DOM.loginModal, true);
        }, 1000);
    }

    // تأثيرات التمرير
    function handleScroll() {
        // يمكن إضافة تأثيرات التمرير هنا
    }

    // تهيئة التطبيق
    function init() {
        renderProducts();
        renderFeatures();
        renderTestimonials();
        renderFooter();
        setupEventListeners();
        updateCartCount();
    }

    // بدء التطبيق
    init();
});