wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "search-engine",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    // skyColor: { type: "string" },
    // grassColor: { type: "string" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

import React, { useState, useEffect } from "react";

function EditComponent(props) {
  const [heading, setHeading] = useState("");

  function updateHeading() {
    setHeading("Search engine API fetched.");
  }
  // function updateGrassColor(e) {
  //   props.setAttributes({ grassColor: e.target.value });
  // }

  return (
    <div className="my-unique-plugin-wrapper-class">
      <div className="bg-blue-200 rounded-md p-5">
        <input
          className="p-2"
          type="submit"
          value={"Connect to API"}
          onClick={() => updateHeading()}
        />
        <p className="text-black">{heading}</p>
      </div>
    </div>
  );
}
