export type Question = { id: string; prompt: string; options: string[]; answer: number; explanation: string; topic: string };
export type QuizCategory = { id: string; title: string; subtitle: string; icon: string; color: string; bg: string; count: string; subjects: string[] };

export const categories: QuizCategory[] = [
  { id: 'cricket', title: 'Cricket', subtitle: 'Rules, records & legends', icon: '🏏', color: '#16a68c', bg: '#e4f8f2', count: '120+', subjects: ['Rules & formats','Indian cricket','IPL','World Cups','Records & players'] },
  { id: 'gcse', title: 'UK GCSE Maths', subtitle: 'Foundation & Higher', icon: '📐', color: '#7557f6', bg: '#eee9ff', count: '240+', subjects: ['Number','Algebra','Ratio & proportion','Geometry','Probability & statistics','Trigonometry'] },
  { id: 'intermediate', title: 'Intermediate Maths', subtitle: 'Year 1 & Year 2', icon: '∑', color: '#3989f5', bg: '#e8f2ff', count: '180+', subjects: ['Algebra','Trigonometry','Calculus','Matrices','Coordinate geometry','Statistics'] },
  { id: 'btech', title: 'B.Tech', subtitle: 'Engineering & computer science', icon: '💻', color: '#e58a36', bg: '#fff1df', count: '300+', subjects: ['Engineering maths','C programming','Python','Java','Data structures','DBMS','AI & ML'] },
  { id: 'english', title: 'English', subtitle: 'Grammar & vocabulary', icon: '📚', color: '#e65c91', bg: '#ffeaf2', count: '160+', subjects: ['Grammar','Vocabulary','Tenses','Comprehension','Synonyms & antonyms','Sentence correction'] },
  { id: 'general', title: 'General Knowledge', subtitle: 'Explore the world', icon: '🌍', color: '#bd8b22', bg: '#fff5d9', count: '200+', subjects: ['Science','History','Geography','Technology','Logical reasoning','Space'] }
];

