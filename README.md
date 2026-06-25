# 🌐 safe-kick-server
Safe Kick - Node.js 앱 서버 (Express + PostgreSQL)

## 📁 폴더 구조

```
safe-kick-server/
│
├── src/
│   ├── routes/                 # API 라우터
│   │   ├── auth.js             # POST /auth/register, /auth/login, /auth/face-verify
│   │   ├── users.js            # GET /users/me
│   │   └── rides.js            # GET/POST /rides, /rides/start, /rides/:id/end
│   │
│   ├── controllers/            # 라우터별 비즈니스 로직
│   │   ├── authController.js
│   │   ├── usersController.js
│   │   └── ridesController.js
│   │
│   ├── middlewares/            # 미들웨어
│   │   └── authMiddleware.js   # JWT 인증
│   │
│   └── db/                     # DB 연결 및 쿼리
│       └── index.js            # PostgreSQL 연결
│
├── Dockerfile
├── docker-compose.yml          # 앱 서버 + PostgreSQL + Nginx
├── nginx.conf
├── .env.example
├── package.json
└── README.md
```
