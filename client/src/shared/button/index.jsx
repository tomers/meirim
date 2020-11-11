import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(MUIButton)`
	border-radius: ${(props) => (props.small ? '8px !important' : '12px !important')};
	font-family: Assistant;
	font-size: 16px;
	font-weight: bold !important;
	font-stretch: normal;
	line-height: 1.5;
	letter-spacing: normal;
	text-align: center;
	color: #ffffff;
	background-color: #652dd0 !important;
    min-height: ${(props) => (props.small ? '1em' : '3.7em')}
`;

const Button = ({text, onClick, small = false}) => (
    <StyledButton size="small" onClick={onClick} variant="contained" color="primary" small={small}>
        {text}
    </StyledButton>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    small: PropTypes.bool,
};

export default Button;
