const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
const CHAT_ID = '-1002084469289';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// const success2 = document.querySelector('success-2');
document.getElementById('form2').addEventListener('submit', function(e) {
    e.preventDefault();
    let message1 = `<b>\u{411}\u{415}\u{421}\u{41F}\u{41B}\u{410}\u{422}\u{41D}\u{410}\u{42F} \u{41A}\u{41E}\u{41D}\u{421}\u{423}\u{41B}\u{42C}\u{422}\u{410}\u{426}\u{418}\u{42F}</b>
`;
    message1 += `<b>\u{418}\u{43C}\u{44F}: </b> ${this.name.value}\n`;
    message1 += `<b>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: </b> ${this.tel.value}\n`;
    message1 += `<b>\u{41A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}: </b> ${this.comment.value}\n`;
    //   message += `<b>Телефон: </b> ${this.phone.value}\n`;
    //   message += `<b>Коментар: </b> ${this.comment.value}`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message1
    }).then((res)=>{
        this.name.value = '';
        this.tel.value = '';
        this.comment.value = '';
        //   this.phone.value = '';
        //   this.comment.value = '';
        //   this.topic.value = '';
        //   this.checkbox.value = '';
        this.comment.value = `\u{2705} Thank you! Your message has been sent. We will call you back within 10 minutes.`;
    // success1.textContent = `Дякуємо за замовлення`;
    // success1.classList.add('success-1');
    // '<p class="message2">Message sent!</p class="message2"><p>A manager will contact you in 15 minutes!</p>';
    // success1.style.display = 'block';
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("\u041A\u043E\u043D\u0435\u0446");
    });
});

//# sourceMappingURL=index.ce5c9c7c.js.map
