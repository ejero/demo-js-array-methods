const students = [ 
    {
    "id": 1,
    "first_name": "Issy",
    "last_name": "Reisenstein",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Public Speaking", "Grade": "F" },
    "age": 15
    },
    {
    "id": 2,
    "first_name": "Candie",
    "last_name": "Humphries",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 15
    },
    {
    "id": 3,
    "first_name": "Feliks",
    "last_name": "Matyas",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "C" },
    "age": 14
    },
    {
    "id": 4,
    "first_name": "Pru",
    "last_name": "Tunkin",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 17
    },
    {
    "id": 5,
    "first_name": "Kelbee",
    "last_name": "Pina",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 6,
    "first_name": "Jany",
    "last_name": "Ahlf",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "D" },
    "age": 17
    },
    {
    "id": 7,
    "first_name": "Hamlin",
    "last_name": "Siderfin",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 8,
    "first_name": "Dallon",
    "last_name": "Rawles",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Psychology", "Grade": "D" },
    "age": 14
    },
    {
    "id": 9,
    "first_name": "Bryce",
    "last_name": "Bulleyn",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Calculus", "Grade": "D" },
    "age": 17
    },
    {
    "id": 10,
    "first_name": "Gayla",
    "last_name": "Maxfield",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 16
    },
    {
    "id": 11,
    "first_name": "Klemens",
    "last_name": "Elward",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 16
    },
    {
    "id": 12,
    "first_name": "Norry",
    "last_name": "Fidler",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 15
    },
    {
    "id": 13,
    "first_name": "Derrek",
    "last_name": "Eardley",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 16
    },
    {
    "id": 14,
    "first_name": "Carver",
    "last_name": "Rohlfing",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Calculus", "Grade": "D" },
    "age": 15
    },
    {
    "id": 15,
    "first_name": "Walton",
    "last_name": "McGrale",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "A" },
    "age": 16
    },
    {
    "id": 16,
    "first_name": "Desiree",
    "last_name": "Fitzackerley",
    "gender": "Genderfluid",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Writing", "Grade": "D" },
    "age": 17
    },
    {
    "id": 17,
    "first_name": "Yancey",
    "last_name": "Latchmore",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 17
    },
    {
    "id": 18,
    "first_name": "Fania",
    "last_name": "Jarrold",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "PE", "Grade": "D" },
    "age": 16
    },
    {
    "id": 19,
    "first_name": "Irwin",
    "last_name": "Annis",
    "gender": "Non-binary",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Trigonometry", "Grade": "B" },
    "age": 16
    },
    {
    "id": 20,
    "first_name": "Adair",
    "last_name": "Spenceley",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 15
    },
    {
    "id": 21,
    "first_name": "Chas",
    "last_name": "Nuss",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "B" },
    "age": 16
    },
    {
    "id": 22,
    "first_name": "Anthea",
    "last_name": "Yakovlev",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Public Speaking", "Grade": "B" },
    "second_subject": { "Subject": "Art", "Grade": "D" },
    "age": 14
    },
    {
    "id": 23,
    "first_name": "Hamilton",
    "last_name": "Lynett",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 17
    },
    {
    "id": 24,
    "first_name": "Daile",
    "last_name": "Malinson",
    "gender": "Genderfluid",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "C" },
    "second_subject": { "Subject": "Biology", "Grade": "A" },
    "age": 14
    },
    {
    "id": 25,
    "first_name": "Rutger",
    "last_name": "Kettlestringe",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "B" },
    "second_subject": { "Subject": "Physics", "Grade": "C" },
    "age": 16
    },
    {
    "id": 26,
    "first_name": "Edlin",
    "last_name": "Ivantsov",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "B" },
    "age": 17
    },
    {
    "id": 27,
    "first_name": "Steven",
    "last_name": "Trimme",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Art", "Grade": "B" },
    "second_subject": { "Subject": "PE", "Grade": "D" },
    "age": 15
    },
    {
    "id": 28,
    "first_name": "Merv",
    "last_name": "Duffield",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "A" },
    "age": 17
    },
    {
    "id": 29,
    "first_name": "Aldis",
    "last_name": "Goodburn",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Sociology", "Grade": "A" },
    "second_subject": { "Subject": "Psychology", "Grade": "C" },
    "age": 16
    },
    {
    "id": 30,
    "first_name": "Brandice",
    "last_name": "Tembey",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 31,
    "first_name": "Ashil",
    "last_name": "Mapstone",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "D" },
    "age": 15
    },
    {
    "id": 32,
    "first_name": "Arel",
    "last_name": "Stranio",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 17
    },
    {
    "id": 33,
    "first_name": "Lazare",
    "last_name": "Tessier",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Public Speaking", "Grade": "D" },
    "age": 17
    },
    {
    "id": 34,
    "first_name": "Mortie",
    "last_name": "Titheridge",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 17
    },
    {
    "id": 35,
    "first_name": "Hall",
    "last_name": "Bartod",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "B" },
    "age": 14
    },
    {
    "id": 36,
    "first_name": "Heloise",
    "last_name": "Zuanelli",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "B" },
    "second_subject": { "Subject": "Physics", "Grade": "C" },
    "age": 16
    },
    {
    "id": 37,
    "first_name": "Korella",
    "last_name": "Shinton",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Biology", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 15
    },
    {
    "id": 38,
    "first_name": "Wadsworth",
    "last_name": "Bartolomeazzi",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 15
    },
    {
    "id": 39,
    "first_name": "Anthony",
    "last_name": "Kadd",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "C" },
    "age": 15
    },
    {
    "id": 40,
    "first_name": "Fredrika",
    "last_name": "Murton",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Sociology", "Grade": "A" },
    "second_subject": { "Subject": "Biology", "Grade": "F" },
    "age": 16
    },
    {
    "id": 41,
    "first_name": "Carolus",
    "last_name": "Colum",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Biology", "Grade": "D" },
    "age": 17
    },
    {
    "id": 42,
    "first_name": "Vivi",
    "last_name": "Sammon",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Biology", "Grade": "F" },
    "age": 15
    },
    {
    "id": 43,
    "first_name": "Bryn",
    "last_name": "Darrigoe",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 15
    },
    {
    "id": 44,
    "first_name": "Charyl",
    "last_name": "Fewkes",
    "gender": "Genderfluid",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 45,
    "first_name": "Zane",
    "last_name": "Roskilly",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Sociology", "Grade": "D" },
    "age": 15
    },
    {
    "id": 46,
    "first_name": "Maison",
    "last_name": "MacPake",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 16
    },
    {
    "id": 47,
    "first_name": "Garik",
    "last_name": "Kielty",
    "gender": "Polygender",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Trigonometry", "Grade": "B" },
    "second_subject": { "Subject": "Physics", "Grade": "C" },
    "age": 15
    },
    {
    "id": 48,
    "first_name": "Flory",
    "last_name": "Lysaght",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Calculus", "Grade": "F" },
    "age": 15
    },
    {
    "id": 49,
    "first_name": "Corey",
    "last_name": "Wilkes",
    "gender": "Bigender",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Algebra", "Grade": "D" },
    "age": 14
    },
    {
    "id": 50,
    "first_name": "Aubrey",
    "last_name": "Ditter",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Trigonometry", "Grade": "F" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 51,
    "first_name": "Cristiano",
    "last_name": "Ettery",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Sociology", "Grade": "F" },
    "age": 16
    },
    {
    "id": 52,
    "first_name": "Say",
    "last_name": "Rundall",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Sociology", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 53,
    "first_name": "Gail",
    "last_name": "Creane",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 16
    },
    {
    "id": 54,
    "first_name": "Sharia",
    "last_name": "Alejandro",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "PE", "Grade": "B" },
    "age": 15
    },
    {
    "id": 55,
    "first_name": "Adolf",
    "last_name": "Weare",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 17
    },
    {
    "id": 56,
    "first_name": "Borden",
    "last_name": "Connelly",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 17
    },
    {
    "id": 57,
    "first_name": "Barret",
    "last_name": "Rosekilly",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "F" },
    "second_subject": { "Subject": "Biology", "Grade": "F" },
    "age": 14
    },
    {
    "id": 58,
    "first_name": "Willey",
    "last_name": "Atley",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "B" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 16
    },
    {
    "id": 59,
    "first_name": "Ardelis",
    "last_name": "Seacroft",
    "gender": "Genderqueer",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "B" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 16
    },
    {
    "id": 60,
    "first_name": "Kara",
    "last_name": "Willbraham",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Calculus", "Grade": "F" },
    "age": 17
    },
    {
    "id": 61,
    "first_name": "Elfrida",
    "last_name": "Wasteney",
    "gender": "Polygender",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 14
    },
    {
    "id": 62,
    "first_name": "Dietrich",
    "last_name": "Bettridge",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "A" },
    "age": 14
    },
    {
    "id": 63,
    "first_name": "Martelle",
    "last_name": "Gawkroge",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 14
    },
    {
    "id": 64,
    "first_name": "Tamqrah",
    "last_name": "Adamovicz",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 14
    },
    {
    "id": 65,
    "first_name": "Harmonie",
    "last_name": "Cayley",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Biology", "Grade": "D" },
    "age": 15
    },
    {
    "id": 66,
    "first_name": "Katheryn",
    "last_name": "Edleston",
    "gender": "Agender",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 16
    },
    {
    "id": 67,
    "first_name": "Darya",
    "last_name": "Semmens",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "History", "Grade": "B" },
    "age": 16
    },
    {
    "id": 68,
    "first_name": "Winnie",
    "last_name": "Summerrell",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Trigonometry", "Grade": "B" },
    "second_subject": { "Subject": "Art", "Grade": "C" },
    "age": 16
    },
    {
    "id": 69,
    "first_name": "Immanuel",
    "last_name": "Proffer",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 17
    },
    {
    "id": 70,
    "first_name": "Celene",
    "last_name": "Reef",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Trigonometry", "Grade": "A" },
    "second_subject": { "Subject": "PE", "Grade": "F" },
    "age": 14
    },
    {
    "id": 71,
    "first_name": "Erasmus",
    "last_name": "McGuff",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "C" },
    "age": 16
    },
    {
    "id": 72,
    "first_name": "Hillier",
    "last_name": "Edgworth",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Physics", "Grade": "D" },
    "age": 15
    },
    {
    "id": 73,
    "first_name": "Stanleigh",
    "last_name": "Luxton",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "PE", "Grade": "F" },
    "age": 17
    },
    {
    "id": 74,
    "first_name": "Angelita",
    "last_name": "McGorley",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Algebra", "Grade": "B" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 17
    },
    {
    "id": 75,
    "first_name": "Dorry",
    "last_name": "Ewestace",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 14
    },
    {
    "id": 76,
    "first_name": "Lorne",
    "last_name": "Benoist",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 16
    },
    {
    "id": 77,
    "first_name": "Valery",
    "last_name": "Kinkade",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Public Speaking", "Grade": "D" },
    "age": 17
    },
    {
    "id": 78,
    "first_name": "Edmund",
    "last_name": "Dhillon",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Sociology", "Grade": "F" },
    "age": 16
    },
    {
    "id": 79,
    "first_name": "Anne-corinne",
    "last_name": "Medgewick",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Science", "Grade": "A" },
    "second_subject": { "Subject": "Calculus", "Grade": "B" },
    "age": 17
    },
    {
    "id": 80,
    "first_name": "Erroll",
    "last_name": "Labet",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Biology", "Grade": "F" },
    "age": 14
    },
    {
    "id": 81,
    "first_name": "Roxi",
    "last_name": "Taw",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 14
    },
    {
    "id": 82,
    "first_name": "Bert",
    "last_name": "McTurk",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 16
    },
    {
    "id": 83,
    "first_name": "Loria",
    "last_name": "De Malchar",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 14
    },
    {
    "id": 84,
    "first_name": "Fernanda",
    "last_name": "Meriot",
    "gender": "Genderqueer",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "English", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "D" },
    "age": 14
    },
    {
    "id": 85,
    "first_name": "Melisse",
    "last_name": "Dobbings",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Art", "Grade": "C" },
    "age": 14
    },
    {
    "id": 86,
    "first_name": "Davine",
    "last_name": "Whibley",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Sociology", "Grade": "C" },
    "age": 15
    },
    {
    "id": 87,
    "first_name": "Roddy",
    "last_name": "Monte",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "B" },
    "second_subject": { "Subject": "Biology", "Grade": "F" },
    "age": 14
    },
    {
    "id": 88,
    "first_name": "Miran",
    "last_name": "Renehan",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "English", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 17
    },
    {
    "id": 89,
    "first_name": "Cassie",
    "last_name": "Goodwyn",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "C" },
    "age": 14
    },
    {
    "id": 90,
    "first_name": "Starr",
    "last_name": "Liddard",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "F" },
    "age": 14
    },
    {
    "id": 91,
    "first_name": "Lamont",
    "last_name": "Torrisi",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Sophomore",
    "first_subject": { "Subject": "Biology", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 15
    },
    {
    "id": 92,
    "first_name": "Worthington",
    "last_name": "McCuffie",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Calculus", "Grade": "D" },
    "age": 14
    },
    {
    "id": 93,
    "first_name": "Ninon",
    "last_name": "Boome",
    "gender": "Polygender",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Physics", "Grade": "F" },
    "age": 17
    },
    {
    "id": 94,
    "first_name": "Nobe",
    "last_name": "Adelsberg",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Algebra", "Grade": "A" },
    "age": 17
    },
    {
    "id": 95,
    "first_name": "Finley",
    "last_name": "Cure",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Psychology", "Grade": "D" },
    "age": 16
    },
    {
    "id": 96,
    "first_name": "Nikola",
    "last_name": "Fowlston",
    "gender": "Bigender",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "History", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "D" },
    "age": 17
    },
    {
    "id": 97,
    "first_name": "Kyrstin",
    "last_name": "O' Driscoll",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Junior",
    "first_subject": { "Subject": "Public Speaking", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "D" },
    "age": 16
    },
    {
    "id": 98,
    "first_name": "Gus",
    "last_name": "Argente",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "D" },
    "age": 14
    },
    {
    "id": 99,
    "first_name": "Georgie",
    "last_name": "Nendick",
    "gender": "Female",
    "ranking": 0,
    "grade_level": "Freshman",
    "first_subject": { "Subject": "Algebra", "Grade": "A" },
    "second_subject": { "Subject": "Art", "Grade": "D" },
    "age": 14
    },
    {
    "id": 100,
    "first_name": "Denver",
    "last_name": "Redmond",
    "gender": "Male",
    "ranking": 0,
    "grade_level": "Senior",
    "first_subject": { "Subject": "Art", "Grade": "A" },
    "second_subject": { "Subject": "Writing", "Grade": "F" },
    "age": 17
    } 
]  

