import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import DropRight from "./DropRight";

// ------------------------------------
// Navigation items tree
// ------------------------------------
const NAVTREE = {
  Documents: {
    children: {
      "Documents Overview": {},
      "Drag and Drop Files": {
        children: {
          Scripts: {},
          Attachments: {},
          Images: {}
        }
      },
      Files: {},
      Templates: {
        children: {
          Email: {},
          Letter: {},
          SMS: {},
          Fax: {},
          PDF: {}
        }
      },
      "Mail Merge": {
        children: {
          "Bulk Merge": {},
          "Merge History": {}
        }
      }
    }
  },
  Transactions: {
    children: {
      "Transactions Overview": {},
      Sales: {
        children: {
          "Create Opportunities": {},
          "Prepare Quotes": {},
          "Enter Sales Orders": {},
          "Create Invoices": {},
          "Enter Cash Sales": {}
        }
      },
      Billing: {
        children: {
          "Process Billing Operations": {},
          "Schedule Billing Operations": {}
        }
      },
      Customers: {
        children: {
          "Accept Customer Payments": {},
          "Record Customer Deposits": {},
          "Invoice Billable Customers": {}
        }
      },
      Employees: {
        children: {
          "Track Time": {},
          "Weekly Time Tracking": {},
          "Approve Time": {}
        }
      },
      Management: {
        children: {
          "Print Cheques and Forms": {},
          "Search Transactions": {},
          "Saved Searches": {}
        }
      }
    }
  },
  Accounts: {}
};

// ------------------------------------
// Component Styled
// ------------------------------------
const NavBarContainer = styled.div`
  display: flex;
  height: 45px;
`;

// ------------------------------------
// Helper functions
// ------------------------------------

function isObjectNotNull(obj) {
  if (typeof obj !== undefined && obj !== null) {
    return true;
  } return false;
}

function objectKeyExists(obj, key) {
  if (obj.hasOwnProperty(key)) {return true} return false;
}

function getObjectKeys(obj) {
  if (isObjectNotNull(obj)) { 
    return Object.keys(obj);
  } return [];
}


// ------------------------------------
// React Components
// ------------------------------------

const DropDowns = (navtree) => {
  // check navtree is not empty
  if (isObjectNotNull(navtree)) {
    // get parent key titles
    const parentTitles = getObjectKeys(navtree);
    let dropDownItems = parentTitles.map( (title, index) => {
      let childItems = [];
      // get the individual parent object
      let parentObj = navtree[title];
      // check if this parent object contains children
      if (isObjectNotNull(parentObj) && objectKeyExists(parentObj, "children")) {
        // get the children object if it exists
        let childrenObj = parentObj.children;
        // check it's not null
        if (isObjectNotNull(childrenObj)) {
          // get the keys of the children object
          let childTitles = getObjectKeys(childrenObj);
          // map over the children titles, return span elements with the title
          childItems = childTitles.map( (childTitle, index) => {
            return <span key={index} >{childTitle}</span>
          });
        }
      }
      // return a drop down for each parent item, with its children elements if they exist
      return <DropDown key={index} title={title} childItems={childItems} />
    });
    // return the array containing all drop down elements for each parent in our navtree
    return dropDownItems;
  }
}

export default class NavBar extends React.Component {
  render() {
    return <NavBarContainer>{DropDowns(NAVTREE)}</NavBarContainer>;
  }
}