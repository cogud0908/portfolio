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
                웹 프론트엔드 3년차 개발자입니다. 주로 공통 컴포넌트 개발을 진행했었으며, 범용성과 확장성에 UX/UI를
                계획하며 개발하고 있습니다. 최근에는 서비스 개발에 참여하게 되어, 유용한 기능들을 모듈로 제공하는 것을
                계획하고 있습니다. <br />
                경험이 부족하지만 부분적으로 경험을 쌓아가며, 노력하고 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
