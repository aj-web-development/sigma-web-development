import { useParams } from 'react-router';

const User = () => {
  const { username } = useParams();
  return <div>I am User {username}</div>;
};

export default User;
