/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useAnimateInView } from '../useAnimateInView';

export const S9 = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = e => {
    e.preventDefault();
    setStatus('Надсилаємо...');

    emailjs
      .sendForm(
        'service_digh2hk', // Service ID
        'template_4kcjic7', // Template ID
        formRef.current,
        '4sdX7xOFNh1FEFrQV', // Public Key
      )
      .then(
        () => {
          setStatus('✅ Повідомлення надіслано!');
          formRef.current.reset();
        },
        error => {
          console.error(error);
          setStatus('❌ Сталася помилка, спробуйте ще раз.');
        },
      );
  };

  const lll = useAnimateInView(); // для показу контента після анімації

  return (
    <div id="s10" ref={lll} className="screen can-animate">
      <div className="container">
        <div className="col">
          <div className="contacts form">
            <div className="hdr_">
              <h2>Контакти</h2>
            </div>

            <div className="cnt_">
              <div className="cnt">
                <h4>
                  <strong>Телефони</strong>
                </h4>
                <p>
                  <a href="tel:+380664405035">+380664405035</a>
                  <br />
                  <a href="tel:+380993455650">+380993455650</a>
                </p>
                <h4>
                  <strong>Email</strong>
                </h4>
                <p>
                  <a href="mailto:weworldua@gmail.com">weworldua@gmail.com</a>
                </p>
                <h4>
                  <strong>Адреса</strong>
                </h4>
                <p>
                  Україна, 27400, Кіровоградська обл., Кропивницький р-н,
                  <br />
                  місто Знам'янка, вул. Братів Лисенків 1/2
                </p>
                <h4>
                  <strong>Облікові записи в соціальних мережах</strong>
                </h4>
                <p>
                  <a href="#">Instagram</a>
                  <br />
                  <a href="#">Facebook</a>
                  <br />
                  <a href="#">LinkedIn</a>
                </p>
              </div>
            </div>

            <div className="frm_">
              <div className="box form_">
                <div
                  className="wpcf7 no-js"
                  id="wpcf7-f2253-o1"
                  lang="uk"
                  dir="ltr"
                  data-wpcf7-id="2253"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="wpcf7-form init"
                  >
                    <p className="h3 t-c">Звʼяжіться з нами</p>
                    <label>
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="s-name"
                      >
                        <input
                          size="40"
                          maxLength="400"
                          // eslint-disable-next-line max-len
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          type="text"
                          name="s-name"
                          defaultValue="" // ✅ замість value=""
                          required
                        />
                      </span>
                      <span className="ph">Ваше Імʼя та прізвище</span>
                    </label>

                    <label>
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="s-tel"
                      >
                        <input
                          size="40"
                          maxLength="17"
                          minLength="17"
                          // eslint-disable-next-line max-len
                          className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel masktel"
                          aria-required="true"
                          aria-invalid="false"
                          type="tel"
                          name="s-tel"
                          defaultValue="" // 👈 важливо!
                          required
                        />
                      </span>
                      <span className="ph">Номер телефону</span>
                    </label>

                    <label>
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="s-message"
                      >
                        <textarea
                          cols="40"
                          rows="10"
                          maxLength="2000"
                          className="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                          name="s-message"
                          defaultValue="" // 👈 або просто видалити
                          required
                        ></textarea>
                      </span>
                      <span className="ph">Ваше повідомлення для нас</span>
                    </label>

                    <button type="submit" className="btn btn1">
                      Надіслати
                    </button>

                    <p
                      className="h6 t-c has-more"
                      style={{ marginTop: '10px' }}
                    >
                      Натискаючи кнопку “Надіслати”, ви погоджуєтеся на обробку
                      персональних даних відповідно до Закону України «Про
                      захист персональних даних».
                    </p>

                    {status && (
                      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
                        {status}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
