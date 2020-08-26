import React from 'react';

const ModeSelector = props => {
    const smallUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&descriptionn=%7Blorem%7C32%7D'

    const bigUrl = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&descriptionn=%7Blorem%7C32%7D'

    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
            <button className="btn btn-success" onClick={() =>props.onSelect(smallUrl)} style={{marginRight: '15px'}}>32 элемента</button>
            <button className="btn btn-danger" onClick={() => props.onSelect(bigUrl)} style={{marginLeft: '15px'}}>1000 элементов</button>
        </div>
    );
};

export default ModeSelector;