import React from "react";
import base from "./base";
import './NavBar.css';

export const NavBar = ({ history, currentPage }) => {

  const goToPage = (event, page) => {
    event.preventDefault();
    history.push(page);
  };

  return (
    <>
      <div className="section-div">
        <button onClick={() => base.app.auth().signOut()}>Logout</button>
        <button
          className={currentPage === 'Reports' ? 'current-page' : ''}
          onClick={(e) => goToPage(e, '/reports')}>
            Reports
        </button>
        <button
          className={currentPage === 'Scenarios' ? 'current-page' : ''}
          onClick={(e) => goToPage(e, '/scenarios')}>
            Scenarios
        </button>
      </div>
    </>
  );
};