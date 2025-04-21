import React from 'react';
import { useAnimateInView } from '../useAnimateInView';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Урбан рух «У міста є Я»',
    img: 'https://weworld.org.ua/wp-content/uploads/urban_rukh-768x768.jpg',
    // eslint-disable-next-line max-len
    text: '«У міста є Я» - це проєкт, який навчить тебе, як впливати на зміни в місті у веселій та легкій формі. Більшість часу ми творимо: обговорюємо, малюємо, вирізаємо, конструюємо ідеальне для життя місто…',
  },
  {
    id: 2,
    title: '#SMR Ранковий біг що суботи Знамʼянка',
    // eslint-disable-next-line max-len
    img: 'https://weworld.org.ua/wp-content/uploads/Rankovyj-bih-WE-WORLD-e1683608787509-768x594.jpg',
    // eslint-disable-next-line max-len
    text: 'Вже рік учасники бігового клубу #SMR збираються щосуботи, щоб разом побігати, поспілкуватися та випити смачного чаю. І хочемо запросити тебе доєднатися для любителів ранкового бігу. Що:…',
  },
  {
    id: 3,
    title: 'Благодійне групове функціональне тренування',
    img: 'https://weworld.org.ua/wp-content/uploads/Trenuvannia-768x588.jpg',
    // eslint-disable-next-line max-len
    text: 'Благодійне групове функціональне тренування. Для будь-якого віку та…',
  },
];

export const S8 = () => {
  const titleRef = useAnimateInView();
  const btnRef = useAnimateInView();

  // Створюємо масив рефів для кожного поста
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const postRefs = posts.map(() => useAnimateInView());

  return (
    <div id="s4" className="screen">
      <div className="container">
        <div className="col">
          <h2 className="can-animate" ref={titleRef}>
            Наші новини
          </h2>

          <div className="posts can-animate-inner">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                className="spost"
                to={`/news/${post.id}`}
                ref={postRefs[index]}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span
                  className="img"
                  style={{
                    background: `url(${post.img}) center/cover no-repeat`,
                  }}
                ></span>
                <span className="h5">{post.title}</span>
                <span className="p">{post.text}</span>
              </Link>
            ))}
            <Link to="/news" className="btn btn2" ref={btnRef}>
              Більше новин →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
