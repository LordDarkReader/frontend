import axios from "axios";
import React, {useState} from 'react';
import { gql, useLazyQuery } from '@apollo/client';

function TestConnection() {

    const [testText, setTestText] = useState(null);

    const [getUser, { loading, error, data }] = useLazyQuery(FIND_USERS_BY_ID);

    const test = async () => {

        axios({
            url: "http://localhost:8080/test",
            method: "GET",
            headers: {
                "Access-control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE"
            },
        })
            .then((res) => {
                console.log(res);
                setTestText(res.data)
            })
            .catch((err) => { });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <header>
                <p className='pageHeader'>Home</p>
            </header>
            <main>
                <div>
                    <h1>Test Rest connection</h1>

                    <button onClick={test}>
                        Test
                    </button>
                    <p>{testText}</p>
                </div>
                <h1>Test GraphQL connection QUERY getUser</h1>
                <div>
                    <button onClick={() => getUser({variables: {id: '633e85d68a17d278eec0b04c'}})}>
                        getUser
                    </button>
                    {data && (<p>{data.findUserById.name}</p>)}
                </div>
            </main>
        </div>
    )
}

export default TestConnection

const FIND_USERS_BY_ID = gql`
    query findUserById($id: String) {
        findUserById(id: $id) {
            name
        }
    }
`;

