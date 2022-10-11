import React from 'react';
import { gql, useLazyQuery  } from '@apollo/client';

function TestConnectionQuery() {

    const [getUsers, { loading, error, data }] = useLazyQuery(FIND_ALL_USERS);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <header>
                <p className='pageHeader'>Home</p>
            </header>
            <main>
                <h1>Test GraphQL connection QUERY</h1>
                <div>
                <button onClick={() => getUsers()}>
                    getUsers
                </button>
                    {data && (<p>{data.findAllUsers[0].name}</p>)}
                </div>
            </main>
        </div>
    )
}

export default TestConnectionQuery

const FIND_ALL_USERS = gql`
    query findAllUsers {
        findAllUsers {
            name
            isAdmin
            email
            password
        }
    }
`;

