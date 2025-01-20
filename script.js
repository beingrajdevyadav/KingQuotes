// Quotes JSON Data 
const Quotes = [
    { "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs", "category": "Inspiration" },
    { "quote": "Be the change that you wish to see in the world.", "author": "Mahatma Gandhi", "category": "Motivation" },
    { "quote": "In three words I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost", "category": "Life" },
    { "quote": "The journey of a thousand miles begins with one step.", "author": "Lao Tzu", "category": "Wisdom" },
    { "quote": "Life is what happens when you're busy making other plans.", "author": "John Lennon", "category": "Life" },
    { "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill", "category": "Success" },
    { "quote": "Happiness is not something ready made. It comes from your own actions.", "author": "Dalai Lama", "category": "Happiness" },
    { "quote": "The best way to predict the future is to invent it.", "author": "Alan Kay", "category": "Future" },
    { "quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson", "category": "Motivation" },
    { "quote": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky", "category": "Motivation" },
    { "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson", "category": "Individuality" },
    { "quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama", "category": "Happiness" },
    { "quote": "Turn your wounds into wisdom.", "author": "Oprah Winfrey", "category": "Wisdom" },
    { "quote": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt", "category": "Inspiration" },
    { "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius", "category": "Perseverance" },
    { "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt", "category": "Dreams" },
    { "quote": "You must be the change you wish to see in the world.", "author": "Mahatma Gandhi", "category": "Change" },
    { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt", "category": "Belief" },
    { "quote": "The only way to achieve the impossible is to believe it is possible.", "author": "Charles Kingsleigh", "category": "Possibility" },
    { "quote": "Act as if what you do makes a difference. It does.", "author": "William James", "category": "Impact" },
    { "quote": "Everything you’ve ever wanted is on the other side of fear.", "author": "George Addair", "category": "Fear" },
    { "quote": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt", "category": "Action" },
    { "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "author": "Ralph Waldo Emerson", "category": "Inner Strength" },
    { "quote": "The only thing we have to fear is fear itself.", "author": "Franklin D. Roosevelt", "category": "Fear" },
    { "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.", "author": "Roy T. Bennett", "category": "Success" },
    { "quote": "Change the way you look at things and the things you look at change.", "author": "Wayne Dyer", "category": "Perspective" },
    { "quote": "Your time is limited, so don't waste it living someone else's life.", "author": "Steve Jobs", "category": "Life" },
    { "quote": "A person who never made a mistake never tried anything new.", "author": "Albert Einstein", "category": "Innovation" },
    { "quote": "Not everything that is faced can be changed, but nothing can be changed until it is faced.", "author": "James Baldwin", "category": "Change" },
    { "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.", "author": "Joshua J. Marine", "category": "Challenges" },
    { "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.", "author": "William Butler Yeats", "category": "Action" },
    { "quote": "Dream big and dare to fail.", "author": "Norman Vaughan", "category": "Dreams" },
    { "quote": "The power of imagination makes us infinite.", "author": "John Muir", "category": "Imagination" },
    { "quote": "Our greatest glory is not in never falling, but in rising every time we fall.", "author": "Confucius", "category": "Perseverance" },
    { "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.", "author": "Zig Ziglar", "category": "Goals" },
    { "quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "author": "Roy T. Bennett", "category": "Dreams" },
    { "quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau", "category": "Success" },
    { "quote": "Don't be afraid to give up the good to go for the great.", "author": "John D. Rockefeller", "category": "Motivation" },
    { "quote": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis", "category": "Hardships" },
    { "quote": "Don't wait. The time will never be just right.", "author": "Napoleon Hill", "category": "Procrastination" },
    { "quote": "The harder the conflict, the more glorious the triumph.", "author": "Thomas Paine", "category": "Triumph" },
    { "quote": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman", "category": "Optimism" },
    { "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson", "category": "Self-Belief" },
    { "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein", "category": "Value" },
    { "quote": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt", "category": "Doubts" },
    { "quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis", "category": "Goals" },
    { "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "author": "Aristotle", "category": "Criticism" },
    { "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson", "category": "Exploration" },
    { "quote": "Success is walking from failure to failure with no loss of enthusiasm.", "author": "Winston Churchill", "category": "Perseverance" },
    { "quote": "Life isn't about finding yourself. Life is about creating yourself.", "author": "George Bernard Shaw", "category": "Life" }
]

// search quotes function

function searchQuotes(txt) {
    return Quotes.filter(item =>
        item.quote.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.author.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.category.toLocaleLowerCase().includes(txt.toLocaleLowerCase())
    )
}

const loveQuotes = searchQuotes("love");
console.log(loveQuotes);