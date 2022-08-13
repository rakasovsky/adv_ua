jQuery(document).ready(function($){

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){

            $('header').removeClass('nav-down').addClass('nav-up');
        } else {

            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
                $('.nav-down').css('background-color','#171717');
                $('.dropdown_wrapper').slideUp(500);
            }
        }

        lastScrollTop = st;
    }

    // HEADER SUBMENU
    $('.dropbtn').on({
        'click': function () {
            event.preventDefault();
            $('.dropdown_wrapper').slideToggle(500).css('display', 'flex');
            $('.header_wrapper').css('background-color', 'rgba(23,23,23,1)');
            // $(this).toggleClass('arrowDown arrowUp');
        }
    });
    $(document).click(function (c) {
        if( $(c.target).closest('.main_menu').length){
            return;
        }
        $('.dropdown_wrapper').slideUp(500);
    })

    $('.menu_tel').on({
        'click': function(){
            $('.phones').toggle(100).css('visibility', 'visible');
            // $('.tel_t').toggle();
        }
    });


    //Mobile menu + category list
    $(document).ready(function() {
        $('.dropbtn2').on('click', f_drpd);
    });

    function f_drpd(){
        $('.dropdown_container').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    }

    // Active link
    $(function () {
        let location = window.location.href;
        $('.main_menu li a').toArray().forEach(function(el) {
            let link = $(el).prop('href');
            if (location === link) {
                $(el).addClass('active2');
            }

        });
    });

    // Show more button
    $(".adv_sm_btn").click(function () {
        let $button = $(this);
        let $cont = $button.siblings('.main_gallery');
        $cont.toggleClass('visible_g').toggleClass('hidden_g');
        $button.text($button.text() === "Показать больше" ? "Закрыть": "Показать больше");
        $(this).toggleClass('adv_sm_btn adv_sm_btn2');
    });
    // Blog buttons
    $(".s_m").click(function () {
        let $button1 = $(this);
        let $cont1 = $button1.siblings('.more_posts');
        $cont1.toggleClass('visible_g').toggleClass('hidden_g');
        // $button.text($button.text() === "Показать больше" ? "Закрыть": "Показать больше");
    });
    //Vacancy buttons
    $('.t_btn').click(function () {
        let $vbtn = $(this);
        let $vcont =$vbtn.siblings('.vacancy_item');
        $vcont.slideToggle(500);
    })

    // Category/Image switcher
    const catList = {
        // Наружная реклама
        btn_m1: {
            src:'/src/img/cat/min/naruznaja.jpg',
            links: {
                '/naruzhnaya-reklama/obyomnye-bukvy': 'Об\'ємні букви',
                '/naruzhnaya-reklama/vyveski': 'Вивіски',
                '/naruzhnaya-reklama/kryshnye-konstrukcii': 'Дахові конструкції',
                '/naruzhnaya-reklama/lajtboksy-svetovye-koroba': 'Лайтбокси/Світлові короби',
                '/naruzhnaya-reklama/oformlenie-vitrin': 'Оформлення вітрин',
                '/naruzhnaya-reklama/obshivka-fasada-kompozitom': 'Обшивка фасаду композитом',
                '/naruzhnaya-reklama/informacionnye-tablichki': 'Інформаційні таблички',
                '/naruzhnaya-reklama/oformlenie-vhodnyh-grupp-i-kozyrkov': 'Оформлення вхідних груп та козирків',
                '/naruzhnaya-reklama/reklamnye-konstrukcii': 'Рекламні конструкції',
                '/naruzhnaya-reklama/brendirovanie-transporta': 'Брендування транспорту',
                '/naruzhnaya-reklama/ulichnye-flazhnye-konstrukcii': 'Вуличні прапорні конструкції',
                '/naruzhnaya-reklama/led-displei': 'LED Дисплеї'
            }
        },
        // Брендированная одежда
        btn_m: {
            src:'/src/img/cat/min/odezjda-min.jpg',
            links: {
                '/brendirovannaya-odezhda/futbolki': 'Футболки',
                '/brendirovannaya-odezhda/sumki-i-ryukzaki': 'Сумки та рюкзаки',
                '/brendirovannaya-odezhda/uniforma': 'Уніформа',
                '/brendirovannaya-odezhda/flisovye-kofty': 'Флісові кофти',
                '/brendirovannaya-odezhda/kepki-i-bejsbolki': 'Кепки та бейсболки',
                '/brendirovannaya-odezhda/zhiletki-i-kurtki': 'Жилетки та куртки',
                '/brendirovannaya-odezhda/fartuki': 'Фартухи'
            }
        },
        // Широкоформатная печать
        btn_m2: {
            src:'/src/img/cat/min/shirokoformat-min.jpg',
            links: {
                '/shirokoformatnaya-pechat/pechat-na-bannere': 'Друк на банері',
                '/shirokoformatnaya-pechat/pechat-na-plenke': 'Друк на плівці',
                '/shirokoformatnaya-pechat/pechat-na-bannernoj-setke': 'Друк на банерній сітці',
                '/shirokoformatnaya-pechat/pechat-na-holste': 'Друк на полотні',
                '/shirokoformatnaya-pechat/pechat-na-bumage': 'Друк на папері',
            }
        },
        // Оформление интерьеров
        btn_m3: {
            src:'/src/img//cat/min/interier-min.jpg',
            links: {
                '/oformlenie-intererov/sistemy-vizualnoj-navigacii': 'Системи візуальної навігації',
                '/oformlenie-intererov/stojki-resepshn': 'Стійки Ресепшн',
                '/oformlenie-intererov/svetovoj-logotip': 'Світловий логотип',
                '/oformlenie-intererov/sistemy-osveshcheniya': 'Системи освітлення',
                '/oformlenie-intererov/izgotovlenie-fotozon': 'Виготовлення фотозон',
                '/oformlenie-intererov/ugolki-pokupatelya': 'Куточки покупця',
                '/oformlenie-intererov/izgotovlenie-chasov': 'Виготовлення годинників',
                '/oformlenie-intererov/oformlenie-vitrin': 'Оформлення вітрин',
                '/oformlenie-intererov/oformlenie-torgovogo-zala': 'Оформлення торгової зали',
                '/oformlenie-intererov/stendy-dlya-obrazcov': 'Стенди для зразків',
                '/oformlenie-intererov/informacionnyj-stend': 'Інформаційний стенд',
                '/oformlenie-intererov/bukvy-iz-penoplasta': 'Літери з пінопласту',
                '/oformlenie-intererov/reklamnye-konstrukcii': 'Рекламні конструкції',
                '/oformlenie-intererov/oformlenie-steklyannyh-peregorodok': 'Оформлення скляних перегородок',
            }
        },
        // Сувенирная продукция
        btn_m4: {
            src:'/src/img/cat/min/sywenir-min.jpg',
            links: {
                '/suvenirnaya-produkciya/ruchki': 'Ручки',
                '/suvenirnaya-produkciya/aksessuary': 'Аксесуари',
                '/suvenirnaya-produkciya/antistressy': 'Антистреси',
                '/suvenirnaya-produkciya/brelki': 'Брелоки',
                '/suvenirnaya-produkciya/flagi-i-flazhki': 'Прапори та прапорці',
                '/suvenirnaya-produkciya/eko-izdeliya-iz-dereva-i-fanery': 'ЕКО вироби з дерева та фанери',
                '/suvenirnaya-produkciya/vozdushnye-shary': 'Повітряні кулі',
                '/suvenirnaya-produkciya/pakety-i-upakovka': 'Пакети та упаковка',
                '/suvenirnaya-produkciya/chashki-i-posuda': 'Чашки та посуд',
                '/suvenirnaya-produkciya/fleshki-i-powerbank': 'Флешки та PowerBank',
                '/suvenirnaya-produkciya/aromatizatory-v-avtomobil': 'Ароматизатори в автомобіль',
                '/suvenirnaya-produkciya/magnity': 'Магніти',
                '/suvenirnaya-produkciya/zonty': 'Парасолі',
                '/suvenirnaya-produkciya/shokoladki': 'Шоколадки',
                '/suvenirnaya-produkciya/znachki': 'Значки',
                '/suvenirnaya-produkciya/diskontnye-karty-udostovereniya': 'Дисконтні картки/посвідчення',
                '/suvenirnaya-produkciya/ezhednevniki': 'Щоденники',
            }
        },
        // Полиграфия
        btn_m5: {
            src:'/src/img/cat/min/poligrafia-min.jpg',
            links: {
                '/poligrafiya/vizitki': 'Візитки',
                '/poligrafiya/buklety-liflety-listovki': 'Буклети/Ліфлети/Листівки',
                '/poligrafiya/ezhednevniki': 'Щоденники',
                '/poligrafiya/bloknoty': 'Блокноти',
                '/poligrafiya/katalogi-i-broshyury': 'Каталоги та брошури',
                '/poligrafiya/upakovka': 'Упаковка',
                '/poligrafiya/plakaty': 'Плакаты',
                '/poligrafiya/kalendari': 'Календарі',
            }
        },
        // Корпоративный стиль
        btn_m6: {
            src:'/src/img/cat/min/korporativnizstil-min.jpg',
            links: {
                '/korporativnyj-stil/razrabotka-korporativnogo-stilya': 'Розробка корпоративного стилю',
                '/korporativnyj-stil/brendirovanie-transporta': 'Брендування транспорту',
                '/korporativnyj-stil/poligrafiya': 'Поліграфія',
                '/korporativnyj-stil/suvenirnaya-produkciya': 'Сувенірна продукція',
                '/korporativnyj-stil/brendbuk': 'Брендбук',
                '/korporativnyj-stil/upakovka': 'Упаковка',
                '/korporativnyj-stil/oformlenie-vystavok': 'Оформлення виставок',
            }
        },
        // Освещение
        btn_m7: {
            src:'/src/img/cat/min/light_cat.jpg',
            links: {
                '/osveshchenie/lyustry': 'Люстри',
                '/osveshchenie/svetovye-koroba-lajtboksy': 'Світлові короби (Лайтбокси)',
                '/osveshchenie/arhitekturnaya-podsvetka': 'Архітектурне підсвічування',
                '/osveshchenie/osveshchenie-vitrin': 'Освітлення вітрин',
            }
        },
        // POS Материалы
        btn_m8: {
            src:'/src/img/cat/min/pos_cat.jpg',
            links: {
                '/pos-materialy/toppery': 'Топпери',
                '/pos-materialy/voblery': 'Воблери',
                '/pos-materialy/izdeliya-iz-akrila-i-orgstekla': 'Вироби з акрилу та оргскла',
                '/pos-materialy/podstavki-pod-tovar': 'Підставки під товар',
                '/pos-materialy/shelftokery': 'Шелфтокери',
                '/pos-materialy/stoppery': 'Стопери',
                '/pos-materialy/holdery': 'Холдери',
            }
        },
        // Выставочные стенды
        btn_m9: {
            src:'/src/img/cat/min/stend_cat.jpg',
            links: {
                '/vystavochnye-stendy/portativnyj-stend-roll-up': 'Портативний стенд ROLL-UP',
                '/vystavochnye-stendy/portativnyj-stend-x-banner-pauk': 'Портативний стенд X-BANNER (павук)',
                '/vystavochnye-stendy/stend-pop-up': 'Стенд POP UP',
                '/vystavochnye-stendy/promostojka': 'Промостійка',
                '/vystavochnye-stendy/vystavochnyj-stend': 'Виставковий стенд',
                '/vystavochnye-stendy/razbornoj-stend-dlya-bannera': 'Розбірний стенд для банера',
                '/vystavochnye-stendy/fotozona': 'Фотозона',
                '/vystavochnye-stendy/shtendery': 'Штендери',
                '/vystavochnye-stendy/stendy-dlya-obrazcov': 'Стенди для зразків',
                '/vystavochnye-stendy/informacionnyj-stend': 'Інформаційний стенд',
            }
        },
        // Эксклюзив
        btn_m10: {
            src:'/src/img/cat/min/ex_cat.jpg',
            links: {
                // '/eksklyuziv/izgotovlenie-mebeli-iz-metalla-i-dereva': 'Виготовлення меблів з металу та дерева',
                '/eksklyuziv/chasy-i-predmety-interera': 'Годинники та предмети інтер\'єру',
                '/eksklyuziv/elementy-osveshcheniya': 'Елементи освітлення',
                '/eksklyuziv/nestandartnye-reklamnye-konstrukcii': 'Нестандартні рекламні конструкції',
                '/eksklyuziv/cvetodinamicheskie-displei': 'Кольороводинамічні дисплеі',
            }
        },
        // Дополнительные услуги
        btn_m11: {
            src:'/src/img/cat/min/dopolnitelnie-uslugi-min.jpg',
            links: {
                '/dopolnitelnye-uslugi/lazernaya-rezka': 'Лазерне різання',
                '/dopolnitelnye-uslugi/lazernaya-gravirovka': 'Лазерне гравіювання',
                '/dopolnitelnye-uslugi/dizajn': 'Дизайн',
                '/dopolnitelnye-uslugi/plotternaya-rezka': 'Плоттерна різка',
                '/dopolnitelnye-uslugi/vysotnye-raboty': 'Висотні роботи',
                '/dopolnitelnye-uslugi/izdeliya-iz-fanery': 'Вироби із фанери',
                '/dopolnitelnye-uslugi/vyshivka': 'Вишивка',
                '/dopolnitelnye-uslugi/shelkotrafaretnaya-pechat': 'Шовкотрафаретний друк',
                '/dopolnitelnye-uslugi/ultrafioletovaya-pechat': 'Ультрафіолетовий друк',
                '/dopolnitelnye-uslugi/oformlenie-vystavok': 'Оформлення виставок',
            }
        },
        // Лазерная резка
        btn_m12: {
            src:'/src/img/cat/min/lazer_cat.jpg',
            links: {
                '/lazernaja-rezka/lazernaja-rezka-akrila': 'Лазерне різання акрилу',
                '/lazernaja-rezka/lazernaja-rezka-fanery': 'Лазерне різання фанери',
                '/lazernaja-rezka/lazernaja-rezka-kartona': 'Лазерне різання картону',
                '/lazernaja-rezka/lazernaja-rezka-kozi': 'Лазерне різання шкіри',
                '/lazernaja-rezka/lazernaja-rezka-mdf': 'Лазерне різання МДФ, ХДФ плит',
                '/lazernaja-rezka/lazernaja-rezka-lekal-trafaretov': 'Лазерне різання лекал і трафаретів',
                '/lazernaja-rezka/lazernaja-rezka-orgstekla': 'Лазерне різання оргскла',
                '/lazernaja-rezka/lazernaja-rezka-polikarbonata': 'Лазерне різання полікарбонату',
                '/lazernaja-rezka/lazernaja-rezka-polistirola': 'Лазерне різання полістиролу',
                '/lazernaja-rezka/lazernaja-rezka-porollona': 'Лазерне різання поролону',
                '/lazernaja-rezka/lazernaja-rezka-tkani': 'Лазерне різання тканини',
               
            }
        },
        // Лазерная гравировка
        btn_m13: {
            src:'/src/img/cat/min/grav_cat.jpg',
            links: {
               
                '/gravirovka/lazernaja-gravirovka-dereva': 'Лазерная гравировка дерева',
                '/gravirovka/lazernaja-gravirovka-fanery': 'Лазерная гравировка фанеры',
                '/gravirovka/lazernaja-gravirovka-kozi': 'Лазерная гравировка кожи',
                '/gravirovka/lazernaja-gravirovka-plastika': 'Лазерная гравировка пластика',
                '/gravirovka/lazernaja-gravirovka-akrila': 'Лазерная гравировка акрила',
                '/gravirovka/lazernaja-gravirovka-alluminija': 'Лазерная гравировка аллюминия',
                '/gravirovka/lazernaja-gravirovka-metalla': 'Лазерная гравировка металла',
            }
        },
        // Плоттерная резка
        btn_m14: {
            src:'/src/img/cat/min/plotter_cat.jpg',
            links: {
                '/plotternaja-rezka/plotternaja-rezka-plenok': 'Плоттерне різання плівок ORACAL, Ritrama, Avery',
                '/plotternaja-rezka/plotternaja-rezka-avtomobilnyh-plenok': 'Плоттерне різання автомобільних плівок',
                '/plotternaja-rezka/plotternaja-rezka-nakleek-na-okna': 'Плоттерне різання наклейок на вікна',
                '/plotternaja-rezka/plotternaja-rezka-stikerov': 'Плоттерне різання стікерів',
                '/plotternaja-rezka/plotternaja-rezka-lekal-i-trafaretov': 'Плоттерне різання лекал і трафаретів',
            }
        },
        
    };
    const generateHtml = function generateHtml(links) {
        let keys = Object.keys(links);
        let ali = keys.map(function(link) {
            let title = links[link];
            return '<li><a href="'+link+'">' + title + '</a></li>';
        });
        return '<ul>' + ali.join('') + '</ul>';
    };

    $('li.menu_category').on({
        'mouseover': function(){
            let catName = $(this).attr('data-category');
            let data = catList[catName];
            $('.change-image').attr('src', data.src);
            $('.menu_subcategory').html(generateHtml(data.links));
        }
    });

    // Наружная реклама
    $('.menu_category_bnt1').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/naruznaja.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/naruzhnaya-reklama/obyomnye-bukvy">Об\'ємні букви</a></li><li><a href="/naruzhnaya-reklama/vyveski">Вивіски</a></li><li><a href="/naruzhnaya-reklama/kryshnye-konstrukcii">Дахові конструкції</a></li><li><a href="/naruzhnaya-reklama/lajtboksy-svetovye-koroba">Лайтбокси/Світлові короби</a></li><li><a href="/naruzhnaya-reklama/oformlenie-vitrin">Оформлення вітрин</a></li><li><a href="/naruzhnaya-reklama/obshivka-fasada-kompozitom">Обшивка фасаду композитом</a></li><li><a href="/naruzhnaya-reklama/informacionnye-tablichki">Інформаційні таблички</a></li><li><a href="/naruzhnaya-reklama/oformlenie-vhodnyh-grupp-i-kozyrkov">Оформлення вхідних груп та козирків</a></li><li><a href="/naruzhnaya-reklama/reklamnye-konstrukcii">Рекламні конструкції</a></li><li><a href="/naruzhnaya-reklama/brendirovanie-transporta">Брендування транспорту</a></li><li><a href="/naruzhnaya-reklama/ulichnye-flazhnye-konstrukcii">Вуличні прапорні конструкції</a></li><li><a href="/naruzhnaya-reklama/led-displei">LED Дисплеї</a></li></ul>')
        }
    });
    // Брендированная одежда
    $('.menu_category_bnt2').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/odezjda-min.jpg');
            // addClass('opacity_1') ???
            $('.menu_subcategory').html('<ul><li><a href="/brendirovannaya-odezhda/futbolki">Футболки</a></li><li><a href="/brendirovannaya-odezhda/sumki-i-ryukzaki">Сумки та рюкзаки</a></li><li><a href="/brendirovannaya-odezhda/uniforma">Уніформа</a></li><li><a href="/brendirovannaya-odezhda/flisovye-kofty">Флісові кофти</a></li><li><a href="/brendirovannaya-odezhda/kepki-i-bejsbolki">Кепки та бейсболки</a></li><li><a href="/brendirovannaya-odezhda/zhiletki-i-kurtki">Жилетки та куртки</a></li><li><a href="/brendirovannaya-odezhda/fartuki">Фартухи</a></li></ul>')
        }
    });
    // Широкоформатная печать
    $('.menu_category_bnt3').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/shirokoformat-min.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/shirokoformatnaya-pechat/pechat-na-bannere">Друк на банері</a></li><li><a href="/shirokoformatnaya-pechat/pechat-na-plenke">Друк на плівці</a></li><li><a href="/shirokoformatnaya-pechat/pechat-na-bannernoj-setke">Друк на банерній сітці</a></li><li><a href="/shirokoformatnaya-pechat/pechat-na-holste">Друк на полотні</a></li><li><a href="/shirokoformatnaya-pechat/pechat-na-bumage">Друк на папері</a></li></ul>')
        }
    });
    // Оформление интерьеров
    $('.menu_category_bnt4').on({
        'click': function(){
            $('.change-image').attr('src','/src/img//cat/min/interier-min.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/oformlenie-intererov/sistemy-vizualnoj-navigacii">Системи візуальної навігації</a></li><li><a href="/oformlenie-intererov/stojki-resepshn">Стійки Ресепшн</a></li><li><a href="/oformlenie-intererov/svetovoj-logotip">Світловий логотип</a></li><li><a href="/oformlenie-intererov/sistemy-osveshcheniya">Системи освітлення</a></li><li><a href="/oformlenie-intererov/izgotovlenie-fotozon">Виготовлення фотозон</a></li><li><a href="/oformlenie-intererov/ugolki-pokupatelya">Куточки покупця</a></li><li><a href="/oformlenie-intererov/izgotovlenie-chasov">Виготовлення годинників</a></li><li><a href="/oformlenie-intererov/oformlenie-vitrin">Оформлення вітрин</a></li><li><a href="/oformlenie-intererov/oformlenie-torgovogo-zala">Оформлення торгової зали</a></li><li><a href="/oformlenie-intererov/stendy-dlya-obrazcov">Стенди для зразків</a></li><li><a href="/oformlenie-intererov/informacionnyj-stend">Інформаційний стенд</a></li><li><a href="/oformlenie-intererov/bukvy-iz-penoplasta">Літери з пінопласту</a></li><li><a href="/oformlenie-intererov/reklamnye-konstrukcii">Рекламні конструкції</a></li><li><a href="/oformlenie-intererov/oformlenie-steklyannyh-peregorodok">Оформлення скляних перегородок</a></li></ul>');
        }
    });
    // Сувенирная продукция
    $('.menu_category_bnt5').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/sywenir-min.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/suvenirnaya-produkciya/ruchki">Ручки</a></li><li><a href="/suvenirnaya-produkciya/aksessuary">Аксесуари</a></li><li><a href="/suvenirnaya-produkciya/antistressy">Антистреси</a></li><li><a href="/suvenirnaya-produkciya/brelki">Брелоки</a></li><li><a href="/suvenirnaya-produkciya/flagi-i-flazhki">Прапори та прапорці</a></li><li><a href="/suvenirnaya-produkciya/eko-izdeliya-iz-dereva-i-fanery">ЕКО вироби з дерева та фанери</a></li><li><a href="/suvenirnaya-produkciya/vozdushnye-shary">Повітряні кулі</a></li><li><a href="/suvenirnaya-produkciya/pakety-i-upakovka">Пакети та упаковка</a></li><li><a href="/suvenirnaya-produkciya/chashki-i-posuda">Чашки та посуд</a></li><li><a href="/suvenirnaya-produkciya/fleshki-i-powerbank">Флешки та PowerBank</a></li><li><a href="/suvenirnaya-produkciya/aromatizatory-v-avtomobil">Ароматизатори в автомобіль</a></li><li><a href="/suvenirnaya-produkciya/magnity">Магніти</a></li><li><a href="/suvenirnaya-produkciya/zonty">Парасолі</a></li><li><a href="/suvenirnaya-produkciya/shokoladki">Шоколадки</a></li><li><a href="/suvenirnaya-produkciya/znachki">Значки</a></li><li><a href="/suvenirnaya-produkciya/diskontnye-karty-udostovereniya">Дисконтні картки/посвідчення</a></li><li><a href="/suvenirnaya-produkciya/ezhednevniki">Щоденники</a></li></ul>');
        }
    });
    // Полиграфия
    $('.menu_category_bnt6').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/poligrafia-min.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/poligrafiya/vizitki">Візитки</a></li><li><a href="/poligrafiya/buklety-liflety-listovki">Буклети/Ліфлети/Листівки</a></li><li><a href="/poligrafiya/ezhednevniki">Щоденники</a></li><li><a href="/poligrafiya/bloknoty">Блокноти</a></li><li><a href="/poligrafiya/katalogi-i-broshyury">Каталоги та брошури</a></li><li><a href="/poligrafiya/upakovka">Упаковка</a></li><li><a href="/poligrafiya/plakaty">Плакати</a></li><li><a href="/poligrafiya/kalendari">Календарі</a></li></ul>');
        }
    });
    // Корпоративный стиль
    $('.menu_category_bnt7').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/korporativnizstil-min.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/korporativnyj-stil/razrabotka-korporativnogo-stilya">Розробка корпоративного стилю</a></li><li><a href="/korporativnyj-stil/brendirovanie-transporta">Брендування транспорту</a></li><li><a href="/korporativnyj-stil/poligrafiya">Поліграфія</a></li><li><a href="/korporativnyj-stil/suvenirnaya-produkciya">Сувенірна продукція</a></li><li><a href="/korporativnyj-stil/brendbuk">Брендбук</a></li><li><a href="/korporativnyj-stil/upakovka">Упаковка</a></li><li><a href="/korporativnyj-stil/oformlenie-vystavok">Оформлення виставок</a></li></ul>');
        }
    });
    // Освещение
    $('.menu_category_bnt8').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/light_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/osveshchenie/lyustry">Люстри</a></li><li><a href="/osveshchenie/svetovye-koroba-lajtboksy">Світлові короби (Лайтбокси)</a></li><li><a href="/osveshchenie/arhitekturnaya-podsvetka">Архітектурне підсвічування</a></li><li><a href="/osveshchenie/osveshchenie-vitrin">Освітлення вітрин</a></li></ul>');
        }
    });
    // POS Материалы
    $('.menu_category_bnt9').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/pos_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/pos-materialy/toppery">Топперы</a></li><li><a href="/pos-materialy/voblery">Воблеры</a></li><li><a href="/pos-materialy/izdeliya-iz-akrila-i-orgstekla">Вироби з акрилу та оргскла</a></li><li><a href="/pos-materialy/podstavki-pod-tovar">Підставки під товар</a></li><li><a href="/pos-materialy/shelftokery">Шелфтокери</a></li><li><a href="/pos-materialy/stoppery">Стоппери</a></li><li><a href="/pos-materialy/holdery">Холдери</a></li></ul>');
        }
    });
    // Выставочные стенды
    $('.menu_category_bnt10').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/stend_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/vystavochnye-stendy/portativnyj-stend-roll-up">Портативний стенд ROLL-UP</a></li><li><a href="/vystavochnye-stendy/portativnyj-stend-x-banner-pauk">Портативний стенд X-BANNER (павук)</a></li><li><a href="/vystavochnye-stendy/stend-pop-up">Стенд POP UP</a></li><li><a href="/vystavochnye-stendy/promostojka">Промостійка</a></li><li><a href="/vystavochnye-stendy/vystavochnyj-stend">Виставковий стенд</a></li><li><a href="/vystavochnye-stendy/razbornoj-stend-dlya-bannera">Розбірний стенд для банера</a></li><li><a href="/vystavochnye-stendy/fotozona">Фотозона</a></li><li><a href="/vystavochnye-stendy/shtendery">Штендери</a></li><li><a href="/vystavochnye-stendy/stendy-dlya-obrazcov">Стенди для зразків</a></li><li><a href="/vystavochnye-stendy/informacionnyj-stend">Інформаційний стенд</a></li></ul>');
        }
    });
    // Эксклюзив
    $('.menu_category_bnt11').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/ex_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/eksklyuziv/chasy-i-predmety-interera">Годинники та предмети інтер\'єру</a></li><li><a href="/eksklyuziv/elementy-osveshcheniya">Елементи освітлення</a></li><li><a href="/eksklyuziv/nestandartnye-reklamnye-konstrukcii">Нестандартні рекламні конструкції</a></li><li><a href="/eksklyuziv/cvetodinamicheskie-displei">Кольороводинамічні дисплеі</a></li></ul>');
        }
    });
    // Дополнительные услуги
    $('.menu_category_bnt12').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/dopolnitelnie-uslugi-min.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/dopolnitelnye-uslugi/lazernaya-rezka">Лазерне різання</a></li><li><a href="/dopolnitelnye-uslugi/lazernaya-gravirovka">Лазерне гравіювання</a></li><li><a href="/dopolnitelnye-uslugi/dizajn">Дизайн</a></li><li><a href="/dopolnitelnye-uslugi/plotternaya-rezka">Плоттерна різка</a></li><li><a href="/dopolnitelnye-uslugi/vysotnye-raboty">Висотні роботи</a></li><li><a href="/dopolnitelnye-uslugi/izdeliya-iz-fanery">Вироби із фанери</a></li><li><a href="/dopolnitelnye-uslugi/vyshivka">Вишивка</a></li><li><a href="/dopolnitelnye-uslugi/shelkotrafaretnaya-pechat">Шовкотрафаретний друк</a></li><li><a href="/dopolnitelnye-uslugi/ultrafioletovaya-pechat">Ультрафіолетовий друк</a></li><li><a href="/dopolnitelnye-uslugi/oformlenie-vystavok">Оформлення виставок</a></li></ul>');
        }
    });
    // Лазерная резка
    $('.menu_category_bnt13').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/lazer_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/lazernaja-rezka/lazernaja-rezka-fanery">Лазерная резка фанеры</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-akrila">Лазерная резка акрила</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-mdf">Лазерная резка мдф, хдф плит</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-polistirola">Лазерная резка полистирола</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-orgstekla">Лазерная резка оргстекла</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-polikarbonata">Лазерная резка поликарбоната</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-porollona">Лазерная резка пороллона</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-kozi">Лазерная резка кожи</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-kartona">Лазерная резка картона</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-tkani">Лазерная резка ткани</a></li><li><a href="/lazernaja-rezka/lazernaja-rezka-lekal-trafaretov">Лазерная резка лекал и трафаретов</a></li></ul>');
        }
    });
    // Гравировка
    $('.menu_category_bnt14').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/grav_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/gravirovka/lazernaja-gravirovka-dereva">Лазерная гравировка на дереве</a></li><li><a href="/gravirovka/lazernaja-gravirovka-fanery">Лазерная гравировка на фанере</a></li><li><a href="/gravirovka/lazernaja-gravirovka-kozi">Лазерная гравировка на коже</a></li><li><a href="/gravirovka/lazernaja-gravirovka-plastika">Лазерная гравировка на пластике</a></li><li><a href="/gravirovka/lazernaja-gravirovka-akrila">Лазерная гравировка на акриле</a></li><li><a href="/gravirovka/lazernaja-gravirovka-metalla">Лазерная гравировка на металле</a></li><li><a href="/gravirovka/lazernaja-gravirovka-alluminija">Лазерная гравировка на алюминии</a></li>');
        }
    });
    // Плоттерная резка
    $('.menu_category_bnt15').on({
        'click': function(){
            $('.change-image').attr('src','/src/img/cat/min/plotter_cat.jpg');
            $('.menu_subcategory').html('<ul><li><a href="/plotternaja-rezka/plotternaja-rezka-plenok">Плоттерная резка пленок ORACAL, Ritrama, Avery</a></li><li><a href="/plotternaja-rezka/plotternaja-rezka-avtomobilnyh-plenok">Плоттерная резка автомобильных пленок</a></li><li><a href="/plotternaja-rezka/plotternaja-rezka-nakleek-na-okna">Плоттерная резка наклеек на окна</a></li><li><a href="/plotternaja-rezka/plotternaja-rezka-stikerov">Плоттерная резка стикеров</a></li><li><a href="/plotternaja-rezka/plotternaja-rezka-lekal-i-trafaretov">Плоттерная резка лекал и трафаретов</a></li></ul>');
        }
    });


    // Img Lazyloading

    const targets = document.querySelectorAll('img');

    const lazyload = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const  img = entry.target;
                    const src = img.getAttribute('data-lazy');

                    img.setAttribute('src', src);
                    img.classList.add('fade');

                    observer.disconnect();
                }
            });

        });
        io.observe(target)
    };

    targets.forEach(lazyload);

    // Rotate on scroll
    var $animation_elements = $('.rtt');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});

