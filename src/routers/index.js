


import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';
const router = Router();
router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);
export default router;



/*

import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';
import multer from 'multer';

// Налаштування multer для зберігання файлів у тимчасовій директорії (можливо, для тестування)
const storage = multer.memoryStorage(); // Ви можете налаштувати це відповідно до ваших потреб
const upload = multer({ storage: storage });

const router = Router();
router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

// Використання multer для обробки завантаження файлу
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Тут потрібно завантажити файл на Cloudinary або обробити іншим чином
  res.status(200).json({
    message: 'File uploaded successfully',
    // url: req.file.path, // Оскільки файл ще не завантажений на Cloudinary, цей шлях поки що не існує
  });
});

export default router; */
