import React from 'react';
import { Collapse } from 'antd';
import TwigSvg from '../../../ui/Svg/TwigSvg';
import styles from './Questions.module.css';

interface IItems{
    key: number
    label: string
    children: JSX.Element
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: IItems[] = [
  {
    key: 1,
    label: 'Как ухаживать за часами NAENO ?',
    children: <p>{text}</p>,
  },
  {
    key: 2,
    label: 'Возможно ли нанести на изделие гравировку ?',
    children: <p>{text}</p>,
  },
  {
    key: 3,
    label: 'Насколько вредны изделия из эпоксидной смолы ?',
    children: <p>{text}</p>,
  },
  {
    key: 4,
    label: 'Как упаковываются изделия ?',
    children: <p>{text}</p>,
  },
  {
    key: 5,
    label: 'Возможно ли сделать по моим размерам ?',
    children: <p>{text}</p>,
  },
  {
    key: 6,
    label: 'Как закупить изделия оптом ?',
    children: <p>{text}</p>,
  },
];

const Questions: React.FC = () => {
  return (
    <article id='questions' className={styles.questionsContainer}>
        <h3>Часто задаваемые вопросы :</h3>
        <div className={styles.svgQuestions}>
          <TwigSvg/>
        </div>
        <Collapse items={items} className={styles.questionsCollapse}/>
    </article>
  )
}

export default Questions;