import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Group = ({ defaultExpanded, items, title }) => {
	return (
		<div>
			<Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
					<Typography fontFamily="Roboto, sans-serif" fontSize="1.5em">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
					{items.map((item) => (
						<RecipeContainer>
							<Typography sx={{ mb: 1 }} fontFamily="Roboto, sans-serif" fontSize="1.3em">{item.name}</Typography>
							{item.youtube.map((link) => (
								<iframe
									width="100%"
									height="300px"
									src={link}
									frameborder="0"
									allow="autoplay; encrypted-media"
									allowfullscreen
								></iframe>
							))}
						</RecipeContainer>
					))}
        </AccordionDetails>
      </Accordion>
		</div>
	)
};

const RecipeDetails = ({ foods }) => {
	const groups = Object.keys(foods);
	return (
		<Wrapper>
			{groups.map((group, index) => (
				<Group defaultExpanded={index === 0} title={group} items={foods[group]} />
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 10px 0;
`;

const RecipeContainer = styled.div`
	display: block;
`;

export default RecipeDetails;