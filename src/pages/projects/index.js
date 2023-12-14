import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import * as projects from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <section className={projects.portfolio}>
        <div>
          <h2>Portfolio</h2>
          <h3>Projects that I have created</h3>
        </div>
      </section>
    </Layout>
  );
}
