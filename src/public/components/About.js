import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h3 className="header text-center">This is an automated attendance application for <a href="https://www.hackreactor.com/">Hack Reactor</a> students and staff</h3>
      <hr/>
      <div className="col-md-4">
        <ul>
          <li className="question-block">
            <a className="about-link" href="#create-account">How do I create an account?</a>
          </li>
          <li className="question-block">
            <a className="about-link" href="#admin-privs">What privileges do admins have?</a>
          </li>
          <li className="question-block">
            <a className="about-link" href="#admin-how-do-i-use">I'm an admin, how do I use your app?</a>
          </li>
          <li className="question-block">
            <a className="about-link" href="#student-how-do-i-use">I'm a student, how do I use your app?</a>
          </li>
          <li className="question-block">
            <a className="about-link" href="#view-attendance">What can I do with the attendance records?</a>
          </li>
        </ul>
      </div>
      <div className="col-md-8 about-answers-block">
        <div className="answer-text-block">
          <h4 id ="create-account"className="testimonials-text negative-margin-link"> How do I create an account?</h4>
          <p>To create an account, simply login with your github credentials.</p>
        </div>
        <div className="answer-text-block">
          <h4 id="admin-privs" className="testimonials-text negative-margin-link"> What privileges do Admins have?</h4>
          <p>
            Admins can toggle existing accounts between 'admin' and 'student' status.<br/>
            They can also add and remove students to classes.<br/>
            Admins can create and delete classes.
          </p>
        </div>
        <div className="answer-text-block">
          <h4 id="admin-how-do-i-use" className="testimonials-text negative-margin-link"> I'm an admin, how do I use your app?</h4>
          <p>
            Log in and navigate to the camera page.
            Select a class and a 'late' cutoff time for todays attendance.<br/>
            Click 'Start Today's Attendance'.<br/>
            The attached webcam will begin running, taking photos of the entryway once per second.<br/>
            Attendance records are populated for all students for the selected class, giving them a 'pending' status.<br/>
            Using facial recognition, the students' attendance status is updated in real time as they enter the room.
          </p>
        </div>
        <div className="answer-text-block">
          <h4 id="student-how-do-i-use" className="testimonials-text negative-margin-link"> I'm an student, how do I use your app?</h4>
          <p>
            Log in to the application with github account to view your own attendance records.<br/>
            When checking in every morning, all you need to do is walk through the entryway and the facial recognition will do the rest.<br/>
            You will receive an e-mail for every successful checkin.<br/>
            If you're running late you will receive a warning e-mail stating that class is about to start.
          </p>
        </div>
        <div className="answer-text-block">
          <h4 id="view-attendance" className="testimonials-text negative-margin-link"> What can I do with the attendance records?</h4>
          <p>
            Admins can view and edit attendance records for all students and classes.<br/>
            Students can only view their personal attendance records.<br/>
            Attendance records can be sorted, filtered, and exported.
          </p>
        </div>
        <hr/>
        <h4>Developed by the <a className="about-link" href="/#meet-devs">AAAllstars</a></h4>
      </div>
    </div>
  );
};

export default About;