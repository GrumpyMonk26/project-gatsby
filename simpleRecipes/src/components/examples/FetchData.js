import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        description
        simpleData
        title
        ComplexData {
          name
          age
        }
        person {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)

  return (
    <div>
      <h1>Name: {data.site.siteMetadata.person.name}</h1>
    </div>
  )
}

export default FetchData
