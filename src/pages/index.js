import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Netlify CMS and Gatsby</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.nameChars.edges.map(({ node }) => (
          <div className="border rounded-lg overflow-hidden shadow-lg" key={node.id}>
            <div className="relative">
              <GatsbyImage
                image={getImage(node.frontmatter.featured_image)}
                alt={node.frontmatter.location}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-slate-900 bg-opacity-75 w-full">
                <h2 className="text-lg font-semibold mb-2">{node.frontmatter.Name}</h2>
                <p className="text-sm">
                  <span className="font-semibold">Birthday:</span>{" "}
                  {node.frontmatter.brithday}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">{node.excerpt}</p>
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
  query {
    nameChars: allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            brithday
            Name
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 300, height: 200, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage