import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import VennDiagramComponent from './venndiagramcomponent';

const paragraphStyle = {
  textAlign: 'justify',
};

const StyledAboutSection = styled.section`
  max-width: 800px;

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

const ValueIBring = () => {
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
      <h2 className="numbered-heading">Value I Bring</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p style={paragraphStyle}>
              Hello! I'm Sagar Swami Rao Kulkarni, a Software Engineer with a passion for
              cutting-edge technology. Currently pursuing my Master's in Computer Science (with a
              minor in Artifical Intelligence) at the University of Colorado, Boulder, I bring a
              solid foundation in Computer Science and Engineering, along with the prestigious{' '}
              <span style={{ color: '#FFD700' }}>Gold Medal</span> from CMR University in India.
            </p>
            <p style={paragraphStyle}>
              My professional journey at Quinnox in Bengaluru was exhilarating, where I worked on
              groundbreaking projects like QInfinite and Martin Brower-Perfect Order. I optimized
              APIs, reducing compute time by 80%, and achieved an impressive 86% detection accuracy
              through innovative object detection models. I thrive in collaborative environments,
              setting high standards and ensuring smooth project execution, as recognized by the
              2022 On the Spot Award, 2021 Pat on the Back Award, and the Zonal Level title at the
              Azure Skynet Hackathon.
            </p>
            <p style={paragraphStyle}>
              Driven by innovation, I actively seek new challenges to push boundaries. From
              exploring cutting-edge tech to participating in volunteering initiatives, I'm always
              eager to contribute and create a positive impact. Beyond coding, I'm on a perpetual
              quest for knowledge and personal growth, with a strong commitment to giving back to
              the community.
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
          <VennDiagramComponent width={300} height={300} />
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default ValueIBring;
