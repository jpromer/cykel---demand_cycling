import React from "react";
import LogoutButton from "../components/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  
  return (
    <div>
      Dashboar <LogoutButton />
    </div>
  );
}

export default Dashboard;
