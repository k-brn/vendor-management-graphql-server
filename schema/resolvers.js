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

  Mutation: {
    addVendor: (parent, args) => {
      const vendor = args.input;
      const lastId = VendorList[VendorList.length - 1].id;
      vendor.id = lastId + 1;
      VendorList.push(vendor);
      return vendor;
    },
  },
};

module.exports = { resolvers };
