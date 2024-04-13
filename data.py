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
            "type": "QUIZ_SOUND",
            "birdId": 1,
            "questionText": "Which bird makes this sound?",
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "correctAnswer": 1
        },
        {
            "id": 2,
            "type": "QUIZ_MAPPING",
            "questionText": "Match the bird sounds to the correct bird.",
            "sounds": [
                1,
                2,
                3,
                4
            ],
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "correctAnswer": [1, 2, 3, 4]
        },
        {
            "id": 3,
            "type": "QUIZ_TEXT",
            "birdId": 1,
            "questionText": "Which bird makes a 'Peter Peter Peter' noise",
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "correctAnswer": 1
        },
        {
            "id": 4,
            "type": "QUIZ_SOUND_MASHUP",
            "birdMashUpId": 1,
            "questionText": "Which bird makes this sound?",
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "correctAnswer": 1
        },
    ]
}
