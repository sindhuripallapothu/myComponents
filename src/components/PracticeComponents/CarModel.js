import React, { useEffect, useState } from 'react';
import axios from "axios";

const CarModels = () => {
    const [filterText, setFilterText] = useState('')
    const [models, setModels] = useState([])

    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.api-ninjas.com/v1/carmodels?make=audi');
                console.log(response)
                setModels(response.data);
            } catch (err) {
                console.log("Error - ", err)
            } finally {
                // setLoading(false)
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    const list = models.map(model => 
        <li>{model}</li>
    )
    return (
        <div>
            <input
                value={filterText}
                placeholder='Search'
                type='text'
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default CarModels;