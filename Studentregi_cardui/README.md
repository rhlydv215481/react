React Form ka Full Flow
Step 1: Sab inputs ke liye alag state nahi chahiye

Pehle hum aisa kar sakte the:

const [Name, setName] = useState("");
const [password, setPassword] = useState("");
const [age, setAge] = useState("");

Lekin fields zyada hongi to states aur setters bahut zyada ho jayenge.

Isliye humne ek object state banayi:

const [formdata, setformdata] = useState({
  Name: "",
  password: "",
  gender: "",
  age: "",
});

Ab current form ka pura data ek jagah hai.

Step 2: Har input par same onChange
onChange={changehandel}

User kisi bhi input mein type/select karega:

Input
  ↓
onChange
  ↓
changehandel(e)
Step 3: e.target se information milti hai

Humne dekha:

e.target.id

batata hai kaunsa input change hua.

Aur:

e.target.value

batata hai user ne kya value di.

Example:

Input id = "password"
User type = "123"

e.target.id    → password
e.target.value → 123
Step 4: Dynamic object key

Humne likha:

[e.target.id]: e.target.value

Agar:

id = password
value = 123

to JavaScript effectively:

{
  password: "123"
}

banata hai.

[] yahan array nahi hai.

[key]

ka matlab:

Variable ke andar jo value hai, use object ki key banao.

Step 5: Purana data bhi bachana hai

Agar sirf ye karte:

setformdata({
  [e.target.id]: e.target.value,
});

to purana data overwrite ho sakta tha.

Isliye:

...formdata

use kiya.

Ye purana object ka data copy karta hai.

Final:

function changehandel(e) {
  setformdata({
    ...formdata,
    [e.target.id]: e.target.value,
  });
}

Flow:

Purana formdata
       ↓
...formdata
       ↓
Sab purani values copy

       +

Jis input mein change hua
       ↓
[e.target.id]: e.target.value
       ↓
Sirf woh field update
Step 6: Input ko state se connect kiya

Example:

<input
  id="Name"
  value={formdata.Name}
  onChange={changehandel}
/>

Yahan:

value={formdata.Name}

Input mein state ki current value dikhata hai.

Aur:

onChange

user ki new value state mein bhejta hai.

Flow:

User types Rahul
      ↓
onChange
      ↓
changehandel(e)
      ↓
formdata update
      ↓
React re-render
      ↓
value={formdata.Name}
      ↓
Updated value input mein
Step 7: Gender radio

Radio mein:

value="male"

matlab select hone par value "male".

Aur:

checked={formdata.gender === "male"}

check karta hai:

Kya gender state mein "male" hai?

Agar haan → Male selected.

Agar nahi → Male selected nahi.

Step 8: Submit ke liye alag array

formdata sirf current form store karta hai.

Multiple submitted users store karne ke liye:

const [allData, setAllData] = useState([]);

Initially:

[]
Step 9: Submit click

Form submit:

<form onSubmit={formhandler}>

Function:

function formhandler(e) {
  e.preventDefault();
}

preventDefault() page reload hone se rokta hai.

Phir current form data array mein add:

setAllData([
  ...allData,
  formdata
]);
Final Complete Flow
User input mein type karta hai
           ↓
onChange
           ↓
changehandel(e)
           ↓
e.target.id
           ↓
Kaunsa input?

e.target.value
           ↓
Kya value?

           ↓
setformdata({
  ...formdata,
  [e.target.id]: e.target.value
})

           ↓
formdata update

           ↓
User Submit click karta hai

           ↓
formhandler(e)

           ↓
e.preventDefault()

           ↓
setAllData([
  ...allData,
  formdata
])

           ↓
Current form ka object
Array mein save

Short memory trick:

onChange → value pakdo
id → field pehchano
setformdata → current form update
...formdata → purana data bachao
Submit → formdata array mein save