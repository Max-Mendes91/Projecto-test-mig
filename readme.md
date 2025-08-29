# Color Box - JavaScript Learning Project 🎨

A simple JavaScript project to learn DOM manipulation and events. It consists of a box that changes color through buttons.

## 📋 About the Project

This is a basic project created to practice fundamental JavaScript concepts, including:
- DOM Manipulation
- Functions
- Switch statements
- Event handling
- Dynamic CSS styling

## 🚀 Features

- ✅ Box that changes color dynamically
- ✅ 4 buttons with different colors (red, purple, green, blue)
- ✅ Default color (black) for unspecified cases
- ✅ Simple and responsive interface

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
   git clone https://github.com/your-username/color-box-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd color-box-project
   ```

3. Open the `index.html` file in your browser

4. Click the buttons to see the box changing colors!

## 🎯 Main Code

### JavaScript (index.js)
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

## 🎓 Concepts Learned

- **DOM Manipulation**: How to select and modify HTML elements
- **Event Handling**: How to respond to button clicks
- **Switch Statements**: Conditional structure for multiple options
- **CSS Styling via JavaScript**: How to change styles dynamically
- **Function Parameters**: How to pass data to functions

## 🌟 Possible Future Improvements

- [ ] Add more colors
- [ ] Implement smooth transitions between colors
- [ ] Add a "random color" button
- [ ] Save current color in localStorage
- [ ] Add CSS animations

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

**[Max mender]** - *Learning Developer*

- GitHub: [@Max-Mendes91](https://github.com/Max-Mendes91)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/max-mendes-776ab5212/)

---

⭐ If this project helped you in any way, consider giving the repository a star!