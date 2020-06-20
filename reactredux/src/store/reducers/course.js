const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1, title: 'Iniciando com react',
      lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segunda aula' },
      ]
    },
    {
      id: 1, title: 'Iniciando com react',
      lessons: [
        { id: 3, title: 'Terceira aula' },
        { id: 4, title: 'Quarta aula' },
        { id: 5, title: 'Quinta aula' },
      ]
    }
  ]
}

export default function course(state =  INITIAL_STATE,  action) {
  if(action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson
    }
  }
  console.log(action.type)
  return state
}
