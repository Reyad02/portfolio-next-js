import { UploadApiResponse } from 'cloudinary';
import multer from 'multer';
import cloudinary from '../config/cloudinary.config';

export const sendImageToCloudinary = (
  imageName: string,
  buffer: Buffer,
): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ public_id: imageName.trim() }, function (error, result) {
        if (error) {
          reject(error);
        }
        resolve(result as UploadApiResponse);
      })
      .end(buffer);
  });
};

export const upload = multer();
