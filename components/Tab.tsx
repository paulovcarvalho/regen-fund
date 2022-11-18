import React from "react";
import { useRouter } from "next/router";

export default function ProjectHead() {
  const router = useRouter();
  const urlRef = "/Project/ProjectPublic";
  return (
    <>
<ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 ml-20 mb-3 font-Cormorant" id="tabs-tab"
  role="tablist">
  <li className="nav-item" role="presentation">
    <a href="#tabs-home" 
       className="nav-link block text-2xl leading-tight  border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3
      my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">Invest In</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-profile" className="nav-link block text-2xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent
      px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">Story</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-messages" className="nav-link block font-medium text-2xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">Activity</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-messages" className="nav-link block font-medium text-2xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">Life Contributions</a>
  </li>

</ul>
<div className="tab-content" id="tabs-tabContent">
  <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    Tab 1 content
  </div>
  <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
  <div className="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
    Tab 4 content
  </div>
</div>
    </>
  );
}
