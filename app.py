import json
import numpy as np
from sqlalchemy import create_engine, func
from sqlalchemy import Column, Integer, String, Float
from flask import Flask, jsonify, render_template, flash, redirect, request, abort,send_from_directory, send_file
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
import psycopg2
import psycopg2.extras
from pathlib import Path


Base = declarative_base()
connection_string = "postgres:taunus48@localhost:5432/football_db"
engine = create_engine(f'postgresql://{connection_string}')
# Base = automap_base()
Base.metadata.create_all(engine)



app = Flask(__name__)

class Transfers(Base):
    __tablename__ = 'transfers'
    index = Column(Integer, primary_key=True)
    name = Column(String)
    position = Column(String)
    age = Column(Integer)
    team_from = Column(String)
    league_from = Column(String)
    team_to = Column(String)
    league_to = Column(String)
    season = Column(String)
    market_value = Column(Integer)
    transfer_fee = Column(Integer)

class Leagues(Base):
    __tablename__ = 'league_countries'
    league_name = Column(Integer, primary_key=True)
    country = Column(String)

class Locations(Base):
    __tablename__ = 'locations'
    country = Column(Integer, primary_key=True)
    country_code = Column(Integer)
    latitude = Column(Integer)
    longitude = Column(Integer)





@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/authors")
def authors():
    return render_template('authors.html')

@app.route("/league")
def league():
    return render_template('league.html')

@app.route("/mr")
def mr():
    return render_template('messi_ronaldo.html')

@app.route("/shootouts")
def shootouts():
    return render_template('shootouts.html')

# @app.route("/shootouts2")
# def index():
#     return render_template('shootouts2.html')

@app.route("/world-cup")
def worldCup():
    return render_template('world_cup.html')



@app.route('/transfers', methods =["GET", "POST"])
def from_coordinates():
    
    if request.method == 'POST':
        user_input = request.values.get('fname')
        session = Session(engine)
        results = session.query(Locations.latitude,Locations.longitude,Locations.country, Transfers.transfer_fee, Transfers.name).\
            join(Leagues, Leagues.country == Locations.country).\
                join(Transfers, Transfers.league_from == Leagues.league_name).\
                    filter(Transfers.season == user_input)
        session.close()
        res = []
        for latitude, longitude, country, transfer_fee, name in results:
            dict1 = {}
            dict1["coordinates"] = longitude, latitude
            dict1["type"] = 'Point'
            dict1["country"] = country
            dict1["transfer_fee"] = transfer_fee
            dict1["name"] = name
            res.append(dict1)
        # trans_json = open("static/data/myfile.geojson", "w")
        with open("static/data/myfile.geojson", "w") as trans_json:
            json.dump(res, trans_json, indent=6)
        with open("static/data/samples.json", "w") as json_json:
            json.dump(res, json_json, indent=6)        
        # json_json = open("samples.json", "w")
        # json.dump(res, json_json, indent=6)
        trans_json.close()
        return render_template('transfers.html')
    return render_template('transfers.html')
    


# @app.route("/transfer-map")
# def transfer_map():
#     return render_template("transfer.html")


    # results = session.query(Transfers).filter_by(eason="Neymar")
    # for name in results:
    #     print(name.league_to)

if __name__ == '__main__':
    app.run(debug=True)




    # from flask import Flask, render_template, 
    # requestapp = Flask(__name__)
    # app.debug = True
    # @app.route('/', methods=['GET'])
    # def dropdown():
    #     colours = ['Red', 'Blue', 'Black', 'Orange']    
    #     return render_template('test.html', colours=colours)
    # if __name__ == "\_\_main\_\_":    
    #     app.run()


# <!DOCTYPE html><html 
# lang="en">
# <head>    
#     <meta charset="UTF-8">    
#     <title>Dropdown</title>
# </head>
# <body>
# <select name= colours method="GET" action="/">    
# {% for colour in colours %}    
# <option value= "{{colour}}" SELECTED>{{colours}}
# </option>"    
# {% endfor %}</select></select>
# </body>
# </html>