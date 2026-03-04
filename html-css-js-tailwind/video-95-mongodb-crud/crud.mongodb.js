use('CrudDb');

// db.createCollection('cources');

// db.cources.insertOne({
//   name: 'Akashs Web Dev',
//   price: 0,
//   assgments: 19,
//   projects: 36,
// });

// db.cources.insertMany([
//   {
//     name: 'Frontend Fundamentals',
//     price: 0,
//     assignments: 19,
//     projects: 36,
//   },
//   {
//     name: 'Backend Basics',
//     price: 0,
//     assignments: 15,
//     projects: 25,
//   },
//   {
//     name: 'Full Stack Mastery',
//     price: 29.99,
//     assignments: 45,
//     projects: 75,
//   },
//   {
//     name: 'JavaScript Deep Dive',
//     price: 15.5,
//     assignments: 30,
//     projects: 50,
//   },
//   {
//     name: 'React.js Pro',
//     price: 45.0,
//     assignments: 22,
//     projects: 40,
//   },
//   {
//     name: 'Node.js & Express',
//     price: 35.0,
//     assignments: 18,
//     projects: 30,
//   },
//   {
//     name: 'Python for Web',
//     price: 25.0,
//     assignments: 28,
//     projects: 45,
//   },
//   {
//     name: 'Database Design',
//     price: 19.99,
//     assignments: 12,
//     projects: 20,
//   },
//   {
//     name: 'API Development',
//     price: 0,
//     assignments: 10,
//     projects: 18,
//   },
//   {
//     name: 'HTML5 & CSS3',
//     price: 0,
//     assignments: 25,
//     projects: 40,
//   },
//   {
//     name: 'Git & GitHub Workflow',
//     price: 0,
//     assignments: 8,
//     projects: 15,
//   },
//   {
//     name: 'Deployment & DevOps',
//     price: 50.0,
//     assignments: 15,
//     projects: 22,
//   },
//   {
//     name: 'Mobile Web Apps',
//     price: 30.0,
//     assignments: 20,
//     projects: 35,
//   },
//   {
//     name: 'Web Security',
//     price: 40.0,
//     assignments: 14,
//     projects: 21,
//   },
//   {
//     name: 'UI/UX Principles',
//     price: 0,
//     assignments: 16,
//     projects: 28,
//   },
//   {
//     name: 'Data Visualization',
//     price: 22.5,
//     assignments: 11,
//     projects: 19,
//   },
//   {
//     name: 'Testing & Debugging',
//     price: 10.0,
//     assignments: 13,
//     projects: 24,
//   },
//   {
//     name: 'TypeScript Essentials',
//     price: 18.0,
//     assignments: 9,
//     projects: 16,
//   },
//   {
//     name: 'Performance Optimization',
//     price: 0,
//     assignments: 7,
//     projects: 14,
//   },
//   {
//     name: 'Progressive Web Apps',
//     price: 32.0,
//     assignments: 17,
//     projects: 26,
//   },
// ]);

// let a = db.cources.find({ price: 0 });
// console.log(a.toArray());

// let b = db.cources.findOne({ price: 0 });
// console.log(b);

// db.cources.updateOne({ price: 0 }, { $set: { price: 500000 } });

// db.cources.updateMany({ price: 500000 }, { $set: { price: 123456789 } });

// db.cources.deleteOne({
//   name: 'Akashs Web Dev',
// });

db.cources.deleteMany({
  price: 123456789,
});
