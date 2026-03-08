// A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]
// Here folderName is variable and can have any name
import { notFound } from 'next/navigation';

const BlogPost = async ({ params }) => {
  // throw new Error('Ye Error hai..!');

  const { slug } = await params;

  // Now we can fetch data form DB using slug
  // Simple static array e.g.

  let languages = ['python', 'javascript', 'java', 'c++', 'c#', 'spring-boot'];

  if (!languages.includes(slug.toLowerCase())) {
    notFound();
  }

  return <div>My Post: {slug}</div>;
};

export default BlogPost;
