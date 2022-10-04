import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layout'

const UserId = ({user}) => {
  return (
    <Layout>
    <div className='container'>
    <h1>
    User Details Page
    </h1>
    <h1>{user.name}</h1>
    </div>
    </Layout>
  )
}

export default UserId;

export async function getServiceSideProps(context){
    try{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/ ${context.query.id}`)
        return {
            props:{
                user:data
            }
        }
    }catch(error){
        console.log(error);
    }
}