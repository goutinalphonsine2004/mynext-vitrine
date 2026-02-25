import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Key } from "lucide-react";
import Image from "next/image";
import { text } from "stream/consumers";


const cat2 = [{
  titre: "Analyse",
  text: "Je prends le temps de comprendre le besoin avant d'écrire la moindre ligne de code."
},

{
  titre: "Développemen",
  text: "Code propre, structuré et évolutif, avec des technologies modernes."
},

{
  titre: "Livraison",
  text: "Résultat fonctionnel, testé et prêt à être utilisé ou déployé."
}

]

const btn = [
  'Flutter',
  'Next.js',
  'Nest.js',
  'Firbase',
  'TypeScript',
  'React',
  'REST API',
  'Git/GitHube'
]

export default function propos(){
  return(
    <main className="container mx-auto min-h-screen">
           <div className="ml-20 mt-16 space-y-5 justify-items-center">
                    <h1 className="text-4xl lg:text-6xl text-fuchsia-300 ">À propos de moi</h1>
                    <p>Développeur full-stack passionné par la création d'applications <br /> modernes, performantes et utiles.</p>
           </div>

           <section className="grid grid-cols-1 md:grid-cols-2  lg:mt-20 gap-28 ml-20">
                <div className="text-lg md:text-2xl mt-20 space-y-7 lg:text-2xl ">
                      <p>Je suis développeuse full-stack spécialisé dans le développement  d'applications mobiles et web.</p>
                      <p>J'utilise principalement Flutter pour le mobile, Next.js pour le frontend  web et NestJS pour le backend.</p>
                      <p>Mon objectif est de transformer des idées en solutions digitales fiables, bien conçues et faciles à utiliser.</p>
                </div>

                <div>
                      <Image src={"/img1.jpeg"} alt="Mon univer" width={500} height={2} className="outline outline-white shadow-2xl shadow-violet-950 rounded-2xl  md:h-[600px] w-[600px]   lg:h-[400px] w-[500px] md:mt-20 lg:mt-8"/>
                </div>
           </section>

           <section className="container mt-36">
                    <h1 className="text-center text-4xl text-fuchsia-300">Ma façon de travailler</h1>
                    <div className="mt-10 grid grid-cols-1  lg:grid-cols-3 gap-10 text-white m-20">
                          {cat2.map((cat2, inex2) => (
                            <Card
                            key={inex2}
                            className="stylecard"
                            >
                            
                                <h1>{cat2.titre}</h1>
                                <p>{cat2.text}</p>
                            
                            </Card>
                          ) )}
                    </div>
           </section>

           <section className="container mt-36 justify-items-center space-y-7">
                          <h1>Compétences principales</h1>
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