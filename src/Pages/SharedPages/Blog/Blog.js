import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="container">
      <h1 className="qna-title text-center mb-5">QNA SECTION</h1>
      <div className="qna-section">
        <h3>Difference between Authorization and Authentication? <hr /></h3>
        <p>
          <span>ANSWER: Authorization:</span> Authorization happens after a
          user’s identity has been successfully authenticated. It is about
          offering full or partial access rights to resources like database,
          funds, and other critical information to get the job done. In an
          organization, for example, after an employee is verified and confirmed
          via ID and password authentication, the next step would be defining
          what resources the employee would have access to. </p>
          <p> <span>Authentication:</span> Authentication is the process of identifying users and validating who they claim to be. One of the most common and obvious factors to authenticate identity is a password. If the user name matches the password credential, it means the identity is valid, and the system grants access to the user.
        </p>
      </div>

      <div className="qna-section">
          <h3>What other services does firebase provide other than authentication? <hr /></h3>
          <p><span>ANSWER:</span> Firebase console can be used to view data in both databases. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. There are many services which Firebase provides, Most useful of them are other than authentication. Like Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config. Firebase is a full package that can help in developing mobile or web applications faster with fewer resources and more efficiency.</p>
      </div>

      <div className="qna-section">
          <h3>Why are you using firebase? What other options do you have to implement authentication? <hr /></h3>
          <p><span>ANSWER:</span> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</p>
      </div>
    </div>
    );
};

export default Blog;