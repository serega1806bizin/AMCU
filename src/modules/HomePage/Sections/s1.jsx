import { useAnimateInView } from '../useAnimateInView';

export const S1 = () => {
  const titleRef = useAnimateInView();
  const subtitleRef = useAnimateInView();
  const imageRef = useAnimateInView();

  return (
    <div id="s1" className="screen">
      <div className="container">
        <div className="col">
          <div className="hdr_">
            <div ref={titleRef} className="hdr can-animate anim-t">
              <h1>АМЦУ Кропивниччина</h1>
              <div className="div"></div>
              <p ref={subtitleRef} className="h6 can-animate anim-r">
                Кропивницька філія Асоціації <br /> молодіжних центрів України
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className="img can-animate anim-r"
            style={{
              background: `url(./s1.png) center/cover no-repeat`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
