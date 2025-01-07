import { SignOutButton, useUser } from "@clerk/clerk-react";
import Navbar from "./Navbar";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
    <Navbar children={<SignOutButton></SignOutButton>} className={"px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"}/>
    <div className="h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Welcome to your Dashboard, {user?.firstName || "User"}!
      </h1>
      <p className="text-lg text-green-600 mb-8">
        You are now logged in. Explore the app and make the most of it!
      </p>
    </div>
    </>
  );
}


