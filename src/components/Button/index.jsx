import PropT from 'prop-types';

export const Button = ({children, onButtonClick, disabled = false}) =>{
    return  <button disabled={disabled} style={{ fontSize:'40px'}} onClick={onButtonClick}>{children}</button>;
};

Button.propTypes = {
    children: PropT.node,
    onButtonClick: PropT.func.isRequired,
    disable: PropT.bool,
}

