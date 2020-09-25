import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Heading } from '../Heading';
import { frontendData, backendData, toolsData } from './skillsData';
import { SkillsContainer } from './SkillsContainer';

const Roll = require('react-reveal/Roll');
const Fade = require('react-reveal/Fade');

const SkillsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7em 0;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

const SPAN = styled.span`
  width: 60%;
  font-size: 2.25em;
  color: #ccc;
  font-weight: 100;
  margin-top: 3em;
  text-align: center;
`;
const A = styled.a`
  &:visited,
  &:link {
    color: #fff;
    font-weight: 100;
  }
`;
export const Skills = () => {
  const isIPadOrSmaller = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <SkillsWrapper id='skills'>
      <Heading text='Skills' />
      <Content>
        {!isIPadOrSmaller ? (
          <Roll left>
            <SkillsContainer
              data={frontendData}
              title='front-end'
              animationDelay='1s'
            />
          </Roll>
        ) : (
          <SkillsContainer
            data={frontendData}
            title='front-end'
            animationDelay='1s'
          />
        )}
        {!isIPadOrSmaller ? (
          <Fade bottom>
            <SkillsContainer
              data={backendData}
              title='back-end'
              animationDelay='2.5s'
            />
          </Fade>
        ) : (
          <SkillsContainer
            data={backendData}
            title='back-end'
            animationDelay='2.5s'
          />
        )}
        {!isIPadOrSmaller ? (
          <Roll right>
            <SkillsContainer
              data={toolsData}
              title='tools&others'
              animationDelay='4s'
            />
          </Roll>
        ) : (
          <SkillsContainer
            data={toolsData}
            title='tools&others'
            animationDelay='4s'
          />
        )}
      </Content>
      <SPAN>
        Full list of technologies I work with you can find by clicking this{' '}
        <A
          href='https://docs.google.com/document/d/1UUktoP11nRqgAhTEppao9B58RL6dvOz4u9B0DO5Lt74/edit?usp=sharing'
          target='_blanc'
        >
          link.
        </A>
      </SPAN>
    </SkillsWrapper>
  );
};