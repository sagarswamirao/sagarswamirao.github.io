import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const paragraphStyle = {
  textAlign: 'justify',
};

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'Java',
    'Flask',
    'Pandas',
    'Amplitude',
    'React.js',
    'JavaScript',
    'HTML',
    'PL/SQL',
    'SpringBoot',
    'MySQL',
    'Neo4J',
    'Oracle APEX',
    'Redis',
    'AWS',
    'Docker',
    'Git',
    'Jupyter',
    'JUnit',
    'Mockito',
    'Pytest',
    'Unittest',
    'Postman',
    'Tomcat',
    'React.js',
    'AWS Cloud Practitioner',
    'CodePath Certificate in TIP',
    'LetsUpgrade Java Programming & Python Essentials',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p style={paragraphStyle}>
              Hello! I'm Sagar Swami Rao Kulkarni, a Software Engineer with 2.5 years of experience.
              Currently pursuing my Master's in Computer Science at the University of Colorado,
              Boulder, I bring a strong foundation in Computer Science and Engineering, having
              graduated with a <span style={{ color: '#FFD700' }}>Gold Medal</span> from CMR
              University, India.
            </p>
            <p style={paragraphStyle}>
              My professional experience at Quinnox involved optimizing REST APIs, reducing compute
              time by 50%, automating data processes, and developing an object detection POC with
              86% accuracy, which earned me the 2022 On-the-Spot Award. Additionally, I built an
              automatic payment tracker using AWS Lambda, Stripe, and Springboot to streamline
              billing operations.
            </p>
            <p style={paragraphStyle}>
              I am passionate about building scalable applications and have contributed to
              open-source projects like <strong>react-ui-dropzone</strong>, which has achieved an
              average of 37 weekly downloads on NPM. I'm constantly seeking new challenges, whether
              it's working on innovative tech solutions or volunteering for community-driven
              initiatives.
            </p>
            <p style={paragraphStyle}>
              Here are some of the technologies I've been working with recently:
            </p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
