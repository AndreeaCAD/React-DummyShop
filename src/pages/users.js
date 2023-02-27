import { useState, useEffect } from "react";
import { getAllUsers } from "../services/api";
import UserCard from "../components/userCard/userCard"

function Users() {
    const[ users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
        .then(data => setUsers(data.users))
        .catch(error => console.log(error))
    }, [])

    console.log(users)

    return (
        <div>
        {users.map((user, index) => {
            return (
            <UserCard 
            key={user?.id}
            image={user?.image}
            fullName={`${user?.firstName}${user?.firstName}`}
            maidenName={user?.maidenName}
            email={user?.email}
            address={user?.address?.address}
            city={user?.address?.city}/>
            )
        } )}
        </div>
    )
}

export default Users;