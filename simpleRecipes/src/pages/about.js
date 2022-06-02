import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quis omnis nesciunt perferendis nam fugit veniam
              incidunt totam deserunt excepturi.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur blanditiis architecto alias!
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt from a bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
      </main>
    </Layout>
  )
}
