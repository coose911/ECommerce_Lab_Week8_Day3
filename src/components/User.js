import React from 'react'

const User = () => {


    const [user, setUser] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (  
            <div>
                <h2>Add a User</h2>
                <form onSubmit={handleSubmit}>
                    <label>User Name</label>
                    <input
                    type='text'
                    required value={title}
                    onChange={(e) => setUser(e.target.value)}
                    />
                    <button>Add User</button>
                </form>
            </div>
    );
}
 
export default User;