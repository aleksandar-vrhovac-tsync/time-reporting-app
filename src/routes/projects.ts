import {
  createProject,
  removeProject,
  getProject,
  listProjects,
  updateProject,
  uploadProjectPhoto,
} from 'controllers/projects';
import { errorHandler as cb } from 'error-handler';
import { Router } from 'express';
import { isOrgAdmin, isOrgPM, isOrgUser } from 'middlewares/organisations';
import { isProjectUser } from 'middlewares/projects';
import projectUserRoute from './projectUsers';
import projectCategoryRoutes from './projectCategories';
import { uploadFile } from 'middlewares/uploadFile';

const projectRoutes: Router = Router();

projectRoutes.post('/', [isOrgPM], cb(createProject));
projectRoutes.get('/:project_id', [isOrgUser, isProjectUser], cb(getProject));
projectRoutes.delete('/', [isOrgAdmin], cb(removeProject));
projectRoutes.put('/', [isOrgPM, isProjectUser], cb(updateProject));
projectRoutes.put('/upload', [uploadFile, isOrgPM, isProjectUser], cb(uploadProjectPhoto));
projectRoutes.get('/list/:organisation_id', [isOrgUser], cb(listProjects));

projectRoutes.use('/users', projectUserRoute);
projectRoutes.use('/categories', projectCategoryRoutes);

export default projectRoutes;
