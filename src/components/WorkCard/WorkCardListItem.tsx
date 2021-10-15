import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HourglassFull from '@mui/icons-material/HourglassFull';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { IWorkCard } from '../../core/interfaces';

const WorkCardListItemWrapper = styled.div`
	display: flex;
	width: 100%;
	min-height: 64px;
	border-radius: 6px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	margin: 0 8px 4px;
	border-left: 4px solid #1abc9c;

	&:first-of-type {
		margin-top: 1rem;
	}

	&:last-of-type {
		margin-bottom: 2rem;
	}
`;

const Row = styled.div`
	margin: 0.25rem 0.5rem;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;

const Column = styled.div`
	/* border: 1px solid #ccc; */
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const CardTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 700;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
`;

const CardDate = styled.div`
	font-size: 0.7rem;

	margin-top: 0.2rem;

`;

const TimeDataWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	/* color: #2980b9; */
	color: #555;

	border: 1px solid #555;;
	border-radius: 4px;
	padding: 3px 6px;

	& > svg {
		height: 1rem;
		width: 1rem;
	}
`;

const CashWrapper = styled(TimeDataWrapper)`
	margin-left: 0.4rem;
	color: #27ae60;
	border: 1px solid #27ae60;
	border-radius: 4px;
	padding: 3px 6px;
`;

const CostCashWrapper = styled(CashWrapper)`
	color: #e74c3c;
	border-color: #e74c3c;
`;

const DateWrapper = styled.div`
	display: flex;
	color: #555;

	/* border: 1px solid #555; */

	& > svg {
		height: 1rem;
	}
`;

const WorkInfo = styled.div`
	display: flex;
	margin-top: 0.2rem;
`;

const WorkInfoValue = styled.div`
	font-size: 0.8rem;
`;

interface IProps {
	data: IWorkCard;
};

export const WorkCardListItem = ({ data }: IProps) => {
	return (
		<WorkCardListItemWrapper>
			<Row>
				<Column>

					<DateWrapper>
						<CalendarTodayIcon />
						<CardDate>{moment().format("DD-MM-YYYY")}</CardDate>
					</DateWrapper>
					<CardTitle>{data.customer?.name}</CardTitle>


					<WorkInfo>
						<TimeDataWrapper>
							<HourglassFull />
							<WorkInfoValue>120:30</WorkInfoValue>
						</TimeDataWrapper>

						<CashWrapper>
							<AttachMoneyIcon />
							<WorkInfoValue>1200 zł</WorkInfoValue>
						</CashWrapper>

						<CostCashWrapper>
							<AttachMoneyIcon />
							<WorkInfoValue>-500 zł</WorkInfoValue>
						</CostCashWrapper>
					</WorkInfo>

				</Column>
				<Column>
					<KeyboardArrowDownRoundedIcon />
				</Column>
			</Row>
		</WorkCardListItemWrapper>
	)
}
