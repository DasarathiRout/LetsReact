import React from 'react';
import './Validations.css';

const validations = (props) => {
    const ZERO_SIZE = 0;
    const MIN_SIZE = 5;
    const MAX_SIZE = 10;


    let validationMessage = 'Correct Size !!! Text Long Enough.';
    let validationsStyle = '';

    if (props.inputLength > ZERO_SIZE && props.inputLength <= MIN_SIZE) {
        validationsStyle = 'message-error-min';
        validationMessage = 'Text Getting Too Short ?';
    } else if (props.inputLength >= MIN_SIZE && props.inputLength <= MAX_SIZE) {
        validationsStyle = 'message-correct';
        validationMessage = 'Correct Size !!! Text Long Enough.';
    } else if (props.inputLength > MAX_SIZE) {
        validationsStyle = 'message-error-max';
        validationMessage = 'Text Getting Too Long Then Expected.';
    } else {
        validationMessage = '';
    }

    return (
        <div className={validationsStyle}>
            {validationMessage}
        </div>
    );
};

export default validations;