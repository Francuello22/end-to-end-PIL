

const ListFriends = () => { 

    const amigos = ['Lucas', 'Vege', 'Tole', 'Ramiro'];
    
    return (
        <>
        <ul>
            { amigos.map((amigo) => {
                return <li>{amigo}</li>
            })}
    </ul> <br />
    </>
    ) };

    export default ListFriends;