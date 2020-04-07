import React from 'react'

function UserCard(){

    return(
        <>
            <div>

                {this.state.user.map(user => (
                  <div>                
                    <h1>Name:</h1>
                        <h2>Location:</h2>
                        <h2>Followers:</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserCard