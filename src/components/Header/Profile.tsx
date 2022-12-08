import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container">
          <div className="profile-teaser row gx-lg-5 justify-content-center">
            <div className="col-12 col-md-auto text-center text-md-start">
              <img
                className="profile-image mb-3 mb-lg-0 ms-md-0 rounded mx-auto"
                src="assets/images/profile.png"
                alt=""
              />
            </div>
            <div className="col text-center text-md-start">
              <div className="lead">경험을 바탕으로 성장하는 개발자</div>
              <h2 className="mt-0 display-4 font-weight-bold">임채형</h2>
              <div className="bio mb-3">
                공용 컴포넌트들을 개발하고 있으며, 확장성, 종속성, 재활용성을 고려하는
                <br />
                프론트엔드 3년차 개발자 임채형 입니다.
                <br />
                공통 컴포넌트 개발을 2년 동안 진행하다가, 현재는 사내 서비스도 같이 병행해서 개발하고 있습니다. 컴포넌트
                개발에서는 UI, 서비스 개발에서는 UX, 비즈니스 로직(BE) 등 점차 여러가지 분야로 점진적으로 확장하여 개발
                중입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
