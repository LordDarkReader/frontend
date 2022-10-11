import axios from "axios";
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Jackpot() {

    const [numbers12, setNumbers12] = useState(null);
    const [numbers50, setNumbers50] = useState(null);

    const test4 = async () => {

        axios({
            url: "http://localhost:8080/jackpot",
            method: "GET",
            headers: {
                "Access-control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE"
            },
        })
            .then((res) => {
                setNumbers12(res.data.numbers12)
                setNumbers50(res.data.numbers50)
            })
            .catch((err) => { });
    }

    const listItems = numbers12?.map((number) =>
        <li style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}>{number}</li>
    );

    const listItems2 = numbers50?.map((number) =>
        <li style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}>{number}</li>
    );

    return (
        <div className='container'>
            <header>
                <p className='pageHeader'>Jackpot</p>
            </header>
            <main>
                <div className='container'>
                    <h1>Your lucky numbers</h1>
                    <p></p>
                    <Button variant="dark" onClick={test4}>
                        please click to get numbers
                    </Button>
                    <div>
                        <h1 style={{display: listItems ? 'block' : 'none' }}>Numbers 2 of 12:</h1>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                    <div>
                        <h1 style={{display: listItems2 ? 'block' : 'none' }}>Numbers 5 of 50:</h1>
                        <ul>
                            {listItems2}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Jackpot