$("#ajax_form").submit(function() {
    const str = $(this).serialize();

    $.ajax({
        type: "POST",
        url: "/mail",
        data: str,
        dataType: 'json',
        success: function(response) {
            var result;
            if (response.status == 'success') {
              $("#f_name").val('');
              $("#f_email").val('');
              $("#f_message").val('');
              $("#f_phone").val('');
              $('#result_form').html('Дякуєм, '+response.message);
            } else {
              $('#result_form').html('Помилка: '+response.message)
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#result_form').html('Помилка: '+errorThrown + ' (' + textStatus + ')');
        }

    });
    return false;
});

$("#ajax_form_sub").submit(function() {
    const str = $(this).serialize();

    $.ajax({
        type: "POST",
        url: "/subcat",
        data: str,
        dataType: 'json',
        success: function(response) {
            var result;
            if (response.status == 'success') {
              $("#f_name2").val('');
              $("#f_email2").val('');
              $("#f_message2").val('');
              $("#f_phone2").val('');
              $('#result_form2').html('Дякую, '+response.message);
            } else {
              $('#result_form2').html('Помилка: '+response.message)
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#result_form2').html('Помилка: '+errorThrown + ' (' + textStatus + ')');
        }

    });
    return false;
});
// Footer content
const   instaLink = document.querySelector('.insta_link'),
        linkedLink = document.querySelector('.linked_link'),
        faceLink = document.querySelector('.face_link'),
        googleMap = document.querySelector('.google_map'),
        fStreet = document.querySelector('.f_street'),
        linkFirst = document.querySelector('.f_first'),
        linkSecond = document.querySelector('.f_second'),
        linkThird  = document.querySelector('.f_third'),
        copyright = document.querySelectorAll('.copyright')
// Меню
linkFirst.href = '/about';
linkFirst.textContent = 'О нас';

linkSecond.href = '/portfolio';
linkSecond.textContent = 'Портфоліо';

linkThird.href = '/contacts';
linkThird.textContent = 'Контакти';

// Социалки
instaLink.href = 'https://www.instagram.com/advance_branding/';
linkedLink.href = 'https://www.linkedin.com/company/advc-branding';
faceLink.href = 'https://www.facebook.com/advc.com.ua';

// Адрес
fStreet.textContent = 'провулок Роз\'їзний, 27'

// Карта
googleMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10264.725756149272!2d36.23118855539478!3d49.97045585414487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a07c5d566615%3A0x8af373bf79739dc4!2z0L_RgNC-0LLRg9C70L7QuiDQoNC-0Lcn0ZfQt9C90LjQuSwgMjcsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1suk!2sua!4v1622799369734!5m2!1suk!2sua';

// Копирайт
const newCopyright = new Date();
const newCopyYear = newCopyright.getFullYear();
copyright.forEach(function (i) {
    i.textContent = `${newCopyYear}`
})
