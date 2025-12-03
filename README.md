DL Model : https://drive.google.com/file/d/1XZe4zW0opCqjDWtq2xXzO99YkEcCvcIC/view?usp=sharing


<div align="center">

# 🌿 AI-Based Plant Disease Classification System

### Deep Learning-Powered Crop Disease Detection with Treatment Recommendations

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

**An end-to-end plant disease identification platform using Convolutional Neural Networks to classify 38 disease categories across 14 crop species with automated pesticide recommendations**

[Features](#-features) • [Architecture](#-system-architecture) • [Installation](#-installation) • [API](#-api-endpoints) • [Dataset](#-dataset)

</div>

---

## 📖 Overview

Agricultural crop diseases cause significant economic losses worldwide, with farmers often struggling to identify diseases early enough for effective treatment. This **AI-Based Plant Disease Classification System** leverages deep learning to provide instant, accurate disease identification from leaf images, along with actionable treatment recommendations. 

### The Problem We Solve
- 🌾 **Crop Loss Prevention** → Early disease detection before widespread damage
- 🔬 **Expert-Level Diagnosis** → AI-powered identification accessible to all farmers
- 💊 **Treatment Guidance** → Automated pesticide and fungicide recommendations
- 📱 **Accessibility** → Web-based interface requiring only a smartphone camera

---

## ✨ Features

### 🤖 Deep Learning Classification
- **38 Disease Classes**: Comprehensive coverage of common plant diseases
- **14 Crop Species**: Apple, Blueberry, Cherry, Corn, Grape, Orange, Peach, Pepper, Potato, Raspberry, Soybean, Squash, Strawberry, Tomato
- **CNN Architecture**: TensorFlow/Keras-based convolutional neural network
- **Image Preprocessing**: Automatic resizing and normalization for optimal inference

### 🌱 Supported Disease Categories

| Crop | Diseases Covered |
|------|------------------|
| **Apple** | Apple Scab, Black Rot, Cedar Apple Rust, Healthy |
| **Cherry** | Powdery Mildew, Healthy |
| **Corn** | Cercospora Leaf Spot, Common Rust, Northern Leaf Blight, Healthy |
| **Grape** | Black Rot, Esca (Black Measles), Leaf Blight, Healthy |
| **Potato** | Early Blight, Late Blight, Healthy |
| **Tomato** | Bacterial Spot, Early/Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Mosaic Virus, Yellow Leaf Curl Virus, Healthy |
| **+ More** | Orange, Peach, Pepper, Raspberry, Soybean, Squash, Strawberry |

### 💊 Automated Treatment Recommendations
- **Disease-Specific Pesticides**: Curated database of recommended treatments
- **Fungicide Suggestions**: Targeted fungicide recommendations (Captan, Mancozeb, Azoxystrobin, etc.)
- **Bactericide Options**: Copper-based treatments for bacterial infections
- **Viral Disease Management**: Control strategies for viral infections

### 🖥️ Modern Web Interface
- **React Frontend**: Responsive, user-friendly interface
- **Drag & Drop Upload**: Easy image submission
- **Real-Time Results**: Instant classification with confidence scores
- **Treatment Display**: Clear presentation of recommended actions

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PRESENTATION LAYER                               │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                    React Frontend (Vite)                         │    │
│  │  • Image Upload Interface    • Results Display                   │    │
│  │  • Disease Information       • Treatment Recommendations         │    │
│  └──────────────────────────────┬──────────────────────────────────┘    │
└─────────────────────────────────┼───────────────────────────────────────┘
                                  │ HTTP/REST
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           API LAYER                                      │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                    Flask REST API                                │    │
│  │  • /predict endpoint         • CORS enabled                      │    │
│  │  • Image validation          • Response formatting               │    │
│  └──────────────────────────────┬──────────────────────────────────┘    │
└─────────────────────────────────┼───────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      MACHINE LEARNING LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │    Image     │  │     CNN      │  │   Disease    │                   │
│  │ Preprocessing│→ │    Model     │→ │   Mapping    │                   │
│  │  (PIL/Keras) │  │ (TensorFlow) │  │  (38 Classes)│                   │
│  └──────────────┘  └──────────────┘  └──────────────┘                   │
│                                              │                           │
│                                              ▼                           │
│                           ┌──────────────────────────────┐              │
│                           │  Treatment Recommendation    │              │
│                           │  Database (Pesticides/       │              │
│                           │  Fungicides/Management)      │              │
│                           └──────────────────────────────┘              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Plant-Disease-Classification-And-Analysis/
├── API/                                    # Flask Backend API
│   ├── app.py                              # Main Flask application
│   ├── plant_disease_model.h5              # Trained CNN model
│   └── templates/
│       ├── main. html                       # Upload interface
│       └── result.html                     # Results display
├── medical-proj-frontend-master/           # React Frontend
│   ├── src/
│   │   ├── components/                     # React components
│   │   ├── App.jsx                         # Main application
│   │   └── main.jsx                        # Entry point
│   ├── backend/
│   │   └── app.py                          # Alternative backend
│   ├── package.json                        # Node dependencies
│   └── vite.config.js                      # Vite configuration
├── Docs/                                   # Documentation
│   ├── AI-Based-Plant-Disease-Classification-System.pdf
│   ├── AI-Based-Plant-Disease-Classification-System. pptx
│   ├── Model Archi.png                     # Architecture diagram
│   └── Report.pdf                          # Detailed project report
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Python 3.8+
- Node. js 16+
- TensorFlow 2. x

### Backend Setup

```bash
# Clone repository
git clone https://github.com/om-vastre/Plant-Disease-Classification-And-Analysis.git
cd Plant-Disease-Classification-And-Analysis/API

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install flask flask-cors tensorflow keras pillow numpy pandas

# Update model path in app.py
# model = load_model("path/to/plant_disease_model. h5")

# Run Flask server
python app.py
```

### Frontend Setup

```bash
cd medical-proj-frontend-master

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main upload interface |
| `/predict` | POST | Image classification endpoint |

### Prediction Request
```bash
curl -X POST -F "file=@leaf_image.jpg" http://localhost:5000/predict
```

### Response Format
```json
{
  "class": "Tomato___Late_blight",
  "title": "Fungal disease causing dark lesions on tomato leaves and fruit, impacting yield.",
  "treatment": "Fungicides such as Chlorothalonil, Mancozeb, or Metalaxyl."
}
```

---

## 📊 Dataset

The model is trained on the **PlantVillage Dataset** containing:
- **38 Disease Categories** (including healthy classes)
- **14 Crop Species**
- **50,000+ Labeled Images**
- **Image Resolution**: Standardized for CNN input

### Class Distribution

| Category Type | Count |
|---------------|-------|
| Fungal Diseases | 22 |
| Bacterial Diseases | 4 |
| Viral Diseases | 3 |
| Pest Infestations | 2 |
| Healthy Classes | 7 |

---

## 🧠 Model Architecture

The CNN model follows a standard deep learning architecture:

1. **Input Layer**: 224×224×3 RGB images
2. **Convolutional Blocks**: Feature extraction layers
3. **Pooling Layers**: Dimensionality reduction
4. **Dense Layers**: Classification head
5. **Output Layer**: Softmax activation for 38 classes

### Training Configuration
- **Optimizer**: Adam
- **Loss Function**: Categorical Cross-Entropy
- **Data Augmentation**: Rotation, flip, zoom, shift

---

## 💊 Treatment Database

The system includes a comprehensive treatment recommendation database:

```python
pesticides = {
    "Apple___Apple_scab": "Fungicides: Captan, Mancozeb, Thiophanate-methyl",
    "Tomato___Late_blight": "Fungicides: Chlorothalonil, Mancozeb, Metalaxyl",
    "Potato___Early_blight": "Fungicides: Chlorothalonil, Mancozeb, Propiconazole",
    "Grape___Black_rot": "Fungicides: Captan, Myclobutanil, Thiophanate-methyl",
    # ... 30+ disease-specific treatments
}
```

---

## 🔮 Future Enhancements

- 📱 **Mobile Application**: React Native/Flutter mobile app
- 🌍 **Multi-Language Support**: Regional language translations
- 📊 **Severity Assessment**: Disease progression staging
- 🛰️ **Drone Integration**: Large-scale field scanning
- 📈 **Analytics Dashboard**: Farm-level disease tracking
- 🤖 **Chatbot Integration**: AI-powered farming advice

---

## 📚 Documentation

Detailed documentation available in the `Docs/` folder:
- **Project Report**: Comprehensive technical documentation
- **Presentation**: System overview slides
- **Model Architecture**: CNN architecture diagram

---

## 👤 Author

**Om Vastre** - [GitHub](https://github.com/om-vastre)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 

---

<div align="center">

⭐ **Star this repository if you find it helpful!** ⭐

*Empowering farmers with AI-driven crop protection*

</div>
