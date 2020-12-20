import React from 'react';
import styled from 'styled-components';
import { Button, Link } from '../../shared';
import SucessIcon from '../../assets/svg/successIcon';
import { device } from '../../style';

const MainWrapper = styled.div`
`;

const Title = styled.div`
  font-family: Assistant;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #29244a;
  padding: 0.8em 1.3em;
  @media ${device.tablet} {
     padding: 1.3em;
  }
`;

const SubTitle = styled.div`
  font-family: Assistant;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

const SubTitlesWrapper = styled.div`
  padding-bottom: 2em;
   @media ${device.tablet} {
     padding-bottom: 1.3em;
   }
`;

const IconWrapper = styled.div`
	text-align: center;
`;

const ButtonWrapper = styled.div`
	display: flex;
	padding-top: 1.2em;
	padding-bottom: 2.1em;
	justify-content: center;
`;

const Footer = styled.div`
	display: flex;
	flex-direction:column;
	border-radius: 0 0 12px 12px;
    padding: 2.5em 5.2em 2em;
    background-color: #f1eef2;
`;

const FooterTitle = styled.div`
  font-family: Assistant;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

const SuccessMessage = () => (
	<MainWrapper>
		<IconWrapper><SucessIcon /></IconWrapper>
		<Title>ברכות על הצטרפותך למעירים!</Title>
		<SubTitlesWrapper>
			<SubTitle>כולם מחכים לשמוע מה יש לך לומר</SubTitle>
			<SubTitle>על התכנון והבניה באזורך</SubTitle>
		</SubTitlesWrapper>
		<Footer>
			<FooterTitle>רוצה לגדיר התראות נוספות לפי אזורים ותחומי עניין?</FooterTitle>
			<ButtonWrapper>
				<Button text="להגדרות שלי" small/>
			</ButtonWrapper>
			<Link text="סגירה" />
		</Footer>
	</MainWrapper>
);

export default SuccessMessage;
