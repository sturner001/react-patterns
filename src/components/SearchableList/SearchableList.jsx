import { useState, useRef } from 'react';

const SeachableList = ({ items, itemKeyFn, children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const lastChange = useRef();


    const searchResults = items.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (event) => {
        if (lastChange) {
            clearTimeout(lastChange.current);
        }
        
        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event.target.value);
        }, 500);

    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchResults.map((item, index) => (
                    <li key={itemKeyFn(item)}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SeachableList;