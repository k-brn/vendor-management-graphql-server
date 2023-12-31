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

    updateVendorContact: (parent, args) => {
      const { id, newEmail, newPhone } = args.input;

      const vendorIndex = VendorList.findIndex(
        (vendor) => vendor.id === Number(id)
      );
      if (vendorIndex === -1) {
        throw new Error(`Vendor with ID ${id} not found.`);
      }

      VendorList[vendorIndex].email = newEmail;
      VendorList[vendorIndex].phone = newPhone;

      return VendorList[vendorIndex];
    },

    deleteVendor: (parent, args) => {
      const id = args.id;
      _.remove(VendorList, (vendor) => vendor.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
