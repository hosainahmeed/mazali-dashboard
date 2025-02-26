import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
const PageHeading = ({ text, content }) => {
  const navigate = useNavigate();
  return (
    <div className="start-center gap-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title className="text-white">{text}</title>
        <meta name="description" content={content || ''} />
      </Helmet>
      <div
        className="flex gap-2 items-start  h-fit cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack style={{ color: 'white', lineHeight: 0 }} />
        <p className="text-lg font-medium text-white leading-none">{text}</p>
      </div>
    </div>
  );
};

export default PageHeading;
