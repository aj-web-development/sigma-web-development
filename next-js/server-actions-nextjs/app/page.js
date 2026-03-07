'use client';
import { submitAction } from '@/actions/form';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef();

  return (
    <div className='w-2/3 mx-auto my-12'>
      <form
        ref={ref}
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
      >
        <div>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            type='text'
            className='text-white my-2 bg-gray-800'
            name='name'
            id='name'
          />
        </div>

        <div>
          <label htmlFor='addr'>Address</label>
          <br />
          <input
            type='text'
            className='text-white my-2 bg-gray-800'
            name='addr'
            id='addr'
          />
        </div>

        <div>
          <button className='border border-white hover:bg-gray-800 bg-gray-700 p-2 rounded-2xl'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
