import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    if (data.username === 'Akash') {
      // Setting custom error
      setError('myform', { message: 'Can not use Akash as username' });
    }

    let res = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let resData = await res.text();
    console.log(resData);
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className='container'>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='username'
            {...register('username', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 3, message: 'Min Length is 3' },
              maxLength: { value: 8, message: 'Max Length is 8' },
            })}
          />
          {errors.username && (
            <div className='error-red'>{errors.username.message}</div>
          )}
          <br />
          <input
            type='password'
            placeholder='password'
            {...register('password', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 6, message: 'Min Length is 6' },
              maxLength: { value: 12, message: 'Max Length is 12' },
            })}
          />
          {errors.password && (
            <div className='error-red'>{errors.password.message}</div>
          )}
          <br />
          <input type='submit' name='submit' disabled={isSubmitting} />
          {/* // Custom Errors */}
          {errors.myform && (
            <div className='error-red'>{errors.myform.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
