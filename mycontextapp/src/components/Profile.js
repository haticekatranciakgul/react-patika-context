import { useContext,useState } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false)

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: 'htcktrnc', bio: 'lorem ipsum doler' })
            setLoading(false);
        }, 1500)

    }

    const handleLogout = () => {
        setUser(null)
    }


    return (
        <div>
            {
                !user && (
                    <button onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>
                )

            }
           
            <hr></hr>

            <code>{JSON.stringify(user)}</code>

            <br></br>
            {
                user && (
                    <button onClick={handleLogout}>logout</button>
                )
            }

        </div>
    )
}

export default Profile
