import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Cat, icons } from "lucide-react"



const cart = [{
    icons: "📧",
    titre: "E-mail",
    text: "goutinsino@gmail.com"
},

{
   icons: "📱",
   titre: "Téléphone",
   text: "+229 01 47 06 51 45"
},

{
  icons: "📍",
  titre: "Localisation",
  text: "Parakou, Bénin"
}

]

export default function Contacte(){
  return(
    <main className="container mx-auto min-h-screen ">
          <div className="justify-items-center space-y-4 mt-24">
              <h1 className="text-6xl text-fuchsia-300">Contact</h1>
              <p>Un projet, une idée ou une collaboration ? N'hésitez pas à me contacter.</p>
          </div>

          <section className="container grid grid-cols-1 lg:grid-cols-2 mt-40 gap-10">
                <div>
                      <div>
                            <h1 className="text-4xl text-fuchsia-300 mb-2">Ensemble Travaillons</h1>
                            <p>Vous avez un projet en tête ?
                            Discussions-fr! <br /> Je suis toujours
                            ouvert à de nouvelles <br /> opportunités
                            et collaborations passionnantes.</p>
                      </div> 
                      <div className="grid grid-cols-1 gap-10 mt-10">
                          {cart.map((car, index) => (
                            <Card 
                            key={index}
                            className="stylecard"
                            >
                              <div className="flex">
                                <p>{car.icons}</p>
                                <h1>{car.titre}</h1>
                              </div>
                              <p>{car.text}</p>
                            </Card>
                          ))}
                      </div>       
                </div>
                <div>
                      <Card className="stylecard">
                          <form action="" className="space-y-20">
                              <label htmlFor="" >Nom complet</label>
                              <Input placeholder="Nom complet" className="mt-6 p-6 outline outline-violet-400 rounded-2xl"></Input>
                              <label htmlFor="" >E-mail</label>
                              <Input placeholder="Votre email" className="mt-6 p-6 outline outline-violet-400 rounded-2xl"></Input>
                              <label htmlFor="" >Sujet</label>
                              <Input placeholder="Votre sujet" className="mt-6 p-6 outline outline-violet-400 rounded-2xl"></Input>
                              <label htmlFor="" >Message</label>
                              <Textarea placeholder="Votre message" className="mt-6 p-6 outline outline-violet-400 rounded-2xl"></Textarea>
                              <Button variant="outline"
                                className="rounded-2xl bg-violet-800  p-6">Envoyez le Message</Button>
                          </form>
                      </Card>
                </div>
          </section>
    </main>
  )
} 


