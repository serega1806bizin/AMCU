/* eslint-disable max-len */
import { useAnimateInView } from '../../../utils/useAnimateInView';
import styles from './Styles.module.css';
import React from 'react';

const content = {
  // eslint-disable-next-line max-len
  p1: 'Ласкаво просимо до «WE WORLD», динамічної молодіжної громадської організації, яка займається неформальною освітою, сприянням інноваційності та креативності серед молоді.',
  // eslint-disable-next-line max-len
  p2: 'Ми – це бізнес спільнота. А бізнес — це не про вид діяльності, а про спосіб мислення. Думати, як підприємець — це робити помилки, змінюватися, бути в тренді та робити неможливе.',
  // eslint-disable-next-line max-len
  p3: 'Наша головна мета – відновлення довіри одне до одного, створення підтримуючого оточення та об’єднання людей, які прагнуть змін на краще і роблять певні кроки для їх досягнення.',
  // eslint-disable-next-line max-len
  p4: 'Важливо памʼятати, що молодь це не підлітки, це особи від 14 до 35 років. А це підприємці, батьки, спеціалісти та інші.',
  // eslint-disable-next-line max-len
  p5: 'Ми віримо, що молоді люди мають унікальну перспективу та енергію, які можна використати для створення сучасних рішень складних проблем. За допомогою наших програм та ініціатив ми прагнемо надати молодим людям можливість взяти на себе лідерство у формуванні майбутнього України.',

  img1: 'https://weworld.org.ua/wp-content/uploads/DSC_2512-768x512.jpg.webp',

  // eslint-disable-next-line max-len
  p6: 'Наша організація побудована на основі співпраці, інклюзивності, різноманітності.',
  // eslint-disable-next-line max-len
  p7: 'Ми об’єднуємо молодь з різним походженням, культурою та дисциплінами для досягнення спільної мети.',
  // eslint-disable-next-line max-len
  p8: ' «WE WORLD» – це платформа для спілкування, навчання та обміну ідеями, а також підтримки наших учасників за допомогою наставництва, коучингу та спільноти яка формується в організації.',
  // eslint-disable-next-line max-len
  p9: 'Ми прагнемо сприяти підприємництву, творчості та інноваціям серед молоді. Наші програми включають воркшопи, семінари та мережеві заходи, які допомагають молодим людям розвивати навички, необхідні для досягнення успіху й кар’єрного зростання. ',
  // eslint-disable-next-line max-len
  p10: 'Також надаємо інструменти фінансування, ресурсів і можливостей, які дозволяють молодим людям перетворювати свої творчі ідеї на успішний бізнес.',
  // eslint-disable-next-line max-len
  p11: '«WE WORLD» – це команда молодих людей, які наважилися на зміни. Ми знаємо, що вони неможливі без реальних дій, тому не зупиняємося на досягнутому, постійно самовдосконалюємося і розвиваємося, а також із задоволенням ділимося своїми знаннями, досвідом та ентузіазмом з усіма, хто прагне змін.',

  img2: 'https://weworld.org.ua/wp-content/uploads/DSC_2184-768x512.jpeg.webp',
  // eslint-disable-next-line max-len
  p12: '«WE WORLD» вірить, що молодь –  це рушійна сила, яка здатна змінити життя у місті й країні на краще. Ми прагнемо дати їм змогу повністю реалізувати свій потенціал і побудувати динамічну, процвітаючу економіку країни, яка принесе користь усім нам. Приєднуйся до нас сьогодні та стань частиною цієї захоплюючої подорожі!',
};

