import React from "react"
import content from "../../content/call-to-action.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'

export default () => (
  <section id="call-to-action">
    <div className="row">
      <div className="twelve columns animated slideInRight">
        <ScrollAnimation
          animateIn="slideInRight"
        >
          <h1><FontAwesomeIcon icon={faPhoneAlt} style={{fontSize: "32px"}} /></h1>
          <h2><a href={ content.title.url }>{ content.title.text }</a></h2>
          <p
            dangerouslySetInnerHTML={{ __html: content.body }}
          />
          <a href={ content.button.url } className="button">{content.button.label}</a>
        </ScrollAnimation>
      </div>
    </div>
  </section>
)
