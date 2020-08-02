import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/hero.yaml"

export default () => (
  <section id="hero">
    <div className="row">
      <div className="twelve columns">

        <div className="hero-text animated rubberBand">
          <h1 className="responsive-headline">{ content.headline }</h1>
          <p>{ content.body }</p>
        </div>

        <div className="buttons">
          <AnchorLink className="button trial animated shake"><a href="tel: 0792021638" style={{color: "#000"}}>{ content.button1.label }</a></AnchorLink>
          <AnchorLink className="button learn-more" to={ content.button2.to }>{ content.button2.label }</AnchorLink>
        </div>
      </div>
    </div>
  </section>
)
