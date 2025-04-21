import { useAnimateInView } from '../useAnimateInView';

export const S2 = () => {
  const sectionTitleRef = useAnimateInView();
  const textRef = useAnimateInView();
  const calendarImageRef = useAnimateInView();

  return (
    <div id="s3" className="screen">
      <div className="container">
        <div ref={sectionTitleRef} className="col can-animate anim-t">
          <h2>
            Спільнота молодіжний просторів <br /> Кропивничини - це{' '}
          </h2>
        </div>

        <div ref={textRef} className="col-6 col-m col-s can-animate anim-l">
          <div className="cnt">
            Ласкаво просимо до WE WORLD, динамічної молодіжної громадської
            організації, яка займається сприянням інноваційності та креативності
            серед молоді. Наша головна мета – створити активний кластер
            креативної економіки, де молоді люди зможуть продемонструвати свої
            навички, таланти та побудувати успішну кар’єру в креативних
            індустріях.
            <br />
            <br />
            Ми віримо, що молоді люди мають унікальну перспективу та енергію,
            які можна використати для створення сучасних рішень складних
            проблем. За допомогою наших програм та ініціатив ми прагнемо надати
            молодим людям можливість взяти на себе лідерство у формуванні
            майбутнього України.
            <br />
            <br />
          </div>
        </div>
        <div ref={calendarImageRef} className="img_ can-animate anim-l">
          <img src="/s3.png" alt="Простір WE WORLD" />
        </div>
      </div>
    </div>
  );
};
