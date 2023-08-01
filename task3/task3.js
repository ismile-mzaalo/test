const fs = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, "data.txt"), "utf8");

    const words = data.split(/\s+/).filter((word) => word !== "");

    console.log(`The Total word count ${words.length}`);
  } catch (error) {
    console.error("-- Error --", error);
  }
};

fileOps();
