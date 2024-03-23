import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

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
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React.js',
    'MySQL',
    'MongoDB',
    'Neo4J',
    'Redis',
    'Popoto.js',
    'Three.js',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            {/* <p>
              Hey there! I'm Sagar Swami Rao Kulkarni - your AI Full-Stack Maestro, currently
              delving into the realm of Computer Science at the University of Colorado, Boulder.
              Back in India, I snagged the <span style={{ color: '#FFD700' }}>Gold Medal</span> in
              Computer Science and Engineering at CMR University.
            </p>

            <p>
              In the buzzing tech haven of Bangalore, at Quinnox, I led the charge on projects like
              QInfinite and Martin Brower-Perfect Order. Imagine slashing compute time by 80% for
              QInfinite's immersive AR-VR landscape and hitting a stellar 76% detection accuracy at
              Martin Brower. P.S. I'm not just about code; I thrive as a team player setting
              standards and ensuring projects run like clockwork. And yes, I've got the awards to
              prove it - the 2022 On the Spot Award, the 2021 Pat on the Back Award, and a Zonal
              Level title at the Azure Skynet Hackathon, proudly tucked in my cap.
            </p>

            <p>
              Beyond the lines of code, I'm on a perpetual quest for knowledge and innovation. Eager
              to contribute, I'm on the hunt for thrilling projects. On a personal note, I'm not
              just a tech enthusiast; I'm all about giving back. Whether it's learning new skills,
              identifying cutting-edge tech, or actively participating in volunteering activities -
              count me in!
            </p>

            <p>
              Ready to embark on a journey of collaboration, innovation, and positive impact? Let's
              make it happen!
            </p> */}
            <p>
              Hey there! I'm Sagar Swami Rao Kulkarni - your AI Full-Stack Maestro, currently
              delving into the realm of Computer Science at the University of Colorado, Boulder.
              Back in India, I snagged the <span style={{ color: '#FFD700' }}>Gold Medal</span> in
              Computer Science and Engineering at CMR University.
            </p>

            <p>
              In the buzzing tech haven of Bangalore, at Quinnox, I led the charge on projects like
              QInfinite and Martin Brower-Perfect Order. Imagine slashing compute time by 80% for
              QInfinite's immersive AR-VR landscape and hitting a stellar 76% detection accuracy at
              Martin Brower. P.S. I'm not just about code; I thrive as a team player setting
              standards and ensuring projects run like clockwork. And yes, I've got the awards to
              prove it - the 2022 On the Spot Award, the 2021 Pat on the Back Award, and a Zonal
              Level title at the Azure Skynet Hackathon, proudly tucked in my cap. 🏆🌟
            </p>

            <p>
              Beyond the lines of code, I'm on a perpetual quest for knowledge and innovation. Eager
              to contribute, I'm on the hunt for thrilling projects. On a personal note, I'm not
              just a tech enthusiast; I'm all about giving back. Whether it's learning new skills,
              identifying cutting-edge tech, or actively participating in volunteering activities -
              count me in! 🚀🔍
            </p>

            <p>
              Ready to embark on a journey of collaboration, innovation, and positive impact? Let's
              make it happen! 💡🤝
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
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
