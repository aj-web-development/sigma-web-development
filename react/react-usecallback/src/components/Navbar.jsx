import { memo } from 'react';

// memo;
const Navbar = ({ adjective, getAdjective }) => {
  console.log('Navbar is rendered..!');

  return (
    <div>
      I am a {adjective} Navbar.
      <button
        onClick={() => {
          getAdjective();
        }}
      >
        {getAdjective()}
      </button>
    </div>
  );
};

// This is important to tell compiner to rerender if props are updated
export default memo(Navbar);
