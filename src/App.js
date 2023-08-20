import { useMemo, useState } from 'react';
import styled from 'styled-components';
import moment from "moment/moment";
import RecipeDetails from './components/RecipeDetails';
import DateSelector from './components/DateSelector';
import FOOD_LIST from './data/food';

const ONE_DAY = 24 * 60 * 60 * 1000;

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onPrevious = () => {
    setSelectedDate(new Date(selectedDate.getTime() - ONE_DAY));
  };

  const onNext = () => {
    setSelectedDate(new Date(selectedDate.getTime() + ONE_DAY));
  };

  const foods = useMemo(() => {
    const day = moment(selectedDate).format('dddd');
    return FOOD_LIST[day];
  }, [selectedDate]);

  return (
    <Wrapper>
      <Header>Luto ni Inday</Header>
      <DateSelector onPrevious={onPrevious} onNext={onNext} date={selectedDate} />
      <RecipeDetails foods={foods} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  width: 90%;
  margin: auto;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
`;

const Header = styled.div`
  font-size: 2rem;
  font-family: 'Lugrasimo', cursive;
  text-align: center;
  padding: 10px 0;
	color: #FF00FF;
`;

export default App;
