import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import Spinner from "./Spinner";
import BlockContent from "@sanity/block-content-to-react";
import dateFormat from "dateformat";

const MaidenProgram = () => {
  const [singlePost, setSinglePost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == '${slug}'] {
    title,
        body,
        header,
        publishedAt,
        bannerImage {
          asset -> {
            id,
            url
          }
        },
        mainImage {
          asset -> {
            _id,
            url
          },
        }
   }`
      )
      .then((data) => setSinglePost(data[0]));
  }, [slug]);

  const date = dateFormat(singlePost.publishedAt, "mmmm dS, yyyy");

  return (
    <div className="maiden" id="navbar">
      {singlePost.publishedAt === undefined && <Spinner />}

      {singlePost.bannerImage && singlePost.bannerImage.asset && (
        <div
          className="maiden-banner"
          style={{ background: `url(${singlePost.bannerImage?.asset.url})` }}
        >
          <h1>{singlePost.title}</h1>
        </div>
      )}

      <div className="maiden-container">
        {singlePost.mainImage && singlePost.mainImage.asset && (
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            title={singlePost.title}
          />
        )}

        <h3>{singlePost.publishedAt === undefined ? '' : date}</h3>

        <h1>{singlePost.header}</h1>

        <BlockContent
          blocks={singlePost.body}
          projectId="41c3pgq3"
          dataset="production"
        />
      </div>
    </div>
  );
};

export default MaidenProgram;
