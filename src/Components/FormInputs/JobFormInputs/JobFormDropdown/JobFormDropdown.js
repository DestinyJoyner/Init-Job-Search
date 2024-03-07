import { v4 as uuidv4 } from 'uuid';
import { dropdownCities } from '../../../App/Data/Cities';
import { asterisk } from '../../../App/Data/Icons';
import "./JobFormDropdown.scss"

function JobFormDropdown({idVal, stateVar, onChange}) {

    return (
        <label
        htmlFor="city"
        className="jobFormDropdown_label"
      >
        <select
       className='jobFormDropdown_select'
       id={idVal}
       value={stateVar}
       onChange={onChange}>
        {
            dropdownCities.map(({val, name}) => 
            <option
            key={uuidv4()} 
            value={val}>{name}</option>)
        }
       </select>
       <span>City{asterisk}</span>
      </label>
       
    );
}

export default JobFormDropdown;