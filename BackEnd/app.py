from flask import Flask,jsonify,request,render_template,redirect

app = Flask(__name__)
app.debug=True


@app.route('/',methods=['POST'])
def index():   
    print(request.form)
    return redirect(request.form.get("url"))


app.run()