const baseUrl = 'http://127.0.0.1:8000';
const httpUrl = {
  // 登录
  login: `/user/login`,
  // 注册
  register: `/user/register`,
  // 获取团队用户
  getUsers: `/user/get_team_users`,
  // 获取团队项目
  getProjects: `/project/get_projects_by_team`,
  // 获取项目详情
  getProjectDetail: '/project/get_project_list_by_project',
  // 添加新的项目
  addProject: '/project/create_project',
  // 完成项目任务
  itemAccomplished: '/project/complete_task',
  // 获取任务详情
  getProjectItem: '/getProjectItem',
  createNewCard: '/project/create_list_item',
  updateItem: '/project/update_item',
  createProjectList: '/project/create_project_list'
};

Object.keys(httpUrl).forEach((value) => {
  httpUrl[value] = `${baseUrl}${httpUrl[value]}`;
});
export {httpUrl};
