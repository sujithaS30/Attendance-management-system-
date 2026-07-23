# 📚 Student Attendance Management System

A full-stack web application built using **Spring Boot** and **Vanilla JavaScript** that helps educational institutions manage student attendance efficiently. The application provides a simple and responsive interface for recording attendance, managing student information, and interacting with a RESTful backend.

---

## 🚀 Features

- 👨‍🎓 Student Registration & Management
- 📝 Attendance Recording
- 📊 Interactive Dashboard
- 🔄 REST API Integration using Fetch API
- 🗄️ H2 In-Memory Database
- ⚡ Fast Spring Boot Backend
- 🎨 Responsive User Interface
- 📱 Simple Navigation Between Modules
- 🔍 CRUD Operations for Student Records

---

## 🏗️ System Architecture

```
                 +----------------------+
                 |      Frontend        |
                 | HTML • CSS • JS      |
                 +----------+-----------+
                            |
                      Fetch API (REST)
                            |
                            ▼
                 +----------------------+
                 | Spring Boot Backend  |
                 | REST Controllers     |
                 +----------+-----------+
                            |
                    Spring Data JPA
                            |
                            ▼
                 +----------------------+
                 |   H2 Database        |
                 | In-Memory Storage    |
                 +----------------------+
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Java 17, Spring Boot 3 |
| Database | H2 In-Memory Database |
| ORM | Spring Data JPA |
| API | REST API |
| Build Tool | Maven |

---

## 📂 Project Structure

```
Attendance-management-system/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   │   └── static/
│   └── test/
│
├── pom.xml
├── mvnw
├── README.md
├── LICENSE
├── index.html
├── style.css
└── script.js
```

---

## ⚙️ Prerequisites

Before running the project, ensure you have:

- Java 17 or above
- Maven
- Git
- VS Code (recommended)
- Live Server Extension (for frontend)

---

## 🚀 Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sujithaS30/Attendance-management-system-.git
```

```bash
cd Attendance-management-system-
```

---

### 2️⃣ Run the Spring Boot Backend

```bash
mvn clean install
```

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### 3️⃣ Launch the Frontend

Open **index.html** using **Live Server** in VS Code.

Frontend runs on:

```
http://127.0.0.1:5500
```

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /students | Retrieve all students |
| GET | /students/{id} | Retrieve student by ID |
| POST | /students | Add a new student |
| PUT | /students/{id} | Update student details |
| DELETE | /students/{id} | Delete student |

> **Note:** Update the endpoint paths if your project uses different URLs.

---

## 🗄️ Database

This project uses the **H2 In-Memory Database**.

H2 Console:

```
http://localhost:8080/h2-console
```

Default configuration:

```
JDBC URL:
jdbc:h2:mem:testdb

Username:
sa

Password:
(password if configured)
```

---

## 📸 Screenshots

### Home Page

_Add your screenshot here_

---

### Dashboard

_Add your screenshot here_

---

### Student Management

_Add your screenshot here_

---

### Attendance Page

_Add your screenshot here_

---

## 🌍 Deployment

The application can be deployed on platforms such as:

- Render
- Railway
- AWS EC2
- Azure App Service
- Docker

If deployed, update this section with your live URLs.

**Frontend**

```
https://your-frontend-url
```

**Backend**

```
https://your-backend-url
```

---

## 🔮 Future Enhancements

- 🔐 User Authentication
- 👨‍🏫 Faculty Login
- 📈 Attendance Analytics
- 📄 PDF Report Generation
- 📧 Email Notifications
- 🗃️ MySQL/PostgreSQL Support
- ☁️ Cloud Deployment
- 📱 Mobile Responsive Improvements

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Sujitha S**

BE Computer Science and Engineering (AI & ML)

V.S.B Engineering College

GitHub:
https://github.com/sujithaS30

LinkedIn:
_Add your LinkedIn profile here_

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub.
