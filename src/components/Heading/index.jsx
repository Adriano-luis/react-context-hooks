import PropT from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () =>{
    const [state, actions] = useCounterContext();

    return  <h1 style={{ fontSize:'40px'}}>Counter : {state.counter}</h1>;
};

