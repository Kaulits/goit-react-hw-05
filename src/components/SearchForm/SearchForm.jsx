import React from 'react';
import { useForm } from 'react-hook-form';


const SearchForm = () => {
  const { register, handleSubmit, reset } = useForm();



  const onSubmit = (data) => {
   console.log(data)
    reset(); 
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('queryStr')} type="text"  />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
