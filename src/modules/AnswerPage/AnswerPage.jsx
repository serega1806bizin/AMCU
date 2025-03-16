import { Col, Divider, message, Row } from 'antd';
import styles from '../DetailsTask/DetailsTask.module.scss';
import { handleBackButton } from '../../utils/handleBackButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { ListNum } from './list-num';
import { Matrix } from './matrix-q';
import { Variants_q } from './variants-q';
import { List_pars } from './list-pars';
import { List_reber } from './list-reber';

function pairsEqual(pair1, pair2) {
  const [a1, a2] = Array.isArray(pair1) ? pair1 : [pair1.x1, pair1.x2];
  const [b1, b2] = Array.isArray(pair2) ? pair2 : [pair2.x1, pair2.x2];

  return (
    (Number(a1) === Number(b1) && Number(a2) === Number(b2)) ||
    (Number(a1) === Number(b2) && Number(a2) === Number(b1))
  );
}

export const AnswerPage = () => {
  const { answerId, testId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [test, setTest] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const testRes = await fetch(
          `https://stradanie-production-f14d.up.railway.app/api/tests/${testId}`,
        );
        const testData = await testRes.json();

        setTest(testData);

        const answerRes = await fetch(
          `https://stradanie-production-f14d.up.railway.app/api/answers/answer/${answerId}`,
        );
        const answerData = await answerRes.json();

        setAnswer(answerData);
      } catch (error) {
        message.error('Помилка завантаження даних');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [answerId, testId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Row justify="center" style={{ padding: 10 }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className={styles.productDetails__back}>
          <button
            className={styles.productDetails__backArrow}
            onClick={handleBackButton}
          />
          <button
            className={styles.productDetails__backText}
            onClick={handleBackButton}
          >
            Назад
          </button>
        </div>

        <h1>Результат ✅</h1>
        <p>
          <strong>Студент:</strong> {answer?.student}
        </p>
        <p>
          <strong>Група:</strong> {answer?.group}
        </p>
        <p>
          <strong>Оцінка:</strong> {answer?.mark}
        </p>
        <Divider>Детальніше</Divider>

        {/* Список питань та відповідей */}
        <div>
          {test?.questions.map(question => {
            const studentAnswer = answer?.answers.find(
              ans => Number(ans['question-id']) === Number(question.id),
            );
            const studentAns = studentAnswer?.answer;
            // Правильний варіант може бути в різних форматах:
            const correctAns = question.answer;

            let correctness = 'none'; // 'full' | 'partial' | 'none'

            switch (question.type) {
              case 'text':
                correctness =
                  studentAns?.trim().toLowerCase() ===
                  correctAns?.trim().toLowerCase()
                    ? 'full'
                    : 'none';
                break;

              case 'number':
                correctness =
                  Number(studentAns) === Number(correctAns) ? 'full' : 'none';
                break;

              case 'list-num':
                const correctList = correctAns.massiv;

                if (correctAns.consistencyImportant) {
                  // Проверяем по позициям
                  let count = 0;

                  for (let i = 0; i < correctList.length; i++) {
                    if (studentAns && studentAns[i] === correctList[i]) {
                      count++;
                    }
                  }

                  if (count === correctList.length) {
                    correctness = 'full';
                  } else if (count > 0) {
                    correctness = 'partial';
                  } else {
                    correctness = 'none';
                  }
                } else {
                  // Если порядок не важен
                  const correctSet = new Set(correctList);

                  const studentSet = new Set(studentAns);
                  let count = 0;

                  studentSet.forEach(num => {
                    if (correctSet.has(num)) {
                      count++;
                    }
                  });
                  if (
                    count === correctSet.size &&
                    studentSet.size === correctSet.size
                  ) {
                    correctness = 'full';
                  } else if (count > 0) {
                    correctness = 'partial';
                  } else {
                    correctness = 'none';
                  }
                }

                break;

              case 'matrix': {
                const studentMatrix = studentAns.answer;
                const correctMatrix = correctAns;
                let total = 0;
                let count = 0;

                for (let i = 0; i < correctMatrix.length; i++) {
                  for (let j = 0; j < correctMatrix[i].length; j++) {
                    total++;
                    if (
                      Number(studentMatrix?.[i]?.[j]) ===
                      Number(correctMatrix[i][j])
                    ) {
                      count++;
                    }
                  }
                }

                if (count === total) {
                  correctness = 'full';
                } else if (count > 0) {
                  correctness = 'partial';
                } else {
                  correctness = 'none';
                }

                break;
              }

              case 'variants': {
                // Здесь studentAns и correctAns.correct — массивы одного размера
                let count = 0;

                for (let i = 0; i < studentAns.length; i++) {
                  if (studentAns[i] === correctAns.correct[i]) {
                    count++;
                  }
                }

                if (count === studentAns.length) {
                  correctness = 'full';
                } else if (count > 0) {
                  correctness = 'partial';
                } else {
                  correctness = 'none';
                }

                break;
              }

              case 'list-pars': {
                const correctPairs = correctAns.pairs.map(pair =>
                  JSON.stringify(pair),
                );
                const studentPairs = studentAns.answer.map(pair =>
                  JSON.stringify(pair),
                );
                const count = studentPairs.filter(pair =>
                  correctPairs.includes(pair),
                ).length;

                if (
                  count === correctPairs.length &&
                  studentPairs.length === correctPairs.length
                ) {
                  correctness = 'full';
                } else if (count > 0) {
                  correctness = 'partial';
                } else {
                  correctness = 'none';
                }

                break;
              }

              case 'list-reber': {
                let correctCount = 0;

                // Здесь correctAns – это массив правильных пар,
                // а studentAns.answer – массив ответов студента
                for (const correctEdge of correctAns) {
                  // eslint-disable-next-line @typescript-eslint/no-loop-func
                  const found = studentAns.answer.some(studentEdge =>
                    pairsEqual(correctEdge, studentEdge),
                  );

                  if (found) {
                    correctCount++;
                  }
                }

                if (
                  correctCount === correctAns.length &&
                  studentAns.answer.length === correctAns.length
                ) {
                  correctness = 'full';
                } else if (correctCount > 0) {
                  correctness = 'partial';
                } else {
                  correctness = 'none';
                }

                break;
              }

              default:
                // eslint-disable-next-line no-console
                console.warn(`⚠️ Невідомий тип питання: ${question.type}`);
            }

            // Определяем цвет подсветки:
            let bgColor = '#ffebeb'; // за замовчуванням – помилка (червоний)

            if (correctness === 'full') {
              bgColor = '#e6ffed'; // зелений для повністю правильного
            } else if (correctness === 'partial') {
              bgColor = '#ffffcc'; // жовтий для частково правильного
            }

            return (
              <div
                key={question.id}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  backgroundColor: bgColor,
                }}
              >
                <p>
                  <strong>Питання:</strong> {question.text}
                </p>
                <p>
                  <strong>Відповідь студента:</strong>{' '}
                  {question.type === 'text' || question.type === 'number' ? (
                    <span
                      style={{
                        color:
                          correctness === 'none'
                            ? 'red'
                            : correctness === 'full'
                              ? 'green'
                              : 'orange',
                      }}
                    >
                      {studentAns}
                    </span>
                  ) : null}
                  {question.type === 'list-num' ? (
                    <ListNum Corr={correctAns} Ans={studentAns} />
                  ) : null}
                  {question.type === 'matrix' ? (
                    <Matrix Ans={studentAns.answer} Corr={correctAns} />
                  ) : null}
                  {question.type === 'variants' ? (
                    <Variants_q Ans={studentAns} Corr={correctAns} />
                  ) : null}
                  {question.type === 'list-pars' ? (
                    <List_pars pairs={studentAns.answer} />
                  ) : null}
                  {question.type === 'list-reber' ? (
                    <List_reber Corr={correctAns} Ans={studentAns} />
                  ) : null}
                </p>

                {correctness !== 'full' && (
                  <p>
                    <strong>Правильна відповідь:</strong>{' '}
                    {question.type === 'text' || question.type === 'number'
                      ? JSON.stringify(correctAns)
                      : null}
                    {question.type === 'list-num' ? (
                      <ListNum Ans={correctAns.massiv} />
                    ) : null}
                    {question.type === 'matrix' ? (
                      <Matrix Corr={correctAns} />
                    ) : null}
                    {question.type === 'variants' ? (
                      <Variants_q Corr={correctAns} />
                    ) : null}
                    {question.type === 'list-pars' ? (
                      <List_pars pairs={correctAns.pairs} />
                    ) : null}
                    {question.type === 'list-reber' ? (
                      <List_reber Corr={correctAns} />
                    ) : null}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
