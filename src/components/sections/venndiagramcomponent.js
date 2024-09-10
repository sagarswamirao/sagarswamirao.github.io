import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as venn from 'venn.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VennDiagramComponent = ({ height, width }) => {
  const vennRef = useRef(null);

  useEffect(() => {
    const initialSets = [
      { sets: ['I'], size: 1000, label: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript'] },
      { sets: ['U'], size: 1000, label: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB'] },
      {
        sets: ['S'],
        size: 1000,
        label: 'AI',
        skills: ['Machine Learning', 'Deep Learning', 'Python'],
      },
      { sets: ['I', 'U'], size: 500 },
      { sets: ['U', 'S'], size: 500 },
      { sets: ['I', 'S'], size: 500 },
      {
        sets: ['I', 'U', 'S'],
        size: 250,
        label: 'My Skills',
        skills: ['React', 'Redux', 'TensorFlow'],
      },
    ];

    const resizeChart = () => {
      const chart = venn.VennDiagram();
      const svg = d3.select(vennRef.current);
      const svgWidth = svg.attr('width');
      const svgHeight = svg.attr('height');
      const scaleWidth = width / svgWidth;
      const scaleHeight = height / svgHeight;
      const scale = Math.min(scaleWidth, scaleHeight);

      const scaledSets = initialSets.map(set => ({
        ...set,
        size: set.size * scale,
      }));

      svg.datum(scaledSets).call(chart);

      d3.select('g[data-venn-sets="I_U_S"] text').style('fill', 'rgb(255, 255, 255)');

      svg
        .selectAll('g')
        .on('mouseenter', function(d) {
          // Show related skills in a tooltip
          if (d.skills) {
            const skillsText = d.skills.join(', ');
            d3.select('#tooltip')
              .style('left', `${d3.event.pageX + 10}px`)
              .style('top', `${d3.event.pageY - 15}px`)
              .select('#value')
              .text(skillsText);
            d3.select('#tooltip').classed('hidden', false);
          }
        })
        .on('mouseleave', function() {
          d3.select('#tooltip').classed('hidden', true);
        });
    };

    resizeChart();

    // Add resize listener to recalculate chart on window resize
    window.addEventListener('resize', resizeChart);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, [height, width]);

  return (
    <Container>
      <DiagramContainer ref={vennRef} id="venn" height={height} width={width}></DiagramContainer>
      {/* <StyledTooltip id="tooltip" className="hidden">
        <p><strong>Related Skills:</strong></p>
        <p id="value"></p>
      </StyledTooltip> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Adjust the margin as needed */
`;

const DiagramContainer = styled.svg`
  position: relative;
`;

VennDiagramComponent.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default VennDiagramComponent;
