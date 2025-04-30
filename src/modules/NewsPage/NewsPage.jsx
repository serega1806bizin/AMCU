import React from 'react';
import { useAnimateInView } from '../../utils/useAnimateInView';
import logo1 from '../../../public/image 4.svg';
import logo2 from '../../../public/Лого Задзеркалля-Відновлено 1.svg';

// Компонент картки новини
const PostCard = ({ post }) => {
  return (
    <a
      className="post"
      data-id={post.id}
      style={{ margin: '1rem 0', cursor: 'default' }}
    >
      <span className="pc">
        <span className="hdr h3">
          {post.title}
          <span
            className="phbg"
            style={{ background: post.color || '#ccc' }}
          ></span>
        </span>

        <span className="info_">
          <span className="info">
            {post.type && Array.isArray(post.type) && (
              <span className="pcat-group">
                {post.type.map((t, idx) => (
                  <span
                    key={idx}
                    className="pcat"
                    style={{
                      background: post.colors?.[idx] || post.color || '#ccc',
                      marginRight: '0.5rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </span>
            )}

            {post.time && <span className="pread">{post.time} хв. чит.</span>}
          </span>

          {post.partnery && (
            <span className="donors">
              {post.partnery.map((logo, index) => (
                <img key={index} src={logo} alt="partner logo" />
              ))}
            </span>
          )}
        </span>

        <span className="exc">{post.text}</span>
      </span>

      {/* Заставка — поки нема картинки у post, використовуємо заглушку */}
      <span
        className="img"
        style={{
          background:
            // eslint-disable-next-line max-len
            'url(' + post.img + ') center/cover no-repeat',
        }}
      ></span>
    </a>
  );
};

// Сторінка новин
export const NewsPage = () => {
  const titleRef = useAnimateInView();

  const posts = [
    {
      id: 1,
      title: 'Допомога для притулків',
      type: ['Волонтерство', 'Програма'],
      colors: ['#AcA623', '#50E3C2'],
      time: '5',
      partnery: [logo1, logo2],
      img: './div.svg',
      text: 'Акція “Happy Paw” у Знамʼянці: допомога безпритульним тваринам.',
    },
    {
      id: 2,
      title: 'Зустріч з партнерами',
      type: ['Партнерство'],
      color: '#8E44AD',
      time: '2',
      partnery: [logo2],
      img: './div.svg',
      text: 'Ми зустрілися з новими партнерами у Києві.',
    },
    {
      id: 3,
      title: 'Марафон добра',
      type: ['Збір коштів', 'Івент'],
      colors: ['#27AE60', '#2980B9'],
      time: '4',
      img: './div.svg',
      partnery: [logo1],
      text: 'Успішно провели благодійний марафон на підтримку тварин.',
    },
    {
      id: 4,
      title: 'Залучення молоді',
      type: ['Активація'],
      color: '#E67E22',
      time: '3',
      img: './div.svg',
      text: 'Залучили понад 100 учасників до волонтерського руху.',
    },
  ];

  return (
    <>
      <div id="s1" className="screen">
        <div className="container">
          <div className="hdr_">
            <div ref={titleRef} className="hdr can-animate anim-t">
              <h1>Новини</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        id="s2"
        className="screen"
        style={{ padding: '6rem 0', marginTop: '0' }}
      >
        <div className="container">
          <div className="col-1 hid-m hid-s"></div>
          <div className="col-10">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
