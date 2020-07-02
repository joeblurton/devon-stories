import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo@2x.png'

const TitleBar = (props) => {

    const { 
        title, 
        description, 
        constrained,
        descriptionItalic
    } = props

    return (
        <header className="section header-section has-background-clay">
            <div className="container position-relative">
                <div className="content">
                    <div className="columns">
                        <div className={`column pb-0 ${constrained ? 'is-10 is-offset-1' : ''}`}>
                            <div className="columns mx-0 mb-0 mt-6 px-0 py-0 ">
                                <div className="column mx-0 my-0 px-0 py-0 is-three-quarters tablet">
                                    <h1 className="mb-2">{title}</h1>
                                </div>
                            </div>
                            <div className="columns mx-0 my-0 px-0 py-0">
                                <div className="column mx-0 my-0 px-0 py-0">
                                    {description && <p className={`${descriptionItalic ? 'is-italic is-size-5 ' : ''}`}>{description}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle over-the-top-circle has-shadow is-hidden-mobile">
                  <Link to="/">
                      <img src={logo} 
                          alt="Devon Stories" 
                          className="over-the-top"
                      />
                  </Link>
                </div>
                <div className="clearfix"></div>
            </div>
        </header>
    )
}

export default TitleBar