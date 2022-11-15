import React from 'react';
import { FooterBlock, RssLogo, GithubLinks, GithubLink } from './style';

const Footer = () => {
  return (
    <FooterBlock>
      <GithubLinks>
        <GithubLink href='https://github.com/daironsib'>@daironsib</GithubLink>
        <GithubLink href='https://github.com/AlenaDoz'>@AlenaDoz</GithubLink>
        <GithubLink href='https://github.com/rybakovmax23'>
          @rybakovmax23
        </GithubLink>
      </GithubLinks>
      <p>2022</p>
      <a href='https://rs.school/react/'>
        <RssLogo
          src='https://rs.school/images/rs_school_js.svg'
          alt='rss-school-react'
        />
      </a>
    </FooterBlock>
  );
};

export default Footer;
