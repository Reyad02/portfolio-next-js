import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_rounds: process.env.SALT_ROUNDS,
  cloudinary_cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_apiKey: process.env.CLOUDINARY_API_KEY,
  cloudinary_secretKey: process.env.CLOUDINARY_SECRET_KEY,
};
