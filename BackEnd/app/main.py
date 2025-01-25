from fastapi import FastAPI
import random

app = FastAPI()


sepr = "="*40 



@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI server!"}




@app.get("/random")
def read_rand():
    random_number = random.randint(1, 100)
    msg = {"msg":random_number}
    print(sepr,"Sent : ", random_number,sepr)
    return msg
    # return {"message": "Welcome to the FastAPI server!"}
