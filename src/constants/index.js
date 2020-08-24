import pushUps from "../images/push-ups.jpg";
import pullUps from "../images/pull-ups.jpg";
import lSits from "../images/l-sits.jpg";
import squats from "../images/squats.jpg";
import defaultImg from "../images/default.jpg";

export const config = {
  default: {
    title: "開始 Start",
    subtitle: "點擊下方按鈕,挑戰健身項目",
    img: defaultImg,
  },
  0: {
    title: "伏地挺身 Push Ups",
    max: 30,
    min: 1,
    unit: "下",
    img: pushUps,
  },
  1: {
    title: "引體向上 Pull Ups",
    max: 10,
    min: 1,
    unit: "下",
    img: pullUps,
  },
  2: {
    title: "L型 L sits",
    max: 10,
    min: 1,
    unit: "秒",
    img: lSits,
  },
  3: {
    title: "深蹲 Squats",
    max: 30,
    min: 1,
    unit: "下",
    img: squats,
  },
};
