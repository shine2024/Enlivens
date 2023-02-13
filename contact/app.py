from flask import Flask,jsonify,request,render_template,redirect

app = Flask(__name__)
app.debug=True


@app.route('/',methods=['POST'])
def index():   
    print(request.args)
    return redirect('http://127.0.0.1:5501/contact.html')


app.run()

