import React from "react";
import SearchBar from "./searchBar";

{
  /* <div className="someDiv d-flex justify-content-center align-items-center"></div> */
}

const ContentSection = () => {
  return (
    <section className="content__section container-xl p-0">
      <div className="d-flex justify-content-end m-3">
        <SearchBar />
        <button className="content__section-view ms-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#e6ddc4"
            class="bi bi-view-list"
            viewBox="0 0 16 16"
          >
            <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ContentSection;
