import { createConnection } from 'typeorm';
import Employee from './Employee.entity';

export const hello = async (event) => {
  // instantiate the connection with DB. Configuration file for DB is ormconfig.json
  const connection = await createConnection();

  // Insert data using this entity/model we created
  const employee = new Employee();
  employee.firstName = 'Albert';
  employee.lastName = 'Einstein';
  employee.email = 'alberteinstein@revolution.com';
  employee.title = 'A Scientist, Man';
  employee.date_of_birth = new Date("March 14, 1879");

  // Save this object/information into the DB
  employee.save();

  // Once done, close the connection
  connection.close();

  return {
    statusCode: 200,
    body: {employee}    
  };
};
