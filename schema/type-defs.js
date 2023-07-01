const { gql } = require("apollo-server");

const typeDefs = gql`
  enum State {
    ALABAMA
    ALASKA
    ARIZONA
    ARKANSAS
    CALIFORNIA
    COLORADO
    CONNECTICUT
    DELAWARE
    FLORIDA
    GEORGIA
    HAWAII
    IDAHO
    ILLINOIS
    INDIANA
    IOWA
    KANSAS
    KENTUCKY
    LOUISIANA
    MAINE
    MARYLAND
    MASSACHUSETTS
    MICHIGAN
    MINNESOTA
    MISSISSIPPI
    MISSOURI
    MONTANA
    NEBRASKA
    NEVADA
    NEW_HAMPSHIRE
    NEW_JERSEY
    NEW_MEXICO
    NEW_YORK
    NORTH_CAROLINA
    NORTH_DAKOTA
    OHIO
    OKLAHOMA
    OREGON
    PENNSYLVANIA
    RHODE_ISLAND
    SOUTH_CAROLINA
    SOUTH_DAKOTA
    TENNESSEE
    TEXAS
    UTAH
    VERMONT
    VIRGINIA
    WASHINGTON
    WEST_VIRGINIA
    WISCONSIN
    WYOMING
  }

  type Address {
    street: String!
    city: String!
    state: State!
    country: String!
  }

  type Vendor {
    id: ID!
    name: String!
    email: String!
    phone: Int!
    address: Address!
  }

  type Query {
    vendors: [Vendor!]!
  }
`;

module.exports = { typeDefs };
