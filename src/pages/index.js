import React, { useState } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/standup.css"
import Standup from "../components/standup"
import standups from "../standup-data"

const filterstandupsByTag = (standups, tag) => standups.filter((standup) => standup.tags && standup.tags.includes(tag));

const availableTags = Array.from(new Set(standups.map((standup) => standup.tags).flat().filter(Boolean)));
const colors = ['#F4B28D', '#E7E0A8', '#C2DFD0', '#A38690'];
const tagColors = availableTags.reduce((accum, tag, index) => {
  return {...accum, ...{ [tag]: colors[index]}};
}, {})

const IndexPage = () => {
  const [visiblestandups, setVisiblestandups] = useState(standups)
  const [currentTag, setCurrentTag] = useState()
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="tags">
          {
            availableTags.map((tag, index) => (
              <button
                className="tag tag-button"
                onClick={() => {
                  setCurrentTag(tag)
                  setVisiblestandups(filterstandupsByTag(standups, tag))
                }}
                style={{
                  'background-color': tagColors[tag],
                  'font-weight': tag === currentTag ? 'bold' : 'normal',
                  'opacity': !currentTag || tag === currentTag ? 1 : 0.5
                }}
              >
                {tag}
              </button>
            ))
          }
          <button
            className="tag tag-button"
            onClick={() => {
              setCurrentTag()
              setVisiblestandups(standups)
            }}
          >
            all
          </button>
        </div>
        <div className="standups">
          {visiblestandups.map((standup) => <Standup title={standup.title} summary={standup.summary} slug={standup.slug} tags={standup.tags} tagColors={tagColors}></Standup>)}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
