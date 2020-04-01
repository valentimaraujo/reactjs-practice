import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => (
  <div>
    <aside>
      {
        modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  {lesson.title} -
                  <button onClick={() => toggleLesson(module, lesson)}>
                    Selecionar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </aside>
  </div>
);

const mapStateToProps = ({ course }) => ( { modules: course.modules } );
const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch);
// const mapDispatchToProps = dispatch => ( {
//   toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
// } );
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
