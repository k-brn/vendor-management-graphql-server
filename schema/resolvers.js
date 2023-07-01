const { VendorList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    vendors: () => {
      return VendorList;
    },
    vendor: (parent, args) => {
      const id = args.id;
      const vendor = _.find(VendorList, { id: Number(id) });
      return vendor;
    },
  },
};

module.exports = { resolvers };
