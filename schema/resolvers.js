const { VendorList } = require("../fakeData");

const resolvers = {
  Query: {
    vendors() {
      return VendorList;
    },
  },
};

module.exports = { resolvers };
