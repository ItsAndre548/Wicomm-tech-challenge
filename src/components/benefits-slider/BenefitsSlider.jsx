import React from 'react';
import './BenefitsSlider.css';

const BenefitsSlider = ({ secondaryBenefits, sliderItems, mainBenefit }) => {

  return (
    <div className="benefitsContainer">
      <div className="benefitsMain">
        <div className="greaterBenefits">
          <div className="benefitNumber">{mainBenefit.number}</div>
          <div className="benefitContent">
            <h3>{mainBenefit.title}</h3>
            <p>{mainBenefit.description}</p>
          </div>
        </div>

      <div className="secondaryBenefictsFather">
        <div className="secondaryBenefictsContainer">
        {secondaryBenefits.map((benefit, index) => (
            <div key={index} className="secondaryBenefit">
              <div className="benefitIcon">
                <img src="./Assets/prize.svg" width={46} height={48} alt="star Icon"/>
                <p>{benefit.title}</p>
              </div>
              <div className="benefitContent">
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="benefitsContainer">
          <div className="benefitsTrack">
            {[...sliderItems, ...sliderItems].map((item, index) => (
              <React.Fragment key={index}>
                <span className="benefitsItem">{item}</span>
                <span className="benefitsSeparator"><img src="/Assets/paw.svg"  alt="pequena patinha"/></span>
              </React.Fragment>
            ))}
        </div>
      </div>
      </div>
      </div>

    </div>
  );
};

export default BenefitsSlider;