import React from 'react'

export const SelectLimit = ( {setLimit} ) => {

    const handleSelectChange = (e) => {
      setLimit( l => e.target.value);
    }

    return (
        <>
          <select className='form-select' onChange={handleSelectChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>  
        </>
    )
}
