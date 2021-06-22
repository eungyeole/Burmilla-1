import styled from 'styled-components';
import {color, pxToRem} from "../../styles"

export const StatisticsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: ${pxToRem(1320)}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.lightPrimaryColor};
  position: relative;
  padding-top: 60px;
`;

export const StatisticsContainer = styled.div`
  width: 70%;
  height: 150vh;
  padding-top: ${pxToRem(80)}rem;
  padding-bottom: ${pxToRem(80)}rem;
  background: ${color.backgorund};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
`;

export const StatisticsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;  

export const StatisticsTitle = styled.h1`
  font-size: 52px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  color: ${color.primaryTextColor};
`;

export const StatisticsSubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${color.darkBorderColor};
  letter-spacing: 2px;
`;

export const CompetitionTableTitle = styled.h1`
  width: 58%;
  margin-top: ${pxToRem(104)}rem;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  color: ${color.primaryTextColor};
`;

export const CompetitionTableWrapper = styled.div`
  width: 58%;
  height: 45%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;

  > table.common_applicant-table {
    width: 33%;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 12px;
    font-weight: 500;
    color: ${color.primaryTextColor};
    padding: 0;
    text-align: center;
  }
  > table.meister_applicant-table {
    width: 45%;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 12px;
    font-weight: 500;
    color: ${color.primaryTextColor};
    padding: 0;
    text-align: center;
  }

  > tr, td {
    border: 0.2px solid #909090;
    height: 22px;
  }

  > tr, td.table-applicant_title {
    font-size: 14px;
    font-weight: bold;
    color: ${color.primaryTextColor};
  }

  > tr, td.table-color_background {
    background-color: ${color.lightPrimaryColor};
  }

  > tr, td.table-border-top {
    border-top: 1.7px solid ${color.primaryTextColor}
  }

  > tr, td.table-border-left {
    border-left: none;
    border-right: none;
  }

  > tr, td.table-border-right {
    border-right: none;
  }

  > tr, td.table-border-bottom {
    border-bottom: 1.7px solid ${color.primaryTextColor}
  }
`;

export const TotalScore = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
`;

export const CompetitionViewWrapper = styled.table`
  width: 30%;
  font-size: 24px;
  margin-top: 40px;
  tr:last-child {
    width: 100%;
  }

  tr {
    display: flex;
    justify-content: space-evenly;
    line-height: 45px;
  }
`;

export const CompetitionViewTH = styled.th`
  font-weight: bold;
  color: ${color.primaryTextColor};
`;

export const CompetitionViewTD = styled.td`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;

  > b {
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
    color: ${color.lightBorderColor};
  }
`;

export const CompetitionTotalGraphWrapper = styled.div`
  width: 68%;
  margin-top: 1%;
  margin-right: 10%;
`;

export const CompetitionFreshmanTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;

  > span {
    margin-left: 2%;
  }
`;

export const TotalApplicantScore = styled.div`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  margin-left: 0.6%;
`;

export const TotalCompetitionRate = styled.div`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  margin-left: 0.6%;
`;

export const CompetitionGraphContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1.7rem;
`;

export const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${pxToRem(14)}rem;
`;

export const GraphTitle = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.primaryTextColor};
  font-weight: bold;
  font-size: 15px;
`;

export const GraphChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: ${pxToRem(42)}rem;
  padding-right: 1rem;
  background-color: ${color.light};
`;

export const GraphBar = styled.div`

`;

export const GraphCompetitionRate = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  letter-spacing: 0.5px;
`;

export const GraphRateBar = styled.div`
display: flex;
`;

export const GraphItemBox = styled.div`
  display: flex;
`;
