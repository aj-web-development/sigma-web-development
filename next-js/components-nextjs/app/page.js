import Image from 'next/image';

export default function Home() {
  return (
    <div className='container my-5 size-80 bg-red-300 relative'>
      <Image
        // width={700}
        // height={700}
        fill={true}
        className='mx-auto object-contain'
        src='https://wowslider.com/sliders/demo-74/data1/images/goldengatebridge4904_1280.jpg'
        alt=''
      />
    </div>
  );
}
