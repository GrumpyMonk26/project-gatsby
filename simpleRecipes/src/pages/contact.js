import React from "react"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              If you have any questions, comments, or concerns, please feel free
              to
            </p>
            <p>
              voluptatem alias illo temporibus ut obcaecati pariatur similique
            </p>
            <p>
              harum architecto tempora porro cumque aspernatur aperiam quae
              deserunt repellendus natus enim esse, dicta dolorum sint! Impedit
              a
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}
