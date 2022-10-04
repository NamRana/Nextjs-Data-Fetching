import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = ({user}) => {
    const router=useRouter();
  return (
    <Layout>
    <div className='container bg-light p-4 p-relative'>
    <h1>All users Details</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      
    </tr>
  </thead>
  <tbody>
    {user.map(user=>(
        <tr>
            <td key={user.id} onClick={()=>router.push(`/users/${user.id}`)}>
               <td >{user.name}</td> 
            </td>
        </tr>
    ))}
    
  </tbody>
</table>
    </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps(){
    try{
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
        return{
            props:{
                user:data
            }
        }
    }catch(error){
        console.log(error);
    }
}