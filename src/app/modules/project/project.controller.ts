import { Request, Response } from 'express';
import projectValidationSchema from './project.validation';
import { projectServices } from './project.service';

const createProject = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const parseBody = projectValidationSchema.parse(body);
    const result = await projectServices.createProject(parseBody, req.file);
    res.json({
      message: 'Project created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const result = await projectServices.getProject(projectId);
    res.json({
      message: 'Project retrived successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProjects = async (req: Request, res: Response) => {
  try {
    const result = await projectServices.getProjects();
    res.json({
      message: 'Projects retrived successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const result = await projectServices.deleteProjects(projectId);
    res.json({
      message: 'Project deleted successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const projectControllers = {
  createProject,
  getProjects,
  getSingleProject,
  deleteProject,
};
