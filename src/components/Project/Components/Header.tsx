import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-2">컴포넌트 개발/유지보수</h2>
          <div className="page-heading-tagline">사내용 공통 컴포넌트 Library 개발 및 유지보수</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
