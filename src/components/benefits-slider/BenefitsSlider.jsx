import React from 'react';
import './BenefitsSlider.css';

const BenefitsSlider = ({ secondaryBenefits, sliderItems, mainBenefit }) => {

  return (
    <div className="benefits-container">
      <div className="benefits-main">
        <div className="main-benefit">
          <div className="benefit-number">{mainBenefit.number}</div>
          <div className="benefit-content">
            <h3>{mainBenefit.title}</h3>
            <p>{mainBenefit.description}</p>
          </div>
        </div>

      <div class="secondaryBenefictsFather">
        <container class="secondaryBenefictsContainer">
        {secondaryBenefits.map((benefit, index) => (
            <div key={index} className="secondary-benefit">
              <div className="benefit-icon">
                <img src="./Assets/prize.svg" width={46} height={48} />
                <p>{benefit.title}</p>
              </div>
              <div className="benefit-content">
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </container>
        <div className="benefits-container">
          <div className="benefits-track">
            {[...sliderItems, ...sliderItems].map((item, index) => (
              <React.Fragment key={index}>
                <span className="benefits-item">{item}</span>
                <span className="benefits-separator"><img src="/Assets/paw.svg" /></span>
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