import Script from 'next/script';

const about = () => {
  return (
    <div>
      <Script>{`alert("Welcome to About Page");`}</Script>
      This is About
    </div>
  );
};

export default about;

export const metadata = {
  title: 'Facebook - About us',
  description: 'This is About us',
};
