import React, {Component} from 'react';

export default class Sidebar extends Component {
    state = {
        modules: [
            {
                id: 1, title: 'Iniciando com React', lessons: [
                    {id: 1, title: 'Primeira Aula'},
                    {id: 2, title: 'Segunda Aula'},
                ]
            },
            {
                id: 2, title: 'Aprendendo Redux', lessons: [
                    {id: 3, title: 'Terceira Aula'},
                    {id: 4, title: 'Quarta Aula'},
                ]
            }
        ]
    };

    render() {
        const {modules} = this.state;
        return (
            <aside>
                {
                    modules.map(module => (
                        <div key={module.id}>
                            <strong>{module.title}</strong>
                            <ul>
                                {
                                    module.lessons.map(lesson => (
                                        <li key={lesson.id}>{lesson.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </aside>
        );
    }
}
