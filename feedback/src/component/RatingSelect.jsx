import {useState} from 'react'
function RatingSelect({select}) {
    const [selectedRating, setRating] = useState(10)
    const handleChange = (e) => {
        setRating(+e.target.value)
        select(+e.target.value)
    }
  return (
    <ul className='rating'>
      <li>
        <input type="radio" id="1" name="rating" value="1" onChange={handleChange} checked={selectedRating === 1} />
        <label htmlFor="1">1</label>
    </li>
    <li>
        <input type="radio" id="2" name="rating" value="2" onChange={handleChange} checked={selectedRating === 2} />
        <label htmlFor="2">2</label>
    </li>
    <li>
        <input type="radio" id="3" name="rating" value="3" onChange={handleChange} checked={selectedRating === 3} />
        <label htmlFor="3">3</label>
    </li>
    <li>
        <input type="radio" id="4" name="rating" value="4" onChange={handleChange} checked={selectedRating === 4} />
        <label htmlFor="4">4</label>
    </li>
   <li>
        <input type="radio" id="5" name="rating" value="5" onChange={handleChange} checked={selectedRating === 5} />
        <label htmlFor="5">5</label>
      </li>
      <li>
        <input type="radio" id="6" name="rating" value="6" onChange={handleChange} checked={selectedRating === 6} />
        <label htmlFor="6">6</label>
      </li>
      <li>
        <input type="radio" id="7" name="rating" value="7" onChange={handleChange} checked={selectedRating === 7} />
        <label htmlFor="7">7</label>
      </li>
      <li>
        <input type="radio" id="8" name="rating" value="8" onChange={handleChange} checked={selectedRating === 8} />
        <label htmlFor="8">8</label>
      </li>
      <li>
        <input type="radio" id="9" name="rating" value="9" onChange={handleChange} checked={selectedRating === 9} />
        <label htmlFor="9">9</label>
      </li>
      <li>
        <input type="radio" id="10" name="rating" value="10" onChange={handleChange} checked={selectedRating === 10} />
        <label htmlFor="10">10</label>
      </li>
    </ul>

  )
}

export default RatingSelect
