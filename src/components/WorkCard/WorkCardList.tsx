import React from 'react';
import styled from 'styled-components';

const WorkCardListWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 1rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	position: relative;
	background-color: #f3f6f8;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;

export const WorkCardList: React.FC = ({ children }) => {
	return (
		<WorkCardListWrapper>
			{children}
		</WorkCardListWrapper>
	)
}