const teachers = [
    {
    "first_name": "Taddeusz",
    "last_name": "Hails",
    "salary": 74165,
    "start_year": 2007,
    "class": "PE"
    },
    {
    "first_name": "Serene",
    "last_name": "Stairmand",
    "salary": 23943,
    "start_year": 2016,
    "class": "Biology"
    },
    {
    "first_name": "Enrica",
    "last_name": "Bagnal",
    "salary": 63960,
    "start_year": 2011,
    "class": "History"
    },
    {
    "first_name": "Florence",
    "last_name": "Stoffler",
    "salary": 67341,
    "start_year": 2015,
    "class": "Public Speaking"
    },
    {
    "first_name": "Jonah",
    "last_name": "Kimmince",
    "salary": 96394,
    "start_year": 2020,
    "class": "PE"
    },
    {
    "first_name": "Jillene",
    "last_name": "Wisson",
    "salary": 36829,
    "start_year": 2007,
    "class": "Public Speaking"
    },
    {
    "first_name": "Charissa",
    "last_name": "Tchir",
    "salary": 34439,
    "start_year": 2004,
    "class": "Art"
    },
    {
    "first_name": "Betti",
    "last_name": "Mumford",
    "salary": 99606,
    "start_year": 2015,
    "class": "Calculus"
    },
    {
    "first_name": "Hort",
    "last_name": "Curtin",
    "salary": 56629,
    "start_year": 2014,
    "class": "History"
    },
    {
    "first_name": "Kaitlynn",
    "last_name": "Domerc",
    "salary": 76389,
    "start_year": 2014,
    "class": "Algebra"
    },
    {
    "first_name": "Rowney",
    "last_name": "Le Jean",
    "salary": 24749,
    "start_year": 2003,
    "class": "PE"
    },
    {
    "first_name": "Ashly",
    "last_name": "Arnott",
    "salary": 14617,
    "start_year": 2000,
    "class": "Calculus"
    },
    {
    "first_name": "Shina",
    "last_name": "Gooder",
    "salary": 55509,
    "start_year": 2000,
    "class": "Algebra"
    },
    {
    "first_name": "Tanney",
    "last_name": "Clemens",
    "salary": 33962,
    "start_year": 2021,
    "class": "Algebra"
    },
    {
    "first_name": "Laraine",
    "last_name": "Limon",
    "salary": 25354,
    "start_year": 2001,
    "class": "Psychology"
    },
    {
    "first_name": "Dex",
    "last_name": "Jerrams",
    "salary": 107729,
    "start_year": 2022,
    "class": "Algebra"
    },
    {
    "first_name": "Leonidas",
    "last_name": "Dodgshun",
    "salary": 12448,
    "start_year": 2020,
    "class": "Trigonometry"
    },
    {
    "first_name": "Emelen",
    "last_name": "Witherspoon",
    "salary": 50546,
    "start_year": 2005,
    "class": "History"
    },
    {
    "first_name": "Vivi",
    "last_name": "de Juares",
    "salary": 4621,
    "start_year": 2022,
    "class": "Sociology"
    },
    {
    "first_name": "Babita",
    "last_name": "Degoey",
    "salary": 68555,
    "start_year": 2011,
    "class": "Art"
    },
    {
    "first_name": "Moises",
    "last_name": "Dick",
    "salary": 77940,
    "start_year": 2009,
    "class": "Psychology"
    },
    {
    "first_name": "Berkly",
    "last_name": "Benthall",
    "salary": 106994,
    "start_year": 2004,
    "class": "Algebra"
    },
    {
    "first_name": "Zaccaria",
    "last_name": "Tupling",
    "salary": 55409,
    "start_year": 2013,
    "class": "Biology"
    },
    {
    "first_name": "Amandi",
    "last_name": "Elia",
    "salary": 7807,
    "start_year": 2021,
    "class": "Sociology"
    },
    {
    "first_name": "Micah",
    "last_name": "Filipovic",
    "salary": 71027,
    "start_year": 2021,
    "class": "Sociology"
    },
    {
    "first_name": "Gearalt",
    "last_name": "Rosenbusch",
    "salary": 36083,
    "start_year": 2023,
    "class": "Trigonometry"
    },
    {
    "first_name": "Jonathon",
    "last_name": "Witchard",
    "salary": 15376,
    "start_year": 2008,
    "class": "History"
    },
    {
    "first_name": "Wainwright",
    "last_name": "Lumb",
    "salary": 80931,
    "start_year": 2016,
    "class": "Algebra"
    },
    {
    "first_name": "Jon",
    "last_name": "Wagnerin",
    "salary": 51736,
    "start_year": 2019,
    "class": "Trigonometry"
    },
    {
    "first_name": "Roseanna",
    "last_name": "Brotherton",
    "salary": 5343,
    "start_year": 2000,
    "class": "History"
    },
    {
    "first_name": "Benedetta",
    "last_name": "Torregiani",
    "salary": 106707,
    "start_year": 2005,
    "class": "Psychology"
    },
    {
    "first_name": "Christen",
    "last_name": "Ashment",
    "salary": 7427,
    "start_year": 2022,
    "class": "Public Speaking"
    },
    {
    "first_name": "Renell",
    "last_name": "Mudge",
    "salary": 29691,
    "start_year": 2014,
    "class": "Biology"
    },
    {
    "first_name": "Elmo",
    "last_name": "Budding",
    "salary": 9240,
    "start_year": 2011,
    "class": "Sociology"
    },
    {
    "first_name": "Correy",
    "last_name": "Rickersey",
    "salary": 54912,
    "start_year": 2004,
    "class": "Public Speaking"
    },
    {
    "first_name": "Anne-corinne",
    "last_name": "Diviney",
    "salary": 54824,
    "start_year": 2002,
    "class": "History"
    },
    {
    "first_name": "Mollee",
    "last_name": "Probet",
    "salary": 70404,
    "start_year": 2003,
    "class": "Calculus"
    },
    {
    "first_name": "Nannette",
    "last_name": "Ramsdell",
    "salary": 8722,
    "start_year": 2015,
    "class": "Public Speaking"
    },
    {
    "first_name": "Alex",
    "last_name": "Corbally",
    "salary": 84678,
    "start_year": 2022,
    "class": "Public Speaking"
    },
    {
    "first_name": "Torrey",
    "last_name": "Mattiato",
    "salary": 35322,
    "start_year": 2003,
    "class": "History"
    },
    {
    "first_name": "Salvador",
    "last_name": "Ege",
    "salary": 104189,
    "start_year": 2001,
    "class": "Algebra"
    },
    {
    "first_name": "Zeke",
    "last_name": "Cootes",
    "salary": 101979,
    "start_year": 2019,
    "class": "Art"
    },
    {
    "first_name": "Brew",
    "last_name": "Hansel",
    "salary": 65043,
    "start_year": 2022,
    "class": "Physics"
    },
    {
    "first_name": "Ethelind",
    "last_name": "Dreinan",
    "salary": 86997,
    "start_year": 2006,
    "class": "Public Speaking"
    },
    {
    "first_name": "Elwira",
    "last_name": "Melonby",
    "salary": 95122,
    "start_year": 2007,
    "class": "Psychology"
    },
    {
    "first_name": "Karrah",
    "last_name": "Lindeman",
    "salary": 5646,
    "start_year": 2006,
    "class": "Calculus"
    },
    {
    "first_name": "Ramona",
    "last_name": "Smaile",
    "salary": 8804,
    "start_year": 2023,
    "class": "Public Speaking"
    },
    {
    "first_name": "Arne",
    "last_name": "Macveigh",
    "salary": 24038,
    "start_year": 2022,
    "class": "Biology"
    },
    {
    "first_name": "Dusty",
    "last_name": "Vardie",
    "salary": 108368,
    "start_year": 2022,
    "class": "Art"
    },
    {
    "first_name": "Duffy",
    "last_name": "Wickson",
    "salary": 81665,
    "start_year": 2001,
    "class": "Algebra"
    },
    {
    "first_name": "Sonnie",
    "last_name": "Yakushkin",
    "salary": 80428,
    "start_year": 2023,
    "class": "Sociology"
    },
    {
    "first_name": "Ced",
    "last_name": "Burde",
    "salary": 21775,
    "start_year": 2010,
    "class": "Writing"
    },
    {
    "first_name": "Miof mela",
    "last_name": "Schall",
    "salary": 83713,
    "start_year": 2002,
    "class": "Writing"
    },
    {
    "first_name": "Eal",
    "last_name": "Scaife",
    "salary": 47389,
    "start_year": 2022,
    "class": "Calculus"
    },
    {
    "first_name": "Sile",
    "last_name": "Arnout",
    "salary": 45394,
    "start_year": 2017,
    "class": "Public Speaking"
    },
    {
    "first_name": "Adria",
    "last_name": "But",
    "salary": 35460,
    "start_year": 2004,
    "class": "Trigonometry"
    },
    {
    "first_name": "Shirline",
    "last_name": "O'Connolly",
    "salary": 28109,
    "start_year": 2005,
    "class": "Sociology"
    },
    {
    "first_name": "Mathilda",
    "last_name": "Christensen",
    "salary": 74593,
    "start_year": 2016,
    "class": "Trigonometry"
    },
    {
    "first_name": "Lexi",
    "last_name": "Pawley",
    "salary": 39457,
    "start_year": 2023,
    "class": "Trigonometry"
    },
    {
    "first_name": "Elmira",
    "last_name": "De Witt",
    "salary": 55319,
    "start_year": 2014,
    "class": "Public Speaking"
    },
    {
    "first_name": "Robyn",
    "last_name": "Phinnessy",
    "salary": 15863,
    "start_year": 2018,
    "class": "Algebra"
    },
    {
    "first_name": "Jermaine",
    "last_name": "Botwright",
    "salary": 95717,
    "start_year": 2022,
    "class": "Biology"
    },
    {
    "first_name": "Fleming",
    "last_name": "Sugden",
    "salary": 11287,
    "start_year": 2001,
    "class": "History"
    },
    {
    "first_name": "Way",
    "last_name": "Hoodless",
    "salary": 103765,
    "start_year": 2019,
    "class": "Trigonometry"
    },
    {
    "first_name": "Worthy",
    "last_name": "Vicary",
    "salary": 51356,
    "start_year": 2016,
    "class": "Algebra"
    },
    {
    "first_name": "Ring",
    "last_name": "Sidney",
    "salary": 28136,
    "start_year": 2013,
    "class": "Calculus"
    },
    {
    "first_name": "Hillie",
    "last_name": "Ranscombe",
    "salary": 57345,
    "start_year": 2010,
    "class": "Sociology"
    },
    {
    "first_name": "Laina",
    "last_name": "Shellsheere",
    "salary": 66818,
    "start_year": 2021,
    "class": "Biology"
    },
    {
    "first_name": "Deni",
    "last_name": "Blucher",
    "salary": 104219,
    "start_year": 2022,
    "class": "Public Speaking"
    },
    {
    "first_name": "Gwenni",
    "last_name": "Sarfas",
    "salary": 21916,
    "start_year": 2004,
    "class": "Art"
    },
    {
    "first_name": "Leeanne",
    "last_name": "Hupe",
    "salary": 71824,
    "start_year": 2017,
    "class": "Psychology"
    },
    {
    "first_name": "Currey",
    "last_name": "Seaborne",
    "salary": 95909,
    "start_year": 2019,
    "class": "Sociology"
    },
    {
    "first_name": "Virgie",
    "last_name": "Le Estut",
    "salary": 51001,
    "start_year": 2009,
    "class": "Algebra"
    },
    {
    "first_name": "Torr",
    "last_name": "Tarquinio",
    "salary": 88357,
    "start_year": 2009,
    "class": "Trigonometry"
    },
    {
    "first_name": "Allina",
    "last_name": "Mitcheson",
    "salary": 45421,
    "start_year": 2006,
    "class": "Algebra"
    },
    {
    "first_name": "Lothaire",
    "last_name": "Raise",
    "salary": 15087,
    "start_year": 2007,
    "class": "Writing"
    },
    {
    "first_name": "Martita",
    "last_name": "Jewkes",
    "salary": 15556,
    "start_year": 2008,
    "class": "Algebra"
    },
    {
    "first_name": "Reyna",
    "last_name": "Witty",
    "salary": 81104,
    "start_year": 2016,
    "class": "PE"
    },
    {
    "first_name": "Ty",
    "last_name": "Woolen",
    "salary": 99185,
    "start_year": 2009,
    "class": "Public Speaking"
    },
    {
    "first_name": "Rock",
    "last_name": "Rollitt",
    "salary": 56902,
    "start_year": 2008,
    "class": "Public Speaking"
    },
    {
    "first_name": "Perren",
    "last_name": "Valentine",
    "salary": 35010,
    "start_year": 2023,
    "class": "Algebra"
    },
    {
    "first_name": "Stuart",
    "last_name": "Badsey",
    "salary": 36150,
    "start_year": 2001,
    "class": "Sociology"
    },
    {
    "first_name": "Morlee",
    "last_name": "Speedin",
    "salary": 25062,
    "start_year": 2006,
    "class": "Algebra"
    },
    {
    "first_name": "Caye",
    "last_name": "Wibrew",
    "salary": 90568,
    "start_year": 2007,
    "class": "Biology"
    },
    {
    "first_name": "Del",
    "last_name": "Jozwicki",
    "salary": 23783,
    "start_year": 2009,
    "class": "Psychology"
    },
    {
    "first_name": "Clareta",
    "last_name": "Bowerman",
    "salary": 38551,
    "start_year": 2013,
    "class": "Public Speaking"
    },
    {
    "first_name": "Adrea",
    "last_name": "Wolford",
    "salary": 31895,
    "start_year": 2019,
    "class": "History"
    },
    {
    "first_name": "Emilia",
    "last_name": "Burrows",
    "salary": 32058,
    "start_year": 2006,
    "class": "Trigonometry"
    },
    {
    "first_name": "Baxie",
    "last_name": "Cockle",
    "salary": 24053,
    "start_year": 2009,
    "class": "PE"
    },
    {
    "first_name": "Waldemar",
    "last_name": "Rajchert",
    "salary": 70455,
    "start_year": 2004,
    "class": "Biology"
    },
    {
    "first_name": "Jeffy",
    "last_name": "Cranage",
    "salary": 29755,
    "start_year": 2018,
    "class": "Art"
    },
    {
    "first_name": "Nari",
    "last_name": "Newlands",
    "salary": 84318,
    "start_year": 2002,
    "class": "Psychology"
    },
    {
    "first_name": "Sharai",
    "last_name": "Jzhakov",
    "salary": 106132,
    "start_year": 2019,
    "class": "Calculus"
    },
    {
    "first_name": "Cort",
    "last_name": "Gladtbach",
    "salary": 101853,
    "start_year": 2007,
    "class": "Public Speaking"
    },
    {
    "first_name": "Mort",
    "last_name": "Hidderley",
    "salary": 57760,
    "start_year": 2004,
    "class": "Biology"
    },
    {
    "first_name": "Emelia",
    "last_name": "Mowles",
    "salary": 67077,
    "start_year": 2018,
    "class": "Writing"
    },
    {
    "first_name": "Thaxter",
    "last_name": "Syder",
    "salary": 70992,
    "start_year": 2009,
    "class": "Sociology"
    },
    {
    "first_name": "Lindy",
    "last_name": "Crips",
    "salary": 6743,
    "start_year": 2016,
    "class": "Public Speaking"
    },
    {
    "first_name": "Barclay",
    "last_name": "Schiefersten",
    "salary": 19705,
    "start_year": 2011,
    "class": "Trigonometry"
    },
    {
    "first_name": "Bowie",
    "last_name": "Goodier",
    "salary": 63261,
    "start_year": 2023,
    "class": "Writing"
    }
]

