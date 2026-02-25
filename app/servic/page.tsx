import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { icons } from "lucide-react"


const cat = [{
    icons: "📱",
    titre: "Applications mobiles",
    text: "Développement d'applications mobiles cross-platform avec Flutter, performantes et fluides."
},

{
  icons: "🌐",
  titre: "Applications web",
  text: "Création de sites et applications web modernes avec Next.js, rapides et optimisées SEO."
},

{
  icons: "⚙️",
  titre: "Backend & API",
  text: "Conception d'APIs robustes avec NestJS, sécurisées et évolutives."
},

{
  icons: "☁️",
  titre: "Firebase & Cloud",
  text: "Authentification, base de données temps réel et déploiement cloud."
},

{
  icons: "🎨",
  titre: "UI / UX",
  text: "Interfaces modernes, claires et centrées sur l'expérience utilisateur."
},

{
  icons: "🚀",
  titre: "Accompagnement",
  text: "Conseil technique, amélioration de projets et accompagnement d'équipes."
}

]

const btn = [
  'Flutter',
  'Next.js',
  'Nest.js',
  'Firbase',
  'TypeScript',
  'React',
  'Tailwind CSS'
]

export default function Service(){
  return(
    <main className="container mx-auto min-h-screen">
        <div className="justify-items-center mt-14 space-y-5">
            <h1 className="text-6xl text-fuchsia-300 ">Mes services</h1>
            <p className="text-md">Des solutions digitales complètes pour créer des applications <br /> modernes, performantes et évolutives.</p>
        </div>

        <section className="container mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {cat.map((cat, index) => (
                  <Card
                  key={index}
                  className="stylecard"
                  >
                  <div className="text-3xl">{cat.icons}</div>
                  <h1 className="text-lg text-fuchsia-300  ">{cat.titre}</h1>
                  <p>{cat.text}</p>
                  </Card>
                ))}
              </div>
        </section>

        <section className="container mt-36 justify-items-center space-y-7">
                <h1 className="text-4xl">Technologies utilisées</h1>
                          <div className="flex flex-wrap  gap-3 mt-6">
                              {btn.map((btn, index) => (
                                <Button 
                                key={index}
                                variant="outline"
                                className="rounded-2xl bg-violet-800 "
                                >
                                  <p>{btn}</p>
                                </Button>
                              ))}
                          </div>
        </section>
    </main>
  )
}












