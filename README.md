# Vendor Management GraphQL Server

Vendor Management API with a GraphQL Sandbox Server. It provides a way to manage vendor information through a GraphQL interface. The API allows you to perform various operations such as retrieving a list of vendors, getting details of a specific vendor by ID, adding a new vendor, updating the contact information (email and phone) of a vendor, and deleting a vendor.

The GraphQL Sandbox Server acts as a backend system that handles these operations and interacts with the hardcoded data. It doesn't have a frontend interface, so you can test and experiment with the API using tools like GraphQL Playground or Insomnia. By sending GraphQL queries and mutations to the server, you can retrieve, modify, and delete vendor information based on your needs.

Overall, this project enables you to work with vendor data in a structured manner using GraphQL, making it easier to manage and manipulate vendor-related information in a sandbox environment.

![Alt text](https://graphql.org/img/og-image.png)

## How It's Made:

**Tech used:** GraphQL, Apollo Server, Node.js, JavaScript

## To install and run the project, follow these steps:

1. Ensure that you have Node.js installed on your machine. [https://nodejs.org/en](https://nodejs.org/en)

2. Clone the project repository from GitHub to your local machine using the following command:

```
git clone <clone-link>
```

3. Navigate to the project directory using the command line interface.

4. Install the project dependencies by running the following command:

```
npm init
```

5. Once the dependencies are installed, you can start the server by running the following command:

```
npm start
```

6. The server will start running, and you will see a message indicating that the server is listening on a specific port (e.g., 4000).

7. You can now access the GraphQL API and interact with it using a GraphQL client, such as GraphQL Playground or GraphQL IDE. Open a web browser and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).

8. In the GraphQL client, you can execute queries, mutations, and subscriptions to interact with the vendor data and perform various operations.

## Get All Vendors:

1. Open your preferred GraphQL client (such as GraphQL Playground) and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).

2. In the query editor, enter the following GraphQL query:

```
query {
  vendors {
    id
    name
    email
    phone
    address {
      street
      city
      state
      country
    }
    vendorType
    totalOrders
  }
}
```

This query fetches all vendors along with their ID, name, email, phone number, address details (street, city, state, country), and vendor type.

3. Click the "Play" button to execute the query.

4. The GraphQL server will respond with a JSON object containing an array of vendor objects. Each vendor object will include all the requested information.
   For example:

```
{
  "data": {
    "vendors": [
      {
        "id": "1",
        "name": "ABC Supplies",
        "email": "abc@supplies.com",
        "phone": "1234567890",
        "address": {
          "street": "123 Main Street",
          "city": "Cityville",
          "state": "CALIFORNIA",
          "country": "Countryland"
        },
        "vendorType": "SUPPLIER"
      },
      ...
    ]
  }
}
```

## Update Vendor Email and Phone:

1. Open your preferred GraphQL client (such as GraphQL Playground) and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).
2. In the query editor, enter the following GraphQL mutation:

```
mutation {
  updateVendorContact(input: {
    id: <vendorId>,
    newEmail: "<newEmail>",
    newPhone: "<newPhone>"
  }) {
    id
    name
    email
    phone
  }
}
```

Replace <vendorId> with the ID of the vendor you want to update. <newEmail> should be replaced with the new email address, and <newPhone> with the new phone number. For example:

```
mutation {
  updateVendorContact(input: {
    id: 1,
    newEmail: "newemail@example.com",
    newPhone: "9876543210"
  }) {
    id
    name
    email
    phone
  }
}
```

3. Click the "Play" button to execute the mutation.

4. The GraphQL server will respond with a JSON object containing the updated vendor's ID, name, email, and phone number.
   For example:

```
{
  "data": {
    "updateVendorContact": {
      "id": "1",
      "name": "ABC Supplies",
      "email": "newemail@example.com",
      "phone": "9876543210"
    }
  }
}
```

## Delete Vendor:

1. Open your preferred GraphQL client (such as GraphQL Playground) and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).
2. In the query editor, enter the following GraphQL mutation:

```
mutation {
  deleteVendor(id: <vendorId) {
    id
  }
}
```

Replace <vendorId> with the ID of the vendor you want to delete. For example:

```
mutation {
  deleteVendor(id: "2") {
    id
  }
}
```

3. Click the "Play" button to execute the mutation.

Executing this mutation will delete the vendor with the specified ID from the Vendor Management project.
