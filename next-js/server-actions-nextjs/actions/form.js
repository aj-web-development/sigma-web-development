// Marks this function as Server component
'use server';

import fs from 'fs/promises';
export const submitAction = async (e) => {
  console.log(e.get('name'), e.get('addr'));

  await fs.writeFile(
    'Akash.txt',
    `Name is ${e.get('name')} and Address is ${e.get('addr')}`
  );
};
