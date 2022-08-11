<!--FOOTER-->
<footer>
    <div class="footer_top">
        <div class="footer_top_left">
            <div class="footer_form_wrapper">
                <div class="footer_form">
                    <div class="form_container">
                        <p class="bigger_center">Напишіть нам</p>
                        <p>Зв'яжіться з нашими фахівцями та отримайте консультацію з будь-якого питання, що вас цікавить.
                        </p>
                    </div>
                    <div class="form_container">
                        <form action="/mail" method="post" id="ajax_form">
                            <div>
                                <label for="f_theme">Тематика вашого звернення</label>
                                <select  name="option" id="f_theme">
                                    <option value="Предложение о сотрудничестве">Пропозиція про співпрацю</option>
                                    <option value="Материалы и услуги" selected>Матеріали та послуги</option>
                                    <option value="Работа в компании">Робота в компанії</option>
                                </select>
                            </div>
                            <div>
                                <label for="f_name">Ваше ім'я</label>
                                <input type="text" name="name" id="f_name">
                            </div>
                            <div>
                                <label for="f_email">Електронна пошта</label>
                                <input type="email" id="f_email" name="email">
                            </div>
                            <div>
                                <label for="f_phone">Телефон</label>
                                <input type="number" id="f_phone" name="phone">
                            </div>
                            <div>
                                <label for="f_message">Повідомлення</label>
                                <textarea id="f_message" rows="5" cols="33" name="message"></textarea>
                            </div>
                            <button type="submit" name="send"  class="btn-2"><span>Надіслати</span></button>
                            <div id="result_form"></div>
                        </form>
                    </div>
                </div>
                <div class="footer_form_border">

                </div>
            </div>
            <div class="footer_triangles">
                <img data-lazy="/src/img/footer/Triangle.svg" class="orbit" src="/" alt="decoration">
                <img data-lazy="/src/img/footer/Triangle.svg" class="orbit_rev" src="/" alt="decoration">
            </div>
        </div>
        <div class="footer_top_right">
            <div class="footer_triangles">
                <div class="exodus_container">
                    <div class="exodus_triangle">
                        <img class="triangle_shape" data-lazy="/src/img/footer/Triangle.svg" src="/" alt="decoration">
                    </div>
                </div>
            </div>
            <div class="footer_contacts">
                <div class="f_contacts">
                    <span>
                        <img data-lazy="/src/img/footer/address.svg" src="/" alt="address">
                    </span>
                    <div>
                        <p class="orange">Наша адреса</p>
                        <p>Україна, Київ, Харків</p>
                        <p class="f_street"></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div class="f_contacts">
                     <span>
                        <img data-lazy="/src/img/footer/phones.svg" src="/" alt="phone">
                    </span>
                    <div>
                        <p class="orange">Телефон</p>
                        <p>Вікторія Колесник:</p>
                        <p><a href="tel://+380967617616">+38(096)761 761 6</a></p>
                        <p>Ігор Шорох</p>
                        <p><a href="tel://+380506625511">+38(050)662 551 1</a></p>
                    </div>
                </div>
                <div class="f_contacts">
                    <span>
                       <img data-lazy="/src/img/footer/telega.svg" src="/" alt="telegram">
                    </span>
                    <div>
                        <p class="orange">Telegram</p>
                        <p><a title="Telegram"  href="https://telegram.me/Advance_kharkov ">Advance_kharkov</a></p>
                        <p><a title="Telegram"  href="https://telegram.me/advance_branding ">Advance_branding</a></p>
                    </div>
                </div>
            </div>
            <div class="contact_map">
                <!--                <img data-lazy="src/img/black.jpg" src="/" alt="Black Image" />-->
                <iframe class="google_map" id="f_map" src="" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="f_mail">
                <p>Ми завжди відкриті до співпраці із замовниками, постачальниками матеріалів, виробниками та рекламними агенствами. Надішліть нам запит і ми зв'яжемося з вами протягом години<br>
                    <span><a href="mailto:advanced.kh.ua@gmail.com" class="orange">advanced.kh.ua@gmail.com</a></span>
                </p>
            </div>
        </div>
    </div>
    <div class="footer_bottom">
        <div>
            <p class="logo big">ADVANCE</p>
        </div>
        <div class="footer_menu">
            <div>
                <div class="footer_nav">
                    <nav class="main_menu">
                        <ul class="menu_ul">
                            <li class="fs20"><a href="" class="f_first"></a></li>
                            <li class="fs20"><a href="" class="f_second"></a></li>
                            <li class="fs20"><a href="" class="f_third"></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <div class="footer_copyright">
                    <p class="r">Copyright &copy; <span class="copyright"></span> ADVANCE. All rights reserved</p>
                </div>
            </div>
        </div>
        <div class="footer_social">
            <div>
                <p class="r">Підписуйся на нас</p>
                <p class="r">в соціальних мережах</p>
            </div>
            <div class="social_wrapper">
                <span><a class="insta_link" type="text/html" target="_blank" href="https://instagram.com/advance_branding?igshid=1w458734r9wqp"><img data-lazy="/src/img/footer/insta.svg" src="https://instagram.com/advance_branding?igshid=1w458734r9wqp" alt="instagram icon"></a></span>
                <span><a class="linked_link" type="text/html" target="_blank" href="https://www.linkedin.com/company/advc-branding"><img data-lazy="/src/img/footer/linked.svg" src="https://www.linkedin.com/company/advc-branding" alt="linkedin icon"></a></span>
                <span><a class="face_link" type="text/html" target="_blank" href="https://www.facebook.com/advc.com.ua/"><img data-lazy="/src/img/footer/facebook.svg" src="https://www.facebook.com/advc.com.ua/" alt="facebook icon"></a></span>
            </div>
        </div>
    </div>
    <div class="footer_mobile_copy">
        <p class="r">Copyright &copy; <span class="copyright"></span> ADVANCE. All rights reserved</p>
    </div>
    <script>
        window.onload = function(){
            setTimeout(function(){
                document.getElementById("f_map").style.display = "block";
            },1000);
        };

    </script>

</footer>
