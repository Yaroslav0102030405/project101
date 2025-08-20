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
  'portfolio-title': {
    ua: 'Кейс якій я закрив для клієнта',
    ru: 'Кейс которой я закрыл для клиента',
    pl: 'Sprawa, którą zamknąłem dla klienta',
    en: 'A case I closed for a client',
  },

  'portfolio-title-2': {
    ua: 'Вимоги: сучасний, з меблями, в центрі міста та з виглядом на Палац Культури і Науки',
    ru: 'Требования: современный, с мебелью, в центре города и с видом на Дворец Культуры и Науки',
    pl: 'Wymagania: nowoczesne, umeblowane, w centrum miasta i z widokiem na Pałac Kultury i Nauki',
    en: 'Requirements: modern, with furniture, in the city center and with a view of the Palace of Culture and Science',
  },
  'portfolio-title-3': {
    ua: 'Я виконав усі вимоги, клієнт залишися задоволений і ми разом випили по чашці кави!',
    ru: 'Я выполнил все требования, клиент остался доволен, и мы вместе выпили по чашке кофе!',
    pl: 'Spełniłem wszystkie wymagania, klient był zadowolony, a my wypiliśmy razem filiżankę kawy!',
    en: 'I fulfilled all the requirements, the client was satisfied, and we had a cup of coffee together!',
  },
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
    ru: 'Аренда коммерческой недвижимости в Варшаве',
    pl: 'Nieruchomości komercyjne na wynajem w Warszawie',
    en: 'Commercial real estate for rent in Warsaw',
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
    ua: 'Безкоштовна консультація',
    ru: 'Бесплатная консультация',
    pl: 'Darmowa konsultacja',
    en: 'Free consultation',
  },
  'header_banner-link': {
    ua: 'Або зателефонувати за номером +48 735 775 810',
    ru: 'Или позвонить по номеру +48 735 775 810',
    pl: 'Lub zadzwoń +48 735 775 810',
    en: 'Or call +48 735 775 810',
  },
  service_title: {
    ua: 'Мої послуги',
    ru: 'Мои услуги',
    pl: 'My usługi',
    en: 'My services',
  },
  'service_pre-title-1': {
    ua: '- Оренда приміщень під магазин, кав`ярню, ресторан, шаурму, піцерію',
    ru: '- Аренда помещений под магазин, кафе, ресторан, шаурму, пиццерию',
    pl: '- Wynajem lokalu pod sklep, kawiarnię, restaurację, shawarmę, pizzerię',
    en: '- Rent of premises for a shop, cafe, restaurant, shawarma, pizzeria',
  },
  'service_description-1': {
    ua: 'В мене є широкий вибір різних комерційних приміщень і я швидко знайду вам ідеальну локацію.',
    ru: 'У меня есть широкий выбор разніх коммерческих помещений и я быстро найду для вас идеальную локацию.',
    pl: 'Oferuję szeroki wybór powierzchni komercyjnych, które spełnią potrzeby Twojego biznesu.',
    en: 'I offer a wide range of commercial premises to suit your business needs.',
  },
  'service_description-1-3': {
    ua: 'Метраж від 20 до 100 мкв',
    ru: 'Метраж от 20 до 100 мкв.',
    pl: 'Powierzchnia od 20 do 100 m2.',
    en: 'Area from 20 to 100 sq.m.',
  },
  'service_description-1-4': {
    ua: '*Послуга безкоштовна',
    ru: '*Услуга бесплатная',
    pl: '*Usługa jest bezpłatna.',
    en: '*The service is free.',
  },
  'service_button-1': {
    ua: 'Знайти оренду',
    ru: 'Найти аренду',
    pl: 'Znajdź wynajem',
    en: 'Find a rental',
  },
  'service_link-1': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  'service_pre-title-2': {
    ua: '- Оренда офісів для стартапів та зростаючих компаній',
    ru: '- Аренда офисов для стартапов и растущих компаний',
    pl: '- Wynajem biur dla startupów i rozwijających się firm',
    en: '- Office rental for startups and growing companies',
  },
  'service_description-2': {
    ua: 'Маю гнучкі умови для довгострокової оренди малих та середніх офісних приміщень.',
    ru: 'Имею гибкие условия для долгосрочной аренды малых и средних офисных помещений.',
    pl: 'Oferuję elastyczne warunki wynajmu małych i średnich powierzchni biurowych, które idealnie odpowiadają potrzebom dynamicznego biznesu',
    en: 'I offer flexible rental conditions for small and medium-sized office spaces that perfectly meet the needs of a dynamic business',
  },
  'service_description-2-4': {
    ua: 'Метраж від 100 до 1000 мкв',
    ru: 'Метраж от 100 до 1000 мкв.',
    pl: 'Powierzchnia od 100 do 1000 m2.',
    en: 'Area from 100 to 1000 sq.m.',
  },
  'service_description-2-5': {
    ua: '*Послуга безкоштовна',
    ru: '*Услуга бесплатная',
    pl: '*Usługa jest bezpłatna',
    en: '*The service is free',
  },
  'service_button-2': {
    ua: 'Знайти оренду',
    ru: 'Найти аренду',
    pl: 'Znajdź wynajem',
    en: 'Find a rental',
  },
  'service_link-2': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  'service_pre-title-3': {
    ua: '- Оренда офісів для великих компаній в хмарочосах Варшави',
    ru: '- Аренда офисов для крупных компаний в небоскребах Варшавы',
    pl: '- Wynajem biur dla dużych firm w warszawskich wieżowcach',
    en: '- Office rental for large companies in Warsaw skyscrapers',
  },
  'service_description-3': {
    ua: 'Пропоную елітні офісні приміщення в найсучасніших хмарочосах Варшави з красивим видом на місто.',
    ru: 'Предлагаю элитные офисные помещения в самых небоскребах Вашавы с красивым видом на город.',
    pl: 'Oferuję elitarne powierzchnie biurowe w najnowocześniejszych wieżowcach Warszawy.',
    en: 'I offer elite office space in the most modern skyscrapers of Warsaw.',
  },
  'service_description-3-5': {
    ua: 'Метраж від 500 до 10 000 мкв',
    ru: 'Метраж от 500 до 10  000 мкв.',
    pl: 'Powierzchnia od 500 do 10 000 m2.',
    en: 'Area from 500 to 10 000 sq.m.',
  },
  'service_description-3-3': {
    ua: '*Послуга безкоштовна',
    ru: '*Услуга беслптаная',
    pl: '*Usługa jest bezpłatna',
    en: '*The service is free',
  },
  'service_button-3': {
    ua: 'Знайти оренду',
    ru: 'Найти аренду',
    pl: 'Znajdź wynajem',
    en: 'Find a rental',
  },
  'service_link-3': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  advantages_title: {
    ua: 'Переваги співпраці зі мною',
    ru: 'Преимущества сотрудничать со мной',
    pl: 'Zalety współpracy ze mną',
    en: 'Advantages of working with me',
  },
  'advantages_pre-title-1': {
    ua: 'Знаю всі нюанси на ринку комерційної нерухомості Варшави',
    ru: 'Знаю все нюансы на рынке коммерческой недвижимости Варшавы',
    pl: 'Znam wszystkie niuanse warszawskiego rynku nieruchomości komercyjnych',
    en: 'I know all the nuances of the Warsaw commercial real estate market',
  },
  'advantages_pre-title-2': {
    ua: 'Маю широкій вибір приміщень, якій щотижня оновлюється',
    ru: 'Имею широкий выбор помещений, которой еженедельно обновляется',
    pl: 'Dysponuję szerokim wyborem pokoi, który jest aktualizowany co tydzień',
    en: 'I have a wide selection of rooms, which is updated weekly',
  },
  'advantages_pre-title-3': {
    ua: 'Мої послуги безкоштовні і я не беру ніяких комісій',
    ru: 'Мои услуги бесплатные и я не беру никаких комиссий',
    pl: 'Moje usługi są bezpłatne i nie pobieram żadnych prowizji',
    en: 'My services are free and there are no hidden costs',
  },
  'advantages_pre-title-4': {
    ua: 'В мене індивідуальний підхід до потреб та вимог клієнта',
    ru: 'У меня индивидуальный подход к потребностям и требованиям клиента',
    pl: 'Do potrzeb i wymagań klienta podchodzę indywidualnie',
    en: 'I have an individual approach to the client`s needs and requirements',
  },
  'advantages_pre-title-5': {
    ua: 'Cупровід на всіх етапах угоди з оренди приміщення',
    ru: 'Сопровождение на всех этапах сделки по аренде помещения',
    pl: 'Wsparcie na każdym etapie umowy najmu',
    en: 'Support at all stages of the lease agreement',
  },
  about_title: {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
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
    ua: 'Я професіонал, якій спеціалізується на оренді комерційної нерухомості у Варшаві. Моя місія — допомагати міжнародному бізнесу знайти ідеальне приміщення для успішного розвитку в Варшаві. Я розумію унікальні потреби підприємців, від стартапів, які шукають своє перше приміщення або офіс, до великих компаній, що прагнуть розширити свою присутність у престижних хмарочосах Варшави.',
    ru: 'Я профессионал, которому специализируется на аренде коммерческой недвижимости в Варшаве. Моя миссия — помогать международному бизнесу найти идеальное помещение для успешного развития в Варшаве. Я понимаю уникальные потребности предпринимателей, от стартапов, ищущих свое первое помещение или офис до крупных компаний, стремящихся расширить свое присутствие в престижных небоскребах Варшавы. ',
    pl: 'Jestem profesjonalistą specjalizującym się w wynajmie nieruchomości komercyjnych w Warszawie. Moją misją jest pomoc międzynarodowym firmom w znalezieniu idealnej przestrzeni do udanego rozwoju w Warszawie. Rozumiem wyjątkowe potrzeby przedsiębiorców, od startupów poszukujących swojej pierwszej przestrzeni lub biura, po duże firmy pragnące rozszerzyć swoją obecność w prestiżowych warszawskich wieżowcach.',
    en: 'I am a professional specializing in commercial real estate leasing in Warsaw. My mission is to help international businesses find the perfect space to thrive in Warsaw. I understand the unique needs of entrepreneurs, from startups looking for their first space or office to large companies looking to expand their presence in Warsaw`s prestigious skyscrapers.',
  },
  about_description3: {
    ua: 'Мої ключові переваги:',
    ru: 'Мои ключевые преимущества:',
    pl: 'Moje główne zalety:',
    en: 'My key advantages:',
  },
  about_description4: {
    ua: '- Глибоке знання ринку: Я постійно аналізуємо ринок нерухомості Варшави, щоб пропонувати вам актуальні та найвигідніші пропозиції.',
    ru: '- Глубокое знание рынка: Я постоянно анализируем рынок недвижимости Варшавы, чтобы предлагать вам самые актуальные и выгодные предложения.',
    pl: '- Głęboka znajomość rynku: Stale analizujemy warszawski rynek nieruchomości, aby móc przedstawić Państwu najbardziej trafne i opłacalne oferty.',
    en: '- Deep market knowledge: We constantly analyze the Warsaw real estate market to offer you the most relevant and profitable offers.',
  },
  about_description5: {
    ua: '- Індивідуальний підхід: Я не просто шукаю приміщення, я вивчаємо ваш бізнес, його специфіку та цілі, щоб знайти локацію, яка сприятиме вашому успіху. ',
    ru: '- Индивидуальный подход: Я не просто ищу помещение, я изучаем ваш бизнес, его специфику и цели, чтобы найти локацию, которая будет способствовать вашему успеху.',
    pl: '- Indywidualne podejście: nie szukam tylko lokalu, ale badam Twój biznes, jego specyfikę i cele, aby znaleźć lokalizację, która przyczyni się do Twojego sukcesu.',
    en: '- Individual approach: I don`t just look for premises, I study your business, its specifics and goals to find a location that will contribute to your success.',
  },
  about_description6: {
    ua: '- Повний супровід: Від першої консультації до підписання договору оренди — я поруч на кожному етапі, забезпечуючи прозорість та безпеку угоди.',
    ru: '- Полное сопровождение: От первой консультации до подписания договора аренды я рядом на каждом этапе, обеспечивая прозрачность и безопасность сделки.',
    pl: '- Pełne wsparcie: Od pierwszej konsultacji aż do podpisania umowy najmu jestem obecny na każdym etapie, zapewniając przejrzystość i bezpieczeństwo transakcji.',
    en: '- Full support: From the first consultation to the signing of the lease agreement, I am there at every stage, ensuring transparency and security of the transaction.',
  },
  about_description7: {
    ua: 'Я прагну бути вашим надійним партнером у світі комерційної нерухомості Варшави. Якщо готові розпочати пошук вашого ідеального комерційного простору? Зв`яжиться зі мною!',
    ru: 'Я стараюсь быть вашим надежным партнером в мире коммерческой недвижимости Варшавы. Если вы готовы начать поиск вашего идеального коммерческого пространства? Свяжитесь со мной!',
    pl: 'Staram się być Państwa godnym zaufania partnerem w świecie nieruchomości komercyjnych w Warszawie. Czy jesteś gotowy rozpocząć poszukiwania idealnej powierzchni komercyjnej? Skontaktuj się ze mną!',
    en: 'I strive to be your reliable partner in the world of commercial real estate in Warsaw. Are you ready to start searching for your ideal commercial space? Contact me!',
  },
  contacts_title: {
    ua: 'Безкоштовна консультація',
    ru: 'Бесплатная консультация',
    pl: 'Darmowa konsultacja',
    en: 'Free consultation',
  },
  contacts_logo: {
    ua: 'Я знайду для Вас офіс в будь-якому районі Варшави',
    ru: 'Я бесплатно найду для вас офис в любом районе Варшавы',
    pl: 'Znajdę dla Ciebie biuro w dowolnej dzielnicy Warszawy',
    en: 'I will find an office for you in any district of Warsaw',
  },
  form_title: {
    ua: 'Залиште свої контактні дані для зворотного зв`язку',
    ru: 'Оставьте свои контактные данные для обратной связи',
    pl: 'Zostaw swoje dane kontaktowe, abyśmy mogli przesłać Ci opinię',
    en: 'Leave your contact details for feedback',
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
    ua: 'Залиште свої контактні дані для зворотного зв`язку',
    ru: 'Оставьте свои контактные данные для обратной связи',
    pl: 'Zostaw swoje dane kontaktowe, abyśmy mogli przesłać Ci opinię',
    en: 'Leave your contact details for feedback',
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
langButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
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
  arr.forEach((elem) => {
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
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log('navigator.language', checkBrowserLang());
