<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>{$articleTitle}</title>
    <meta name="description" content="{$desc}">
    <meta name="keywords" content="{$key}" />
    <link rel="stylesheet" href="/static/scss/dist/style.min.css">
    <script src="/src/script/jquery.min.js"></script>
    <script defer src="/src/script/main.js"></script>
    {*    <script defer src="/src/script/lazy.js"></script>*}
    {include file='ads/favicon.tpl'}
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "ADVANCE",
            "url": "https://advc.com.ua/",
            "telephone": "+38(096)761 761 6",
            "email": "advanced.kh.ua@gmail.com",
            "logo": "https://rakasovsky.github.io/adv.github.io/src/img/logo.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Героїв Дніпра 1",
                "addressLocality": "Київ",
                "addressCountry": "Україна",
                "postalCode": "61145"
            },
            "openingHoursSpecification": [{
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "10:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Saturday",
                        "Sunday"
                    ]
                }
            ],
            "image": "https://rakasovsky.github.io/adv.github.io/src/img/logo.jpg"
        }
    </script>
    {literal}
    <!-- Google Tag Manager -->
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5L2TNKG');
    </script>
    <!-- End Google Tag Manager -->
    {/literal}
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L2TNKG" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!--HEADER-->
    <header class="nav-down">
        <div class="header_wrapper">
            {* <p class="white"><a href="/" class="logo big">ADVANCE</a></p> *}
            <a href="/"><img data-lazy="/src/img/logo_ua-min.png" src="/" class="logo_header_ua"></a>
            <nav class="main_menu">
                <ul class="menu_ul">
                    <li class="fs20">
                        <a href="#" class="dropbtn hvr-icon-hang m_li"><i class="fa fa-tri hvr-icon"></i>Послуги</a>
                        <div class="dropdown_wrapper">
                            <div class="menu_category">
                                <ul>
                                    <li class="menu_category" data-category="btn_m1"><a
                                            href="/naruzhnaya-reklama">Зовнішня реклама</a></li>
                                    <li class="menu_category" data-category="btn_m"><a
                                            href="/brendirovannaya-odezhda">Брендований одяг</a></li>
                                    <li class="menu_category" data-category="btn_m2"><a
                                            href="/shirokoformatnaya-pechat">Широкоформатний друк</a></li>
                                    <li class="menu_category" data-category="btn_m3"><a
                                            href="/oformlenie-intererov">Оформлення інтер'єрів</a></li>
                                    <li class="menu_category" data-category="btn_m4"><a
                                            href="/suvenirnaya-produkciya">Сувенірна продукція</a></li>
                                    <li class="menu_category" data-category="btn_m5"><a
                                            href="/poligrafiya">Поліграфія</a></li>
                                    <li class="menu_category" data-category="btn_m6"><a
                                            href="/korporativnyj-stil">Корпоративний стиль</a></li>
                                    <li class="menu_category" data-category="btn_m7"><a
                                            href="/osveshchenie">Освітлення</a></li>
                                    <li class="menu_category" data-category="btn_m8"><a href="/pos-materialy">POS
                                            Матеріали</a></li>
                                    <li class="menu_category" data-category="btn_m9"><a
                                            href="/vystavochnye-stendy">Виставкові стенди</a></li>
                                    <li class="menu_category" data-category="btn_m12"><a href="/lazernaja-rezka">Лазерне
                                            різання</a></li>
                                    <li class="menu_category" data-category="btn_m13"><a href="/gravirovka">Лазерне
                                            гравіювання</a></li>
                                    <li class="menu_category" data-category="btn_m14"><a
                                            href="/plotternaja-rezka">Плоттерне різання</a></li>
                                    <li class="menu_category" data-category="btn_m11"><a
                                            href="/dopolnitelnye-uslugi">Додаткові послуги</a></li>
                                    <li class="menu_category" data-category="btn_m10"><a
                                            href="/eksklyuziv">Ексклюзив</a></li>
                                </ul>
                            </div>
                            <div class="menu_subcategory">

                            </div>
                            <div class="menu_category_img">
                                <img class="change-image" data-lazy="/src/img/ABOUT.png" src="/" alt="Advance" />
                            </div>
                        </div>
                    </li>
                    <li class="fs20 m_li"><a href="/portfolio" class="m_li">Портфоліо</a></li>
                    <li class="fs20 m_li"><a href="/about" class="m_li">Про нас</a></li>
                    <li class="fs20 m_li"><a href="/contacts" class="m_li">Контакти</a></li>
                    <li class="fs20 m_li"><a href="https://advc.com.ua" class="m_li">RU</a></li>

                </ul>
            </nav>
            <div class="menu_tel phone_list hvr-icon-hang">
                <span class="orange tel_t">050 662 55 11</span>
                <i class="fa fa-chevron-down hvr-icon"></i>
                <ul class="hidden phones">
                    <li><a href="tel://0996816899" class="orange">099 681 68 99</a></li>
                    {*                <li><a href="tel://093 761 761 6" class="orange">093 761 761 6</a></li>*}
                    {*                <li><a href="tel://096 761 761 6" class="orange">096 761 761 6</a></li>*}
                </ul>
                <!-- <a href="tel://057 761 761 6" class="orange">057 761 761 6</a> -->
            </div>
        </div>
        <div class="mob_menu">
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li><a href="/portfolio" class="m_li">Портфоліо</a></li>
                        <li><a href="#" class="m_li dropbtn2">Послуги</a>
                            <ul class="dropdown_container">
                                <li class="m_li"><a href="/naruzhnaya-reklama">Зовнішня реклама</a></li>
                                <li class="m_li"><a href="/brendirovannaya-odezhda">Брендований одяг</a></li>
                                <li class="m_li"><a href="/shirokoformatnaya-pechat">Широкоформатний друк</a></li>
                                <li class="m_li"><a href="/oformlenie-intererov">Оформлення інтер'єрів</a></li>
                                <li class="m_li"><a href="/suvenirnaya-produkciya">Сувенірна продукція</a></li>
                                <li class="m_li"><a href="/poligrafiya">Поліграфія</a></li>
                                <li class="m_li"><a href="/korporativnyj-stil">Корпоративний стиль</a></li>
                                <li class="m_li"><a href="/osveshchenie">Освітлення</a></li>
                                <li class="m_li"><a href="/pos-materialy">POS Матеріали</a></li>
                                <li class="m_li"><a href="/vystavochnye-stendy">Виставкові стенди</a></li>
                                <li class="m_li"><a href="/dopolnitelnye-uslugi">Додаткові послуги</a></li>
                                <li class="m_li"><a href="/eksklyuziv">Ексклюзив</a></li>
                            </ul>
                        </li>
                        <li><a href="/about" class="m_li">Про нас</a></li>
                        <li><a href="/contacts" class="m_li">Контакти</a></li>
                        <li><a href="https://advc.com.ua" class="m_li">RU</a></li>
                    </ul>
                </div>
            </nav>
            <p class="mob_logo white"><a href="/" class="logo big">ADVANCE</a></p>
        </div>
    </header>

<!--HEADER END-->