const Login = () => {
  return (
    <div>
      Admin Login Page
      <p>Feel free to login with your credentials.</p>
    </div>
  );
};

export async function generateMetadata({ params }) {
  console.log(await params);

  return {
    title:
      'Admin Login: Facebook - Connect with friends and the world around you on Facebook.',
  };
}

export default Login;
