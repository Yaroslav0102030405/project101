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
    ua: 'Портфоліо',
    ru: 'Портфолио',
    pl: 'Portfolio',
    en: 'Portfolio',
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
    ua: 'Ріелтор комерційної нерухомості у Варшаві',
    ru: 'Риэлтор коммерческой недвижимости в Варшаве',
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
    ua: 'Безкоштовна консультація',
    ru: 'Оставить заявку',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  'header_banner-link': {
    ua: 'Або зателефонувати за номером +48 735 775 810',
    ru: 'Или позвонить по номеру +48 735 775 810',
    pl: 'Lub zadzwoń +48 735 775 810',
    en: 'Or call +48 735 775 810',
  },
  'service_title': {
    ua: 'Послуги',
    ru: 'Услуги',
    pl: 'Usługi',
    en: 'Services',
  },
  'service_pre-title-1': {
    ua: '- Оренда приміщень під магазин, кафе, ресторан, шаурму, піцерію',
    ru: '- Аренда помещений под магазин, кафе, ресторан, шаурму, пиццерию',
    pl: '- Wynajem lokalu pod sklep, kawiarnię, restaurację, shawarmę, pizzerię',
    en: '- Rent of premises for a shop, cafe, restaurant, shawarma, pizzeria',
  },
  'service_description-1': {
    ua: 'Шукаєте ідеальне місце для відкриття магазину, кафе, ресторану, шаурми чи піцерії у Варшаві? Я пропоную широкий вибір комерційних приміщень, що відповідають потребам вашого бізнесу. Незалежно від того, чи ви плануєте запуск нового проекту, чи розширюєте існуючий, у нас є пропозиції, що допоможуть вам досягти успіху.',
    ru: 'Ищете идеальное место для открытия магазина, кафе, ресторана, шаурмы или пиццерии в Варшаве? Я предлагаю широкий выбор коммерческих помещений, отвечающих потребностям вашего бизнеса. Независимо от того, планируете ли вы запуск нового проекта или расширяете существующий, у нас есть предложения, которые помогут вам добиться успеха.',
    pl: 'Szukasz idealnego miejsca na otwarcie sklepu, kawiarni, restauracji, shawarmy lub pizzerii w Warszawie? Oferuję szeroki wybór powierzchni komercyjnych, które spełnią potrzeby Twojego biznesu. Niezależnie od tego, czy planujesz uruchomić nowy projekt, czy rozszerzyć istniejący, mamy sugestie, które pomogą Ci osiągnąć sukces.',
    en: 'Looking for the perfect location to open a shop, cafe, restaurant, shawarma or pizzeria in Warsaw? I offer a wide range of commercial premises to suit your business needs. Whether you are planning to launch a new project or expand an existing one, we have offers to help you succeed.',
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
    ua: '- Оренда офісів для стартапів та зростаючих компаній',
    ru: '- Аренда офисов для стартапов и растущих компаний',
    pl: '- Wynajem biur dla startupów i rozwijających się firm',
    en: '- Office rental for startups and growing companies',
  },
  // 'service_description-2': {
  //   ua: '- Оренда офісів для стартапів та зростаючих компаній',
  //   ru: '- Аренда офисов для стартапов и растущих компаний',
  //   pl: '- Wynajem biur dla startupów i rozwijających się firm',
  //   en: '- Office rental for startups and growing companies',
  // },
  'service_description-2': {
    ua: 'Шукаєте ефективне та зручне офісне рішення у Варшаві для вашого стартапу чи компанії, що активно розвивається? Я пропоную гнучкі умови оренди малих та середніх офісних приміщень, які ідеально відповідають потребам динамічного бізнесу.',
    ru: 'Ищете эффективное и удобное офисное решение в Варшаве для вашего стартапа или активно развивающейся компании? Я предлагаю гибкие условия аренды малых и средних офисных помещений, идеально отвечающих потребностям динамичного бизнеса.',
    pl: 'Szukasz wydajnego i wygodnego rozwiązania biurowego w Warszawie dla swojego startupu lub szybko rozwijającej się firmy? Oferuję elastyczne warunki wynajmu małych i średnich powierzchni biurowych, które idealnie odpowiadają potrzebom dynamicznego biznesu.',
    en: 'Are you looking for an efficient and convenient office solution in Warsaw for your startup or rapidly growing company? I offer flexible rental conditions for small and medium-sized office spaces that perfectly meet the needs of a dynamic business.',
  },
  // 'service_description-2-3': {
  //   ua: 'Добра поблизу інфраструктура і доїзд.',
  //   ru: 'Хорошая инфраструктура вблизи и доезд.',
  //   pl: 'W pobliżu dobra infrastruktura i dojazd.',
  //   en: 'Good infrastructure nearby and easy access.',
  // },
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
    ua: '- Оренда офісів в різних хмарочосах Варшави',
    ru: '- Аренда офисов в разных небоскребах Варшавы',
    pl: '- Biura do wynajęcia w różnych wieżowcach w Warszawie',
    en: '- Offices for rent in various skyscrapers in Warsaw',
  },
  'service_description-3': {
    ua: 'Шукаєте престижний офіс у самому серці Варшави, що підкреслить статус та амбіції вашої компанії? Пропоную елітні офісні приміщення в найсучасніших хмарочосах столиці Польщі – місцях, де інновації зустрічаються з комфортом, а бізнес розвивається у динамічному середовищі.',
    ru: 'Ищете престижный офис в самом сердце Варшавы, что подчеркнет статус и амбиции вашей компании? Предлагаю элитные офисные помещения в самых небоскребах столицы Польши – местах, где инновации встречаются с комфортом, а бизнес развивается в динамичной среде.',
    pl: 'Szukasz prestiżowego biura w samym sercu Warszawy, które podkreśli status i ambicje Twojej firmy? Oferuję elitarne powierzchnie biurowe w najnowocześniejszych wieżowcach stolicy Polski – miejscach, w których innowacyjność spotyka się z komfortem, a biznes rozwija się w dynamicznym otoczeniu.',
    en: 'Are you looking for a prestigious office in the heart of Warsaw that will emphasize the status and ambitions of your company? I offer elite office space in the most modern skyscrapers of the Polish capital - places where innovation meets comfort, and business develops in a dynamic environment.',
  },
  // 'service_description-3-1': {
  //   ua: 'Легалізація працівників Вашої фірми.',
  //   ru: 'Легализация работников вашей фирмы.',
  //   pl: 'Legalizacja pracowników Twojej firmy.',
  //   en: '- legalisation of your company`s employees.',
  // },
  // 'service_description-3-2': {
  //   ua: 'Звертайтеся я з радістю Вам допоможу',
  //   ru: 'Обращайтесь с радостью Вам помогу',
  //   pl: 'Skontaktuj się ze mną, chętnie Ci pomogę',
  //   en: 'Contact me with pleasure, I will help you.',
  // },
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
    ua: 'Переваги співпраці зі мною',
    ru: 'Преимущества сотрудничать со мной',
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
    ua: 'Про мене',
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
    ua: 'Безкоштовна консультація',
    ru: 'Звоните, пишите или оставляйте заявку',
    pl: 'Państwo mogą zadzwonić, napisać lub wysłać zapytanie do mnie',
    en: 'You can call, or send your questions to me',
  },
  contacts_logo: {
    ua: 'Я знайду для Вас офіс в будь-якому районі Варшави',
    ru: 'Я бесплатно найду для вас офис в любом районе Варшавы. Звоните или заполняйте форму обратной связи или пишите в телеграммы.',
    pl: 'Za darmo znajdę dla Ciebie biuro w każdej dzielnicy Warszawy. Zadzwoń lub wypełnij formularz kontaktowy lub napisz do mnie na telegram.',
    en: 'I will find an office space for you for free in any district of Warsaw. Call or fill out the feedback form or write to me via Telegram.',
  },
  form_title: {
    ua: 'Залиште свої контактні дані, і ми зв`яжемося з вами',
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
    ua: 'Залиште свої контактні дані, і ми зв`яжемося з вами',
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
