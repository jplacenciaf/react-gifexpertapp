import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { SelectLimit } from './components/SelectLimit';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Drangon Ball']);
    const [limit, setLimit] = useState(10);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <div className='row'>
                <div className='col-md-8'>
                    <AddCategory setCategories={ setCategories } />
                </div>
                <div className='col-md-4'>
                    <SelectLimit setLimit={setLimit}/>
                </div>
            </div>
            <hr/>
            

            <ol>
                {
                    categories.map( cat => (
                        <GifGrid 
                            key={ cat }
                            category={ cat } 
                            limit={limit}
                        />
                    ))
                }
            </ol>
        </>
    )
}