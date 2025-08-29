# Name Display - JavaScript Learning Project 👥

A simple JavaScript project to learn DOM manipulation and events. Features interactive buttons that display different names and change their own background colors when clicked.

## 📋 About the Project

This is a basic project created to practice fundamental JavaScript concepts, including:
- DOM Manipulation
- Functions
- Switch statements
- Event handling
- Dynamic text content updates
- Button styling with JavaScript

## 🚀 Features

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
project/
│
├── index.html
├── styles.css
├── index.js
└── README.md
```

## 💻 How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/Max-Mendes91/name-display-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd name-display-project
   ```

3. Open the `index.html` file in your browser

4. Click the buttons to see different names appear and buttons change colors!

## 🎯 Main Code

### JavaScript (index.js)
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

- **DOM Element Selection**: Using `getElementById()` to target specific elements
- **Text Content Manipulation**: Changing displayed text dynamically with `textContent`
- **Event Handling**: Responding to user button clicks
- **Switch Statements**: Handling multiple conditions efficiently
- **Button Styling**: Changing background colors via JavaScript
- **Function Parameters**: Passing values to control program behavior

## 🌟 Possible Future Improvements

- [ ] Add more names and buttons
- [ ] Reset button to clear all selections and colors
- [ ] Add hover effects for better user experience
- [ ] Implement name input field for custom names
- [ ] Add smooth color transitions
- [ ] Store last selected name in localStorage
- [ ] Add sound effects on button clicks
- [ ] Create a name randomizer feature

## 📸 Preview

*[Add here a screenshot or GIF of the working project]*

## 🤝 Contributing

This is a learning project, but suggestions are always welcome! Feel free to:

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
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/max-mendes-776ab5212/)

---

⭐ If this project helped you in any way, consider giving the repository a star!