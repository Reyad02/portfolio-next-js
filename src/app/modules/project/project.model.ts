import { model, Schema } from 'mongoose';
import IProject from './project.interface';

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: { type: String, required: true },
    liveLink: { type: String, required: true },
  },
  { timestamps: true },
);

const Project = model<IProject>('Project', projectSchema);
export default Project;
