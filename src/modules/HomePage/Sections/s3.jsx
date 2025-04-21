import { useAnimateInView } from '../useAnimateInView';

export const S3 = () => {
  const partnersRef = useAnimateInView();

  return (
    <div id="s8" className="screen">
      <div className="container">
        <div className="col">
          <h2 className="can-animate" ref={partnersRef}>
            Члени філії
          </h2>

          <div className="gal can-animate1">
            {[
              {
                // eslint-disable-next-line max-len
                img: 'https://weworld.org.ua/wp-content/uploads/Loho-Zadzerkallia-768x618.png',
                name: 'Словʼянський Культурний центр "Задзеркалля"',
              },
              {
                // eslint-disable-next-line max-len
                img: 'https://weworld.org.ua/wp-content/uploads/LOGO-amtsu-3x-768x755.png',
                name: 'Асоціація молодіжних центрів України',
              },
              {
                // eslint-disable-next-line max-len
                img: 'https://weworld.org.ua/wp-content/uploads/LOGO-NUMO-768x768.png',
                name: "Національне українське молодіжне об'єднання - НУМО",
              },
              {
                // eslint-disable-next-line max-len
                img: './terre.png',
                // eslint-disable-next-line max-len
                name: 'Terre des hommes Провідна швейцарська організація з надання допомоги дітям',
              },
              {
                // eslint-disable-next-line max-len
                img: 'https://weworld.org.ua/wp-content/uploads/ND_LOGO-preobrazovannyj-01-768x226.png',
                name: 'ГО “Нова Дружківка”',
              },
              {
                // eslint-disable-next-line max-len
                img: 'https://weworld.org.ua/wp-content/uploads/image-51-621x768.png',
                // eslint-disable-next-line max-len
                name: "Виконавчий комітет Знам'янської територіальної громади",
              },
              {
                // eslint-disable-next-line max-len
                img: 'https://weworld.org.ua/wp-content/uploads/Molodizhnyj_Natsionalistychnyj_Konhres_Emblema.svg-768x756.png',
                name: 'Молодіжний націоналістичний конгрес',
              },
            ].map((partner, i) => (
              <div key={i}>
                <div
                  className="img"
                  style={{
                    background: `url(${partner.img}) center/contain no-repeat`,
                  }}
                ></div>
                <p className="h6">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
