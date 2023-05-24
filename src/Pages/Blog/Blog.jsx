import { Card } from 'flowbite-react';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
  useTitle('PopToy | Blog');
    return (
        <div>
            
            <div className='mt-8'>
            
            <Tabs>
      <TabList className="flex space-x-4">
        <Tab className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400 font-semibold">Ques 1</Tab>
        <Tab className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400 font-semibold">Ques 2</Tab>
        <Tab className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400 font-semibold">Ques 3</Tab>
        <Tab className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400 font-semibold">Ques 4</Tab>
      </TabList>

      <TabPanel>
        <Card title="Card 1"><span className='font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</span><br />
        Ans: An access token and refresh token are commonly used in authentication systems to grant authorized access to protected resources.

An access token is a credential that is used to gain access to a resource. It is a string of characters that represents the authorization given to a user or client application. Access tokens are typically tied to a specific set of permissions or scopes, which determine what actions the token holder is allowed to perform.

A refresh token is a credential used to obtain a new access token after the original access token has expired. Refresh tokens are typically long-lived and can be used to obtain multiple access tokens over time without requiring the user to reauthenticate.

Access tokens and refresh tokens work together to provide secure access to protected resources. When a user or client application is authenticated, it is issued an access token that can be used to access protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to reauthenticate.

Access tokens and refresh tokens should be stored securely on the client-side to prevent unauthorized access. Best practices for storage include encrypted storage using browser storage mechanisms such as local storage or session storage. Additionally, measures such as expiring tokens after a set period of time and using HTTPS connections can also enhance security.
        </Card>
      </TabPanel>
      <TabPanel>
        <Card title="Card 2"><span className='font-semibold'>Compare SQL and NoSQL databases?</span><br />
        SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
        </Card>
      </TabPanel>
      <TabPanel>
        <Card title="Card 3"><span className='font-semibold'>What is express js? What is Nest JS?</span><br />
        Express.js is a popular web application framework for Node.js that simplifies the creation of web applications. It provides a set of features for building web servers, handling HTTP requests and responses, routing, middleware, and more.

Express.js is known for its simplicity, flexibility, and extensibility, making it a popular choice for developers who want to build web applications using Node.js. With Express.js, developers can easily create RESTful APIs, websites, and other server-side applications.

NestJS is a progressive TypeScript-based web application framework built on top of Node.js and Express.js. Like Express.js, NestJS provides a set of tools and features for building scalable and modular web applications, but with additional benefits such as stronger typing, dependency injection, and support for multiple transport layers (HTTP, gRPC, WebSockets).

NestJS follows the architectural pattern of Model-View-Controller (MVC) and promotes the use of object-oriented and functional programming principles. It also makes use of decorators to define metadata and simplify the creation of modules, controllers, services, and other components of the application. Additionally, NestJS has a robust ecosystem of plugins, libraries, and developer tools that make it easier to build and maintain large-scale applications.

In summary, Express.js is a popular web application framework for Node.js, while NestJS is a newer framework built on top of Express.js that adds additional features and benefits such as stronger typing, dependency injection, and support for multiple transport layers.
        </Card>
      </TabPanel>
      <TabPanel>
        <Card title="Card 4">
        <span className='font-semibold'>What is MongoDB aggregate and how does it work?</span><br />
        MongoDB aggregate is a pipeline-based framework for data aggregation that allows developers to perform complex queries on large datasets. It provides a set of operators that can be used to transform and combine data from multiple collections into a single result set.
        
        </Card>
      </TabPanel>
    </Tabs>
        </div>
        </div>
    );
};

export default Blog;