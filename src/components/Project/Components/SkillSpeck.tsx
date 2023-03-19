import React from 'react'

const SkillSpeck = () => {
    return (
        <div className="section-row">
            <h3 className="section-title">프로젝트 기술스택</h3>
            <br />

            <div className="webdev-icons row mb-5 justify-content-center">
                <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
                    <img className="img-fluid svg-ie-fix" src="/assets/images/icons/react.svg" />
                </div>
                <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
                    <img className="img-fluid svg-ie-fix" src="/assets/images/icons/javascript.svg" />
                </div>
                <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
                    <img className="img-fluid svg-ie-fix" src="/assets/images/icons/html5.svg" />
                </div>
                <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
                    <img className="img-fluid svg-ie-fix" src="/assets/images/icons/css3.svg" />
                </div>
                <div className="webdev-icon col-3 col-md-2 me-0 mb-4 px-4">
                    <img className="img-fluid svg-ie-fix" src="/assets/images/icons/webpack.svg" />
                </div>
            </div>
        </div>
    )
}

export default SkillSpeck