const team = [
  {
    name: 'Владислав Кодацький',
    img: 'https://weworld.org.ua/wp-content/uploads/DSCF8730-scaled-e1685814610280.jpg.webp',
    about:
      'Керівник ГО “WE WORLD”. Цілеспрямований лідер, який рухає організацію вперед, мотивує команду та створює навколо себе невпинний потік енергії, що передається оточуючим. Мета: “Змінювати спосіб мислення людей, показувати своїм прикладом, що кожен може творити зміни - моя головна мета” “Гарне кіно, смачна їжа, естетика та спілкування з людьми - це те, що мене надихає”',
  },
  {
    name: 'Христина Швець',
    img: 'https://weworld.org.ua/wp-content/uploads/DSCF8475-scaled-e1685816577941.jpg.webp',
    // eslint-disable-next-line prettier/prettier
    about:
      'Співзасновниця ГО “WE WORLD”. Мрійниця, яка вірить у створення неформальної молодіжної спільноти, яку б об’єднували бажання навчатися, розвиватися і діяти. Мета: “Виховувати наступне покоління, дати йому те, чого не було у нас” “Люблю історію, особливо військову, вінілові пластинки та подорожі.”',
  },
  {
    name: 'Ольга Андрущенко',
    img: 'https://weworld.org.ua/wp-content/uploads/DSCF8374-scaled-e1685815042279.jpg.webp',
    about:
      'Креативна людина (Human resources). Ідейна натхненниця, яка відповідає за атмосферу в організації, мотивує та допомагає усім членам комади краще зрозуміти свої сильні та слабкі сторони, перспективу для кар’єрного зростання й особистісного розвитку. Це людина, яка вчить кожного довіряти та прислуховуватися до власних ідей і бажань не ігноруючи при цьому потреби оточуючих. Мета: “Мені хочеться, щоб люди стали більш відкритими і навчилися довіряти собі і іншим”. “Мені подобається розмірковувати, писати, люблю цікавих людей, саморозвиток, психологію і усе, що пов’язано з пізнанням себе і життя ”.',
  },
  {
    name: 'Валерія Грекова',
    img: 'https://weworld.org.ua/wp-content/uploads/photo_2024-07-27-15.19.45.jpeg.webp',
    about:
      'Організаційна менеджерка. Амбітна й цілеспрямована людина, яка керує операційними процесами у ГО “WE WORLD” та філії Асоціації Молодіжних Центрів України. Саме вона відповідає за чіткий механізм ефективного управління командою. Мета: “Зробити внесок у розвиток міста, донести людям, що, якщо хочеться щось змінити, то треба починати з себе ”. “Люблю читати, займаюсь англійською та вивчаю право”.',
  },
  {
    name: 'Поліна Кожухар',
    img: 'https://weworld.org.ua/wp-content/uploads/4-e1720108778198.jpeg.webp',
    about:
      'Дизайнерка. Креативи, презентації, візуальний супровід постів та історій у соціальних мережах, загалом уся краса, яку можна у нас побачити - її рук справа. Мета: “Допомагати молоді розвиватися, залучати та активувати їх до створення чогось корисного”. “Люблю займатися йогою, слухати музику, читати, особливо фентезі”',
  },
  {
    name: 'Софія Пирогова',
    img: 'https://weworld.org.ua/wp-content/uploads/photo_5197290133789988296_x.jpg.webp',
    about:
      'Адміністраторка сайту, райтерка, комунікаційниця зі ЗМІ. Людина, яка займається створенням контенту для сайту, написанням текстів, їх публікацією і оформленням. Мета: “Допомогти молоді знайти дружнє і підтримуюче середовище, яке сприятиме розвитку їх внутрішнього потенціалу”. “Люблю природу, багато гуляти пішки, читати, постійно пробувати щось нове”',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/display-name
const Paragraph = React.forwardRef(({ text }, ref) => {
  return (
    <p ref={ref} style={{ fontWeight: 400 }}>
      {text}
    </p>
  );
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Teammate = ({ name, img, about }) => {
  return (
    <div className="col-1 in-view in-view-animated">
      <div className={styles.img_}>
        <img src={img} alt={name} className="cover" />
      </div>
      <p className={`${styles.hdr} h5 b`}>{name}</p>
      <p className="txt">{about}</p>
    </div>
  );
};

export const S2 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p = Array.from({ length: 12 }, () => useAnimateInView());
  const refImg1 = useAnimateInView();
  const refImg2 = useAnimateInView();

  return (
    <div className={`${styles.ss2} screen`}>
      <div className="container">
        <article className="cnt can-animate-inner">
          <Paragraph text={content.p1} ref={p[0]} />
          <Paragraph text={content.p2} ref={p[1]} />
          <Paragraph text={content.p3} ref={p[2]} />
          <Paragraph text={content.p4} ref={p[3]} />
          <Paragraph text={content.p5} ref={p[4]} />

          <Paragraph />
          <img
            style={{
              margin: '0 0 3rem 0',
            }}
            ref={refImg1}
            loading="lazy"
            decoding="async"
            className="size-full wp-image-2890 aligncenter"
            // eslint-disable-next-line max-len
            src="https://weworld.org.ua/wp-content/uploads/DSC_2512-scaled.jpg.webp"
            alt=""
            width="2560"
            height="1707"
            // eslint-disable-next-line react/no-unknown-property
            srcset="
              https://weworld.org.ua/wp-content/uploads/DSC_2512-scaled.jpg.webp  2560w,
              https://weworld.org.ua/wp-content/uploads/DSC_2512-768x512.jpg.webp  768w
            "
            sizes="auto, (max-width: 2560px) 100vw, 2560px"
          />

          <Paragraph text={content.p6} ref={p[5]} />
          <Paragraph text={content.p7} ref={p[6]} />
          <Paragraph text={content.p8} ref={p[7]} />
          <Paragraph text={content.p9} ref={p[8]} />
          <Paragraph text={content.p10} ref={p[9]} />
          <Paragraph text={content.p11} ref={p[10]} />
          <Paragraph />
          <Paragraph />
          <img
            style={{
              margin: '0 0 3rem 0',
            }}
            ref={refImg2}
            loading="lazy"
            decoding="async"
            className="size-full wp-image-2887 aligncenter"
            // eslint-disable-next-line max-len
            src="https://weworld.org.ua/wp-content/uploads/DSC_2184-scaled.jpeg.webp"
            alt=""
            width="2560"
            height="1707"
            // eslint-disable-next-line react/no-unknown-property
            srcset="
              https://weworld.org.ua/wp-content/uploads/DSC_2184-scaled.jpeg.webp  2560w,
              https://weworld.org.ua/wp-content/uploads/DSC_2184-768x512.jpeg.webp  768w
            "
            sizes="auto, (max-width: 2560px) 100vw, 2560px"
          />
          <Paragraph text={content.p12} ref={p[11]} />

          <div
            className={`${styles.team} grid can-animate-inner in-view in-view-animated`}
          >
            {team.map((member, index) => (
              <div key={index} className="col-1 in-view in-view-animated">
                <div className={styles.img_}>
                  <img src={member.img} alt={member.name} className="cover" />
                </div>
                <p className={`${styles.hdr} h5 b`}>{member.name}</p>
                <p className="txt">{member.about}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};
