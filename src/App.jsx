//styles
import './App.css'

//components
import PresentationComponent from './components/header/PresentationComponent'
import ProjectsComponent from './components/projects/ProjectsComponent'

function App() {
  return (
    <div className='px-36 my-12 font-mono'>
      <div>
        <PresentationComponent/>
        <ProjectsComponent/>
      </div>
    </div>
  )
}

export default App
