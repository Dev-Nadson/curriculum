import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { Data } from "../typings/types";

//export const USER: Data = {
//    Nome: "PEDRO HENRIQUE DE O. DA SILVA",
//    Links: [
//        { icon: Phone, text: "(81) 989785231", url: "", link: true },
//        { icon: Mail, text: "pedrohenrique20059980@gmail.com", url: "mailto:pedrohenrique20059980@gmail.com", link: true },
//        { icon: Linkedin, text: "PedroHenriqueOSilva", url: "https://github.com/PedroHenriqueOSilva", link: true },
//        { icon: Github, text: "Pedro Henrique", url: "https://www.linkedin.com/in/pedro-henrique-7427b4261", link: true }
//    ],
//    Sobre: "Possuo com três anos de experiência em suporte técnico e atendimento ao usuário, atuando com manutenção de hardware, diagnóstico de sistemas e substituição de componentes. Em transição de carreira para a área de Desenvolvimento Web, com foco no aprendizado e aplicação de Python na resolução de problemas e no desenvolvimento de soluções. Perfil proativo, organizado e com facilidade para trabalho em equipe.",
//    Experiencias: [
//        {
//            enterprise: "MASTERDRIVE IMPORTAÇÃO",
//            date: "Janeiro 2023 - Atual",
//            role: "Auxiliar Administrativo - Suporte em TI",
//            worktype: "Presencial",
//            description: [
//                "- Gerenciei o sistema ERP da empresa, prestando suporte técnico, realizando configurações e treinando aproximadamente 20 usuários, garantindo a utilização eficiente, contínua e padronizada da plataforma.",
//                "- Executei a montagem, manutenção e reparo de mais de 30 máquinas, além da estruturação, cabeamento e organização da rede corporativa, assegurando estabilidade, desempenho e padronização da infraestrutura de TI.",
//                "- Liderei o setor de helpdesk, oferecendo suporte direto aos colaboradores em demandas de hardware, software e conectividade, reduzindo falhas operacionais e garantindo o pleno funcionamento dos recursos tecnológicos da empresa.",
//            ]
//        }
//    ],
//    CursosEFormacoes: [
//        {
//            title: "Bacharelado em Ciências da Computação",
//            school: "UNIFAVIP WYDEN",
//            date: "Fev 2025 - Atual",
//            description: "Redes de Computadores, Arquitetura de Computadores, Programação de Software em C, Estrutura de Dados, Computação em Nuvem, Git, Github"
//        },
//        {
//            title: "Programação de Software",
//            school: "UNICESUMAR",
//            date: "440 Horas - 2022",
//            description: "JavaScript, HTML, CSS"
//        },
//        {
//            title: "Python e Algortimos",
//            school: "Curso em Vídeo",
//            date: "80 Horas",
//            description: "Lógica de Programação, Programação Orientada a Objeto"
//        },
//        {
//            title: "Ensino Médio",
//            school: "SESI - JOSÉ RANULFO DA COSTA QUEIROZ",
//            date: "Fev 2025 - Atual",
//        }
//    ]
//}

export const USER: Data = {
    Nome: "NADSON ALEX DA SILVA",
    SubTitulo: "Desenvolvedor Fullstack",
    Links: [
        { icon: Phone, text: "(81) 989785231", url: "tel:5581989785231", link: true },
        { icon: Mail, text: "nadson.pros@gmail.com", url: "mailto:nadson.pros@gmail.com", link: true },
        { icon: Linkedin, text: "linkedin.com/in/nadson-alex", url: "https://linkedin.com/in/nadson-alex", link: true },
        { icon: Github, text: "github.com/Dev-Nadson", url: "https://github.com/Dev-Nadson", link: true },
        //{ icon: MapPin, text: "Caruaru, PE", url: "", link: false }
    ],
    Sobre: "Sou um desenvolvedor Fullstack focado em desenvolvimento backend. Graduando em Ciências da Computação na Unifavip, com bolsa integral pelo PROUNI. Busco criar APIs robustas, escaláveis e modernas, utilizando todo ecossistema Nodejs, principalmente a stack Fastify + Typescript e PostgreSQL como banco de dados, viso também construir interfaces amigáveis e responsivas com Nextjs, React e TailwindCSS",
    Experiencias: [
        {
            enterprise: "CATSUC LABS",
            date: "Julho 2025 - Atual",
            role: "Técnico de suporte em TI",
            worktype: "Presencial",
            description: [
                "- Monitoramento de servidores Linux (Ubuntu/CentOS), reduzindo falhas de conexão com bancos de dados em 94% (de 52 para 3 ocorrências).",
                "- Desenvolvimento de scripts em Python com bibliotecas Typer (CLIs) e Pandas para análise e automação de dados.",
                "- Diagnóstico de incidentes em tempo real utilizando systemctl, netstat e análise de logs com journalctl.",
                "- Gestão e correção de falhas em bancos de dados PostgreSQL e otimização de performance de servidores.",
                "- Atendimento direto ao cliente com foco em triagem técnica e decomposição de problemas complexos.",
            ]
        },
        {
            enterprise: "PANIFICADORA JR",
            date: "Janeiro 2023 - Dezembro 2024",
            role: "Balconista / Atendimento ao Cliente",
            worktype: "Presencial",
            description: [
                "- Atendimento de alta volumetria (média de 50 clientes/dia), garantindo agilidade e satisfação no serviço.",
                "- Desenvolvimento de soft skills essenciais como gestão de tempo, comunicação clara e trabalho sob pressão em horários de pico.",
            ]
        }
    ],
    CursosEFormacoes: [
        {
            title: "Bacharelado em Ciências da Computação",
            school: "UNIFAVIP WYDEN",
            date: "Fevereiro 2025 - Atual",
            description: "Foco em Redes, Arquitetura de Computadores, Estrutura de Dados e Programação em C. Prática constante com Git e GitHub."
        },
        {
            title: "Ensino Médio",
            school: "Escola de Referência em Ensino Médio de Panelas",
            date: "Fevereiro 2021 - Dezembro 2023",
            description: "Medalhista de Prata na Olimpíada Brasileira de Geografia e Menção Honrosa na Olimpíada Brasileira de Química."
        }
    ],
    Competencias: [
        {
            data: [
                "Backend: Node.js, Fastify, TypeScript, Python (Pandas/Typer), PostgreSQL",
                "Frontend: React, Next.js, TailwindCSS",
                "Infraestrutura: Linux (Ubuntu/CentOS), Redes, Gestão de Logs, Git/GitHub"

            ]
        }
    ]
}



