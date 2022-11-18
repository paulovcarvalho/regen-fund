import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";

import { useAuth } from "../../context/AuthContext";
import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import {
  BsLinkedin,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsFillCameraFill,
} from "react-icons/bs";

import { getDownloadURL, ref, uploadString } from "@firebase/storage";



export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const currentUser = useAuth();

  // Twiter example
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  // Profile Fields
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const [myStory, setmyStory] = useState("");
  const [aboutMe, setaboutMe] = useState("");
  const [myLinkedin, setmyLinkedin] = useState("");
  const [myInstagram, setmyInstagram] = useState("");
  const [myFacebook, setmyFacebook] = useState("");

  // togle edit
  const [editStatus, seteditStatus] = useState("Edit");

  const addImageToUserProfile = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "ProjectUsers", currentUser.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setemail(docSnap.data().email);
          setname(docSnap.data().name);
          setphotoURL(docSnap.data().photoURL);
          setaboutMe(docSnap.data().aboutMe);
          setmyStory(docSnap.data().myStory);
          setmyLinkedin(docSnap.data().myLinkedin);
          setmyInstagram(docSnap.data().myInstagram);
          setmyFacebook(docSnap.data().myFacebook);
        } else {
          setProfile({});
        }
      } catch (err) {
        setError("Failed to load profile");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  async function edditHandler() {
    setSelectedFile(null);

    if (editStatus == "Edit") {
      seteditStatus("Save");
    } else {
      const docRef = doc(db, "ProjectUsers", currentUser.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await setDoc(doc(db, "ProjectUsers", profile.uid), {
          uid: profile.uid,
          email: email,
          name: name,
          photoURL: photoURL,
          aboutMe: aboutMe,
          myStory: myStory,
          myLinkedin: myLinkedin,
          myInstagram: myInstagram,
          myFacebook: myFacebook,
        });
        seteditStatus("Edit");
      } else {
        setError("user does not exist");
      }
    }

    const imageRef = ref(storage, `users/${profile.uid}/profile`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "ProjectUsers", profile.uid), {
          photoURL: downloadURL,
        });
        setphotoURL(downloadURL);
      });
    }
  }

  return (
    <body>
      <div className="relative w-full h-full flex-col items-start py-20">
        <Sidebar />
      </div>
      <main className="w-[calc(100%-100px)] lg:w-[calc(100%-550px)]  ml-auto max-h-screen flex max-w-[1500px] mx-auto flex-col">
        {editStatus == "Edit" && (
          <>
            <div className="flex flex-col justify-center max-w-[900px] p-6 shadow-md rounded-xl sm:px-12 bg-slate-50 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-end">
                <button onClick={edditHandler} className="buttonType z-20">
                  {editStatus}
                </button>
              </div>
              <img
                src={photoURL}
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-300">
                    {aboutMe}
                  </p>
                </div>
                <div className="space-y-4 text-center ">
                  <p className="px-5 text-xs font-thin sm:text-base dark:text-gray-300">
                    {myStory}
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  {myFacebook && (
                    <a
                      rel="Facebook"
                      href={myFacebook}
                      aria-label="LinkedIn"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsFacebook className="w-6 h-6" />
                    </a>
                  )}
                  {myLinkedin && (
                    <a
                      rel="LinkedIn"
                      href={myLinkedin}
                      aria-label="Dribble"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsLinkedin className="w-6 h-6" />
                    </a>
                  )}
                  {myInstagram && (
                    <a
                      rel="Instagram"
                      href={myInstagram}
                      aria-label="Twitter"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsInstagram className="w-6 h-6" />
                    </a>
                  )}

                  {email && (
                    <a
                      rel="eMail"
                      href={"mailto:" + email}
                      aria-label="Email"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsEnvelope className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {editStatus == "Save" && (
          <>
            <div className="flex flex-col justify-center max-w-[800px] p-6 shadow-md rounded-xl sm:px-12  bg-slate-50 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-end">
                <button onClick={edditHandler} className="buttonType z-20">
                  {editStatus}
                </button>
              </div>

              <div className="flex justify-center">
                <div className="relative flex-shrink-0 w-32 h-32">
                  <div className="icon absolute bottom-0 left-0 right-0">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                       onClick={() => filePickerRef.current.click()}
                    >
                      <BsFillCameraFill className="w-7 h-7" />
                      <input
                      type="file"
                      ref={filePickerRef}
                      hidden
                      onChange={addImageToUserProfile}
                    />
                    </div>
                  </div>

                  <img
                    src={photoURL}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                </div>
              </div>

              <div className="space-y-3 text-left py-10">


                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block  text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (First and Last name)
                  </label>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Name"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    About You
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (Please describe yourself)
                  </label>
                </div>
                <input
                  type="text"
                  value={aboutMe}
                  onChange={(e) => setaboutMe(e.target.value)}
                  placeholder="About Me"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Your Story
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (Please describe the story that connects you to the project)
                  </label>
                </div>
                <textarea
                  value={myStory}
                  onChange={(e) => setmyStory(e.target.value)}
                  placeholder="My Story"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    LinkedIn
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (...link to your LinkedIn acount)
                  </label>
                </div>

                <input
                  type="url"
                  value={myLinkedin}
                  onChange={(e) => setmyLinkedin(e.target.value)}
                  placeholder="My LinkedIn"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Instagram
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (...link to your Instagram acount)
                  </label>
                </div>
                <input
                  type="url"
                  value={myInstagram}
                  onChange={(e) => setmyInstagram(e.target.value)}
                  placeholder="My Instagram"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Facebook
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (...link to your Facebook acount)
                  </label>
                </div>
                <input
                  type="url"
                  value={myFacebook}
                  onChange={(e) => setmyFacebook(e.target.value)}
                  placeholder="My Facebook"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />
              </div>
            </div>
          </>
        )}
      </main>
    </body>
  );
}
