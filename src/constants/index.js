import pushUps from "../images/push-ups.jpg";
import pullUps from "../images/pull-ups.jpg";
import lSits from "../images/l-sits.jpg";
import squats from "../images/squats.jpg";
import defaultImg from "../images/default.jpg";
import donkeyKick from "../images/donkey-kick.jpg";
import dumbbellCurl from "../images/dumbbell-curl.jpg";
import shoulderPress from "../images/shoulder-press.jpg";
import frenchPress from "../images/french-press.jpg";
import latPulldown from "../images/lat-pulldown.jpg";
import dumbbellRowing from "../images/dumbbell-rowing.jpg";

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
  4: {
    title: "提臀 Donkey Kick",
    max: 30,
    min: 1,
    unit: "下",
    img: donkeyKick,
  },
  5: {
    title: "啞鈴彎舉 Dumbbell Curl",
    max: 30,
    min: 1,
    unit: "下",
    img: dumbbellCurl,
  },
  6: {
    title: "啞鈴肩上推舉 Shoulder Press",
    max: 30,
    min: 1,
    unit: "下",
    img: shoulderPress,
  },
  7: {
    title: "法式推舉 French Press",
    max: 30,
    min: 1,
    unit: "下",
    img: frenchPress,
  },
  8: {
    title: "滑輪下拉 Lat Pulldown",
    max: 30,
    min: 1,
    unit: "下",
    img: latPulldown,
  },
  9: {
    title: "啞鈴划船 Dumbbell Rowing",
    max: 30,
    min: 1,
    unit: "下",
    img: dumbbellRowing,
  },
};
