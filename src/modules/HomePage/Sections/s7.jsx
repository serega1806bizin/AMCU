import { useAnimateInView } from '../../../utils/useAnimateInView';

export const S7 = () => {
  const titleRef = useAnimateInView();
  const col1Ref = useAnimateInView();
  const col2Ref = useAnimateInView();
  const imgRef = useAnimateInView();

  const content = {
    title: 'Як долучитися до АМЦУ',
    // eslint-disable-next-line max-len
    p1: 'Ласкаво просимо до WE WORLD, динамічної молодіжної громадської організації, яка займається сприянням інноваційності та креативності серед молоді. Наша головна мета – відновлення довіри одне до одного, створення підтримуючого оточення та об’єднання людей, які прагнуть змін на краще і роблять певні кроки для їх досягнення.',
    // eslint-disable-next-line max-len
    p2: 'Ми віримо, що молоді люди мають унікальну перспективу та енергію, які можна використати для створення сучасних рішень складних проблем. За допомогою наших програм та ініціатив ми прагнемо надати молодим людям можливість взяти на себе лідерство у формуванні майбутнього України.',
    image: './s7.png',
    // eslint-disable-next-line max-len
    p3: 'Щоб краще познайомитися з нами, приходь на наші заходи. В календарі заходів є анонси всіх активностей, які проводить наша організація.',

    textBtn: 'Подати заявку',
    // eslint-disable-next-line max-len
    colorBtn: '#A52282',
  };

  return (
    <div id="s3" className="screen">
      <div className="container">
        <div className="col can-animate" ref={titleRef}>
          <h2>{content.title}</h2>
        </div>

        <div className="col-7 col-m col-s can-animate" ref={col1Ref}>
          <div className="cnt">
            {content.p1}
            <br />
            <br />
            {content.p2}
          </div>
        </div>

        <div className="col-7 col-m col-s can-animate" ref={col2Ref}>
          <div className="box">
            <p className="h5">{content.p3}</p>
            <div>
              <a
                href="https://youthcenters.net.ua/join/"
                className="btn btn1"
                style={{ backgroundColor: content.colorBtn }}
              >
                <span>{content.textBtn}</span>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ borderRadius: '2px' }}
          className="col-5 col-m col-s can-animate img_"
          ref={imgRef}
        >
          <img
            // eslint-disable-next-line max-len
            src={content.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
