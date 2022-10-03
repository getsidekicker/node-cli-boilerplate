module.exports = {
  development: {
    url: process.env.DATABASE_URL || "mysql://root:root@localhost:3306/cli",
    dialect: "mysql",
  },
};
