import styled from 'styled-components';
import { color } from "../../styles"
import Checkbox from './Checkbox';

export const Button = styled.button`
  &.applicant-list__excel-btn {
    width: 90px;
    height: 32px;
    margin-left: 20px;
    border: 1px solid ${color.primaryColor};
    border-radius: 4px;
    background-color: ${color.primaryColor};
    color: ${color.backgorund};
    font-size: 14px;
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
  }
  &.delete-all__btn {
    width: 80px;
    height: 32px;
    margin-left: 20px;
    border: 1px solid ${color.deleteButton};
    border-radius: 4px;
    background-color: ${color.deleteButton};
    color: ${color.backgorund};
    font-size: 14px;
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
  }
  &.applicant-info__cancel-btn {
    width: 110px;
    height: 32px;
    border-radius: 4px;
    font-size: 14px;
  }
  &.header__logout-btn {
    width: 88px;
    height: 28px;
    border-radius: 17px;
    font-size: 16px;
  }
  &.admission-code__download-btn {
    width: 110px;
    height: 32px;
    border: 1px solid ${color.primaryColor};
    border-radius: 4px;
    background-color: ${color.primaryColor};
    color: ${color.backgorund};
    font-size: 14px;
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
  }
  &.admission-ticket__download-btn {
    width: 200px;
    height: 60px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 24px;
  }
  &.statistics-all__excel-btn {
    width: 110px;
    height: 36px;
    border-radius: 6px;
    margin-top: 2%;
  }
  &.schedule__fix-btn {
    width: 140px;
    height: 34px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export { Checkbox };
