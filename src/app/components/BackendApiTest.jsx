"use client"
import Button from '@/root/app/components/Button';
import { useState } from 'react';
import axios from 'axios';
import ContentForm from '@/root/app/components/ContentForm';

const BackendApiTest = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {

    setLoading(true);

    console.log("next public client backend url: ", process.env.NEXT_PUBLIC_CLIENT_BACKEND_URL)

    axios.get(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_URL}/api/test/next/1`)
      .then(response => {
        console.log(response.data); // "Hello from Spring!"
        setData(response.data);
        setLoading(false)
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError(error);
        setLoading(false)
      });
  }

  const handleClear = () => {

    setData("")
  }

  return (
    <>
      <Button name = {'Test Backend API'} handleSubmit = {handleSubmit}/>
      <Button name = {'Clear'} handleSubmit = {handleClear}/>
      <ContentForm/>

      {
        loading && (<p>Loading...</p>)
      }
      {
        error && (<p style={{ color: 'red' }}>Error: {error}</p>)
      }
      {
        data && (<p>{data}</p>)
      }
    </>
  )
}

export default BackendApiTest;