# JavaScript Learning Projects 🚀

A comprehensive collection of JavaScript projects created to learn DOM manipulation, events, form handling, and fundamental programming concepts.

## 📋 About the Projects

This repository contains four progressive JavaScript projects designed to practice essential web development skills:

### 🎨 Project 1: Color Box (exe1)
A simple project featuring a box that changes color through button interactions.

### 👥 Project 2: Name Display (exe2)
An interactive project with buttons that display different names and change their own background colors when clicked.

### 🎛️ Project 3: Box Controls (exe3)
A multi-functional project demonstrating various DOM manipulation techniques including color changes, text insertion, and toggle visibility controls.

### ➕ Project 4: Calculator (exe4)
A form-based calculator project that demonstrates input handling, number conversion, and dynamic button state management.

## 🚀 Features

### Color Box Project (exe1)
- ✅ Box that changes color dynamically
- ✅ 4 buttons with different colors (red, purple, green, blue)
- ✅ Default color (black) for unspecified cases
- ✅ Simple and responsive interface

### Name Display Project (exe2)
- ✅ Dynamic name display in a text box
- ✅ 4 interactive buttons with different names (Max, Miguel, Ines, Joao)
- ✅ Each button changes its own background color when clicked
- ✅ Default "Awaiting to click button" message
- ✅ Simple and clean interface

### Box Controls Project (exe3)
- ✅ Multiple interactive buttons for different functions
- ✅ Color change functionality for the main box
- ✅ Text insertion capability
- ✅ Individual box toggle (show/hide Box 2)
- ✅ Toggle both main boxes simultaneously
- ✅ Toggle all boxes with class "caixa"
- ✅ Multiple colored boxes for demonstration

### Calculator Project (exe4)
- ✅ Two sets of number inputs for addition
- ✅ Dynamic button state management (enable/disable)
- ✅ Real-time input validation
- ✅ Number conversion from strings
- ✅ Modern UI with Tailwind CSS
- ✅ Console output for results

## 🛠️ Technologies Used

- **HTML5** - Page structure and forms
- **CSS3** - Styling and layout
- **JavaScript** - Logic and interactivity
- **Tailwind CSS** - Modern styling framework (exe4)

## 📂 Project Structure

```
Projecto-test-mig/
│
├── exe1/                    # Color Box Project
│   ├── index.html
│   ├── styles.css
│   ├── index.js
│   └── readme.md
│
├── exe2/                    # Name Display Project
│   ├── index.html
│   ├── styles.css
│   ├── index.js
│   └── README.md
│
├── exe3/                    # Box Controls Project
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── exe4/                    # Calculator Project
│   ├── index.html
│   └── script.js
│
└── README.md               # This unified documentation
```

## 💻 How to Use

### Color Box Project (exe1)
1. Navigate to the `exe1/` directory
2. Open `index.html` in your browser
3. Click the buttons to see the box changing colors!

### Name Display Project (exe2)
1. Navigate to the `exe2/` directory
2. Open `index.html` in your browser
3. Click the buttons to see different names appear and buttons change colors!

### Box Controls Project (exe3)
1. Navigate to the `exe3/` directory
2. Open `index.html` in your browser
3. Try different buttons:
   - "change box color" - Changes the main box to blue
   - "add text in the box" - Adds "max" text to the main box
   - "hide and show box 2" - Toggles Box 2 visibility
   - "toggle BOTH boxes" - Toggles both main boxes
   - "toggle ALL boxes" - Toggles all boxes with class "caixa"

### Calculator Project (exe4)
1. Navigate to the `exe4/` directory
2. Open `index.html` in your browser
3. Enter numbers in the input fields
4. Click the buttons to perform addition
5. Check the browser console for results
6. Notice how the button becomes enabled/disabled based on input

## 🎯 Main Code Examples

### Color Box (exe1/index.js)
```javascript
const box = document.getElementById('box')

function changeColorOfBox(buttonNumber) {
    switch (buttonNumber) {
        case 1:
            box.style.backgroundColor = "red"
            break;
        case 2:
            box.style.backgroundColor = "purple"
            break;
        case 3:
            box.style.backgroundColor = "green"
            break;
        case 4:
            box.style.backgroundColor = "blue"
            break;
        default:
            box.style.backgroundColor = "black"
    }
}
```

