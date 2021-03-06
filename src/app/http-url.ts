const baseUrl = 'http://127.0.0.1:8000';
const httpUrl = {
  // 登录
  login: `/user/login`,
  // 注册
  register: `/user/register`,
  // 获取团队用户
  getUsers: `/user/get_team_users`,
  // 改变用户名
  changeUsername: '/user/change_username',
  // 获取用户个人信息
  getUserInfo: '/user/get_user',
  // 删除团队成员
  deleteUser: '/user/deleteUser',
  // 改变电话号码
  changePhoneNumber: '/user/changePhoneNumber',
  // 获取团队项目
  getProjects: `/project/get_projects_by_team`,
  // 获取项目详情
  getProjectDetail: '/project/get_project_list_by_project',
  // 添加新的项目
  addProject: '/project/create_project',
  // 完成项目任务
  itemAccomplished: '/project/complete_task',
  itemTaskComplete: '/project/complete_task_item',
  // 获取任务详情
  getProjectItem: '/project/get_item_detail',
  // 新建任务
  createNewCard: '/project/create_list_item',
  // 修改任务详情
  updateItem: '/project/update_item',
  // 新建任务列表
  createProjectList: '/project/create_project_list',
  // 新建任务检查项
  addTask: '/project/create_item_detail',
  // 获取个人任务接口
  myTasks: '/project/getMyTasks',
  // 获取任务完成信息
  getCompletionStatusData: '/project/getCompletionStatusData'
};

Object.keys(httpUrl).forEach((value) => {
  httpUrl[value] = `${baseUrl}${httpUrl[value]}`;
});
export {httpUrl};
