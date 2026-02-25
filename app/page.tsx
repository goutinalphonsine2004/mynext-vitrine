
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Settings, Icon} from "lucide-react";
import { title } from "process";
import { Card } from "@/components/ui/card";

const cart = [{
  icons: "📱",
  title: "Mobile",
  texte: "Applications mobiles Flutter performantes, compatibles Android et iOS, avec une expérience utilisateur fluide."
},

{
  icons: "🌐",
  title: "Web",
  texte: "Sites web et applications modernes avec Next.js, optimisés pour le SEO et la vitesse."
},

{
  icons: "⚙️",
  title: "Backend",
  texte: "APIs robustes et scalables avec NestJS, sécurisées et évolutives pour vos projets."
}

]

const cart1 = [{
  title: "✔️ Code propre & maintenable",
  texte: "J'écris un code clair, structuré et facile à faire évoluer dans le temps"
},

{
  title: "✔️ Technologies modernes",
  texte: "Flutter, Next.js, NestJS, TypeScript — des stacks modernes et fiables."
},

{
  title: "✔️ Approche orientée résultat",
  texte: "Chaque fonctionnalité est pensée pour apporter une vraie valeur."
},

{
  title: "✔️ Communication claire",
  texte: "Je privilégie une collaboration simple, transparente et efficace."
}
]

const butons = [
  'Flutter',
  'Next.js',
  'Nest.js',
  'Firbase',
  'TypeScript',
  'React',
]

export default function Home() {
  return (
   <main className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2   gap-8 lg:gap-32 md:px-10 px-6 py-4 ">
          <div className="mt-16">
              <div className="flex-1 space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl">Développeur <br />Full-Stack</h1>
                  <h5 className="text-2xl">// Créateur d'expériences digitales</h5>
                  <p>Spécialisé dans le développement d'applications modernes,<br /> rapides et scalables pour les startups, entreprises et porteurs de projets.</p>
              </div>
              <div className="flex flex-wrap  gap-3 mt-6">
                 {butons.map((btn, index) => (
                  <Button
                  key={index}
                  variant="outline"
                  className="rounded-2xl bg-violet-800"
                  >
                    <p>{btn}</p>
                  </Button>
                 ))}
              </div>
              <div className=" flex gap-6 mt-16">
                 <Button variant="outline" className="p-6 rounded-2xl bg-violet-800">Me Contactez</Button>
                 <Button variant="outline" className="p-6 rounded-2xl">Voir mes Services</Button>
              </div>
          </div>
          <div className="mt-28 flex items-center justify-center ">
              <Image src={"/img2.jpeg"} alt="code" className="outline outline-white shadow-2xl shadow-violet-950 rounded-2xl md: w-[600px]" width={600} height={600}/>
          </div>
      </section>

      <section className="container mt-40">
            <div className="text-center flex flex-col space-y-6">
                <h1 className="text-4xl lg:text-6xl">Ce que je fais</h1>
                <p>Des solutions digitales complètes, pensées pour la performance et l'expérience utilisateur.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-white m-20 text-center">
               {cart.map((car, inex)  => (
                  <Card
                    key={inex}
                    className="stylecard"
                  >
                    <div className="text-3xl">{car.icons}</div>
                   <h1>{car.title}</h1>
                   <p>{car.texte}</p>
                  </Card>
               )
              )}
            </div>
      </section>
      <section className="container mt-40">
              <div>
                  <h1 className="text-4xl lg:text-6xl text-center">Pourquoi travailler avec moi ?</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-white m-20 ">
                  {cart1.map((car1, inex1) =>  (
                    <Card
                    key={inex1}
                    className="stylecard"
                    >
                     <h1>{car1.title}</h1>
                     <p>{car1.texte}</p>
                    </Card>
                  )
                )}
              </div>
      </section>
      <div className="container text-center space-y-7">
            <h1 className="text-4xl lg:text-6xl">Vous avez un projet ?</h1>
            <p>Discutons ensemble de votre idée et transformons-la en solution digitale.</p>
            <Button variant="outline" className="p-4 rounded-2xl bg-violet-800 p-6">Démarrer un projet</Button>
      </div>
   </main>
  )
}
