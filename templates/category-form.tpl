<div class="form_wrapper">
<div class="form_container">
    <h3>Замовити прорахунок</h3>
    <p>Заповніть форму замовлення та наші спеціалісти допоможуть вам<br> прорахувати вартість вашого замовлення</p>
    <form action="/mail" method="post" id="ajax_form">
        <div class="category_form-section">
            <div>
                <label for="f_name">Ваше ім'я</label>
                <input type="text" name="name" id="f_name">
            </div>
            <div>
                <label for="f_phone">Телефон</label>
                <input type="phone" id="f_phone" name="phone">
            </div>
        </div>

        <div class="category_form-section">
            <div>
                <label for="f_email">Електронна пошта</label>
                <input type="email" id="f_email" name="email">
            </div>
            <div>
                <label for="f_theme">Оберіть категорію</label>
                <select name="option" id="f_theme">
                    <option value="Розробка корпоративного стилю" selected>Розробка корпоративного стилю</option>
                    <option value="Брендування транспорту">Брендування транспорту
                    </option>
                    <option value="Поліграфія">Поліграфія</option>
                    <option value="Сувенірна продукція">Сувенірна продукція
                    </option>
                    <option value="Брендбук">Брендбук
                    </option>
                    <option value="Упаковка">Упаковка
                    </option>
                    <option value="Оформлення виставок">Оформлення виставок
                    </option>

                </select>
            </div>
        </div>

        <div class="category_form-section">
            <div class="form_message-field">
                <label for="f_message">Повідомлення</label>
                <textarea id="f_message" rows="5" cols="33" name="message"
                    placeholder="Любая дополнительная информация"></textarea>
            </div>
        </div>


        <button type="submit" name="send" class="btn-2"><span>Прорахувати</span></button>
        <div id="result_form"></div>
    </form>

</div>
<div class="f_border">
</div>
</div>