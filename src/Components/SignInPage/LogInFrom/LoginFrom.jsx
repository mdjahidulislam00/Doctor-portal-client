import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig/FireBaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa6";
import { currentUser } from "../../../App";

const app = initializeApp(firebaseConfig);

const LoginFrom = () => {
    const [currentLogInUser, setCurrentLogInUser] = useContext(currentUser);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [newUser, setNewUser] = useState()
    const [firebaseError, setFirebaseError] = useState()
    const [userLogInData, setUserLogInData] = useState()
    console.log(userLogInData)

    const onSubmit = (data) => {

        if(newUser){
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, data.email, data.password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setCurrentLogInUser(user)
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(errorMessage)
                // ..
              }); 
        }
        else if(!newUser){
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setCurrentLogInUser(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(errorMessage)
            });
        }
    };
    //handel Google log in
    const handelGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setCurrentLogInUser(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-lg">
      <h2 className="text-3xl text-center font-bold mb-4"> 
      {newUser ? 'Create Account' : 'Log In' }</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
            newUser && 
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-pink-500"
            />
            {errors.name && <p className="text-red-500">Name is required.</p>}
          </div>
        }
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-pink-500"
          />
          {errors.email && <p className="text-red-500">Email is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-pink-500"
          />
          {errors.password && <p className="text-red-500">Password is required.</p>}
        </div>
        {firebaseError && <p className="text-red-500 py-1 text-center font-semibold">{firebaseError}</p> }
        <button
          type="submit"
          className="w-full bg-pink-500 text-lg text-white py-2 rounded hover:bg-pink-600"
        >
          {
            newUser ? 'SignUp' : 'Login'
          }
        </button>
        <div className="mt-4 text-right">
            {
                !newUser &&
                <div>Have No Account <span onClick={() => setNewUser(true)} className="font-bold text-pink-400 cursor-pointer hover:text-pink-500">Sign Up</span></div>
            }
        </div>
        <div className="mt-5 text-center text-pink-400">Or</div>
        <div onClick={handelGoogleLogin} className=" py-2  flex items-center justify-center space-x-2 shadow-lg rounded cursor-pointer">
            <div className="text-3xl text-red-500 text-center"><FaGoogle /></div>
            <div className="text-lg"> Continue With Google</div>
        </div>
      </form>
    </div>
  )
}

export default LoginFrom