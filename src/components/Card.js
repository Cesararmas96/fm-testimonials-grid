import React from 'react'
import styled from 'styled-components';
import img from '../assets/bg-pattern-quotation.svg'

const CardConteiner = styled.div`
		background-color: ${props => props.inputColor};
    border-radius: 10px;
    padding: 18px 22px;
    margin: 15px;
    font-size: 14px;
    line-height: 1.5;

    &:nth-child(1){
    	background-image: url(${img});
  		background-repeat: no-repeat;
  		background-position: 94% 6%;
    };

    @media (min-width: 900px){
    	margin: 0;
    	&:nth-child(1){
    		grid-column: span 2

    	}

    	&:nth-child(2){
    	}

    	&:nth-child(3){
    		grid-row: 2;
    		grid-column: 1;

    	}

    	&:nth-child(4){
    		grid-column: 2 / 4;
    	}

    	&:nth-child(5){
    		grid-row: 1 / 3;
   			grid-column: 4;
    	}
    }
`;

const CardInfo = styled.div`
		display: flex;
  	align-items: center;
  	margin-bottom: 15px
`;

const CardInfoAvatar = styled.img`
	border-radius: 100%;
  width: 40px;
  margin-right: 25px;
  border: 2px solid #cfcfcf80;
`;

const CardInfoName = styled.div`
  font-family: "BarlowSemiCondensed-SemiBold";
	color: ${props => props.inputColor === "#ffffff" ? "#19212eb3" : "#cfcfcf"};
`;

const CardInfoBuyer = styled.div`
	
	color: ${props => props.inputColor === "#ffffff" ? "#cfcfcf" : " #cfcfcfb3"};

`;

const Title = styled.div`
	color: ${props => props.inputColor === "#ffffff" ? "#585F67" : "#cfcfcf"};
  font-family: "BarlowSemiCondensed-SemiBold";
  font-size: 23px;
	margin-bottom: 20px
`;

const Coment = styled.div`
	margin: 12px auto;
	color: ${props => props.inputColor === "#ffffff" ? "#cfcfcf" : " #cfcfcfb3"};
`;


const Card = ({name, graduate, title, coment, avatar, bgColor}) => {
	return(
		<CardConteiner inputColor={bgColor}>
			<CardInfo>
				<CardInfoAvatar src={avatar} alt="dsd"/>
				<div>
					<CardInfoName inputColor={bgColor}>
						{name}
					</CardInfoName>
					<CardInfoBuyer>
						{graduate}
					</CardInfoBuyer>
				</div>
			</CardInfo>

			<Title inputColor={bgColor}>
				{title}
			</Title>

			<Coment inputColor={bgColor}>
				{coment}
			</Coment>

		</CardConteiner>
		)
}

export default Card;