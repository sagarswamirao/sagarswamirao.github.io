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
    grid-template-columns: repeat(3, minmax(140px, 200px));
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
    // Programming Languages
    'Python',
    'Java',
    'JavaScript',
    'HTML',
    'PL/SQL',

    // Frontend
    'React.js',

    // Backend / Frameworks
    'Spring Boot',
    'Flask',
    'Pandas',

    // Databases
    'MySQL',
    'Neo4J',
    'Redis',

    // Cloud & DevOps
    'AWS',
    'Docker',
    'Git',

    // Testing
    'JUnit',
    'Mockito',
    'Pytest',
    'Unittest',

    // Tools
    'Postman',
    'Jupyter',

    // Certifications
    'AWS Cloud Practitioner',
    'AWS AI Practitioner',
    'CodePath Certificate in TIP',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p style={paragraphStyle}>
              I'm Sagar Swami Rao Kulkarni, a full-stack software engineer with 2.5 years of
              experience and a strong academic background. I'm currently pursuing a Master’s in
              Computer Science at the University of Colorado Boulder, building on my undergraduate
              foundation where I graduated with a{' '}
              <span style={{ color: '#FFD700' }}>Gold Medal</span> from CMR University, India.
            </p>

            <p style={paragraphStyle}>
              My professional journey at Quinnox included backend optimization, infrastructure
              automation, and applied AI. I helped reduce compute time by 50% through REST API
              performance tuning, built a serverless payment tracker with AWS Lambda and Stripe, and
              created an object detection POC that achieved 86% accuracy — earning me the 2022
              On-the-Spot Award.
            </p>

            <p style={paragraphStyle}>
              One of my most rewarding projects was leading the development of an AI-powered
              document extraction platform for Alliant National, which earned{' '}
              <strong>2nd place out of 142 teams</strong> and won the{' '}
              <strong>Excellence in Design award</strong> at the CU Engineering Projects Expo. I'm
              also AWS AI Practitioner and Cloud Practitioner certified, with real-world experience
              across Lambda, S3, SQS, RDS, and more.
            </p>

            <p style={paragraphStyle}>
              Outside of work, I contribute to open-source, including{' '}
              <strong>react-ui-dropzone</strong>, a library with steady adoption on NPM. I'm
              passionate about scalable architecture, clean code, and building products that solve
              real problems — and I'm always excited to collaborate on impactful ideas.
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
