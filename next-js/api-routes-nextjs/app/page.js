'use client';
export default function Home() {
  const handelClick = async () => {
    let data = {
      name: 'Akash',
      role: 'Developer',
    };

    let a = await fetch('/api/add', {
      method: 'POST',
      headers: {
        contentType: 'application/json',
      },
      body: JSON.stringify(data),
    });

    let res = await a.json();
    console.log(res);
  };

  return (
    <div className=' min-h-screen bg-zinc-50 font-sans dark:bg-black text-xl font-bold'>
      Next.js API Routes Demo
      <br />
      <button onClick={handelClick}>Call API</button>
    </div>
  );
}
