const htmlEl = document.querySelector('html');
const buttonEl = document.querySelector('.js-container');

buttonEl.addEventListener('click', onClickButton2);

function onClickButton2(e) {
  console.log(e.target.textContent);
  if (e.target.classList.contains('en')) {
    htmlEl.setAttribute('lang', 'en');
    console.log('Привіт');
  } else if (e.target.classList.contains('pl')) {
    htmlEl.setAttribute('lang', 'pl');
  } else if (e.target.classList.contains('ua')) {
    htmlEl.setAttribute('lang', 'ua');
  } else if (e.target.classList.contains('ru')) {
    htmlEl.setAttribute('lang', 'ru');
  }
  return;
}

const homeTexts = {
  // 'home_page-title': {
  //   ua: 'Yurii Bukhtii',
  //   ru: 'Yurii Bukhtii',
  //   pl: 'Yurii Bukhtii',
  //   en: 'Yurii Bukhtii',
  // },
  // 'header_logo-title': {
  //   ua: 'Yurii Bukhtii',
  //   ru: 'Yurii Bukhtii',
  //   pl: 'Yurii Bukhtii',
  //   en: 'Yurii Bukhtii',
  // },
  'header_menu-home': {
    ua: 'Головна',
    ru: 'Главная',
    pl: 'Główna',
    en: 'Home',
  },
  'header_menu-service': {
    ua: 'Послуги',
    ru: 'Услуги',
    pl: 'Usługi',
    en: 'Services',
  },
  'header_menu-advantages': {
    ua: 'Переваги',
    ru: 'Преимущества',
    pl: 'Zalety',
    en: 'Advantages',
  },
  'header_menu-about': {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
  },
  'header_menu-contacts': {
    ua: 'Контакти',
    ru: 'Контакты',
    pl: 'Kontakty',
    en: 'Contact',
  },
  'header_banner-name': {
    ua: 'Yurii Bukhtii',
    ru: 'Yurii Bukhtii',
    pl: 'Yurii Bukhtii',
    en: 'Yurii Bukhtii',
  },
  // 'header_banner-title': {
  //   ua: 'Брокер комерційної нерухомості в Варшаві',
  //   ru: 'Брокер коммерческой недвижимости в Варшаве',
  //   pl: 'Broker nieruchomości komercyjnych w Warszawie',
  //   en: 'Commercial real estate broker in Warsaw',
  // },
  'header_banner-pre-title': {
    ua: 'Оренда комерційної нерухомості у Варшаві',
    ru: 'Аренда офисов, коммерческой недвижимости в Варшаве',
    pl: 'Wynajem Biur, nieruchomości komercyjnych w Warszawie',
    en: 'Renting of Office space, commercial real estate in Warsaw',
  },
  // 'header_banner-advantages-1': {
  //   ua: '✓ оренду офісу в Варшаві',
  //   ru: '✓ аренду офиса Варшаве',
  //   pl: '✓ wynajem biura w Warszawie',
  //   en: '✓ office space to rent',
  // },
  // 'header_banner-advantages-2': {
  //   ua: '✓ склад в Польщі',
  //   ru: '✓ склад в Польше',
  //   pl: '✓ magazyn w Polsce',
  //   en: '✓ warehouses to rent',
  // },
  // 'header_banner-advantages-3': {
  //   ua: '✓ зареєструвати фірму в Польщі',
  //   ru: '✓ зарегистрировать фирму в Польше',
  //   pl: '✓ rejestracja firmy w Polsce',
  //   en: '✓ assistance with company registration',
  // },
  'header_banner-button': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  'header_banner-link': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  service_title: {
    ua: 'Я займаюсь пошуком найкращих варіантів оренди офісів',
    ru: 'Я занимаюсь поиском лучших вариантов аренды офисов',
    pl: 'Szukam najlepszych opcji wynajmu biur',
    en: 'I find the most suitable office rental offers',
  },
  'service_pre-title-1': {
    ua: 'Оренда офісу в Варшаві',
    ru: 'Аренда офису в Варшаве',
    pl: 'Biuro do wynajęcia w Warszawie',
    en: 'Office rental in Warsaw',
  },
  'service_description-1': {
    ua: 'Для Вас я знайду офіс в різних районах Варшави.',
    ru: 'Для вас найду помещение под офис в любом районе Варшавы.',
    pl: 'Znajdę dla Ciebie biuro w różnych dzielnicach Warszawy.',
    en: 'I will find an office space in Warsaw.',
  },
  'service_description-1-2': {
    ua: 'Офіс може бути як готовий мебльований, так і запроєктований згідно Ваших побажань.',
    ru: 'Офис может быть как готов меблирован, так и запроектирован согласно Вашим пожеланиям.',
    pl: 'Biuro może być w pełni umeblowane lub zaprojektowane według Waszych potrzeb.',
    en: 'The office can be designed according to your needs or an office space wich is fully serviced and ready to move in. ',
  },
  'service_description-1-3': {
    ua: 'Метраж від 100 до 30 000 мкв',
    ru: 'Метраж от 100 до 30000 мкв.',
    pl: 'Powierzchnia od 100 do 30 000 m2.',
    en: 'Area from 100 to 30 000 sq.m.',
  },
  'service_description-1-4': {
    ua: '*Послуга повністю безкоштовна і немає прихованих комісій',
    ru: '*Услуга полностью бесплатная и нет скрытых комиссий',
    pl: '*Usługa jest całkowicie bezpłatna i nie zawiera żadnych ukrytych opłat',
    en: '*My service is free and there are no hidden costs.',
  },
  'service_button-1': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  'service_link-1': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  'service_pre-title-2': {
    ua: 'Склад в Польщі',
    ru: 'Склад в Польше',
    pl: 'Magazyn w Polsce',
    en: 'Warehouse in Poland',
  },
  'service_description-2': {
    ua: 'Я також займаюся орендою складів в Польщі.',
    ru: 'Я также занимаюсь арендой складов в Польше.',
    pl: 'Wynajmuję również magazyny w Polsce.',
    en: 'I also rent warehouses in Poland.',
  },
  'service_description-2-2': {
    ua: 'В доступі є база власників/операторів Складів в Польщі з офісними приміщеннями.',
    ru: 'В доступе есть база владельцев/операторов в Польше с офисными помещениями.',
    pl: 'Dostępna jest baza danych właścicieli/operatorów Magazynów w Polsce.',
    en: 'I have access to a database of owners/operators of warehouses.',
  },
  'service_description-2-3': {
    ua: 'Добра поблизу інфраструктура і доїзд.',
    ru: 'Хорошая инфраструктура вблизи и доезд.',
    pl: 'W pobliżu dobra infrastruktura i dojazd.',
    en: 'Good infrastructure nearby and easy access.',
  },
  'service_description-2-4': {
    ua: 'Метраж від 100 до 30 000 мкв',
    ru: 'Метраж от 100 до 30000 мкв.',
    pl: 'Powierzchnia od 500 do 30 000 m2.',
    en: 'Area from 500 to 30 000 sq.m.',
  },
  'service_description-2-5': {
    ua: '*Послуга повністю безкоштовна і немає прихованих комісій',
    ru: '*Услуга полностью бесплатна и нет скрытых комиссий',
    pl: '*Usługa jest całkowicie bezpłatna i nie zawiera żadnych ukrytych opłat',
    en: '*My service is free and there are no hidden costs.',
  },
  'service_button-2': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  'service_link-2': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  'service_pre-title-3': {
    ua: 'Реєстрації фірми в Польщі та супровід',
    ru: 'Регистрации фирмы в Польше и сопровождение',
    pl: 'Rejestracja firmy w Polsce',
    en: 'I assist in:',
  },
  'service_description-3': {
    ua: 'Допомогаю в відкритті фірм в Польщі, повний супровід її діяльності.',
    ru: 'Помощью в открытии фирм в Польше, полное сопровождение ее деятельности.',
    pl: 'Pomagam w otwieraniu firm w Polsce, pełne wsparcie jej działalności.',
    en: '- the process of registering companies and all the services,',
  },
  'service_description-3-1': {
    ua: 'Легалізація працівників Вашої фірми.',
    ru: 'Легализация работников вашей фирмы.',
    pl: 'Legalizacja pracowników Twojej firmy.',
    en: '- legalisation of your company`s employees.',
  },
  'service_description-3-2': {
    ua: 'Звертайтеся я з радістю Вам допоможу',
    ru: 'Обращайтесь с радостью Вам помогу',
    pl: 'Skontaktuj się ze mną, chętnie Ci pomogę',
    en: 'Contact me with pleasure, I will help you.',
  },
  'service_description-3-3': {
    ua: '*Послуга платна',
    ru: '*Услуга платная',
    pl: '*Usługa jest płatna',
    en: '*Service is paid.',
  },
  'service_button-3': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  'service_link-3': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  advantages_title: {
    ua: '5 причин співпрацювати зі мною',
    ru: '5 причин сотрудничать со мной',
    pl: '5 powodów, dla których warto ze mną współpracować',
    en: '5 reasons to contact me',
  },
  'advantages_pre-title-1': {
    ua: 'Маю успішний досвід в комерційній нерухомісті',
    ru: 'Имею успешный опыт в коммерческой недвижимости',
    pl: 'Mam udane doświadczenie w Nieruchomościach Komercyjnych',
    en: 'I have successful experience in commercial real estate',
  },
  'advantages_pre-title-2': {
    ua: 'Пропоную тільки найкращі варіанти оренди',
    ru: 'Предлагаю только лучшие варианты оренды',
    pl: 'Proponuję tylko odpowiednie opcje wynajmu',
    en: 'I offer only the best rental options',
  },
  'advantages_pre-title-3': {
    ua: 'Мої послуги безкоштовні і я не беру ніяких комісій',
    ru: 'Мои услуги бесплатные и я не беру никаких комиссий',
    pl: 'Moje usługi są bezpłatne i nie pobieram żadnych prowizji',
    en: 'My services are free and there are no hidden costs',
  },
  'advantages_pre-title-4': {
    ua: 'Допомогаю на всіх етапах підписання договору по оренді',
    ru: 'Помогаю на всех этапах подписания договору по оренде',
    pl: 'Pomagam na wszystkich etapach podpisywania umowy najmu',
    en: 'I help you at all stages of signing a rental agreement',
  },
  'advantages_pre-title-5': {
    ua: 'В мене найбільша база оренди офісів та складів в Варшаві',
    ru: 'У меня самая большая база аренды офисов и складов в Варшаве',
    pl: 'Mam największą bazę wynajmów biur oraz magazynów',
    en: 'I have the largest base of office space and warehouses in Warsaw',
  },
  about_title: {
    ua: 'Я професіонал і вмію знаходити ідеальну локалізацію',
    ru: 'Я профессионал и умею находить идеальный вариант',
    pl: 'Jestem profesjonalistą i potrafię znaleźć idealną lokalizację',
    en: 'I am a professional and know how to find the perfect location',
  },
  // about_name: {
  //   ua: 'Yurii Bukhtii',
  //   ru: 'Yurii Bukhtii',
  //   pl: 'Yurii Bukhtii',
  //   en: 'Yurii Bukhtii',
  // },
  about_description: {
    ua: 'Привіт! Мене звати Yurii Bukhtii.',
    ru: 'Привет! Меня зовут Yurii Bukhtii.',
    pl: 'Cześć! Nazywam się Yurii Bukhtii.',
    en: 'Hello! My name is Yurii Bukhtii.',
  },
  about_description2: {
    ua: 'Я брокер комерційної нерухомості в Варшаві.',
    ru: 'Я брокер коммерческой недвижимости в Варшаве.',
    pl: 'Jestem brokerem nieruchomości komercyjnych w Warszawie.',
    en: 'I am a commercial real estate broker in Warsaw.',
  },
  about_description3: {
    ua: 'Моя робота полягає у тому, щоб допомогти інвесторам, підприємцям та організаціям знайти ідеальний офіс для їхньої діяльності.',
    ru: 'Моя работа состоит в том, чтобы помочь инвесторам, предпринимателям и организациям найти идеальный офис для их деятельности.',
    pl: 'Moją pracą jest wsparcie inwestorów, przedsiębiorców i organizacji w znalezieniu idealnego biura dla ich biznesu.',
    en: 'My job is to help investors, entrepreneurs, and organizations find the perfect office space for their operations.',
  },
  about_description4: {
    ua: 'Я проводжу Вас через цілий процес найму комерційної нерухомості до підпису договору найкращого для Вас офісу.',
    ru: 'Я провожу Вас через целый процесс найма коммерческой недвижимости до подписи договора лучшего для Вас офиса.',
    pl: 'Przeprowadzę Cię przez cały proces wynajmu nieruchomości komercyjnej aż do podpisania umowy na najlepsze dla Ciebie biuro.',
    en: 'I will guide you through the entire process of renting commercial real estate until the contract is signed.',
  },
  about_description5: {
    ua: 'В мене з клієнтами надійні та прозорі відносини, також я маю доступ до великої бази нерухомості і це дозволяє мені швидко знаходити приміщення для оренди які потрібні моїм клієнтам. ',
    ru: 'У меня с клиентами надежные и прозрачные отношения, также у меня есть доступ к большой базе недвижимости и это позволяет мне быстро находить помещения для аренды которые нужны моим клиентам.',
    pl: 'Mam rzeteln i przejrzyst relacj ze swoimi klientami Mam dostęp do dużej bazy nieruchomości, co pozwala mi szybko znaleźć lokale do wynajęcia, których potrzebują moi klienci.',
    en: 'I have access to a large real estate database, which enables me to find the ideal office space for my clients.',
  },
  about_description6: {
    ua: 'Проживаю в Варшаві і Ви можете приїхати до мене в офіс або ми можемо зустрітися де Вам буде зручніше. ',
    ru: 'Проживаю в Варшаве и Вы можете приехать ко мне в офис или мы можем встретиться, где Вам будет удобнее.',
    pl: 'Pracuję w Warszawie i możesz przyjechać do mojego biura lub możemy spotkać się tam, gdzie jest wygodniej dla Ciebie.',
    en: 'I work in Warsaw and we can meet at my office or wherever is convenient for you.',
  },
  about_description7: {
    ua: 'Я готовий допомогти Вам знайти ідеальну Локалізацію!',
    ru: 'Я готов помочь Вам найти идеальную локализацию!',
    pl: 'Jestem gotowy pomóc Ci w znalezieniu idealnej lokalizacji!',
    en: 'I am ready to help you find your perfect location.',
  },
  contacts_title: {
    ua: 'Дзвоніть, пишіть або залишайте заявку',
    ru: 'Звоните, пишите или оставляйте заявку',
    pl: 'Państwo mogą zadzwonić, napisać lub wysłać zapytanie do mnie',
    en: 'You can call, or send your questions to me',
  },
  contacts_logo: {
    ua: 'Я безкоштовно знайду для Вас офіс в будь-якому районі Варшави. Телефонуйте чи заповнюйте форму обратнього зв`язку або пишіть в телеграм.',
    ru: 'Я бесплатно найду для вас офис в любом районе Варшавы. Звоните или заполняйте форму обратной связи или пишите в телеграммы.',
    pl: 'Za darmo znajdę dla Ciebie biuro w każdej dzielnicy Warszawy. Zadzwoń lub wypełnij formularz kontaktowy lub napisz do mnie na telegram.',
    en: 'I will find an office space for you for free in any district of Warsaw. Call or fill out the feedback form or write to me via Telegram.',
  },
  form_title: {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  form_name: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel: {
    ua: 'Номер телефону*',
    ru: 'Номер телефона*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment: {
    ua: 'Коментар',
    ru: 'Комментарий',
    pl: 'Comment',
    en: 'Message',
  },
  form_btn: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  form_title2: {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  form_name2: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel2: {
    ua: 'Номер телефону*',
    ru: 'Номер телефона*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment2: {
    ua: 'Коментар',
    ru: 'Комментарий',
    pl: 'Comment',
    en: 'Message',
  },
  form_btn2: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać',
    en: 'Send',
  },
  form_answer1: {
    ua: '✅ Повідомлення відправлено.',
    ru: '✅ Сообщение отправлено.',
    pl: '✅ Pytanie wysłano',
    en: '✅ Message sent.',
  },
  form_answer12: {
    ua: 'Зв`яжуся з Вами протягом однієї години.',
    ru: 'Я свяжусь с Вами в течении одного часа.',
    pl: 'Skontaktuję się z Tobą w ciągu godziny.',
    en: 'I will contact you within one hour.',
  },
  form_answer21: {
    ua: '✅ Повідомлення відправлено.',
    ru: '✅ Сообщение отправлено.',
    pl: '✅ Wiadomość wysłana.',
    en: '✅ Message sent.',
  },
  form_answer22: {
    ua: 'Зв`яжуся з Вами протягом однієї години.',
    ru: 'Я свяжусь с Вами в течении одного часа.',
    pl: 'Skontaktuję się z Tobą w ciągu jednej godziny.',
    en: 'I will contact You within one hour.',
  },
};

// console.log(htmlEl.lang);
// return;
// const langButtons = document.querySelectorAll('[data-btn]');
const langButtons = document.querySelectorAll('.btn');
const allLangs = ['ua', 'ru', 'pl', 'en'];
const currentPathName = window.location.pathname;
let currentLang = 'ua';
// localStorage.getItem('language') || checkBrowserLang() || 'ua';
let currentTexts = {};

// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentTexts = homeTexts;
      break;
    // case '/another_page.html':
    //   currentTexts = anotherTexts;
    //   break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    if (!event.target.classList.contains('header__btn_active')) {
      currentLang = event.target.dataset.btn;
      // localStorage.setItem('language', event.target.dataset.btn);
      resetActiveClass(langButtons, 'header__btn_active');
      btn.classList.add('header__btn_active');
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
// function checkActiveLangButton(e) {
//   switch (currentLang) {
//     case 'ua':
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ua');
//       break;
//     case 'ru':
//       document.querySelector('[data-btn="ru"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ru');
//       break;
//     case 'pl':
//       document.querySelector('[data-btn="pl"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'pl');
//       break;
//     case 'de':
//       document.querySelector('[data-btn="en"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'en');
//       break;

//     default:
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'uk');
//       break;
//   }
// }
// checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some(elem => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log('navigator.language', checkBrowserLang());
