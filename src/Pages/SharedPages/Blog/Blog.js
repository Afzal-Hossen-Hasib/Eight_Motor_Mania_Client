import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="container">
      <h1 className="qna-title text-center mb-5">QNA SECTION</h1>
      <div className="qna-section">
        <h3>Difference between javascript and node js? <hr /></h3>
        <p>
          <span>ANSWER: JavaScript:</span> Lightweight, interpreted, object-oriented language with first-class functions. JavaScript is most known as the scripting language for Web pages, but used in many non-browser environments as well such as node.js or Apache CouchDB. It is a prototype-based, multi-paradigm scripting language that is dynamic,and supports object-oriented, imperative, and functional programming styles. Javascript is a high-level language with simple syntax and smooth learning curves that make writing, reading, and maintenance easier. Javascript supports many libraries, so many hosting providers support this language. You can also work with it from any computer. </p>

          <p> <span>Node.js:</span> A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Ability to use the same language on the client and server-side.The lightness of the system that allows creating lightweight applications.
        </p>
      </div>

      <div className="qna-section">
          <h3>When should you use nodejs And <br /> when should you use mongodb? <hr /></h3>

          <p> <span>ANSWER: NodeJs:</span> Node.js is a Javascript-based environment that is easily understood by most of the browsers. Here, the Javascript is Server-Side instead of serving client-side. Node.js is definitely fast and it allows to explore a dynamic range of data at real-time. It allows code sharing. Node.js acts as a proxy server and allows seamless real-time data streaming. The most important reason for the rising popularity of Node.js is that the programmer can code the server-side as well as client-side using it. Node.js is an interpreted, familiar and flexible language.</p>

          <p> <span>MongoDB:</span> As it is a NoSQL database, that’s why it has many reasons to learn MongoDB. These reasons have led the foundation to the worldwide popularity of MongoDB. MongoDB is a document database used to build highly available and scalable internet applications. With its flexible schema approach, it’s popular with development teams using agile methodologies. It performs operations like filtering the data and then performing sorting on that dataset. It performs the operation of summarizing all the data after the map operation. It does not require data structures, that are unified in nature across all the objects that are being used. This makes it easier to use MongoDB.
        </p>
      </div>

      <div className="qna-section">
          <h3>Differences between sql and nosql databases? <hr /></h3>
          <p>
          <span>ANSWER: SQL:</span> SQL database is generally classified as a Relational database i.e. RDBMS. As we already know SQL uses structured query language for its CRUD operation which is defined as SQL. This makes SQL database to store data in more structured form and also preferred for more complex operations which could get completed with complex SQL queries. SQL database can extends its capacity on single server by increasing things like RAM, CPU or SSD i.e we can say that SQL dbs could be scalable in vertical as their storage could be increase for the same server by enhancing its storage components. SQL dbs is implemented in both open source and commercial Database such as like Postgres & MySQL as open source and Oracle and Sqlite as commercial.</p>

          <p> <span>NOSQL:</span> While NOSQL database is known as non-relational or distributed database. NoSQL database on other hand has dynamic schema for unstructured data.Data stored in this type of database is not structured and could be stored in either of forms such as document-oriented, column-oriented, graph-based or organized as a KeyValue store. This syntax can be varied from DB to DB. In order to increase the capacity of NOSQL dbs we required to install new servers parallel to the parent server i.e NOSQL dbs could be scalable in horizontal and this made them more preferable choice for large or ever-changing data sets. On other hand NOSQL is purely open source and MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB are the main implementation of it.
        </p>
      </div>

      <div className="qna-section">
          <h3>What is the purpose of jwt and how does it work? <hr /></h3>
          <p>
          <span>ANSWER:</span> JSON Web Tokens (JWTs) supports authorization and information exchange. One common use case is for allowing clients to preserve their session information after logging in. By storing the session information locally and passing it to the server for authentication when making requests, the server can trust that the client is a registered user. JWTs are an excellent fit for REST API authentication. A user logs in to an application with a username and password, or otherwise proves her identity. The server confirms her identity and sends back an access token containing a reference to her identity (e.g. a private key pointing to a unique User instance). The client then includes this access token with every request to the server. A JWT’s characteristics make it a great choice for token-based authentication.
        </p>
      </div>
    </div>
    );
};

export default Blog;