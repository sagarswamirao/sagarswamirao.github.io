import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { StaticImage } from 'gatsby-plugin-image';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 910px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .imageAdjust {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .imageAdjust1 {
    margin-right: 75px;
    margin-top: 20px;

    @media (min-width: 768px) {
      padding-right: 0;
      margin-bottom: 0;
    }
  }
`;

const cloudyFloating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  padding-top: 100px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    outline: 0;
    animation: ${cloudyFloating} 6s ease-in-out infinite;

    .img {
      position: relative;
      mix-blend-mode: normal;
      transition: var(--transition);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const paragraphStyle = {
    textAlign: 'justify',
  };
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello there, it's great to meet you! 👋</h1>;
  const two = <h2 className="big-heading">I'm Sagar Swami Rao Kulkarni</h2>;
  const three = <h3 className="medium-heading">Software Engineer</h3>;
  const four = (
    <div className="imageAdjust">
      <div className="imageAdjust1">
        <p style={paragraphStyle}>
          As a Master's student in Computer Science at the University of Colorado Boulder🎓, I have
          a solid foundation in software engineering and a passion for developing impactful
          solutions. My professional journey at Quinnox in Bengaluru has allowed me to work on
          optimizing REST APIs, reducing compute time by 50%, building an automatic payment tracker
          using AWS Lambda, and developing an object detection POC with 76% accuracy, which earned
          me the 2022 On-the-Spot Award.
        </p>
        <p style={paragraphStyle}>
          With a constant drive for learning and innovation, I am actively seeking a co-op
          opportunity for the Spring semester and full-time roles starting in May 2025. I'm eager to
          contribute my skills in Java, Python, React, and AWS while continuing to grow
          professionally. Let's connect and explore how we can collaborate on creating impactful and
          innovative solutions together! 🌟✨
        </p>
      </div>
      <StyledPic>
        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/colorado-buffaloes.png"
            width={500}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="University of Colorado Boulder Mascot"
          />
        </div>
      </StyledPic>
    </div>
  );

  const five = (
    <a
      className="email-link"
      href="https://www.linkedin.com/in/sagarswamirao/"
      target="_blank"
      rel="noreferrer">
      Check out my LinkedIn!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
