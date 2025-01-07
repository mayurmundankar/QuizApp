import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard'); // Redirect to dashboard after sign-in
    }
  }, [isSignedIn, navigate]);
  return (
    <>
    {/* <Navbar children={<SignOutButton></SignOutButton>} className={"px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"}/> */}
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-8">
        Welcome to Quiztastic!
      </h1>
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <p className="text-xl text-gray-700 mb-4 text-center">
          Test your knowledge and challenge your friends with our exciting quiz
          app!
          <br />
          Discover a world of trivia and learn something new every day.
        </p>
        <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Brand/Logo */}
            <h1 className="text-2xl font-bold">Quiztastic</h1>

            {/* Authentication Buttons */}
            <div className="flex justify-center items-center">
              <SignedOut>
                <SignInButton
                  mode="modal"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                />
              </SignedOut>
              <SignedIn>
                <UserButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
              </SignedIn>
            </div>
          </div>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
    </>
  );
}
