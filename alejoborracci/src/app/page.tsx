import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 rounded-lg mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Portfolio</h1>
          <div className="flex space-x-4">
            <Button variant="ghost">Inicio</Button>
            <Button variant="ghost">Sobre Mí</Button>
            <Button variant="ghost">Proyectos</Button>
            <Button variant="ghost">Contacto</Button>
            <Button>Descargar CV</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto">
        <Card className="text-center">
          <CardHeader>
            <Avatar className="w-40 h-36 mx-auto mb-4">
              <AvatarImage src="/profile.jpg" alt="Foto de perfil" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold">Desarrollador Fullstack</CardTitle>
            <CardDescription className="text-lg mt-2">
              Soy un apasionado desarrollador fullstack con experiencia en tecnologías modernas y una gran capacidad de aprendizaje.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="mt-4">Ver más sobre mí</Button>
          </CardContent>
        </Card>
      </div>

      {/* Formulario de Contacto */}
      <div className="container mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Nombre" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Mensaje" />
              <Button type="submit">Enviar</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}