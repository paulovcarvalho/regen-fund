import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import {  
  BsGlobe, 
  BsLinkedin,        
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsFillCameraFill,
} from "react-icons/bs";

import { getDownloadURL, ref, uploadString } from "@firebase/storage";


export default function ProjectInput() {
  const [error, setError] = useState(null);
  const currentUser = useAuth();

  // from twitter example
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  // Profile Fields
  const [projectID, setProjectID] = useState("");
  const [name, setname] = useState("");
  const [logoURL, setlogoURL] = useState(
    "https://firebasestorage.googleapis.com/v0/b/regenfund.appspot.com/o/public%2Flogo.png?alt=media&token=9002acf7-1566-4b95-8c5a-6d49509af7ab"
  );
  const [storyOfProject, setstoryOfProject] = useState("");
  const [purpose, setPurpose] = useState("");
  const [storyOfPlace, setstoryOfPlace] = useState("");
  const [projectSite, setprojectSite] = useState("");
  const [projectFacebook, setprojectFacebook] = useState("");
  const [projectLinkedIn, setprojectLinkedIN] = useState("");
  const [projectInstagram, setprojectInstagram] = useState("");
  const [projecteMail, setprojectEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const [startDate, setstartDate] = useState("");

  // togle edit
  const [editStatus, seteditStatus] = useState("Edit");
  const addImageToProject = (e) => {
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
        const docRef = query(
          collection(db, "Projects"),
          where("admin", "==", currentUser.user.uid)
        );
        const docSnap = await getDocs(docRef);

        // at this stage there is only one project per user but this is almost ready for more.
        if (!docSnap.empty) {
          docSnap.forEach((doc) => {
            setProjectID(doc.id);
            setname(doc.data().name);
            setlogoURL(doc.data().logoURL);
            setstoryOfProject(doc.data().storyOfProject);
            setstoryOfPlace(doc.data().storyOfPlace);
            setAdmin(doc.data().admin);
            setprojectSite(doc.data().projectSite);
            setprojectFacebook(doc.data().projectFacebook);
            setprojectInstagram(doc.data().projectInstagram);
            setprojectLinkedIN(doc.data().projectLinkedIn);
            setprojectEmail(doc.data().projecteMail);
            setstartDate(doc.data().startDate);
          });
        }
      } catch (err) {
        setError("Failed to load Project");
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
      // Togles to edit mode
    } else {
      const docQuerie = query(
        collection(db, "Projects"),
        where("admin", "==", currentUser.user.uid)
      );
      const docSnap = await getDocs(docQuerie);

      if (docSnap.empty) {
        const docRef = await addDoc(collection(db, "Projects"), {
          admin: currentUser.user.uid,
          name: name,
          logoURL: logoURL,
          storyOfProject: storyOfProject,
          purpose: purpose,
          storyOfPlace: storyOfPlace,
          projectSite: projectSite,
          projectFacebook: projectFacebook,
          projectInstagram: projectInstagram,
          projectLinkedIn: projectLinkedIn,
          projecteMail: projecteMail,
          creationDate: serverTimestamp(),
          startDate: startDate,
        });
        setProjectID(docRef.id);
        seteditStatus("Edit");
      } else {
        const docRef = await setDoc(doc(db, "Projects", projectID), {
          admin: currentUser.user.uid,
          name: name,
          logoURL: logoURL,
          storyOfProject: storyOfProject,
          purpose: purpose,
          storyOfPlace: storyOfPlace,
          projectSite: projectSite,
          projectFacebook: projectFacebook,
          projectInstagram: projectInstagram,
          projectLinkedIn: projectLinkedIn,
          projecteMail: projecteMail,
          startDate: startDate,
        });
        seteditStatus("Edit");
      }

      //add the image ::: Start
      const imageRef = ref(storage, `projects/${projectID}/logo`);

      if (selectedFile) {
        await uploadString(imageRef, selectedFile, "data_url").then(
          async () => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "Projects", projectID), {
              logoURL: downloadURL,
            });
            setlogoURL(downloadURL);
          }
        );
      }
      //add the image ::: End
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
            <div className="flex flex-col justify-center max-w-[800px] p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-end">
                <button onClick={edditHandler} className="buttonType z-20">
                  {editStatus}
                </button>
              </div>
              <img
                src={logoURL}
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-300">
                    {purpose}
                  </p>
                </div>
                <div className="space-y-4 text-center divide-y divide-gray-300">
                  <p className="px-5 text-xs font-thin sm:text-base dark:text-gray-300">
                    {storyOfProject}
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  {projectSite && (
                    <a
                      rel="Project Site"
                      href={projectSite}
                      aria-label="LinkedIn"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsGlobe className="p-1 w-7 h-7" />
                    </a>
                  )}

                  {projectFacebook && (
                    <a
                      rel="Project Facebook"
                      href={projectFacebook}
                      aria-label="Facebook"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsFacebook className="p-1 w-7 h-7" />
                    </a>
                  )}

                  {projectLinkedIn && (
                    <a
                      rel="Project LinkedIn"
                      href={projectLinkedIn}
                      aria-label="LinkedIn"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsLinkedin className="p-1 w-7 h-7" />
                    </a>
                  )}

                  {projectInstagram && (
                    <a
                      rel="Project Instagram"
                      href={projectInstagram}
                      aria-label="Instagram"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsInstagram className="p-1 w-7 h-7" />
                    </a>
                  )}
                  
                  {projecteMail && (
                    <a
                      rel="Project eMail"
                      href={projecteMail}
                      aria-label="eMail"
                      className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    >
                      <BsEnvelope className="p-1 w-7 h-7" />
                    </a>
                  )}

                </div>
              </div>
            </div>
          </>
        )}
        {editStatus == "Save" && (
          <>
            <div className="flex flex-col justify-center max-w-[800px] p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
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
                      onChange={addImageToProject}
                    />
                    </div>
                  </div>

                  <img
                    src={logoURL}
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
                    Project Name
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (Project title)
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
                    className="block  text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Project Start Data
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (when did the project started)
                  </label>
                </div>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setstartDate(e.target.value)}
                  placeholder="date"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />
                

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Purpose
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (Please describe the project purpose)
                  </label>
                </div>
                <textarea
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Purpose statment"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />



                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Story of Project
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (Please describe the story of the project)
                  </label>
                </div>
                <textarea
                  value={storyOfProject}
                  onChange={(e) => setstoryOfProject(e.target.value)}
                  placeholder="My Story"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />



                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Story of Place
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (Please describe the story of the place)
                  </label>
                </div>
                <textarea
                  value={storyOfPlace}
                  onChange={(e) => setstoryOfPlace(e.target.value)}
                  placeholder="Story of the place"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />




                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    Site
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (...project site URL)
                  </label>
                </div>
                <input
                  type="url"
                  value={projectSite}
                  onChange={(e) => setprojectSite(e.target.value)}
                  placeholder="Project Site"
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
                    (...project Facebook URL)
                  </label>
                </div>
                <input
                  type="url"
                  value={projectFacebook}
                  onChange={(e) => setprojectFacebook(e.target.value)}
                  placeholder="Project Facebook URL"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />


              <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    LinkedIN
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (...project LinkedIn URL)
                  </label>
                </div>
                <input
                  type="url"
                  value={projectLinkedIn}
                  onChange={(e) => setprojectLinkedIN(e.target.value)}
                  placeholder="Project LinkedIn"
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
                    (...project Instagram)
                  </label>
                </div>
                <input
                  type="url"
                  value={projectInstagram}
                  onChange={(e) => setprojectInstagram(e.target.value)}
                  placeholder="Project Instagram"
                  className=" duration-300 font-thin text-sm rounded-md outline-gray-300 border border-grey focus:border-regen-sealighblue text-slate-900 p-2 w-full"
                />

                <div className="space-y-0 text-left flex items-start">
                  <label
                    className="block text-regen-blue text-sm font-semibold font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    eMail
                  </label>
                  <label
                    className="block px-2 text-regen-blue text-sm font-thin font-Montserratmb-2"
                    htmlFor="grid-password"
                  >
                    (...project eMail)
                  </label>
                </div>
                <input
                  type="url"
                  value={projecteMail}
                  onChange={(e) => setprojectEmail(e.target.value)}
                  placeholder="Project Instagram"
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
