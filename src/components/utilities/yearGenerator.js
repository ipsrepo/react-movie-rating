import React, {forwardRef} from 'react';

const currentYear = new Date().getFullYear();
const years = Array.from({length: 20}, (_, i) => currentYear - i);

const yearGenerator = forwardRef((props, ref) => {
    return (
        <select className='input-controller' ref={ref}>
            {years.map(year => <option key={year} value={year}>{year}</option>)}>
        </select>
    )
})
export default yearGenerator;
