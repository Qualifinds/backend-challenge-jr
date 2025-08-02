Setup/Run Instructions (Instrucciones de ejecucion)

Spanish/Español:
Este programa necesita dependencias alojadas en el alrchivo "requirements.txt".
Para poder correr el sistema hay que ejecutar primero "pip install -r requirements.txt" en la consola que contiene 
el codigo (recomiendo un entorno virtual). 
Posteriormente basta con ejecutar "python main.py" en la misma consola. 

En la linea 73 se encuentra el comando que se encarga de correr la app en el puerto 5000 en modo desarrollo (recarga el servidor
cuando detecta cambios).
En la linea 74 se encuentra el comando que se encarga de correr la app en el puerto 5000 en modo produccion (no recarga el servidor)
Comenta la linea 73 o 74 y descomenta la otra segun sea el caso.

English/Inglés:
This program requires dependencies that are listed in the "requirements.txt" file. 
To run the application you must first install the dependencies using the "pip install -r requirements.txt" command in the console
where the code is alocated (i recomend a virtual enviroment).
Then you can run the app with the "python main.py" command in the console. 

The command to execute the app in the "development mode" (with auto-reload) is in the line 73. 
The command to execute the app in the "production mode" (without auto-reload) is in the line 74. 

Comment out either line 73 or 74 depending on the environment you want to use, and uncomment the other line accordingly.