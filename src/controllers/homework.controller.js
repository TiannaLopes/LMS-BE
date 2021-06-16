const httpStatus = require('http-status');
const {homeworkService, recordService } = require('../services');

const createNewHomework = async (req, res) => {
  const homework = await homeworkService.createNewHomework(req.body);
res.status(httpStatus.CREATED).send(homework);
};

const deleteHomework = async (req, res) => {
const {_id} = req.query

//const deletedRecs = await recordService.deleteManyByHomeworkId(_id);
const homework = await homeworkService.deleteHomework(_id);
res.status(httpStatus.CREATED).send(homework);
};

const editHomework = async (req, res) => {
  const homework= await homeworkService.editHomework(req.body);
res.status(httpStatus.CREATED).send(homework);
};

const getAllHomeworks = async (req, res) => {
   homework = await homeworkService.getAllHomeworks()
   res.status(httpStatus.CREATED).send(homework);
}

const searchHomeworks = async (req, res) => {
  const {keyword} = req.query
  homework = await homeworkService.searchHomeworks(keyword)
  res.status(httpStatus.CREATED).send(homework);

};

const getHomeworkById = async (req, res) => {
  const query= req.query
  const homework = await homeworkService.getHomeworkById(query.Id);
res.status(httpStatus.CREATED).send(homework[0]);
};


module.exports = {
  createNewHomework,
  getAllHomeworks,
  searchHomeworks,
  editHomework,
  deleteHomework,
  getHomeworkById

};
