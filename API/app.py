from flask import Flask, render_template, request, jsonify 
import numpy as np
import pandas as pd

from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image


app = Flask(__name__)

#  Enter Model file path (plant_disease_model.h5)
model = load_model("O:\\Projects\\ML\\Plant Diseases Classification\\Code\\plant_disease_model.h5") 
print("+"*50, "Model is loaded")

labels = [
     "Apple___Apple_scab",
     "Apple___Black_rot",
     "Apple___Cedar_apple_rust",
     "Apple___healthy",
     "Background_without_leaves",
     "Blueberry___healthy",
     "Cherry___Powdery_mildew",
     "Cherry___healthy",
     "Corn___Cercospora_leaf_spot Gray_leaf_spot",
     "Corn___Common_rust",
     "Corn___Northern_Leaf_Blight",
     "Corn___healthy",
     "Grape___Black_rot",
     "Grape___Esca_(Black_Measles)",
     "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
     "Grape___healthy",
     "Orange___Haunglongbing_(Citrus_greening)",
     "Peach___Bacterial_spot",
     "Peach___healthy",
     "Pepper_bell___Bacterial_spot",
     "Pepper_bell___healthy",
     "Potato___Early_blight",
     "Potato___Late_blight",
     "Potato___healthy",
     "Raspberry___healthy",
     "Soybean___healthy",
     "Squash___Powdery_mildew",
     "Strawberry___Leaf_scorch",
     "Strawberry___healthy",
     "Tomato___Bacterial_spot",
     "Tomato___Early_blight",
     "Tomato___Late_blight",
     "Tomato___Leaf_Mold",
     "Tomato___Septoria_leaf_spot",
     "Tomato___Spider_mites Two-spotted_spider_mite",
     "Tomato___Target_Spot",
     "Tomato___Tomato_mosaic_virus",
     "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
     "Tomato___healthy"
    ]


titles = {
    "Apple___Apple_scab": "Fungal disease affecting apple trees, characterized by dark lesions on leaves and fruit.",
    "Apple___Black_rot": "Fungal disease causing dark, spreading lesions on apple fruit, leading to decay.",
    "Apple___Cedar_apple_rust": "Fungal infection common in apple and cedar trees, causing orange spots on leaves.",
    "Apple___healthy": "Represents healthy apple plants without any disease symptoms.",
    "Background_without_leaves": "Background image with no leaves or plants.",
    "Blueberry___healthy": "Represents healthy blueberry plants without any disease symptoms.",
    "Cherry___healthy": "Represents healthy cherry plants without any disease symptoms.",
    "Cherry___Powdery_mildew": "Fungal disease affecting cherry trees, characterized by white powdery growth on leaves.",
    "Corn___Cercospora_leaf_spot Gray_leaf_spot": "Fungal disease causing grayish lesions on corn leaves, impacting crop yield.",
    "Corn___Common_rust": "Fungal infection causing reddish-brown pustules on corn leaves, affecting yield.",
    "Corn___healthy": "Represents healthy corn plants without any disease symptoms.",
    "Corn___Northern_Leaf_Blight": "Fungal disease causing large tan lesions on corn leaves, affecting yield.",
    "Grape___Black_rot": "Fungal disease causing black lesions on grape leaves and fruit, leading to decay.",
    "Grape___Esca_(Black_Measles)": "Fungal disease causing dark spots on grape leaves and trunk, leading to decline.",
    "Grape___healthy": "Represents healthy grape plants without any disease symptoms.",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "Fungal disease causing brown spots on grape leaves, affecting yield.",
    "Orange___Haunglongbing_(Citrus_greening)": "Bacterial disease affecting citrus trees, causing yellowing and decline.",
    "Peach___Bacterial_spot": "Bacterial disease causing dark lesions on peach leaves and fruit, impacting quality.",
    "Peach___healthy": "Represents healthy peach plants without any disease symptoms.",
    "Pepper_bell___Bacterial_spot": "Bacterial disease causing dark lesions on pepper leaves and fruit, impacting yield.",
    "Pepper_bell___healthy": "Represents healthy bell pepper plants without any disease symptoms.",
    "Potato___Early_blight": "Fungal disease causing dark concentric lesions on potato leaves, affecting yield.",
    "Potato___healthy": "Represents healthy potato plants without any disease symptoms.",
    "Potato___Late_blight": "Fungal disease causing dark lesions on potato leaves and stems, leading to tuber rot.",
    "Raspberry___healthy": "Represents healthy raspberry plants without any disease symptoms.",
    "Soybean___healthy": "Represents healthy soybean plants without any disease symptoms.",
    "Squash___Powdery_mildew": "Fungal disease causing white powdery growth on squash leaves and stems.",
    "Strawberry___healthy": "Represents healthy strawberry plants without any disease symptoms.",
    "Strawberry___Leaf_scorch": "Fungal disease causing brown lesions on strawberry leaves, impacting yield.",
    "Tomato___Bacterial_spot": "Bacterial disease causing dark lesions with yellow halos on tomato leaves and fruit.",
    "Tomato___Early_blight": "Fungal disease causing brown concentric lesions on tomato leaves, affecting yield.",
    "Tomato___healthy": "Represents healthy tomato plants without any disease symptoms.",
    "Tomato___Late_blight": "Fungal disease causing dark lesions on tomato leaves and fruit, impacting yield.",
    "Tomato___Leaf_Mold": "Fungal disease causing yellowish lesions on tomato leaves, impacting yield.",
    "Tomato___Septoria_leaf_spot": "Fungal disease causing small dark spots with light centers on tomato leaves.",
    "Tomato___Spider_mites Two-spotted_spider_mite": "Pest infestation causing stippling and webbing on tomato leaves.",
    "Tomato___Target_Spot": "Fungal disease causing concentric rings on tomato leaves, impacting yield.",
    "Tomato___Tomato_mosaic_virus": "Viral disease causing mottled patterns on tomato leaves and fruit, impacting yield.",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "Viral disease causing yellowing and curling of tomato leaves, impacting yield."
}

