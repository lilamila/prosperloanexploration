
from flask import Flask, render_template, request, \
    redirect, url_for, flash, jsonify, make_response
# import module for authorization/authentication
from flask.ext.seasurf import SeaSurf
import httplib2
import json
import requests
import random
import string
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import func
from database_setup import Base, domain, event, user
from database_setup import Base, domain, event, user
APPLICATION_NAME = "visualize-app"

app = Flask(__name__)
csrf = SeaSurf(app)

engine = create_engine('sqlite:///visualize.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

# -----Visualization OBJECTS---------------------------------------------
# Show all domains
@app.route('/', methods=['GET', 'POST'])
@app.route('/visualize', methods=['GET', 'POST'])
def visualize():
    # dom = session.query(domain).all()
    print "Hello World "
    try:
        return render_template('index.html')
    except KeyboardInterrupt:
        print " ^C entered, stopping web server...."
        server.socket.close()

@app.route('/practice', methods=['GET', 'POST'])
def practice():
    # dom = session.query(domain).all()
    try:
        return render_template('indexpractice.html')
    except KeyboardInterrupt:
        print " ^C entered, stopping web server...."
        server.socket.close()

@app.route('/globe', methods=['GET', 'POST'])
def globe():
    # dom = session.query(domain).all()
    try:
        return render_template('01_globe.html')
    except KeyboardInterrupt:
        print " ^C entered, stopping web server...."
        server.socket.close()



if __name__ == '__main__':
    app.secret_key = 'data_is_sexy'
    # reload server when a code change occurs, provides debugger in browser
    app.debug = True
    # Debugger pin code: 576-359-276
    # runs local server with this application
    # the ''0.0.0.0' makes the server
    # publicly available in order to use vagrant
    app.run(host='0.0.0.0', port=5000)
