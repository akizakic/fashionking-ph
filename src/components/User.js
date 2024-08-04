// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000; // 서버가 실행될 포트 번호

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB 연결 성공'))
  .catch(err => console.error('MongoDB 연결 오류', err));

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 예시 사용자 데이터베이스 스키마
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// 회원가입 API 엔드포인트
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(200).json({ message: '회원가입 성공', token: 'dummy-token' });
  } catch (err) {
    res.status(500).json({ message: '회원가입 실패', error: err.message });
  }
});

// 로그인 API 엔드포인트
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: '로그인 성공', token: 'dummy-token' });
    } else {
      res.status(401).json({ message: '로그인 실패' });
    }
  } catch (err) {
    res.status(500).json({ message: '로그인 실패', error: err.message });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
