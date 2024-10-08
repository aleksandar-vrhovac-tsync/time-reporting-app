import {
  createTeam,
  listTeams,
  getTeam,
  removeTeam,
  updateTeam,
  uploadTeamPhoto,
} from 'controllers/teams';
import { errorHandler as cb } from 'error-handler';
import { Router } from 'express';
import { isOrgPM, isOrgUser } from 'middlewares/organisations';
import { isTeamUser } from 'middlewares/teams';
import teamUserRoutes from './teamUsers';
import { uploadFile } from 'middlewares/uploadFile';

const teamRoutes: Router = Router();

teamRoutes.post('/', [isOrgPM], cb(createTeam));
teamRoutes.put('/', [isOrgPM, isTeamUser], cb(updateTeam));
teamRoutes.put('/upload', [uploadFile, isOrgPM, isTeamUser], cb(uploadTeamPhoto));
teamRoutes.get('/:team_id', [isOrgUser, isTeamUser], cb(getTeam));
teamRoutes.delete('/', [isOrgPM, isTeamUser], cb(removeTeam));
teamRoutes.get('/list/:organisation_id', [isOrgUser], cb(listTeams));

teamRoutes.use('/users', teamUserRoutes);

export default teamRoutes;
