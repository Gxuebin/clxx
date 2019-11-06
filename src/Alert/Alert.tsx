/** @jsx jsx */
import { jsx, Interpolation } from "@emotion/core";
import React, { useState } from "react";
import { style, hideAnimation } from "./style";

type Callback = () => void;
export interface AlertProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  content: React.ReactNode;
  showMask?: boolean;
  showCancel?: boolean;
  showConfirm?: boolean;
  cancelContent?: React.ReactNode;
  confirmContent?: React.ReactNode;
  onConfirm?: Callback;
  onCancel?: Callback;
  onHide?: Callback;
}

export function Alert(props: AlertProps) {
  const {
    content,
    showMask = true,
    showCancel = false,
    showConfirm = true,
    cancelContent = "取消",
    confirmContent = "确定",
    onConfirm = () => {},
    onCancel = () => {},
    onHide = () => {},
    ...htmlProps
  } = props;

  // 动画状态类
  const [animation, setAnimation] = useState<Interpolation>(
    style.containerShow
  );

  // 动画结束回调
  const animationEnd = (event: React.AnimationEvent) => {
    if (hideAnimation.name === event.animationName) {
      typeof onHide === "function" && onHide();
    }
  };

  // 取消按钮点击
  const cancel = () => {
    setAnimation(style.containerHide);
    typeof onCancel === "function" && onCancel();
  };

  // 确认按钮点击
  const confirm = () => {
    setAnimation(style.containerHide);
    typeof onConfirm === "function" && onConfirm();
  };

  // 显示弹框内容
  let showContent: any;
  if (React.isValidElement(content)) {
    showContent = content;
  } else {
    showContent = (
      <p css={style.content} className="cl-Alert-content">
        {content}
      </p>
    );
  }

  const wrapperCss = [style.alert];
  if (showMask) {
    wrapperCss.push(style.alertMask);
  }

  /**
   * 显示取消按钮
   */
  const cancelBtn = () => {
    if (!showCancel) {
      return null;
    }

    if (React.isValidElement(cancelContent)) {
      return cancelContent;
    }

    return (
      <div
        css={[style.btnItem, style.cancel]}
        onClick={cancel}
        className="cl-Alert-btn-cancel"
        onTouchStart={() => {}}
      >
        {cancelContent}
      </div>
    );
  };

  /**
   * 显示确定按钮
   */
  const confirmBtn = () => {
    if (!showConfirm) {
      return null;
    }
    
    if (React.isValidElement(confirmContent)) {
      return confirmContent;
    }

    return (
      <div
        css={[style.btnItem, style.confirm]}
        className="cl-Alert-btn-confirm"
        onClick={confirm}
        onTouchStart={() => {}}
      >
        {confirmContent}
      </div>
    );
  };

  const showBtn = () => {
    if (!showCancel && !showConfirm) {
      return null;
    }

    return (
      <div css={style.btn} className="cl-Alert-btn">
        {cancelBtn()}
        {confirmBtn()}
      </div>
    );
  };

  return (
    <div css={wrapperCss} {...htmlProps}>
      <div
        className="cl-Alert-container"
        css={[style.container, animation]}
        onAnimationEnd={animationEnd}
      >
        {showContent}
        {showBtn()}
      </div>
    </div>
  );
}
