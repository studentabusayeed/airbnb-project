import { useMyContext } from '../../../Provider/SearchProvider';
import Filter from '../Filter/Filter';
import SingleCard from '../SingleCard/SingleCard';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [selectedFilter, setSelectedFilter] = useState("Amazing");

    const [users, setUsers] = useState([]);

    const { toys, setToys } = useMyContext();

    // fetch(`https://toy-project-server.vercel.app/getByText/${searchText}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setToys(data);
    //     });

    // fetch(`http://localhost:5000/getByText/${toys}`)
    //     .then(res => res.json())
    //     .then(data => setUsers(data));

    fetch('https://airbnb-server-side.vercel.app/users1')
        .then(res => res.json())
        .then(data => setUsers(data));


    const [world, setworld] = useState([]);

    fetch('https://airbnb-server-side.vercel.app/users2')
        .then(res => res.json())
        .then(data => setworld(data));

    const [farams, setFarams] = useState([]);

    fetch('https://airbnb-server-side.vercel.app/users3')
        .then(res => res.json())
        .then(data => setFarams(data));

    const [sufring, setSufring] = useState([]);

    fetch('https://airbnb-server-side.vercel.app/users6')
        .then(res => res.json())
        .then(data => setSufring(data));

    const [lakeFront, setLakeFront] = useState([]);

    fetch('https://airbnb-server-side.vercel.app/users4')
        .then(res => res.json())
        .then(data => setLakeFront(data));

    const [rooms, setRooms] = useState([]);

    fetch('https://airbnb-server-side.vercel.app/users5')
        .then(res => res.json())
        .then(data => setRooms(data));



    return (
        <div>
            <Filter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            ></Filter>
            {
                selectedFilter == "Amazing" ? <SingleCard list={users}></SingleCard> : ""
            }
            {
                selectedFilter == "Top of the world" ? <SingleCard list={world}></SingleCard> : ""
            }
            {
                selectedFilter == "Farms" ? <SingleCard list={farams}></SingleCard> : ""
            }
            {
                selectedFilter == "Surfing" ? <SingleCard list={sufring}></SingleCard> : ""
            }
            {
                selectedFilter == "Lakefront" ? <SingleCard list={lakeFront}></SingleCard> : ""
            }
            {
                selectedFilter == "Rooms" ? <SingleCard list={rooms}></SingleCard> : ""
            }
        </div>
    );
};

export default Home;