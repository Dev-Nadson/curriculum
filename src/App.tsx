import { Github, Linkedin, Mail, Phone, } from "lucide-react"
import { LinksGroup } from "./components/LinksGroup"
import { Separator } from "./components/Separator"
import type { IInfoProps } from "./typings/types"


const items: IInfoProps[] = [
  { icon: Phone, text: "(81) 989785231", url: "#", link: true },
  { icon: Mail, text: "nadson.pros@gmail.com", url: "#", link: true },
  { icon: Linkedin, text: "Dev-Nadson", url: "#", link: true },
  { icon: Github, text: "Dev-Nadson", url: "#", link: true }
]

function App() {
  return (
    <div className="flex flex-col items-center gap-2 font-serif ">
      <header className="flex flex-col items-center">
        <h1 className="text-[2.5rem]">
          Nadson Alex da Silva
        </h1>
        <LinksGroup data={items} />
      </header>


      <Separator title="Experiencias" />

      <p className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, eligendi accusamus illum maxime officiis mollitia exercitationem quasi necessitatibus quas pariatur tempora optio obcaecati aspernatur odio corporis! Aut, commodi quod.
      </p>
    </div>
  )
}

export default App
