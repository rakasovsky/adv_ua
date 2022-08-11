<div class="form_wrapper subcat">
<div class="form_container">
    <h3>Замовити прорахунок </h3>
    <p>Заповніть форму та наші фахівці допоможуть вам прорахувати вартість вашого замовлення</p>
    <form action="/mail" method="post" id="ajax_form_sub">
        <div class="category_form-section">
            <div>
                <label for="f_name">Ваше ім'я</label>
                <input type="text" name="name" id="f_name2">
            </div>
            <div>
                <label for="f_phone">Телефон</label>
                <input type="phone" id="f_phone2" name="phone">
            </div>
        </div>

        <div class="category_form-section">
            <div>
                <label for="f_email">Електронна пошта</label>
                <input type="email" id="f_email2" name="email">
            </div>
        </div>

        <div class="category_form-section">
            <div class="form_message-field">
                <label for="f_message">Повідомлення</label>
                <textarea id="f_message2" rows="5" cols="33" name="message"
                    placeholder="Любая дополнительная информация"></textarea>
            </div>
        </div>


        <button type="submit" name="send" class="btn-2"><span>Прорахувати</span></button>
        <div id="result_form2"></div>
    </form>

</div>
<div class="f_border">
</div>
</div>