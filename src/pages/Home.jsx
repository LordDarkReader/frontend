import axios from "axios";
import React, {useEffect, useState} from 'react';

function Home() {

    const [testText, setTestText] = useState(null);


    const test = async () => {

        axios({
            // url: "http://demo-graphql:8080/graphql",
            url: "http://content-provider:8080/test",
            method: "GET",
            headers: {

                // Add any auth token here
                authorization: "your token comes here",
            },

            // Attaching the form data
            //data: formData,
        })

            // Handle the response from backend here
            .then((res) => {
                console.log(res);
                setTestText(res.data)
            })

            // Catch errors if any
            .catch((err) => { });
    }


    return (
        <div className='explore'>
            <header>
                <p className='pageHeader'>Home</p>
            </header>
            <main>

                <div>
                    <h1>Test</h1>

                    <button onClick={test}>
                        Test
                    </button>
                    <p>{testText}</p>
                </div>

            </main>
        </div>
    )
}

export default Home