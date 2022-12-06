import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
// import EditUser from './EditUser';


export default function UserInfo() {
    const [users, Setusers] = useState("")

    useEffect(() => {
        getusers()
    },[users])

    const getusers = () => {
        fetch("http://localhost:3004/users")
            .then((Response) => Response.json())
            .then((item) => {
                Setusers(item)
            })
    }
    const HandleDelete =(id)=>{
        fetch(`http://localhost:3004/users/${id}`,{
            method:"DELETE"
        }
        );
    }


    return (
        <>
        
        
        <Table bordered hover className='t-body'>
                
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>contact</th>
                    <th>Password</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody >
                {
                    users && users.map((item) =>

                        item.role_id == 1 ? ''
                            :
                            <tr>
                                <th>{item.id}</th>
                                <th>{item.uname}</th>
                                <th>{item.contact}</th>
                                <th>{item.password}</th>
                                <th>
                                    {/* <LinkContainer to ="Products"> */}
                                    <button className=' btn btn-warning m-auto'>Update</button>&nbsp;
                                    {/* </LinkContainer>' */}
                                    <button className=' btn btn-danger  m-auto' onClick={()=>{
                                        HandleDelete(item.id)}}>delete</button>
                                </th>
                            </tr>


                    )
                }


            </tbody>

        </Table>
        <LinkContainer to="/AddUser">
        <button className='btn btn-primary' >ADD USER </button>
        </LinkContainer>
        </>
    )
}
