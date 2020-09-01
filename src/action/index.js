const createQuiz = title => ({
  type: 'CREATE_QUIZ',
  payload: title,
});

export default createQuiz;
