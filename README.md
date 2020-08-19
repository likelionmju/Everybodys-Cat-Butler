# Everybodys-Cat-Butler

Everybodys-Cat-Butler
===

📖 Introduction
---

This project is a site for posting road cats locations by users. 

🏁 Getting started
---

### 1. git clone

First of all, clone this repository

```bash
$ git clone https://github.com/likelionmju/Everybodys-Cat-Butler.git
```

### 2. create virtual environment

Second, prepare a virtual environment with the django and several packages

```bash
$ python -m venv venv
```


> The name of virtual environment is defined by "venv"

### 3. activate virtual environment
```bash
$ source venv/scripts/activate # for windows
$ source venv/bin/activate # for mac or linux
```

### 4. install pip packages
```bash
$ pip install -r requirements.txt
```

> The required packages are defined in the requirements.txt file.

```bash
$ pip freeze > requirements.txt
```

> If additional packages are installed, the following commands should be executed.

### 5. change git branch

first time, you must change master branch to other branch

```bash
$ git checkout <branch_name> # backend or frontend
```

> Insert 'backend' or 'frontend' instead of <branch_name>.

:octocat: Git command
---

```bash
$ git pull origin <branch_name>
$ git add .
$ git commit -m "messages"
$ git push origin <branch_name>
```

> Insert 'backend' or 'frontend' instead of <branch_name>.

🧐 What's inside?
---
    .
    ├── .config
    ├── api
    ├── config
    ├── page
    ├── .gitignore
    ├── manage.py
    ├── README.md
    └── requirements.txt

1. `/.config`: setup files to deploy
2. `/api`: Django REST Framework api app
3. `/config`: setup files in project
4. `/page`: page app
5. `.gitignore`: define what should be ignored in git
6. `manage.py`: django command-line util
7. `requirement.txt`: list of pip-packages to install

📝 License
---
This project uses the [MIT License](LICENSE)