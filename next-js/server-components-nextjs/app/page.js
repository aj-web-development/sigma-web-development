// If we do not use this directive "use client" to tell next js that it is clinet component
// By default all js files are components
// and we can not use react hooks or any client component related code in server component
// Next js will give error
// We can use client component in server component
'use client';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count {count}
      <br />
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  );
}
