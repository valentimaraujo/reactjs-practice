import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong>Módulo:</strong> {activeModule.title} /
      <strong>Aula: </strong> {activeLesson.title}
    </div>
  )
}
export default connect(({course}) => ( {
  activeLesson: course.activeLesson,
  activeModule: course.activeModule
} ))(Video);
