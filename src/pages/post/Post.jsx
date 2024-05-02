import React from "react";
import styles from "./Post.module.css";
import Layout from "../../component/layout/Layout";
import Blog from "../../component/blog/blog";

const Post = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.item}>
            <Blog />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
