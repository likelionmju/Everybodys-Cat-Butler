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

### 6. Run Localhost Server

React와 Djnago REST Framework를 동시에 켜야 하므로 터미널을 스플릿 해준다. (Ctrl+Shift+5)

```bash
$ cd frontend # 프론트엔드 폴더로 이동
$ npm start # React 서버 작동 (localhost:3000)
``` 
> React를 시작하기 전에 반드시 npm을 설치해야 한다. 설치 후에는 재부팅이 필요하다. 
> [설치방법](https://web-front-end.tistory.com/3)
```bash 
$ cd backend # 백엔드 폴더로 이동
$ python manage.py runserver # Djnaog REST Framework 작동 (localhost:8000)
``` 
> 어떤 것을 먼저 키든 상관 없다. 단, 둘 중에 하나라도 켜지 않으면 페이지가 보이지 않는다.


🧐 What's inside?
---
    .
    ├── backend
    │   └── post
    │   └── reactapi
    │   └── manage.py 
    │
    ├── frontend
    │   └── public
    │   └── src
    │   └── .gitignore
    │   └── package.json
    │   └── README.md
    │   └── yarn.lock
    │
    ├── .gitignore
    ├── README.md
    └── requirements.txt

1. `/backend`: Backend Directory using "Django REST Framework"
   - `/post` : API로 호출시킬 TEST APP
   - `/reactapi` : Django 프로젝트 폴더
   - `manage.py` : Django command-line util
2. `/frontend`: Frontend Directory using "React"
   - `/public` : 가상 DOM에 필요한 폴더
   - `/src` : React 개발 메인 폴더
   - `.gitignore` : define what should be ignored in git
   - `package.json` : 패키지 및 버전 정보
   - `README.md` : React 설명서
   - `yarn.lock` : 패키지 잠금 파일
3. `.gitignore`: define what should be ignored in git
4. `requirement.txt`: list of pip-packages to install

📝 License
---
This project uses the [MIT License](LICENSE)
