import { PanelsTopLeft } from "lucide-react";
import { Cpu } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { LayoutPanelLeft } from "lucide-react";
import { ServerCog } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navigations = [
  { label: "Inicio", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Contatos", href: "#contato" },
];

export const testimonials = [
  {
    user: "João Silva",
    company: "Soluções Estelares",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi responsiva, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Tecnologias Horizonte Azul",
    image: user2,
    text: "Não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e as habilidades de resolução de problemas da equipe foram fundamentais para trazer nossa visão à vida.",
  },
  {
    user: "David Johnson",
    company: "Inovações Quânticas",
    image: user3,
    text: "Trabalhar com esta empresa foi um prazer. A atenção aos detalhes e o compromisso com a excelência são dignos de elogios. Eu a recomendaria a qualquer um que esteja procurando um serviço de alta qualidade.",
  },
  {
    user: "Ronee Brown",
    company: "Dinâmica de Fusão",
    image: user4,
    text: "Trabalhar com a equipe da XYZ Company foi um divisor de águas para o nosso projeto. A atenção aos detalhes e as soluções inovadoras nos ajudaram a alcançar nossos objetivos mais rápido do que pensávamos ser possível. Estamos gratos pela expertise e profissionalismo deles!",
  },
  {
    user: "Michael Wilson",
    company: "Criações Visionárias",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrados pela equipe. Eles conseguiram superar nossas expectativas e entregar resultados excepcionais.",
  },
  {
    user: "Emily Davis",
    company: "Sistemas de Sinergia",
    image: user6,
    text: "A equipe foi acima e além para garantir que nosso projeto fosse um sucesso. Sua expertise e dedicação são incomparáveis. Estou ansiosa para trabalhar com eles novamente no futuro.",
  },
];

export const features = [
  {
    icon: <PanelsTopLeft />,
    text: "Interfaces Intuitivas",
    description:
      "Trazendo modernidade e interações com o usuário desperta interece e curiosidade aos seus clientes.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade em Multiplataformas",
    description:
      "Sistemas e sites que são acessiveis de todos os dispositivos do mundo eleva sua empresa para outro patamar.",
  },
  {
    icon: <LayoutPanelLeft />,
    text: "Layouts Variados",
    description:
      "Explore uma ampla gama de layouts personalizáveis que permitem adaptar o design do seu projeto às suas necessidades, garantindo uma apresentação visual única e atraente.",
  },
  {
    icon: <Cpu />,
    text: "Infraestrutura",
    description:
      "Estabeleça uma base sólida para seu negócio com uma infraestrutura robusta que suporta operações eficientes, garante segurança e facilita o crescimento escalável.",
  },
  {
    icon: <ServerCog />,
    text: "Servidores em Nuvem",
    description:
      "Otimize sua infraestrutura com servidores em nuvem que oferecem escalabilidade, flexibilidade e segurança, permitindo acesso a recursos de computação a qualquer hora e de qualquer lugar.",
  },
  {
    icon: <ChartNoAxesCombined />,
    text: "Análises e Dashboards",
    description:
      "Transforme dados em insights com dashboards interativos que permitem visualizar informações de forma clara e dinâmica, facilitando a tomada de decisões estratégicas.",
  },
];

export const checklistItems = [
  {
    title: "Definição de Requisitos",
    description:
      "Realizaremos uma reunião para entender as necessidades e objetivos do cliente, alinhando expectativas desde o início.",
  },
  {
    title: "Metodologia Ágil",
    description:
      "Utilizaremos uma abordagem ágil, como Scrum, para permitir adaptações rápidas durante o desenvolvimento, garantindo maior flexibilidade e colaboração.",
  },
  {
    title: "Feedback Regular",
    description:
      "Implementamos ciclos de feedback com o cliente durante o processo, facilitando ajustes rápidos e alinhamento.",
  },
  {
    title: "Testes Rigorosos:",
    description:
      "Realizamos testes de usabilidade e compatibilidade antes do lançamento para garantir uma experiência positiva ao usuário.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "R$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "R$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "R$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Introdução" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutoriais" },
  { href: "#", text: "Referência da API" },
  { href: "#", text: "Fóruns da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Recursos" },
  { href: "#", text: "Dispositivos Suportados" },
  { href: "#", text: "Requisitos do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de Lançamento" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Empregos" },
];
