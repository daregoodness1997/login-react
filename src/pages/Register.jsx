import { useState } from 'react';
import api from '../api';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  let navigate = useNavigate();
  const [response, setResponse] = useState({});
  const [value, setValue] = useState({});
  const Google = async () => {
    // const result = await api.handleGoogle();
    // setResponse(result);
    window.open('http://localhost:8080/api/v1/auth/google', '_self');
  };
  const registerLocal = async value => {
    try {
      const result = await api.handleRegister(value);
      setResponse(result.data);
      navigate('/auth/login');
    } catch (err) {
      console.log(err);
    }
  };

  console.log('value', value);
  console.log('response', response);
  return (
    <>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Create to your account
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4  sm:rounded-lg sm:px-10'>
            <div
              className='space-y-6'
              // method='post'
              // onSubmit={() => loginLocal(value)}
            >
              <div>
                <label
                  htmlFor='displayName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Display Name
                </label>
                <div className='mt-1'>
                  <input
                    id='displayName'
                    name='displayName'
                    type='text'
                    required
                    onChange={e =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    required
                    onChange={e =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    required
                    onChange={e =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    onChange={e =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    onChange={e =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    autoComplete='current-password'
                    // required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  // type='submit'
                  onClick={() => registerLocal(value)}
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Create your Account
                </button>
              </div>
            </div>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>
                    Or Sign up with
                  </span>
                </div>
              </div>

              <div className='mt-6 '>
                {/* <a href='http://localhost:8080/api/v1/auth/google'> */}
                <button
                  onClick={() => Google()}
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-gray-500 text-sm font-medium text-white bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 mt-2'
                >
                  Sign up with Google
                </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
