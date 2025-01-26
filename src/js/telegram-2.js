// const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
// const CHAT_ID = '-1002084469289';
const TOKEN = '8169061476:AAHtDS5WvAkDO9fKRI7oDyzOKKibMVvLoN0';
const CHAT_ID = '-1002317382342';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const formText = document.querySelector('.form__text2');
const formBlock = document.querySelector('.form_answer2');

document.getElementById('form2').addEventListener('submit', function (e) {
  e.preventDefault();

  let message1 = `<b>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</b>\n`;
  message1 += `<b>Имя: </b> ${this.name.value}\n`;
  message1 += `<b>Телефон: </b> ${this.tel.value}\n`;
  message1 += `<b>Комментарий: </b> ${this.comment.value}\n`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message1,
    })
    .then(res => {
      this.name.value = '';
      this.tel.value = '';
      this.comment.value = '';
      // this.comment.value = `✅ I will contact You within one hour.`;
      formText.classList.add('form__none2');
      formBlock.classList.add('form_answer-block2');
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('Конец');
    });
});
