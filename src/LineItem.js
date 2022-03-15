import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
const LineItem = ({ item, handlecheck, handledelete }) => {
    return (
        <li className='item'>
            <input type="checkbox"
                onChange={() => handlecheck(item.id)}
                checked={item.checked} />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handlecheck(item.id)}
            >
                {item.item} </label>
            <FaTrashAlt role="button"
                onClick={() => handledelete(item.id)}
                tabIndex="0"
                aria-label={'Delete ${item.item'} />
        </li>
    )
}

export default LineItem