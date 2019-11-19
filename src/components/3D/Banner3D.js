import React from "react";
import { Banner3DWrap, Divider, Dot, AnimationWrap } from '../Styles/Banner3D-styles';

import react from '../../assets/react.png';
import angular from '../../assets/angular.png';
import js from '../../assets/js.svg';
import git from '../../assets/git.png';
import ts from '../../assets/ts.png';
import tfs from '../../assets/tfs.png';
import pg from '../../assets/postgres.png';
import node from '../../assets/nodejs.svg';
import java from '../../assets/java.png';
import sqlite from '../../assets/sqlite.png';
import graphql from '../../assets/graphql.png';
import rest from '../../assets/restapi.png';

const Banner3D = () => {
  return (
    <Banner3DWrap>
      <Divider>
        <Dot />
        <Dot />
        <Dot />
      </Divider>
      <AnimationWrap>
        <h3 id='title'>What's Bouncin' around in my head?</h3>
        <img className='logos react' src={react} alt='react-logo' />
        <img className='logos angular' src={angular} alt='angular-logo' />
        <img className='logos js' src={js} alt='js-logo' />
        <img className='logos git' src={git} alt='git-logo' />
        <img className='logos ts' src={ts} alt='ts-logo' />
        <img className='logos tfs' src={tfs} alt='tfs-logo' />
        <img className='logos pg' src={pg} alt='pg-logo' />
        <img className='logos node' src={node} alt='node-logo' />
        <img className='logos java' src={java} alt='java-logo' />
        <img className='logos sqlite' src={sqlite} alt='sqlite-logo' />
        <img className='logos graphql' src={graphql} alt='graphql-logo' />
        <img className='logos rest' src={rest} alt='rest-logo' />
      </AnimationWrap>
    </Banner3DWrap>
  )
}

export default Banner3D