import React from "react";
import "./SideBarNavigations.css";
import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineVideoCamera,
  AiFillRead,
  AiFillLock,
} from "react-icons/ai";

const sideNavData = [
  {
    navName: "Home",
    icons: <AiOutlineHome />,
  },
  {
    navName: "My Book",
    icons: <AiFillRead />,
  },
  {
    navName: "My Videos",
    icons: <AiOutlineVideoCamera />,
  },
  {
    navName: "Ideas",
    icons: <AiOutlineBulb />,
  },
  {
    navName: "Ideas",
    icons: <AiOutlineBulb />,
  },
  {
    navName: "Ideas",
    icons: <AiOutlineBulb />,
  },
  {
    navName: "Ideas",
    icons: <AiOutlineBulb />,
  },
  {
    navName: "Ideas",
    icons: <AiOutlineBulb />,
  },
];

const SideBarNavigations = () => {
  console.log(sideNavData);
  return (
    <div className="sideBarNav">
      {sideNavData.map((val, id) => {
        return (
          <>
            <div className="nav_Container" key={id}>
              <div className="side_navigations">
                <p className="icons"> {val.icons}</p>
                <p className="navigation_Page_name">{val.navName}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SideBarNavigations;
