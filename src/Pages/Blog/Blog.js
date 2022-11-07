import React from 'react'

const Blog = () => {
  return (
    <div className=" mb-5">
      <h1 className="text-5xl text-bold mt-6 text-center mb-6">
        Questions & Answers
      </h1>
      <h4 className="text-white text-2xl mt-5 mb-5 ml-4 text-center">
        Q-1: Difference between SQL and NoSQL
      </h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-white">SQL</th>
              <th className="text-white">NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
              <td>Non-relational or distributed database system.</td>
            </tr>

            <tr>
              <th>2</th>
              <td>These databases have fixed or static or predefined schema</td>
              <td>They have dynamic schema</td>
            </tr>

            <tr>
              <th>3</th>
              <td>
                These databases are not suited for hierarchical data storage.
              </td>
              <td>
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>These databases are best suited for complex queries</td>
              <td>These databases are not so good for complex queries</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Vertically Scalable</td>
              <td>Horizontally scalable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4 className="text-white text-2xl mt-5 mb-5 ml-4 text-center">
          {' '}
          Q-2: What is JWT, and how does it work?
        </h4>

        <p className="p-10">
          JWT,or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued
          <br />
          Basically the identity provider(IdP) generates a JWT certifying user
          identity and Resource server decodes and verifies the authenticity of
          the token using secret salt / public key.
          <li>User sign-in using username and password or google/facebook.</li>
          <li>
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key.
          </li>
          <li>
            User's Client uses the JWT to access protected resources by passing
            the JWT in HTTP Authorization header.
          </li>
          <li>
            Resource server then verifies the authenticity of the token using
            the secret salt/ public key.
          </li>
        </p>
      </div>
      <h4 className="text-white text-2xl mt-5 mb-5  ml-4 text-center">
        Q-3: What is the difference between javascript and NodeJS?
      </h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-white">javascript</th>
              <th className="text-white">NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website.{' '}
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>

            <tr>
              <th>3</th>
              <td>
                Javascript can run in any browser engine as like JS core in
                safari and in Firefox.
              </td>
              <td>
                V8 is the Javascript engine inside of node.js that parses and
                runs Javascript.
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>It is basically used on the client-side.</td>
              <td>It is mostly used on the server-side</td>
            </tr>
            <tr>
              <th>5</th>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.{' '}
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 className="text-white text-2xl mt-5 mb-5  ml-4 text-center">
          {' '}
          Q-4: How does NodeJS handle multiple requests at the same time?
        </h4>

        <p className="p-10">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  )
}

export default Blog
