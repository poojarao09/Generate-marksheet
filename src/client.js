import React from 'react'
import './ext.css'
function client() {
    return (
        <div>

            <div className='C'><h1>What is says our clients</h1>
                <div className='C1'></div>
                <h2>Minim Veniam</h2>
                <div className='P'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip</p>
                </div>
            </div>
            <div className='cont'>
                <h1>GET IN TOUCH</h1>
                <div className='table'>
                    <form >
                        <table>
                            <tr>
                                <th>
                                    <input type="text" className="name" name="name" placeholder="Full Name"></input>
                                </th>
                            </tr>
                            <br></br>
                            <tr>
                                <th>
                                    <input type="text" className="email" name="name" placeholder="Email"></input>

                                </th>
                                </tr>
                                <br></br>
                            <tr>
                                <th>
                                    <input type="text" className="phone" name="name" placeholder="Phone Number"></input>
                                </th>
                                
                            </tr>
                            <br></br>
                            <tr>
                                <th>
                                    <input type="text" className="msg" name="name" placeholder="Message"></input>
                                </th>
                            </tr>
                        </table>
                    </form>
                    <br></br>
                    <button><p>SEND</p></button>
                </div>
            </div>
        </div>
    )
}

export default client