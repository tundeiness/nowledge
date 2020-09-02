export const createQuiz = title => ({
  type: 'CREATE_QUIZ',
  payload: title,
});

export const fetchTitles = titles => ({
  type: 'FETCH_DOCTOR',
  titles,
});