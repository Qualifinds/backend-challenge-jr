from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import uvicorn
import requests

app = FastAPI()


#Function to create the not 200 status response
def buildError(message:str, status=404):
    return JSONResponse(content={
            "message":message
            ,"status":status
        }, status_code=status)

#Function to create the 200 status response
def build200Response(result):return JSONResponse(content=result, status_code=200)

#Function to create the result dictionary
def buildResult(originalDict):
    categories = originalDict['categories']
    if categories:category = categories[0]
    else: category = ''
    return {
            "id":originalDict['id']
            ,"url":originalDict['url']
            ,"category":category
            ,"value":originalDict['value']
        }

@app.get('/categories')
def get_categories():
    response = requests.get('https://api.chucknorris.io/jokes/categories')
    return build200Response(response.json())
    


@app.get('/joke/{category}')
def get_jokeCategory(category:str):
    try:
        #Invalid category error
        response = requests.get('https://api.chucknorris.io/jokes/categories')
        categories = response.json()

        if category not in categories: return buildError("Invalid category")
        
        response = requests.get(f'https://api.chucknorris.io/jokes/random?category={category}')
        responseJson = response.json()
        if response.status_code != 200:raise ValueError()

        #Valid request
        result = buildResult(responseJson)
        return build200Response(result)
    except Exception:
        #Exceptional cases
        status = responseJson['status']
        return buildError(responseJson['error'], status)


@app.get('/search')
def get_jokeCategory(request: Request):
    paramsDict = dict(request.query_params)
    query = paramsDict['query']

    response = requests.get(f'https://api.chucknorris.io/jokes/search?query={query}')
    responseJson = response.json()
    responseArray=responseJson['result']
    resultArray = [buildResult(resultDict) for resultDict in responseArray]
    
    return build200Response(resultArray)

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=True) #Dev
    #uvicorn.run(app, host="0.0.0.0", port=5000) #Prod