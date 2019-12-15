const conn = require("./conn");
const User = require("./models/User");
const Subject = require("./models/Subject");
const Node = require("./models/Node");

// const syncAndSeed = async () => { // Use for final app
//   await conn.sync();
// };

const syncAndSeed = async () => {
  await conn.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION

  // Users
  const users = [
    {
      name: "Alexandra P",
      email: "alexandra.p@email.com",
      password: "Alexandra",
      isAdmin: true
    },
    {
      name: "Oscar T",
      email: "oscar.t@email.com",
      password: "Oscar",
      isAdmin: true
    },
    {
      name: "Paul B",
      email: "paul.b@email.com",
      password: "Paul",
      isAdmin: true
    },
    {
      name: "Saleh A",
      email: "saleh.a@email.com",
      password: "Saleh",
      isAdmin: false
    },
    {
      name: "Shruti G",
      email: "shruti.g@email.com",
      password: "Shruti",
      isAdmin: false
    }
  ];

  const [Alex, Oscar, Paul, Saleh, Shruti] = await Promise.all(
    users.map(user => User.create(user))
  );

  // Subjects
  const subjects = [
    {
      name: "Core architecture",
      description: "Core architecture discussion",
      userId: Alex.id
    },
    {
      name: "Components",
      description: "Components discussion",
      userId: Alex.id
    },
    {
      name: "Layout",
      description: "Layout brainstorming",
      userId: Oscar.id
    },
    { name: "Subject 4", description: "Dependencies graph", userId: Oscar.id },
    { name: "Subject 5", description: "Build discussion", userId: Paul.id },
    { name: "Subject 6", description: "Resources structure", userId: Paul.id },
    { name: "Subject 7", description: "Release plan", userId: Saleh.id },
    { name: "Subject 8", description: "Root cause analysis", userId: Saleh.id },
    {
      name: "Troubleshooting",
      description: "Troubleshooting discussion",
      userId: Shruti.id
    }
  ];

  const [
    subject1,
    subject2,
    subject3,
    subject4,
    subject5,
    subject6,
    subject7,
    subject8,
    subject9
  ] = await Promise.all(subjects.map(subject => Subject.create(subject)));

  // Nodes
  const nodes = [
    { body: "Idea 1 - 1", userId: Alex.id, subjectId: subject1.id },
    {
      body: "Idea 1 - 2",
      userId: Oscar.id,
      subjectId: subject1.id
    },
    {
      body: "Idea 2 - 1",
      userId: Oscar.id,
      subjectId: subject3.id
    },
    {
      body: "Idea 2 - 2",
      userId: Alex.id,
      subjectId: subject3.id
    },
    {
      body: "Idea 3 - 1",
      userId: Paul.id,
      subjectId: subject5.id
    },
    {
      body: "Idea 3 - 2",
      userId: Saleh.id,
      subjectId: subject5.id
    },
    {
      body: "Idea 4 - 1",
      userId: Saleh.id,
      subjectId: subject7.id
    },
    {
      body: "Idea 4 - 2",
      userId: Paul.id,
      subjectId: subject7.id
    },
    {
      body: "Idea 5 - 1",
      userId: Shruti.id,
      subjectId: subject9.id
    }
  ];

  const [
    node1,
    node2,
    node3,
    node4,
    node5,
    node6,
    node7,
    node8,
    node9
  ] = await Promise.all(nodes.map(node => Node.create(node)));

  node2.parentId = node1.id;
  await node2.save();
  node3.parentId = node1.id;
  await node3.save();
  node4.parentId = node1.id;
  await node4.save();
  node5.parentId = node2.id;
  await node5.save();
  node6.parentId = node3.id;
  await node6.save();
  node7.parentId = node2.id;
  await node7.save();
  node8.parentId = node3.id;
  await node8.save();
  node9.parentId = node4.id;
  await node9.save();

  return {
    nodes: {
      node1,
      node2,
      node3
    }
  };
};
module.exports = syncAndSeed;
