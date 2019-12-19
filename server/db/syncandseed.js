const conn = require("./conn");
const User = require("./models/User");
const Subject = require("./models/Subject");
const Node = require("./models/Node");
const Tree = require("./models/Tree");

// const syncAndSeed = async () => {
//   // Use for final app
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
    { body: "idea 1", userId: Alex.id, subjectId: subject1.id },
    {
      body: "idea 2",
      userId: Oscar.id,
      subjectId: subject1.id
    },
    {
      body: "idea 3",
      userId: Oscar.id,
      subjectId: subject1.id
    },
    {
      body: "idea 4",
      userId: Oscar.id,
      subjectId: subject1.id
    },
    {
      body: "idea 5",
      userId: Alex.id,
      subjectId: subject2.id
    },
    {
      body: "idea 6",
      userId: Alex.id,
      subjectId: subject2.id
    },
    {
      body: "idea 7",
      userId: Paul.id,
      subjectId: subject2.id
    },
    {
      body: "idea 8",
      userId: Saleh.id,
      subjectId: subject2.id
    },
    {
      body: "idea 9",
      userId: Saleh.id,
      subjectId: subject3.id
    },
    {
      body: "idea 10",
      userId: Saleh.id,
      subjectId: subject3.id
    },
    {
      body: "idea 11",
      userId: Paul.id,
      subjectId: subject3.id
    },
    {
      body: "idea 12",
      userId: Shruti.id,
      subjectId: subject3.id
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
    node9,
    node10,
    node11,
    node12
  ] = await Promise.all(nodes.map(node => Node.create(node)));

  const trees = [
    {
      idea: subject1.name,
      subjectId: subject1.id
    },
    {
      idea: "idea  - 2",
      subjectId: subject1.id
    },
    {
      idea: "idea  - 3",
      subjectId: subject1.id
    },
    {
      idea: "idea - 4",
      subjectId: subject1.id
    },
    {
      idea: subject2.name,
      subjectId: subject2.id
    },
    {
      idea: "idea - 6",
      subjectId: subject2.id
    },
    {
      idea: "idea - 7",
      subjectId: subject2.id
    },
    {
      idea: "idea - 8",
      subjectId: subject2.id
    },
    {
      idea: subject3.name,
      subjectId: subject3.id
    },
    {
      idea: " idea - 10",
      subjectId: subject3.id
    },
    {
      idea: " idea - 11",
      subjectId: subject3.id
    },
    {
      idea: " idea - 12",
      subjectId: subject3.id
    }
  ];

  const [
    idea1,
    idea2,
    idea3,
    idea4,
    idea5,
    idea6,
    idea7,
    idea8,
    idea9,
    idea10,
    idea11,
    idea12
  ] = await Promise.all(trees.map(tree => Tree.create(tree)));

  idea2.parentId = idea1.id;
  await idea2.save();
  idea3.parentId = idea1.id;
  await idea3.save();
  idea4.parentId = idea1.id;
  await idea4.save();
  idea6.parentId = idea5.id;
  await idea6.save();
  idea7.parentId = idea5.id;
  await idea7.save();
  idea8.parentId = idea5.id;
  await idea8.save();
  idea10.parentId = idea9.id;
  await idea10.save();
  idea11.parentId = idea9.id;
  await idea11.save();
  idea12.parentId = idea9.id;
  await idea12.save();

  return {
    nodes: {
      node1,
      node2,
      node3
    }
  };
};
module.exports = syncAndSeed;
