import React from "react";

import Commonheading from "components/common/Heading";

const Index = ({ slideData }) => {
  const { id, content } = slideData;
  return (
    <>
      <div>
        <div
          className="slide"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80")',
          }}
        >
          <div className="slide_content">
            <Commonheading level={2} heading={content ?? content} className="slide_heading"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
