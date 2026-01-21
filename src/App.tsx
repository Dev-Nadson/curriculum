import { Separator } from "./components/Separator"
import { Experience } from "./components/Experience"
import { Header } from "./components/Header"
import { USER } from "./Data/Data"
import { Course } from "./components/Course"

function App() {
  return (
    <body className="mx-10 mt-6">
      <div className="flex flex-col items-center gap-4 font-serif w-full">

        <Header data={USER.Links} />

        <div className="flex flex-col gap-2 w-full">
          <Separator title="Sobre" />
          <div>
            <p className="text-justify">
              {USER.Sobre}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Separator title="Experiencias" />
          <div className="flex flex-col gap-2">
            <Experience experiences={USER.Experiencias} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Separator title="Cursos e Formações" />

          <div className="flex flex-col gap-2">
            <Course courses={USER.CursosEFormacoes} />
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
