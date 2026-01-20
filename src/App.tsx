import { Github, Linkedin, Mail, Phone, } from "lucide-react"
import { LinksGroup } from "./components/LinksGroup"
import { Separator } from "./components/Separator"
import type { IInfoProps } from "./typings/types"
import { Course } from "./components/Course"
import { Experience } from "./components/Experience"


const items: IInfoProps[] = [
  { icon: Phone, text: "(81) 989785231", url: "#", link: true },
  { icon: Mail, text: "pedrohenrique20059980@gmail.com", url: "#", link: true },
  { icon: Linkedin, text: "PedroHenriqueOSilva", url: "#", link: true },
  { icon: Github, text: "Pedro Henrique", url: "#", link: true }
]

function App() {
  return (
    <body className="mx-10 mt-4">
      <div className="flex flex-col items-center gap-4 font-serif">
        <header className="flex flex-col items-center leading-12">
          <h1 className="text-[2.5rem] mx-10">
            PEDRO HENRIQUE DE
            O. DA SILVA
          </h1>
          <LinksGroup data={items} />
        </header>

        <div className="flex flex-col gap-1.5 w-full">
          <Separator title="Cursos e Formações" />
          <div className="flex flex-col ml-4 gap-2">
            <Course />
            <Course />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Separator title="Experiencias" />

          <div className="flex flex-col ml-4 gap-2">
            <Experience enterprise="MASTERDRIVE IMPORTAÇÃO" date="Janeiro 2023 - Atual" role="Auxiliar Administrativo - Suporte em TI" worktype="Presencial">
              Atuo na gestão do sistema ERP da empresa, prestando suporte técnico, realizando
              configurações e treinando novos usuários para garantir o uso eficiente da plataforma. Sou
              responsável pela montagem, manutenção e reparo de máquinas, bem como pela
              estruturação, cabeamento e organização do sistema de redes. Além disso, lidero o setor de
              helpdesk, oferecendo suporte direto aos colaboradores e solucionando demandas
              relacionadas a hardware, software e conectividade, garantindo o bom funcionamento dos
              recursos de TI da empresa.
            </Experience>
          </div>
        </div>



      </div>
    </body>
  )
}

export default App
