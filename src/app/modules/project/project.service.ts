import { sendImageToCloudinary } from '../../utils/sendImg';
import IProject from './project.interface';
import Project from './project.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProject = async (project: IProject, file: any) => {
  console.log('reached');
  if (file) {
    const imageName = project.name;
    const path = file;
    const { secure_url } = await sendImageToCloudinary(imageName, path.buffer);
    project.image = secure_url as string;
  }
  const result = await Project.create(project);
  return result;
};

const getProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const getProjects = async () => {
  const result = await Project.find();
  return result;
};

const deleteProjects = async (id: string) => {
    const result = await Project.findByIdAndDelete(id);
    return result;
  };
export const projectServices = { createProject, getProject, getProjects, deleteProjects };
