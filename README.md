# JavaScript Learning Projects 🚀

A collection of simple JavaScript projects created to learn DOM manipulation, events, and fundamental programming concepts.

## 📋 About the Projects

This repository contains two basic JavaScript projects designed to practice essential web development skills:

### 🎨 Project 1: Color Box
A simple project featuring a box that changes color through button interactions.

### 👥 Project 2: Name Display
An interactive project with buttons that display different names and change their own background colors when clicked.

## 🚀 Features

### Color Box Project
- ✅ Box that changes color dynamically
- ✅ 4 buttons with different colors (red, purple, green, blue)
- ✅ Default color (black) for unspecified cases
- ✅ Simple and responsive interface

### Name Display Project
- ✅ Dynamic name display in a text box
- ✅ 4 interactive buttons with different names (Max, Miguel, Ines, Joao)
- ✅ Each button changes its own background color when clicked
- ✅ Default "Awaiting to click button" message
- ✅ Simple and clean interface

## 🛠️ Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling and layout
- **JavaScript** - Logic and interactivity

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
└── README.md               # This unified documentation
```

## 💻 How to Use

### Color Box Project
1. Navigate to the `exe1/` directory
2. Open `index.html` in your browser
3. Click the buttons to see the box changing colors!

### Name Display Project
1. Navigate to the `exe2/` directory
2. Open `index.html` in your browser
3. Click the buttons to see different names appear and buttons change colors!

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

## 🎓 Concepts Learned

### Core JavaScript Skills
- **DOM Manipulation**: Selecting and modifying HTML elements
- **Event Handling**: Responding to user interactions
- **Switch Statements**: Handling multiple conditions efficiently
- **Function Parameters**: Passing data to control program behavior
- **CSS Styling via JavaScript**: Changing styles dynamically

### Project-Specific Learning
- **Color Box**: Focus on visual feedback and color management
- **Name Display**: Text content manipulation and button state management

## 🌟 Possible Future Improvements

### Color Box Project
- [ ] Add more colors
- [ ] Implement smooth transitions between colors
- [ ] Add a "random color" button
- [ ] Save current color in localStorage
- [ ] Add CSS animations

### Name Display Project
- [ ] Add more names and buttons
- [ ] Reset button to clear all selections and colors
- [ ] Add hover effects for better user experience
- [ ] Implement name input field for custom names
- [ ] Add smooth color transitions
- [ ] Store last selected name in localStorage
- [ ] Add sound effects on button clicks
- [ ] Create a name randomizer feature

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
