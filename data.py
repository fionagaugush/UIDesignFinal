data = {
    "user": {
        "id": 1,
        "step": 0,  # 0: Haven’t started learning, 1: Clicked on learn button, 2: Started quiz
        "currentQuizQuestion": 0,
        "quizScore": 0
    },
    "birds": [
        {
            "id": 1,
            "name": "Dove",
            "imageUrl": "birds_image/bird_1.png",
            "soundUrl": "birds_audio/bird_1.mp3",
            "description": "Short Description",
            "call": {
                "sound": "roh, roh, roh",
                "type": ["Harsh Squawk", "Croak/Quack Scream"],
                "pattern": ["Flat", "Simple"]
            },
            "spottingLocations": ["Location Name1"]
        },
        {
            "id": 2,
            "name": "Other bird",
            "imageUrl": "birds_image/bird_2.png",
            "soundUrl": "birds_audio/bird_2.mp3",
            "description": "Short Description",
            "call": {
                "sound": "roh, roh, roh",
                "type": ["Harsh Squawk", "Croak/Quack Scream"],
                "pattern": ["Flat", "Simple"]
            },
            "spottingLocations": ["Location Name1"]
        },
    ],
    "quizQuestions": [
        {
            "id": 1, 
            "type": "QUIZ_MULTIPLE_CHOICE",
            "questionText": "Which bird's call can be described as a 'low mournful coo'? ",
            "choices": [
                "House Sparrow",
                "Red Bellied Woodpecker",
                "Mourning Dove",
                "Red Tailed Hawk",
                "None of the Above"
            ],
            "correctAnswer": 2
        },
        {
            "id": 2,
            "type": "QUIZ_MAPPING",
            "questionText": "Listen to the three audio clips and drag them to the correct bird",
            "sounds": [
                "birds_audio/BlueHeron.mp3",
                "birds_audio/Woodpecker.mp3",
                "birds_audio/Hawk.mp3"
            ],
            "images": [
                "birds_image/BlueHeron.jpeg",
                "birds_image/Woodpecker.jpeg",
                "birds_image/Hawk.jpeg"
            ],
            "correctAnswer": [1, 2, 0],
            "birds": ["Great Blue Heron", "Red Bellied Woodpecker", "Red Tailed Hawk"]
        },
        {
            "id": 3, 
            "type": "QUIZ_MULTIPLE_CHOICE",
            "questionText": "True or False: This recording is a house sparrow",
            "audioURL": "birds_audio/Sparrow.mp3",
            "choices": [
                "True",
                "False"
            ],
            "correctAnswer": 0
        },
        {
            "id": 4, 
            "type": "QUIZ_MULTIPLE_CHOICE",
            "questionText": "Which bird makes a 'Peter Peter Peter' noise?",
            "choices": [
                "Tufted Titmouse",
                "Red Bellied Woodpecker",
                "Mourning Dove",
                "Great Blue Heron",
                "None of the Above"
            ],
            "correctAnswer": 0
        },
        {
            "id": 5, 
            "type": "QUIZ_MULTIPLE_CHOICE",
            "questionText": "Listen to the audio mashup and identify the two birds in it",
            "audioURL": "birds_audio/MourningDove_and_Cardinal.mp3",
            "choices": [
                "House Sparrow + Red Bellied Woodpecker",
                "Mourning Dove + Cardinal",
                "Red Tailed Hawk + Cardinal",
                "House Sparrow + Mourning Dove",
                "None of the Above"
            ],
            "correctAnswer": 1
        },
        {
            "id": 6,
            "type": "QUIZ_MAPPING",
            "questionText": "Listen to the three audio clips and drag them to the correct bird",
            "sounds": [
                "birds_audio/Sparrow.mp3",
                "birds_audio/Cardinal.mp3",
                "birds_audio/MourningDove.mp3"
            ],
            "images": [
                "birds_image/Sparrow.jpeg",
                "birds_image/Cardinal.jpeg",
                "birds_image/MourningDove.jpeg"
            ],
            "correctAnswer": [1, 2, 0],
            "birds": ["House Sparrow", "Northern Cardinal", "Mourning Dove"]
        },
        {
            "id": 7,
            "type": "QUIZ_MULTIPLE_CHOICE",
            "questionText": "Which bird makes a 'keeeeer' noise?",
            "choices": [
                "Red Bellied Woodpecker",
                "Tufted Titmouse",
                "Red Tailed Hawk",
                "Blue Jay",
                "None of the Above"
            ],
            "correctAnswer": 2,
        }, 
        {
            "id": 8,
            "type": "QUIZ_MULTIPLE_CHOICE",
            "questionText": "True or False: This recording is a Northern Cardinal",
            "audioURL": "birds_audio/Sparrow.mp3",
            "choices": [
                "True",
                "False"
            ],
            "correctAnswer": 1
        }
    ]
}
