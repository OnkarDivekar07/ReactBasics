import { useState } from 'react';
import './FilterYears.css';

function FilterYears(props) {
  const [selectedYear, setSelectedYear] = useState('');

  function showYearsHandler(event) {
    const year = event.target.value;
    setSelectedYear(year);
    props.onFilterYear(year);
  }

  return (
    <div className='filter-container'>
      <label className="filter-label" htmlFor="year">
        Filter by Year:
      </label>
      <select className="filter-select" value={selectedYear} onChange={showYearsHandler}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
}

export default FilterYears;
