import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";




const formSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignInform = z.infer<typeof formSchema>

export default  function  Login(){

  const { register , handleSubmit } = useForm<SignInform>();

  
   function handleSign (data: SignInform){
    console.log(data);
  };

  return(
   <div className="p-8">
    <div className="flex  w-[350]  flex-col justify-center gap-6">
    <div className="lex flex-col gap-2 text-center">
      <h1>Acessar</h1>

      <p className="text-sm text-muted-foreground">
        Acompanhe teste teste teste
      </p>
    </div>

    <form onSubmit={handleSubmit(handleSign)}
     className="space-y-2">
      <div  className="space-y-2">
        < Label htmlFor="email"> Seu e-mail </Label>
       <Input id="email" type="email" {...register("email")}/>
      </div>
      <div  className="space-y-2" >
        < Label htmlFor="password"> Senha </Label>
       <Input id="password" type="password" {...register("password")}/>
      </div>
      <Button className="w-full" type="submit">Login</Button>
    </form>
    </div>
    
   </div>
  )
}