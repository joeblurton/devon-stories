import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import TitleBar from '../../components/TitleBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <TitleBar 
          title={"Submit a Story"} 
          description={"Devon Stories relies on the creative suggestions of its audience. If you have a great story idea, let us know here."} 
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <form
                name="submission"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="columns">
                  <div className="column is-half-tablet">
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-half-tablet">
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your email adress
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-two-thirds-tablet">
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your story idea
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'idea'}
                          onChange={this.handleChange}
                          id={'idea'}
                          required={true}
                          style={{
                            minHeight: "11em"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-third-tablet">
                    <div className="field">
                      <p><label className="label" htmlFor={'attachment'}>Your files</label></p>
                      <div className="file">
                        <label className="file-label">
                          <input
                            className="file-input"
                            type="file"
                            name="attachment"
                            onChange={this.handleAttachment}
                          />
                          <span className="file-cta">
                            <span className="file-label">Choose a file…</span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="notification is-info">
                      <span className="icon is-small pr-2">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </span>
                      Please read our <a href="/docs/privacy-policy-19-06-2020/">Privacy Policy</a> to understand how Devon Stories will store your data.
                    </div>
                  </div>
                </div>
                <div className="field m-b-30">
                  <button className="button is-primary is-medium is-pulled-right" type="submit">
                    <span>Send</span>
                    <span className="icon is-small pl-1 pr-1">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
