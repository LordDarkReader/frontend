import React, {useEffect, useState} from 'react';
import { useQuery, gql, useLazyQuery , useMutation  } from '@apollo/client';

function TestConnectionMutation() {

    const [createUser, { data, loading, error }] = useMutation(CREAT_USER);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <header>
                <p className='pageHeader'>Home</p>
            </header>
            <main>
                <h1>Test GraphQL connection MUTATION</h1>
                <div>
                    <button onClick={() => createUser({ variables: { input:{ name: 'Jack', email: 'jack@wp.pl', isAdmin: false, password: 'dyasd'}}})}>
                        MUTATION
                    </button>
                </div>
            </main>
        </div>
    )
}

export default TestConnectionMutation


const CREAT_USER = gql`
    mutation CreateUser($input: UserInput!){
        createUser(input: $input) {
            name
            email
            isAdmin
            password
        }
    }
`;
