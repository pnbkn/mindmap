const conn = require("./conn");
const Node = require("./models/Node");

const syncAndSeed = async () => {
  await conn.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION

  const nodes = [
    {
      body: "Test 1"
    },
    {
      body: "Test 2"
    },
    {
      body: "Test 3"
    }
  ];
  const [node1, node2, node3] = await Promise.all(
    nodes.map(async node => await Node.create(node))
  );
  return {
    nodes: {
      node1,
      node2,
      node3
    }
  };
};
module.exports = syncAndSeed;
