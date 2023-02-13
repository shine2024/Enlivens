from flask import Flask,jsonify,request,render_template,redirect
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.debug=True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
# Creating an SQLAlchemy instance
db = SQLAlchemy(app)
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), unique=False, nullable=False)
    email = db.Column(db.String(50), nullable=False,unique=False)
    message = db.Column(db.String(350), unique=False, nullable=False)
    def __repr__(self):
        return f"Name : {self.name}, Email: {self.email}"


with app.app_context():
    db.create_all()

@app.route('/',methods=['POST'])
def index():   
    # print(request.form)
    name=request.form.get("name")
    email=request.form.get("email")
    mess=request.form.get("message")
    cData=Contact(name=name,email=email,message=mess)
    db.session.add(cData)
    db.session.commit()

    return redirect(request.form.get("url"))

@app.route("/home")
def home():
    db_obj=Contact.query.all()
    print(db_obj)
    return render_template('home.html',object=db_obj)

app.run()