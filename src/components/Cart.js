import React from 'react'
// import { nanoid } from 'nanoid'
import { useState } from 'react'
const items = [
    {
        "_id": "6196db424f5ef3491894a6c7",
        "name": "Poha",
        "rate": 10,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6c8",
        "name": "Chai",
        "rate": 140,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6c9",
        "name": "Jeera",
        "rate": 1000,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6d7",
        "name": "mustard_oil",
        "rate": 200,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6e7",
        "name": "sugar",
        "rate": 40,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6f7",
        "name": "tuar_dal",
        "rate": 150,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6a8",
        "name": "turmeric_powder",
        "rate": 500,
        "__v": 0
    },
    {
        "_id": "6196db424f5ef3491894a6d8",
        "name": "jeera",
        "rate": 10,
        "__v": 0
    }
]
var arr =[];
function Cart() {

    const usersTemple = { _id: " ", name: " ", rate: " ", __v: " " };
    // const usersTemple = items;
    const [users, setUsers] = useState([usersTemple]);
    const [New, setNew] = useState();
    const [newVal, setValue] = useState(1);
    const [Rate, setRate] = useState(0);
    
    function cchange(e, index) {
        setRate(e.target.value)
        const Namo = users.map((user, i) => index === i ? Object.assign(user, { [e.target.name]: e.target.value }) : user);
        setUsers(Namo);
          
        }
        
              
       function Qunt(e) {
        var newVal = e.target.value;
        setValue(newVal)
    }
    // arr.push(Rate);
    // console.log(New);

    function addNewCol() {  
        setUsers([...users, usersTemple]);
        setRate(Rate)
        
    }
    const remove = (index) => {
        const filterUser = [...users];
        filterUser.splice(index, 1)
        setUsers(filterUser);

    }

    return (
        <>
            <main>
                <form action="" method="post">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="content">Logo</div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {users.map((user, index) => (
                                <tr >
                                    {/* {ind=index} */}
                                    <td>
                                        <select name="name" id="product1" onChange={
                                            e => cchange(e, index)}  >
                                            {items.map((data, i) =>
                                                <option className="op1" value={data.rate} >{data.name}</option>

                                            )}
                                        </select>
                                    </td>
                                    <td>
                                        <div className="content" name='rate' id="price1" >Rs {Rate}</div>
                                    </td>
                                    <td>
                                        <div className="content">Qty/kg<input type='number' onChange={Qunt} value={newVal} ></input></div>
                                    </td>
                                    <td>
                                        <div className="content">Total:-{newVal*Rate}</div>
                                    </td>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="content" id='rm' onClick={() => remove(index)}>Remove</div>
                                        </td>
                                    </tr>
                                </tr>

                            ))}

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="content" onClick={addNewCol}>Add More</div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* <td>
                                    <div className="content" onClick={()=>remove(index)}>Remove</div>
                                </td> */}
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    {/* <div className="content" onClick={remove=()=>remove(ind)}>Remove</div> */}
                                </td>
                            </tr>



                            <tr>
                                <td>
                                    <div className="content">Total Product Count</div>
                                </td>
                                <td></td>
                                <td></td>
                                <td><div className="content">Amount Total</div></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="submit" value="Checkout" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </main>
        </>)

} export default Cart