### Name Display (exe2/index.js)
```javascript
let text = document.getElementById('box')
text.textContent = "Awaiting to click button"
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

function nameInBox(name) {
    switch(name){
        case 1:
            btn1.style.background = "red";
            text.textContent = "Max"
            break;
        case 2:
            btn2.style.background = "green";
            text.textContent = "Miguel"
            break;
        case 3:
            btn3.style.background = "yellow";
            text.textContent = "Ines"
            break;
        case 4:
            btn4.style.background = "blue";
            text.textContent = "Joao"
            break;
        default:
            text.textContent = "Awaiting to click button"
    }
}
```

### Box Controls (exe3/script.js)
```javascript
const box = document.getElementById("box");
const box2 = document.getElementById("box2");

function changeColor() {
    box.style.backgroundColor = 'blue';
}

function getText() {
    box.textContent = 'max';
}

function toggleMenu() {
    box2.classList.toggle("hidden");
}

function toggleTwo() {
    box.classList.toggle("hidden");
    box2.classList.toggle("hidden");
}

function toggleBoxes() {
    const boxes = document.querySelectorAll(".caixa");
    boxes.forEach(b => {
        b.classList.toggle("hidden");
    });
}
```

### Calculator (exe4/script.js)
```javascript
const num1 = document.getElementById("soma1");
const num2 = document.getElementById("soma2");
const button = document.getElementById("btnSoma");

function soma() {
    console.log(Number(num1.value) + Number(num2.value));
}

function checkInputs() {
    if (num1.value === "" && num2.value === "") {
        button.disabled = true;   // both empty → disable button
    } else {
        button.disabled = false;  // at least one filled → enable button
    }
}

num1.addEventListener("input", checkInputs);
num2.addEventListener("input", checkInputs);
```

## 🎓 Concepts Learned

### Core JavaScript Skills
- **DOM Manipulation**: Selecting and modifying HTML elements
- **Event Handling**: Responding to user interactions
- **Switch Statements**: Handling multiple conditions efficiently
- **Function Parameters**: Passing data to control program behavior
- **CSS Styling via JavaScript**: Changing styles dynamically
- **ClassList Manipulation**: Adding/removing CSS classes
- **Query Selectors**: Selecting multiple elements
- **Form Handling**: Working with input elements
- **Type Conversion**: Converting strings to numbers
- **Event Listeners**: Real-time input monitoring
- **Conditional Logic**: Dynamic button state management

### Project-Specific Learning
- **Color Box**: Focus on visual feedback and color management
- **Name Display**: Text content manipulation and button state management
- **Box Controls**: Advanced DOM manipulation and toggle functionality
- **Calculator**: Form handling, input validation, and dynamic UI states

## 🌟 Possible Future Improvements

### Color Box Project (exe1)
- [ ] Add more colors
- [ ] Implement smooth transitions between colors
- [ ] Add a "random color" button
- [ ] Save current color in localStorage
- [ ] Add CSS animations

### Name Display Project (exe2)
- [ ] Add more names and buttons
- [ ] Reset button to clear all selections and colors
- [ ] Add hover effects for better user experience
- [ ] Implement name input field for custom names
- [ ] Add smooth color transitions
- [ ] Store last selected name in localStorage
- [ ] Add sound effects on button clicks
- [ ] Create a name randomizer feature

### Box Controls Project (exe3)
- [ ] Add more color options
- [ ] Implement custom text input
- [ ] Add animation effects for toggles
- [ ] Create a reset function
- [ ] Add keyboard shortcuts
- [ ] Implement drag and drop functionality
- [ ] Add box resizing capabilities

### Calculator Project (exe4)
- [ ] Add more mathematical operations (subtraction, multiplication, division)
- [ ] Display results on the page instead of console
- [ ] Add a clear button
- [ ] Implement decimal number support
- [ ] Add keyboard support
- [ ] Create a history of calculations
- [ ] Add scientific calculator functions
- [ ] Implement input validation for non-numeric characters

## 🤝 Contributing

These are learning projects, but suggestions are always welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

**Max Mendes** - *Learning Developer*

- GitHub: [@Max-Mendes91](https://github.com/Max-Mendes91)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/max-mendes-776ab5212/)

---

⭐ If these projects helped you in any way, consider giving the repository a star!
