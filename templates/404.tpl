{include file='page_header.tpl'}

<link rel="stylesheet" href="static/css/embers.css">

<div class="sections_container embers_wrapper">
    <!--TOP SECTION-->
    <div class="embers-img">

        <div class="embers front-row">
            <div class="flicker" style="left: 4%; bottom: 107%; animation-delay: 0.60s; animation-duration: 4s;">
                <div class="stem" style="animation-delay: 0.60s; animation-duration: 4s; opacity: .60; transform: scale(1.60);"></div>
            </div>
            <div class="flicker" style="left: 9%; bottom: 109%; animation-delay: 0.77s; animation-duration: 5s;">
                <div class="stem" style="animation-delay: 0.77s; animation-duration: 5s; opacity: .77; transform: scale(1.77);">

                </div>
            </div>
            <div class="flicker" style="left: 11%; bottom: 103%; animation-delay: 0.7s; animation-duration: 2s;">
                <div class="stem" style="animation-delay: 0.7s; animation-duration: 2s; opacity: .7; transform: scale(1.7);">
                </div>
            </div>
            <div class="flicker" style="left: 14%; bottom: 105%; animation-delay: 0.41s; animation-duration: 3s;">
                <div class="stem" style="animation-delay: 0.41s; animation-duration: 3s; opacity: .41; transform: scale(1.41);">

                </div>
            </div>
            <div class="flicker" style="left: 18%; bottom: 107%; animation-delay: 0.72s; animation-duration: 4s;">
                <div class="stem" style="animation-delay: 0.72s; animation-duration: 4s; opacity: .72; transform: scale(1.72);">
                </div>
            </div>
            <div class="flicker" style="left: 20%; bottom: 103%; animation-delay: 0.30s; animation-duration: 2s;">
                <div class="stem" style="animation-delay: 0.30s; animation-duration: 2s; opacity: .30; transform: scale(1.30);">

                </div>
            </div>
            <div class="flicker" style="left: 22%; bottom: 103%; animation-delay: 0.66s; animation-duration: 2s;">
                <div class="stem" style="animation-delay: 0.66s; animation-duration: 2s; opacity: .66; transform: scale(1.66);">

                </div>
            </div>
            <div class="flicker" style="left: 25%; bottom: 105%; animation-delay: 0.23s; animation-duration: 3s;">
                <div class="stem" style="animation-delay: 0.23s; animation-duration: 3s; opacity: .23; transform: scale(1.23);">

                </div>
            </div>
        </div>
        <div class="embers back-row"><div class="flicker" style="right: 4%; bottom: 107%; animation-delay: 1.60s; animation-duration: 4s;"><div class="stem" style="animation-delay: 0.60s; animation-duration: 4s; opacity: .60; transform: scale(2.60);"></div></div><div class="flicker" style="right: 9%; bottom: 109%; animation-delay: 1.77s; animation-duration: 5s;"><div class="stem" style="animation-delay: 0.77s; animation-duration: 5s; opacity: .77; transform: scale(2.77);"></div></div><div class="flicker" style="right: 11%; bottom: 103%; animation-delay: 1.7s; animation-duration: 2s;"><div class="stem" style="animation-delay: 0.7s; animation-duration: 2s; opacity: .7; transform: scale(2.7);"></div></div><div class="flicker" style="right: 14%; bottom: 105%; animation-delay: 1.41s; animation-duration: 3s;"><div class="stem" style="animation-delay: 0.41s; animation-duration: 3s; opacity: .41; transform: scale(2.41);"></div></div><div class="flicker" style="right: 18%; bottom: 107%; animation-delay: 1.72s; animation-duration: 4s;"><div class="stem" style="animation-delay: 0.72s; animation-duration: 4s; opacity: .72; transform: scale(2.72);"></div></div><div class="flicker" style="right: 20%; bottom: 103%; animation-delay: 1.30s; animation-duration: 2s;"><div class="stem" style="animation-delay: 0.30s; animation-duration: 2s; opacity: .30; transform: scale(2.30);"></div></div><div class="flicker" style="right: 22%; bottom: 103%; animation-delay: 1.66s; animation-duration: 2s;"><div class="stem" style="animation-delay: 0.66s; animation-duration: 2s; opacity: .66; transform: scale(2.66);"></div></div><div class="flicker" style="right: 25%; bottom: 105%; animation-delay: 1.23s; animation-duration: 3s;"><div class="stem" style="animation-delay: 0.23s; animation-duration: 3s; opacity: .23; transform: scale(2.23);"></div></div></div>

    </div>
    <section class="main_top_wrapper four_o_four">
        <div class="logo_container">
            <p class="very_big">ADVANCE</p>
            <hr class="logo_underline">

            <div class="main_top_triangles four_o">
                <div class="exodus_container">
                    <div class="exodus_triangle">
                        <img class="triangle_shape" data-lazy="src/img/footer/Triangle.svg" src="/" alt="decoration">
                    </div>
                </div>
                <div class="exodus_container">
                    <div class="exodus_triangle">
                        <img class="triangle_shape" data-lazy="src/img/footer/Triangle.svg" src="/" alt="decoration">
                    </div>
                </div>
            </div>

            <div class="service_triangles" style="display: none">
                <div>
                    <div class="triangle__figure--small">
                        <img data-lazy="src/img/footer/Triangle.svg" src="/" alt="decoration">
                    </div>
                </div>
                <div>
                    <div class="triangle__figure--medium">
                        <img data-lazy="src/img/footer/Triangle.svg" src="/" alt="decoration">
                    </div>
                </div>
                <div>
                    <div class="triangle__figure--large">
                        <img data-lazy="src/img/footer/Triangle.svg" src="/" alt="decoration">
                    </div>
                </div>
            </div>
        </div>
        <div class="title-wrapper"><p id="home_title">Advanced</p>
            <input type="hidden" value="Страница не найдена,Page not found,404" id="home_title_value">
        </div>
    </section>
</div>
<script>
    // RUNNING TITLE
    var replaceText = {
        $text_container: null,
        replace_delay: 1500,
        text_arr: [],
        current_text_key: 0,
        current_text: '',
        current_char_key: 0,
        initReplace: function(text_arr, text_container_id) {
            this.text_arr = text_arr;
            this.$text_container = $('#' + text_container_id);

            if(this.$text_container.length) {
                this.runReplace();
            }
        },
        replace: function() {
            this.updateTextKey();

            this.current_text = this.text_arr[this.current_text_key];
            this.current_char_key = 0;

            this.$text_container.html('');

            this.runType();
        },
        runReplace: function() {
            setTimeout(function() {
                replaceText.replace();
            },  this.replace_delay);
        },
        updateTextKey: function() {
            this.current_text_key = (this.current_text_key + 1) % this.text_arr.length;
        },
        typeDelay: function() {
            var min_delay = 50,
                max_delay = 100;

            return Math.random() * (max_delay - min_delay) + min_delay;
        },
        typeText: function() {
            var letter = this.current_text.charAt(this.current_char_key);

            this.$text_container.append(letter);

            if(this.current_char_key < this.current_text.length) {
                this.runType();
                this.current_char_key++;
            } else {
                this.runReplace();
            }
        },
        runType: function() {
            setTimeout(function() {
                replaceText.typeText();
            },  this.typeDelay());
        }
    }

    function animateText() {
        var text_list = $('#home_title_value').val().split(',');

        replaceText.initReplace(text_list, 'home_title');
    }

    $(function() {

        animateText();

    });
</script>

<?php require_once "footer.php" ?>

</body>
</html>