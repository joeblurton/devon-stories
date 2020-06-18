import React from 'react'
import PropTypes from 'prop-types'
import { PhotoTemplate } from '../../templates/photo'

const PhotoPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <PhotoTemplate
      content={entry.getIn(['data', 'caption'])}
      url={entry.getIn(['data', 'url'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

PhotoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PhotoPreview
