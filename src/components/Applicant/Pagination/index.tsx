import React, { FC } from "react";

import * as S from "./style";
import { shift_left_icon, shift_right_icon } from "../../../assets/applicants";
import { useApplicant } from "../../../hooks/applicant";
import { getIndexList } from "../../../utils/pagination";

const Pagination: FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [indexList, setIndexList] = React.useState<number[]>([]);

  const {
    applicantStore: {
      applicantsList: { total_elements },
    },
    setFilter,
  } = useApplicant();

  React.useEffect(() => {
    setIndexList(getIndexList(currentIndex, total_elements));
  }, [total_elements, currentIndex]);

  React.useEffect(() => {
    setFilter({
      index: currentIndex,
    });
  }, [currentIndex]);

  React.useEffect(() => {
    setCurrentIndex(1);
  }, [total_elements]);

  const handleClickIndex = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  const handleClickPrev = React.useCallback(() => {
    if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
  }, [currentIndex, total_elements]);
  const handleClickNext = React.useCallback(() => {
    if (currentIndex < total_elements) setCurrentIndex(currentIndex + 1);
  }, [currentIndex, total_elements]);

  return (
    <S.PaginationContainer className="no-select">
      <S.PageBtn className="move-btn" onClick={handleClickPrev}>
        <img src={shift_left_icon} alt="shift_left" />
      </S.PageBtn>
      {indexList.map((i) => (
        <S.PageBtn
          key={i.toString()}
          className={currentIndex === i && "selected"}
          onClick={() => handleClickIndex(i)}
        >
          {i}
        </S.PageBtn>
      ))}
      <S.PageBtn className="move-btn" onClick={handleClickNext}>
        <img src={shift_right_icon} alt="shift_right" />
      </S.PageBtn>
    </S.PaginationContainer>
  );
};
export default Pagination;
