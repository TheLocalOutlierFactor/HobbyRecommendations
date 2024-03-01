# Hobby recommendation Web-Application

The application is hosted on the following address: https://hobbiesrecommendations.herokuapp.com/ 
(UPD: RIP Heroku)

The application represents a questionnaire with 57 questions on different subjects. 

After answering the questionnaire user receives a list of hobby recommendations predicted by a machine learning model.

Results of the young people survey published on Kaggle were used for training the model (https://www.kaggle.com/miroslavsabo/young-people-survey).

All questions are translated to Russian language by me.

Front-end part of the application is created with ReactJS.

Back-end part of the application is created with Flask.

Data processing and model training pipeline is located in the file *recommendations_pipeline.ipynb*.

The model used for making prediction consists of 3 Multilayer Perceptrons (implementation from Scikit-learn library).

All hobbies were split into 3 groups based on the balance between classes in the data pool for each separate hobby (hobbies with balanced data, hobbies with data where class 1 predominates, hobbies with data where class 0 predominates). This was done to ensure optimal fine-tuning of the hyper-parameters of the model for each case of balance/imbalance of classes in data for each separate group of hobbies.

The pipeline also contains an estimation of performance for the more classical approach to recommender systems - the cosine similarity.

User receives up to 6 recommendations sorted by the prediction confidence, from highest to lowest, minimal confidence threshold for a recommendation is 0.5.
