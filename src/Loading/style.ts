import { css } from "@emotion/core";
import { vw, vwWithMediaQuery } from "../cssUtil";

export const style = {
  mask: css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9
  }),
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    ...vwWithMediaQuery(
      {
        width: vw(90),
        height: vw(90),
        borderRadius: vw(10)
      },
      {
        width: "90px",
        height: "90px",
        borderRadius: "10px"
      }
    )
  }),
  hint: css({
    color: "#fff",
    padding: 0,
    margin: 0,
    ...vwWithMediaQuery(
      {
        fontSize: vw(12),
        marginTop: vw(10)
      },
      {
        fontSize: "12px",
        marginTop: "10px"
      }
    )
  })
};
