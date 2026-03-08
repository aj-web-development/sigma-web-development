// Catch-all Segments
// catch-all subsequent segments by adding an ellipsis inside the brackets [...coursepath]
// Here coursepath is variable can have any name

const Courses = async ({ params }) => {
  // Here get all the path tokens [...coursepath]
  const { coursepath } = await params;
  console.log(coursepath);

  return <div>Path Tokens {coursepath.join(',')}</div>;
};

export default Courses;
