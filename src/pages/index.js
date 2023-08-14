import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="container mx-auto">
      <h1 className="text-xl font-semibold mb-4">Netlify CMS and Gatsby</h1>
      <ul>
        {data.fileInformation.edges.map(({ node }) => (
          <li key={node.id} className="mb-2">
            {node.base} {node.prettySize}
          </li>
        ))}
      </ul>
      <div className="flex flex-row flex-wrap">
        {data.nameChars.edges.map(({ node }) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={node.id}>
            <div className="border rounded-lg p-4">
              <GatsbyImage
                image={getImage(node.frontmatter.featured_image)}
                alt={node.frontmatter.location}
                className="w-full h-auto"
              />
              <div className="mt-2">
                <h2 className="text-lg font-semibold">{node.frontmatter.Name}</h2>
                <p>
                  <span className="font-semibold">Birthday:</span>{" "}
                  {node.frontmatter.brithday}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
query{
  fileInformation: allFile{
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
   nameChars: allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          brithday
          Name
          featured_image {
            childImageSharp {
              id
              gatsbyImageData(width: 250)
            }
          }
        }
      }
    }
  }
  }
`

export default IndexPage
