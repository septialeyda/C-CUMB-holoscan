from flask import Flask, render_template, url_for, request, redirect, make_response, session
from time import time
from datetime import date, datetime
from random import random
import json
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'floads'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/register', methods=["GET", "POST"])
def regis():
    if request.method =='GET':
        return render_template('regis.html')
    else :
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        cur = mysql.connection.cursor()
        cur.execute(
            "INSERT INTO account(name, email, password) values (%s,%s,%s)", (name, email, password,)
        )
        mysql.connection.commit()
        session['name'] = name
        session['email'] = email
        return render_template('login (2).html')

@app.route('/login', methods=["GET","POST"])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT * FROM account where email=%s", (email,)
        )
        account =cur.fetchone()
        cur.close()

        if len(account)>0:
            if password == account['password']:
                session['name'] = account['name']
                session['email'] = account ['email']
                return redirect(url_for('user'))
        else:
            return 'Error password or account does not match'
    else :
        return render_template('login.html')

@app.route ('/user')
def user():
    return render_template('index.html')

@app.route('/logout')
def logout():
    session.clear()
    return render_template('login.html')


# --------------- DATABASE END ---------------


if __name__ == '__main__':
    app.secret_key = "inkel2021"
    app.run(debug="True")
