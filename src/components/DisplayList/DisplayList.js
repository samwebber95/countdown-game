import React from "react";
import DisplayListItem from "../DisplayListItem";

function DisplayList({ answers, answer }) {
  return (
    <ul>
      {answers.map(item => (
        <DisplayListItem thing={item.answer} />
      ))}
    </ul>
  );
}

{
  /* <ul className={css.list}>
{list.map((item, i) => (
  <ListItem
    name={item.name}
    completed={item.completed}
    toggleCompleted={() => toggleCompleted(i)}
    key={`${item}${i}`}
  />
))}
</ul> */
}

export default DisplayList;
