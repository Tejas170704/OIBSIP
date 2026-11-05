# Temperature Converter – Oasis Infobyte Level 1 Task 3

## Project Overview
This project is a temperature converter web application developed as part of the **Oasis Infobyte Web Development and Designing Internship – Level 1, Task 3**.

The application allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin using JavaScript.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Responsive Web Design

## Features
- Convert temperatures between Celsius, Fahrenheit, and Kelvin
- User-friendly input interface
- Temperature unit selection
- Instant conversion on button click
- Input validation
- Handles invalid temperature values below absolute zero
- Responsive and clean user interface

## Conversion Formulas

| Conversion | Formula |
|---|---|
| Celsius to Fahrenheit | (°C × 9/5) + 32 |
| Fahrenheit to Celsius | (°F − 32) × 5/9 |
| Celsius to Kelvin | °C + 273.15 |
| Kelvin to Celsius | K − 273.15 |
| Fahrenheit to Kelvin | (°F − 32) × 5/9 + 273.15 |
| Kelvin to Fahrenheit | (K − 273.15) × 9/5 + 32 |

## Project Structure
```text
WebDev-L1-TemperatureConverter/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
```

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Tejas170704/OIBSIP.git
   ```
2. Open the `WebDev-L1-TemperatureConverter` folder.
3. Open `index.html` in your browser.
4. Enter a temperature, select the input and output units, and click the Convert button.

## Test Cases

| Input | From | To | Expected Result |
|---:|---|---|---:|
| 0 | Celsius | Fahrenheit | 32°F |
| 100 | Celsius | Fahrenheit | 212°F |
| 32 | Fahrenheit | Celsius | 0°C |
| 273.15 | Kelvin | Celsius | 0°C |
| 0 | Celsius | Kelvin | 273.15 K |
| -300 | Celsius | Fahrenheit | Validation error |

## Screenshots
Application screenshots are available in the `screenshots/` directory.

## Internship Details
- Organization: Oasis Infobyte
- Internship Track: Web Development and Designing
- Level: Level 1
- Task: Task 3 – Temperature Converter

## Author
**Tejas Dhule**

GitHub: https://github.com/Tejas170704/

LinkedIn: https://www.linkedin.com/in/tejasdhule56

---

Developed as part of the Oasis Infobyte Web Development and Designing Internship.
