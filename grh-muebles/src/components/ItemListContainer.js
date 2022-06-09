import React from 'react'

function ItemListContainer({ greeting }) {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then(res => res.json())
        .then(res => setPersonajes(res.results))
        .catch(error => console.error("Error", error))
    }, []);



    return (
    <div>
        <Itemlist personajes={personajes} />
    </div>
    )
}

export default ItemListContainer