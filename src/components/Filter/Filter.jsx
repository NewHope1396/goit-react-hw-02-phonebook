import { nanoid } from 'nanoid';

const filterInputId = nanoid();

export const Filter = ({onFilterChange, value}) => (
    <div>
        <label htmlFor={filterInputId}>Filter</label> 
        <input id={filterInputId} onChange={onFilterChange} type="text" value={value}/>
    </div>
)