pesticides = {
    "Apple___Apple_scab": "Fungicides such as Captan, Mancozeb, or Thiophanate-methyl.",
    "Apple___Black_rot": "Fungicides such as Captan, Myclobutanil, or Thiophanate-methyl.",
    "Apple___Cedar_apple_rust": "Fungicides such as Captan, Myclobutanil, or Thiophanate-methyl.",
    "Cherry___Powdery_mildew": "Fungicides such as Myclobutanil, Propiconazole, or Sulphur.",
    "Corn___Cercospora_leaf_spot Gray_leaf_spot": "Fungicides such as Chlorothalonil, Azoxystrobin, or Propiconazole.",
    "Corn___Common_rust": "Fungicides such as Azoxystrobin, Propiconazole, or Thiophanate-methyl.",
    "Corn___Northern_Leaf_Blight": "Fungicides such as Azoxystrobin, Chlorothalonil, or Propiconazole.",
    "Grape___Black_rot": "Fungicides such as Captan, Myclobutanil, or Thiophanate-methyl.",
    "Grape___Esca_(Black_Measles)": "Fungicides such as Propiconazole, Thiophanate-methyl, or Trifloxystrobin.",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "Fungicides such as Azoxystrobin, Chlorothalonil, or Propiconazole.",
    "Orange___Haunglongbing_(Citrus_greening)": "There is no cure for the disease, but management strategies involve the use of insecticides to control the insect vector, such as Imidacloprid or Spirotetramat.",
    "Peach___Bacterial_spot": "Copper-based bactericides or bacteriophages are commonly used.",
    "Pepper_bell___Bacterial_spot": "Copper-based bactericides or bacteriophages are commonly used.",
    "Potato___Early_blight": "Fungicides such as Chlorothalonil, Mancozeb, or Propiconazole.",
    "Potato___Late_blight": "Fungicides such as Chlorothalonil, Mancozeb, or Metalaxyl.",
    "Squash___Powdery_mildew": "Fungicides such as Potassium bicarbonate, Sulfur, or Thiophanate-methyl.",
    "Strawberry___Leaf_scorch": "Fungicides such as Azoxystrobin, Chlorothalonil, or Propiconazole.",
    "Tomato___Bacterial_spot": "Copper-based bactericides or bacteriophages are commonly used.",
    "Tomato___Early_blight": "Fungicides such as Chlorothalonil, Mancozeb, or Propiconazole.",
    "Tomato___Late_blight": "Fungicides such as Chlorothalonil, Mancozeb, or Metalaxyl.",
    "Tomato___Leaf_Mold": "Fungicides such as Azoxystrobin, Chlorothalonil, or Propiconazole.",
    "Tomato___Septoria_leaf_spot": "Fungicides such as Azoxystrobin, Chlorothalonil, or Propiconazole.",
    "Tomato___Spider_mites Two-spotted_spider_mite": "Miticides such as Abamectin, Bifenazate, or Spiromesifen.",
    "Tomato___Target_Spot": "Fungicides such as Azoxystrobin, Chlorothalonil, or Propiconazole.",
    "Tomato___Tomato_mosaic_virus": "There is no cure for the virus. Management involves controlling vectors and removing infected plants to reduce spread.",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "There is no cure for the virus. Management involves controlling vectors and removing infected plants to reduce spread."
}


@app.route('/')
@cross_origin()
def index():
    return render_template("main.html", data="hey")


@app.route("/predict", methods=["POST"])
@cross_origin()
def prediction():

    # img = request.files['img']
    if 'file' not in request.files:
        return 'No file part'
    
    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    if file:
        file.save("img.jpg")

    # img = image.load_img("img.jpg", target_size=(256, 256))
    
    img = Image.open("img.jpg")
    img = img.resize((256, 256))

    img.save("C:\\Users\\omvas\\Downloads\\op.jpg")
    
    img_array = image.img_to_array(img)

    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0

    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]

    print(type(predicted_class.item()))

    try:
        desc = "Recommended Treatment :\n"+pesticides[labels[predicted_class.item()]]
    except:
        desc=""

    if labels[predicted_class.item()] =="Background_without_leaves":
        data = {"message" : "Not Found"}
        return jsonify(data)
    else :
        data = {"message" : ""+labels[predicted_class.item()]}
        return jsonify(data)

    # if (labels[predicted_class.item()].find("healthy") == -1):
    #     data = {"message" : ""+labels[predicted_class.item()]}
    #     return jsonify(data)
    # else:
    #     data = {"message" : "isHealthy"}
    #     return jsonify(data)
    

    # return render_template("result.html", cla=labels[predicted_class.item()], title=titles[labels[predicted_class.item()]], desc=desc)

if __name__ == "__main__":
	app.run(debug=True)