import React from 'react';
import ItemList from './ItemList';
const Content = ({ items, handlecheck, handledelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handlecheck={handlecheck}
                    handledelete={handledelete}
                />
            )

                :
                (
                    <p style={{ marginTop: '2rem' }}> Your list is Empty </p>
                )}
        </main>
    )
}

export default Content