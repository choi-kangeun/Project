import os
from flask import Flask, render_template

app = Flask(__name__)
print(__name__)


@app.route('/')
def home():

    return render_template("/ahu/dashboard.html")


@app.route("/ahu_dashboard")
def ahu_dashboard():

    return render_template('/ahu/dashboard.html')


@app.route("/ahu_temp")
def ahu_temp():

    return render_template('/ahu/temp.html')
# 보일러


@app.route("/boiler_dashboard")
def boiler_dashboard():

    return render_template('/boiler/dashboard.html')


@app.route("/boiler_gas")
def boiler_gas():

    return render_template('/boiler/gas.html')


@app.route("/boiler_temp")
def boiler_temp():

    return render_template('/boiler/temp.html')
# 칠러


@app.route("/chiler_dashboard")
def chiler_dashboard():

    return render_template('/chiler/dashboard.html')


@app.route("/chiler_temp")
def chiler_temp():

    return render_template('/chiler/temp.html')
# 전력


@app.route("/power_day")
def power_day():

    return render_template('/power/day.html')


@app.route("/power_hour")
def power_hour():

    return render_template('/power/hour.html')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