const substitutes = [
{
    "id": 1,
    "first_name": "Silvia",
    "last_name": "Imesson",
    "salary": 66423,
    "start_year": 2016,
    "class": "Physics"
    }, {
    "id": 2,
    "first_name": "Marvin",
    "last_name": "Joust",
    "salary": 24312,
    "start_year": 2012,
    "class": "Writing"
    }, {
    "id": 3,
    "first_name": "Windy",
    "last_name": "Deinert",
    "salary": 56421,
    "start_year": 2021,
    "class": "Art"
    }, {
    "id": 4,
    "first_name": "Emilio",
    "last_name": "Ronayne",
    "salary": 96087,
    "start_year": 2021,
    "class": "Psychology"
    }, {
    "id": 5,
    "first_name": "Spike",
    "last_name": "Rominov",
    "salary": 76185,
    "start_year": 2012,
    "class": "Biology"
    }, {
    "id": 6,
    "first_name": "Desiree",
    "last_name": "Toseland",
    "salary": 33337,
    "start_year": 2001,
    "class": "PE"
    }, {
    "id": 7,
    "first_name": "Gladys",
    "last_name": "Kowalik",
    "salary": 7702,
    "start_year": 2021,
    "class": "Calculus"
    }, {
    "id": 8,
    "first_name": "Diena",
    "last_name": "Werny",
    "salary": 65856,
    "start_year": 2014,
    "class": "History"
    }, {
    "id": 9,
    "first_name": "Kienan",
    "last_name": "Samter",
    "salary": 69297,
    "start_year": 2009,
    "class": "Algebra"
    }, {
    "id": 10,
    "first_name": "Wendie",
    "last_name": "Jouannisson",
    "salary": 4746,
    "start_year": 2022,
    "class": "Public Speaking"
    }, {
    "id": 11,
    "first_name": "Harri",
    "last_name": "Pinches",
    "salary": 75294,
    "start_year": 2016,
    "class": "Trigonometry"
    }
]


// Iesha  - Map, Filter, Reduce 
/* Use Case 1  -  map */ 
// Possible Use Case - Group Students together based on Letter grade
// Possible Use Case - Group Teachers together by certain salary ranges

/* Use Case 2 - filter */

/* USe Cse 3  - reduce */



// Rosita  
/* Use Case 1 - map */
// Possible Use Case - Give a student a ranking based on their letter grade. 



/* Use Case 2  - filter*/
// Possible Use Case - Give a teacher a raise based on certain salary ranges 




/* Use Case 3 - reduce */
// Total sum of each student per grade level

// Array.prototype.reduce() - iterate over an array and reduce it to a single value.
// Freshman , Sophomore, Junior, Senior

