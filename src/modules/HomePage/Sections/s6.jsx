import { useAnimateInView } from '../useAnimateInView';

const EventCard = ({ image, title, text, delay = '0s' }) => {
  const ref = useAnimateInView();

  return (
    <div
      className="spost can-animate"
      ref={ref}
      style={{ transitionDelay: delay }}
    >
      <span
        className="img"
        style={{
          background: `url(${image}) center/cover no-repeat`,
        }}
      ></span>
      <span className="h5">{title}</span>
      <span className="p">{text}</span>
    </div>
  );
};

const events = [
  {
    image: 'https://weworld.org.ua/wp-content/uploads/urban_rukh-768x768.jpg',
    title: 'Урбан рух «У міста є Я»',
    // eslint-disable-next-line max-len
    text: '«У міста є Я» — це проєкт, який навчить тебе, як впливати на зміни в місті у веселій та легкій формі...',
  },
  {
    image:
      // eslint-disable-next-line max-len
      'https://weworld.org.ua/wp-content/uploads/Rankovyj-bih-WE-WORLD-e1683608787509-768x594.jpg',
    title: '#SMR Ранковий біг що суботи Знамʼянка',
    text: 'Вже рік учасники бігового клубу #SMR збираються щосуботи...',
  },
  {
    image: 'https://weworld.org.ua/wp-content/uploads/Trenuvannia-768x588.jpg',
    title: 'Благодійне групове функціональне тренування',
    text: 'Благодійне групове функціональне тренування. Для будь-якого віку...',
  },
  {
    image: 'https://weworld.org.ua/wp-content/uploads/Trenuvannia-768x588.jpg',
    title: 'Благодійне групове функціональне тренування',
    text: 'Благодійне групове функціональне тренування. Для будь-якого віку...',
  },
];

export const S6 = () => {
  const sectionTitleRef = useAnimateInView();

  return (
    <div id="s4" className="screen">
      <div className="container">
        <div className="col">
          <h2 className="can-animate" ref={sectionTitleRef}>
            Що отримають МЦ/МП від вступу в філію
          </h2>
          <div className="posts">
            {events.map((event, index) => (
              <EventCard
                key={index}
                href={event.href}
                image={event.image}
                title={event.title}
                text={event.text}
                delay={`${index * 0.2}s`} // ось тут — затримка
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
