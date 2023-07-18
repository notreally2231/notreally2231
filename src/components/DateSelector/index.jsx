import styled from 'styled-components';
import moment from "moment/moment";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

const DateSelector = ({ date, onPrevious, onNext }) => {
	return (
		<Wrapper>
			<IconButton onClick={onPrevious} size="small">
				<ArrowBackIosIcon fontSize="inherit" />
			</IconButton>
			<CurrentDate>{moment(date).format('MMMM Do YYYY - dddd')}</CurrentDate>
			<IconButton onClick={onNext} size="small">
				<ArrowForwardIosIcon fontSize="inherit" />
			</IconButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0;
`;

const CurrentDate = styled.div`
	text-align: center;
`;

export default DateSelector;