# Qualifinds Jr Backend Challenge - Chuck Norris API

Este proyecto es una API Backend construida con ASP.NET Core (.NET 9.0) que consume la API p�blica de Chuck Norris y expone los siguientes endpoints:

# Endpoints

- `GET /categories`  
  Retorna una lista de categor�as disponibles.

- `GET /joke/{category}`  
  Retorna un chiste aleatorio para la categor�a especificada.

# Tecnolog�as usadas

- .NET 9.0
- ASP.NET Core Web API
- Swagger (Swashbuckle.AspNetCore)
- HttpClient
- JSON

# C�mo correr el proyecto

# 1. Clona el repositorio
git clone https://github.com/Qualifinds/backend-challenge-jr.git

# 2. Abre una terminal en la carpeta del repositorio 
cd backend-challenge-jr

# 3. Inicia la aplicacion con el comando
dotnet run

# 4. Abre el navegador 
http://localhost:5000
http://localhost:5000/swagger