export const questionBank: Record<string, Question[]> = {
  cricket: [
    { id:'cr1', prompt:'How many players from one team are on the field in a standard cricket match?', options:['9','10','11','12'], answer:2, explanation:'A standard cricket team has 11 players on the field.', topic:'Rules & formats' },
    { id:'cr2', prompt:'How many legal deliveries are there in a standard over?', options:['5','6','8','10'], answer:1, explanation:'A standard over consists of six legal deliveries. Wides and no-balls do not count toward the six.', topic:'Rules & formats' },
    { id:'cr3', prompt:'What does LBW stand for?', options:['Long Bat Warning','Leg Before Wicket','Line Behind Wicket','Leg Bat Win'], answer:1, explanation:'LBW means Leg Before Wicket, a method of dismissal governed by specific conditions.', topic:'Rules & formats' },
    { id:'cr4', prompt:'Which format is traditionally played over five days at international level?', options:['T20 International','One Day International','Test cricket','The Hundred'], answer:2, explanation:'Test cricket is the traditional long form and can be scheduled for up to five days.', topic:'Formats' },
    { id:'cr5', prompt:'What is the maximum number of runs a batter can normally score from a boundary hit that clears the rope without bouncing?', options:['4','5','6','8'], answer:2, explanation:'A clean hit that clears the boundary without bouncing is normally awarded six runs.', topic:'Scoring' },
    { id:'cr6', prompt:'How many runs are awarded for a standard boundary after the ball has touched the ground?', options:['2','3','4','6'], answer:2, explanation:'A boundary after the ball has touched the ground is normally worth four runs.', topic:'Scoring' },
    { id:'cr7', prompt:'Which official usually signals a no-ball?', options:['Square-leg umpire','Bowler','Bowling captain','On-field umpire'], answer:3, explanation:'The on-field umpire signals a no-ball by extending one arm horizontally.', topic:'Rules & formats' },
    { id:'cr8', prompt:'What is the name of the area where the bowler delivers the ball?', options:['Crease','Pitch','Boundary','Outfield'], answer:1, explanation:'The pitch is the central rectangular playing area between the wickets.', topic:'Terminology' },
    { id:'cr9', prompt:'How many stumps make up one wicket?', options:['2','3','4','6'], answer:1, explanation:'A wicket consists of three stumps with two bails placed on top.', topic:'Equipment' },
    { id:'cr10', prompt:'Which format generally has 50 overs per side in international cricket?', options:['Test','ODI','T20I','The Hundred'], answer:1, explanation:'A standard One Day International is scheduled for up to 50 overs per side.', topic:'Formats' }
  ],
  gcse: [
    { id:'gc1', prompt:'What is 15% of 200?', options:['15','20','30','35'], answer:2, explanation:'10% of 200 is 20 and 5% is 10. Together, 15% is 30.', topic:'Number' },
    { id:'gc2', prompt:'Solve: 3x + 5 = 20.', options:['3','5','7','15'], answer:1, explanation:'Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5.', topic:'Algebra' },
    { id:'gc3', prompt:'The angles in a triangle add up to how many degrees?', options:['90°','180°','270°','360°'], answer:1, explanation:'The interior angles of every Euclidean triangle sum to 180 degrees.', topic:'Geometry' },
    { id:'gc4', prompt:'A fair six-sided die is rolled. What is the probability of rolling an even number?', options:['1/6','1/3','1/2','2/3'], answer:2, explanation:'The even outcomes are 2, 4 and 6: three of six equally likely outcomes, so 3/6 = 1/2.', topic:'Probability' },
    { id:'gc5', prompt:'Simplify the ratio 12:18.', options:['2:3','3:2','4:9','6:9'], answer:0, explanation:'Divide both parts by their highest common factor, 6. The simplified ratio is 2:3.', topic:'Ratio & proportion' },
    { id:'gc6', prompt:'Expand 3(x + 4).', options:['3x + 4','3x + 12','x + 12','7x'], answer:1, explanation:'Multiply 3 by each term inside the brackets: 3x + 12.', topic:'Algebra' },
    { id:'gc7', prompt:'What is the area of a rectangle measuring 8 cm by 5 cm?', options:['13 cm²','26 cm²','40 cm²','80 cm²'], answer:2, explanation:'Area = length × width = 8 × 5 = 40 cm².', topic:'Mensuration' },
    { id:'gc8', prompt:'Write 0.75 as a fraction in its simplest form.', options:['1/4','2/3','3/4','4/5'], answer:2, explanation:'0.75 = 75/100. Divide numerator and denominator by 25 to get 3/4.', topic:'Number' },
    { id:'gc9', prompt:'What is the gradient of the line y = 4x + 2?', options:['2','4','−4','6'], answer:1, explanation:'In y = mx + c, the coefficient m is the gradient. Here m = 4.', topic:'Graphs' },
    { id:'gc10', prompt:'A bag has 3 red and 2 blue counters. What is the probability of picking a blue counter?', options:['2/3','2/5','3/5','1/5'], answer:1, explanation:'There are 2 blue counters out of 5 counters in total, so the probability is 2/5.', topic:'Probability' }
  ],
  intermediate: [
    { id:'in1', prompt:'What is the derivative of x² with respect to x?', options:['x','2x','x²','2'], answer:1, explanation:'Using the power rule d(xⁿ)/dx = nxⁿ⁻¹, the derivative of x² is 2x.', topic:'Differentiation' },
    { id:'in2', prompt:'What is the determinant of [[2, 0], [0, 3]]?', options:['5','6','0','−6'], answer:1, explanation:'For a 2×2 matrix [[a,b],[c,d]], determinant = ad − bc = 2×3 − 0 = 6.', topic:'Matrices' },
    { id:'in3', prompt:'What is sin 30°?', options:['0','1/2','√3/2','1'], answer:1, explanation:'The standard trigonometric value of sin 30° is 1/2.', topic:'Trigonometry' },
    { id:'in4', prompt:'What is the integral of 1 with respect to x?', options:['0','1','x + C','x² + C'], answer:2, explanation:'The antiderivative of 1 is x plus the constant of integration C.', topic:'Integration' },
    { id:'in5', prompt:'If log₁₀(100) = x, what is x?', options:['1','2','10','100'], answer:1, explanation:'10² = 100, therefore log₁₀(100) = 2.', topic:'Logarithms' },
    { id:'in6', prompt:'What is the value of cos 0°?', options:['0','1/2','1','−1'], answer:2, explanation:'The standard trigonometric value of cos 0° is 1.', topic:'Trigonometry' },
    { id:'in7', prompt:'What is the derivative of sin x?', options:['−sin x','cos x','−cos x','tan x'], answer:1, explanation:'The derivative of sin x with respect to x is cos x.', topic:'Differentiation' },
    { id:'in8', prompt:'What is the rank of the 2 × 2 identity matrix?', options:['0','1','2','4'], answer:2, explanation:'The identity matrix has two linearly independent rows and columns, so its rank is 2.', topic:'Matrices' },
    { id:'in9', prompt:'What is the sum of the first n positive integers?', options:['n²','n(n + 1)/2','2n','n(n − 1)/2'], answer:1, explanation:'The arithmetic-series formula for the first n positive integers is n(n + 1)/2.', topic:'Sequences' },
    { id:'in10', prompt:'If two events are independent, P(A and B) equals:', options:['P(A) + P(B)','P(A) − P(B)','P(A) × P(B)','P(A) / P(B)'], answer:2, explanation:'For independent events, the probability that both occur is the product P(A)P(B).', topic:'Probability' }
  ],
  btech: [
    { id:'bt1', prompt:'Which data structure follows the LIFO principle?', options:['Queue','Stack','Linked list','Tree'], answer:1, explanation:'A stack uses Last In, First Out: the most recently added item is removed first.', topic:'Data structures' },
    { id:'bt2', prompt:'Which SQL command is used to retrieve records from a table?', options:['GET','OPEN','SELECT','FETCH ALL'], answer:2, explanation:'SELECT retrieves data from one or more database tables.', topic:'DBMS' },
    { id:'bt3', prompt:'What is the time complexity of binary search on a sorted array?', options:['O(1)','O(log n)','O(n)','O(n²)'], answer:1, explanation:'Binary search halves the remaining search interval at each step, giving logarithmic time complexity.', topic:'Algorithms' },
    { id:'bt4', prompt:'Which Python keyword is used to define a function?', options:['function','define','def','fun'], answer:2, explanation:'Python uses the def keyword followed by a function name and parentheses.', topic:'Python' },
    { id:'bt5', prompt:'Which of these is an example of a relational database?', options:['PostgreSQL','Redis','Neo4j','Memcached'], answer:0, explanation:'PostgreSQL is a relational database management system that uses tables and SQL.', topic:'DBMS' },
    { id:'bt6', prompt:'Which C operator is used to access the value stored at a pointer address?', options:['&','*','%','->'], answer:1, explanation:'The unary * operator dereferences a pointer to access the value at the address it stores.', topic:'C programming' },
    { id:'bt7', prompt:'Which normal form removes partial functional dependencies?', options:['1NF','2NF','3NF','BCNF'], answer:1, explanation:'Second Normal Form requires 1NF and removes partial dependencies on candidate keys.', topic:'DBMS' },
    { id:'bt8', prompt:'Which protocol is commonly used to securely browse websites?', options:['HTTP','FTP','HTTPS','SMTP'], answer:2, explanation:'HTTPS uses TLS to protect communication between a browser and a website.', topic:'Computer networks' },
    { id:'bt9', prompt:'In object-oriented programming, which concept bundles data and methods together?', options:['Encapsulation','Compilation','Iteration','Recursion'], answer:0, explanation:'Encapsulation groups data and the methods that operate on it, controlling access to internal state.', topic:'Programming' },
    { id:'bt10', prompt:'Which machine learning approach learns from labelled examples?', options:['Unsupervised learning','Supervised learning','Reinforcement learning','Clustering only'], answer:1, explanation:'Supervised learning trains on examples paired with known target labels or values.', topic:'AI & ML' }
  ],
  english: [
    { id:'en1', prompt:'Choose the grammatically correct sentence.', options:['She go to school.','She goes to school.','She going to school.','She gone to school.'], answer:1, explanation:'With the third-person singular subject “she” in the simple present, the verb takes -s: goes.', topic:'Grammar' },
    { id:'en2', prompt:'Choose the synonym of “rapid”.', options:['Slow','Quick','Quiet','Weak'], answer:1, explanation:'Rapid means happening or moving quickly.', topic:'Vocabulary' },
    { id:'en3', prompt:'Which word is an adjective?', options:['Beautiful','Quickly','Running','Happiness'], answer:0, explanation:'Beautiful describes a noun, so it is an adjective.', topic:'Parts of speech' },
    { id:'en4', prompt:'Choose the correct article: “She ate ___ apple.”', options:['a','an','the only','no article'], answer:1, explanation:'Use “an” before a vowel sound. Apple begins with a vowel sound.', topic:'Articles' },
    { id:'en5', prompt:'What is the antonym of “ancient”?', options:['Old','Historic','Modern','Aged'], answer:2, explanation:'Modern is the opposite of ancient.', topic:'Vocabulary' },
    { id:'en6', prompt:'Choose the correct past tense of “write”.', options:['Writed','Written','Wrote','Writing'], answer:2, explanation:'The simple past tense of write is wrote. Written is its past participle.', topic:'Tenses' },
    { id:'en7', prompt:'Which sentence uses an adverb correctly?', options:['He runs quick.','He runs quickly.','He quick runs.','He running quickly.'], answer:1, explanation:'Quickly is an adverb modifying the verb runs.', topic:'Grammar' },
    { id:'en8', prompt:'Choose the correct preposition: “The keys are ___ the table.”', options:['in','at','on','by to'], answer:2, explanation:'On indicates that the keys are resting on the surface of the table.', topic:'Prepositions' },
    { id:'en9', prompt:'What is the plural of “child”?', options:['Childs','Childes','Children','Childrens'], answer:2, explanation:'Children is the irregular plural form of child.', topic:'Vocabulary' },
    { id:'en10', prompt:'Which is a complete sentence?', options:['Because it was raining.','Running through the park.','The train arrived late.','Although she studied.'], answer:2, explanation:'The train arrived late contains a subject and a complete predicate and expresses a full thought.', topic:'Sentence formation' }
  ],
  general: [
    { id:'ge1', prompt:'Which planet is known as the Red Planet?', options:['Venus','Mars','Jupiter','Mercury'], answer:1, explanation:'Mars appears reddish because iron minerals in its soil have oxidized, or rusted.', topic:'Science & space' },
    { id:'ge2', prompt:'What is the largest ocean on Earth?', options:['Atlantic','Indian','Arctic','Pacific'], answer:3, explanation:'The Pacific Ocean is the largest and deepest of Earth’s oceanic divisions.', topic:'Geography' },
    { id:'ge3', prompt:'What is the chemical symbol for gold?', options:['Ag','Gd','Au','Go'], answer:2, explanation:'Gold has the chemical symbol Au, derived from the Latin word aurum.', topic:'Science' },
    { id:'ge4', prompt:'Which gas do plants absorb during photosynthesis?', options:['Oxygen','Carbon dioxide','Nitrogen','Hydrogen'], answer:1, explanation:'Plants absorb carbon dioxide and use light energy to produce sugars during photosynthesis.', topic:'Biology' },
    { id:'ge5', prompt:'Which continent contains the Sahara Desert?', options:['Asia','South America','Africa','Australia'], answer:2, explanation:'The Sahara is a vast hot desert located in North Africa.', topic:'Geography' },
    { id:'ge6', prompt:'What is the nearest star to Earth?', options:['Sirius','The Sun','Proxima Centauri','Vega'], answer:1, explanation:'The Sun is the nearest star to Earth and the centre of our solar system.', topic:'Space' },
    { id:'ge7', prompt:'Which organ pumps blood around the human body?', options:['Lungs','Brain','Heart','Liver'], answer:2, explanation:'The heart is a muscular organ that pumps blood through the circulatory system.', topic:'Biology' },
    { id:'ge8', prompt:'Which is the largest land animal?', options:['African elephant','Giraffe','Hippopotamus','Rhinoceros'], answer:0, explanation:'The African bush elephant is the largest living land animal.', topic:'Nature' },
    { id:'ge9', prompt:'What is the capital city of Japan?', options:['Kyoto','Osaka','Tokyo','Hiroshima'], answer:2, explanation:'Tokyo is the capital of Japan.', topic:'Geography' },
    { id:'ge10', prompt:'Which instrument is used to measure atmospheric pressure?', options:['Thermometer','Barometer','Hygrometer','Anemometer'], answer:1, explanation:'A barometer measures atmospheric pressure.', topic:'Science' }
  ]
};

export const getQuestions = (categoryId: string, count = 5, difficulty = 'All levels'): Question[] => {
  const source = questionBank[categoryId] ?? questionBank.general;
  const shuffled = [...source].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, source.length));
};
