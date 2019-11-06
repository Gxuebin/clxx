import { css, keyframes } from "@emotion/core";
import { vw } from "../cssUtil";
export const showAnimation = keyframes `
  from {
    opacity: 0;
    transform: translate3d(-50%, 30%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
`;
export const hideAnimation = keyframes `
  from {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-50%, -30%, 0);
  }
`;
export const style = {
    container: css({
        position: "fixed",
        maxWidth: "80%",
        left: "50%",
        transform: "translate3d(-50%, 0, 0)",
        zIndex: 9,
        "@media screen and (min-width: 769px)": {
            maxWidth: "400px"
        }
    }),
    containerShow: css({ animation: `${showAnimation} 0.2s ease-in` }),
    containerHide: css({ animation: `${hideAnimation} 0.2s ease-out` }),
    top: css({
        top: vw(30),
        "@media screen and (min-width: 769px)": {
            top: "30px"
        }
    }),
    middle: css({ top: "50%" }),
    bottom: css({
        bottom: vw(30),
        "@media screen and (min-width: 769px)": {
            bottom: "30px"
        }
    }),
    content: (rounded) => {
        return css({
            backgroundColor: "rgba(50, 50, 50, 0.75)",
            color: "#fff",
            margin: 0,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontSize: vw(14),
            lineHeight: vw(36),
            padding: `0 ${vw(15)}`,
            borderRadius: rounded ? vw(18) : 0,
            "@media screen and (min-width: 769px)": {
                fontSize: "14px",
                lineHeight: "36px",
                padding: "0 15px",
                borderRadius: rounded ? "20px" : 0
            }
        });
    }
};
