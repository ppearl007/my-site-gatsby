import * as React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {

  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.container}>
          <h2>Welcome to Polymath</h2>
          <h3>Web Development and more ..</h3>
          <Link to="/projects" className={styles.btn}>My Portfolio Projects </Link>
          {/* <img src="https://source.unsplash.com/vk5pCVMlQpk" alt="home-img"></img> */}
        </div>
        {/* <p> {title} {description} </p> */}
      </section>
    </Layout>
  );
}

export const query = graphql `
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`