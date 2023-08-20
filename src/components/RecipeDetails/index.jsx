import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Group = ({ defaultExpanded, items, title }) => {
	return (
		<div>
			<AccordionWrapped defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
					<Typography fontFamily="Roboto, sans-serif" fontSize="1.5em">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
					<RecipeList>
						{items.map((item, index) => (
							<RecipeContainer key={`${item.name}-${index}`}>
								<Typography fontFamily="Roboto, sans-serif" fontSize="1.1em">{item.name}</Typography>
								{item.youtube.map((link) => (
									<iframe
										width="95%"
										height="300px"
										src={link}
										frameborder="0"
										allow="autoplay; encrypted-media"
										allowfullscreen
									></iframe>
								))}
							</RecipeContainer>
						))}
					</RecipeList>
        </AccordionDetails>
      </AccordionWrapped>
		</div>
	)
};

const RecipeDetails = ({ foods }) => {
	const groups = Object.keys(foods);
	return (
		<Wrapper>
			{groups.map((group, index) => (
				<Group key={`${group.name}-${index}`} defaultExpanded={index === 0} title={group} items={foods[group]} />
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 10px 0;
`;

const RecipeList = styled.ul`
	list-style-type: disc;
`;

const AccordionWrapped = styled(Accordion)`
 && {
	border-radius: 0 !important;
 }
`;

const RecipeContainer = styled.li`
`;

export default RecipeDetails;