import React from "react";
import { Link } from "react-router-dom";
import Turn from "./box";

const Kitchen = () => {
  return (
    <div className="Tweet">

    
   <Link to="/groceryPlan"><Turn name="PROCEED" title="Grocery Management" text="Proceed through here to access grocery management activities,where you can add,view,update,delete groceries."/></Link>
   <Link to="/dietPlan"><Turn name="PROCEED" title="Diet Management" text="Proceed through here to access diet management activities,where you can add,view,update,delete diets."/></Link>
    
    
    </div>
  );
};

export default Kitchen;


