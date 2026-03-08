// Optional Catch-all Segments
// Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]]
// Here folderName is variable and can have any name
const Hobby = async ({ params }) => {
  // Here get all the path tokens [...coursepath]
  const { slug } = await params;
  console.log(slug);

  return <div>Hobby Path: {slug ? slug.join(',') : 'No Hoppy path found'}</div>;
};

export default Hobby;
