
import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSearch(data.queryStr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('queryStr')} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
